import ship from './ship';

const gameboard = (width, height) => {
  const board = [];
  for (let i = 0; i < width; i += 1) {
    const col = [];
    for (let j = 0; j < height; j += 1) {
      col[j] = 0;
    }
    board[i] = col;
  }
  const ships = [];
  const getBoard = () => board;
  const getShips = () => ships;
  const placeShip = (xCoord, yCoord, length, direction) => {
    const piece = ship(length);
    if (direction === 'horizontal') {
      for (let i = xCoord; i < xCoord + piece.getLength(); i += 1) {
        board[i][yCoord] = 'S';
      }
    } else {
      for (let i = yCoord; i < yCoord + piece.getLength(); i += 1) {
        board[xCoord][i] = 'S';
      }
    }
    ships.push({ ship: piece, xStart: xCoord, yStart: yCoord });
  };
  const findShip = (xCoord, yCoord) => {
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].xStart === xCoord
          && (yCoord >= ships[i].yStart && yCoord < ships[i].yStart + ships[i].ship.getLength())) {
        ships[i].ship.hit(yCoord - ships[i].yStart);
      } else if (ships[i].yStart === yCoord
          && (xCoord >= ships[i].xStart && xCoord < ships[i].xStart + ships[i].ship.getLength())) {
        ships[i].ship.hit(xCoord - ships[i].xStart);
      }
    }
  };
  const recieveAttack = (xCoord, yCoord) => {
    if ((xCoord >= 0 && xCoord < width) && (yCoord >= 0 && yCoord < height)) {
      if (board[xCoord][yCoord] === 'S') {
        board[xCoord][yCoord] = 'H';
        findShip(xCoord, yCoord);
      } else if (board[xCoord][yCoord] === 0) {
        board[xCoord][yCoord] = 'M';
      }
    }
  };
  const allSunk = () => {
    for (let i = 0; i < ships.length; i += 1) {
      if (!ships[i].ship.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    getBoard, getShips, placeShip, recieveAttack, allSunk,
  };
};

export default gameboard;
