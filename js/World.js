
const TILE_W = 50,
  TILE_H = 50,
  ROOM_COLS = 16,
  ROOM_ROWS = 12,
  roomGrid =
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 1, 1, 1, 1,
      1, 0, 4, 0, 4, 0, 1, 0, 2, 0, 1, 0, 1, 4, 4, 1,
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 1, 5, 1, 1,
      1, 1, 1, 5, 1, 1, 1, 0, 4, 0, 1, 0, 0, 0, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 1,
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
      1, 0, 5, 0, 5, 0, 5, 0, 3, 0, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
TILE_FLOOR = 0,
  TILE_BRICK = 1,
  TILE_PLAYER = 2,
  TILE_KEY = 4,
  TILE_DOOR = 5,
  TILE_CUP = 3;



function drawRoom() {
  let tileIndex = 0;
  let tileLeftEdgeX = 0;
  let tileTopEdgeY = 0;
  for (let row = 0; row < ROOM_ROWS; row++) {
    tileLeftEdgeX = 0;
    for (let col = 0; col < ROOM_COLS; col++) {
      let tileTypeHere = roomGrid[tileIndex];
      if (tileTypeHasTransparency(tileTypeHere)) {
        canvasContext.drawImage(tilePics[TILE_FLOOR], tileLeftEdgeX, tileTopEdgeY);
      }
      canvasContext.drawImage(tilePics[tileTypeHere], tileLeftEdgeX, tileTopEdgeY);
      tileIndex++;
      tileLeftEdgeX += TILE_W;
    }
    tileTopEdgeY += TILE_H;
  }
}


function getTileAtPixelCoord(pixelX, pixelY) {
  var tileCol = pixelX / TILE_W;
  var tileRow = pixelY / TILE_H;

  tileCol = Math.floor(tileCol);
  tileRow = Math.floor(tileRow);
  if (tileCol < 0 || tileCol >= ROOM_COLS ||
    tileRow < 0 || tileRow >= ROOM_ROWS) {
    return undefined;
  }

  let tileIndex = tileCol + ROOM_COLS * tileRow;
  return tileIndex;
}

function tileTypeHasTransparency(checkTileType) {
  return (checkTileType == TILE_CUP ||
    checkTileType == TILE_KEY ||
    checkTileType == TILE_DOOR);
}