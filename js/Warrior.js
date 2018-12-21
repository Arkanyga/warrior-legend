
const PLAYER_MOVE_SPEED = 3;



class Warrior {
  constructor(northKey, southKey, westKey, eastKey, playerPic) {
    this.x;
    this.y;
    this.homeX;
    this.homeY;

    this.keyHeldNorth = false;
    this.keyHeldSouth = false;
    this.keyHeldTurnWest = false;
    this.keyHeldTurnEast = false;
    this.controlKeyForNorth = northKey;
    this.controlKeyForSouth = southKey;
    this.controlKeyForTurnWest = westKey;
    this.controlKeyForTurnEast = eastKey;
    this.playerPic = playerPic;

  }

  draw() {
    drawBitmapCenteredAtLocationWithRotation(this.playerPic, this.x, this.y)
  }



  move() {
    let nextX = this.x;
    let nextY = this.y;

    //разрешить проезд

    if (this.keyHeldNorth) {
      nextY -= PLAYER_MOVE_SPEED;
    }
    if (this.keyHeldSouth) {
      nextY += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeldTurnWest) {
      nextX -= PLAYER_MOVE_SPEED;
    }
    if (this.keyHeldTurnEast) {
      nextX += PLAYER_MOVE_SPEED;
    }
    let walkIntoTileType = tileAtPixelCoord(nextX, nextY);
    if (walkIntoTileType === TILE_FLOOR) {
      this.x = nextX;
      this.y = nextY;
    }


  }

  reset() {
    if (this.homeX == undefined) {
      for (let i = 0; i < roomGrid.length; i++) {
        if (roomGrid[i] === TILE_PLAYER) {
          let tileRow = Math.floor(i / ROOM_COLS);
          let tileCol = i % ROOM_COLS;
          this.homeX = tileCol * TILE_W + TILE_W / 2;
          this.homeY = tileRow * TILE_H + TILE_H / 2;
          roomGrid[i] = TILE_FLOOR;
          break
        }
      }
    }
    this.x = this.homeX;
    this.y = this.homeY;
  }

  initInput() {
    document.addEventListener('keydown', this.keyPressed.bind(this));
    document.addEventListener('keyup', this.keyReleased.bind(this));
  }


  setKeyHoldState(e, state) {
    switch (e.keyCode) {
      case this.controlKeyForNorth:
        this.keyHeldNorth = state;
        break
      case this.controlKeyForSouth:
        this.keyHeldSouth = state;
        break
      case this.controlKeyForTurnWest:
        this.keyHeldTurnWest = state;
        break;
      case this.controlKeyForTurnEast:
        this.keyHeldTurnEast = state;
        break;
    }
  }

  keyPressed(e) {
    e.preventDefault();
    this.setKeyHoldState(e, true)
  }

  keyReleased(e) {
    e.preventDefault();
    this.setKeyHoldState(e, false)
  }
}


