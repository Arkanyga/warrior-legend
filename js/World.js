
const TILE_W = 50,
  TILE_H = 50,
  ROOM_COLS = 16,
  ROOM_ROWS = 12,
  roomGrid =
    [4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 0, 1,
      1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 1,
      1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 1,
      1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,
      1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 1,
      1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 1,
      1, 1, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1,	////	added	3’s
      1, 1, 5, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1];
TILE_FLOOR = 0,
  TILE_BRICK = 1,
  TILE_PLAYER = 2,
  TILE_KEY = 3,
  TILE_DOOR = 4,
  TILE_CUP = 5;



function drawRoom() {
  let tileIndex = 0;
  let tileLeftEdgeX = 0;
  let tileTopEdgeY = 0;
  for (let row = 0; row < ROOM_ROWS; row++) {
    tileLeftEdgeX = 0;
    for (let col = 0; col < ROOM_COLS; col++) {
      let tileTypeHere = roomGrid[tileIndex];
      canvasContext.drawImage(tilePics[tileTypeHere], tileLeftEdgeX, tileTopEdgeY);
      tileIndex++;
      tileLeftEdgeX += TILE_W;
    }
    tileTopEdgeY += TILE_H;
  }
}












function tileAtPixelCoord(pixelX, pixelY) {
  let gridCoord = findOutRowAndCol(pixelX, pixelY)
  //индекс ячейки в которую ударили
  let tileIndex = gridCoord.col + ROOM_COLS * gridCoord.row;
  return roomGrid[tileIndex];
}

function findOutRowAndCol(pixelX, pixelY) {
  let tileRow = Math.floor(pixelY / TILE_H);
  let tileCol = Math.floor(pixelX / TILE_W);
  return {
    row: tileRow,
    col: tileCol
  }
}

function getTileAtPixelCoord(pixelX, pixelY) {
  var tileCol = pixelX / TILE_W;
  var tileRow = pixelY / TILE_H;

  tileCol = Math.floor(tileCol);
  tileRow = Math.floor(tileRow);
  if (tileCol < 0 || tileCol >= ROOM_COLS ||
    tileRow < 0 || tileRow >= ROOM_ROWS) {
    return TILE_WALL;
  }

  var tileIndex = roomTileToIndex(tileCol, tileRow);
  return roomGrid[tileIndex];
}
