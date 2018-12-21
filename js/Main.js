
const canvas = document.getElementById('gameCanvas'),
  canvasContext = canvas.getContext('2d'),
  FRAME_PER_SECOND = 30;


let p1 = new Warrior(87, 83, 65, 68, playerPic);





window.onload = function () {
  loadImages();
  p1.initInput();
  countLoadedImageAndLaunchIfReady();
  p1.reset();

}


function loadingDoneSoStartGame() {
  setInterval(function () {
    moveEverething();
    drawEverething();
  }, 1000 / FRAME_PER_SECOND);
}

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if (picsToLoad === 0) {
    loadingDoneSoStartGame();
  }
}

function drawEverething() {
  drawRoom();
  p1.draw();
}

function moveEverething() {

  p1.move();
}


