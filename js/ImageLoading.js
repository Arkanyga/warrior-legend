let picsToLoad = 0;
const playerPic = document.createElement("img");
let tilePics = [];


function loadImages() {
  let imageList = [
    { picName: playerPic, src: 'person.png' },

    { tileType: TILE_FLOOR, src: 'floor.png' },
    { tileType: TILE_CUP, src: 'cup.png' },
    { tileType: TILE_BRICK, src: 'brick.png' },
    { tileType: TILE_DOOR, src: 'door.png' },
    { tileType: TILE_KEY, src: 'key.png' }
  ]
  picsToLoad = imageList.length;

  for (let i = 0; i < picsToLoad; i++) {
    if (imageList[i].tileType != undefined) {
      loadImageForTileCode(imageList[i].tileType, imageList[i].src);
    } else {
      beginLoadingImage(imageList[i].picName, imageList[i].src)
    }
  }
}

function beginLoadingImage(picName, src) {
  picName.onload = countLoadedImageAndLaunchIfReady;
  picName.src = 'images/' + src;
}

function loadImageForTileCode(tileCode, src) {
  tilePics[tileCode] = document.createElement("img");
  beginLoadingImage(tilePics[tileCode], src);
}