let startButtonX = 250,
  startButtonY = 200,
  widthStartButton = 300,
  heightStartButton = 100;



function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight)
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(0);
  canvasContext.drawImage(graphic, -graphic.width / 2, - graphic.height / 2);
  canvasContext.restore();
}




