import ship from './ship';

const gameboard = (width, height) => {
  const board = [];
  const ships = [];
  const setBoard = () => {
    for (let i = 0; i < width; i += 1) {
      const col = [];
      for (let j = 0; j < height; j += 1) {
        col[j] = 'E';
      }
      board[i] = col;
    }
  };
  setBoard();

  const resetBoard = () => {
    const boardLength = board.length;
    const shipsLength = ships.length;
    for (let i = 0; i <= boardLength; i += 1) {
      board.pop();
    }
    for (let i = 0; i <= shipsLength; i += 1) {
      ships.pop();
    }
    setBoard();
  };
  const getBoard = () => board;
  const getShips = () => ships;
  const undoShipAdd = (xCoord, yCoord, index, direction) => {
    if (direction === 'horizontal') {
      for (let i = xCoord; i < index; i += 1) {
        board[i][yCoord] = 'E';
      }
    } else {
      for (let i = yCoord; i < index; i += 1) {
        board[xCoord][i] = 'E';
      }
    }
  };
  const placeShip = (xCoord, yCoord, length, direction) => {
    const piece = ship(length);
    if (direction === 'horizontal' && xCoord + length <= width) {
      for (let i = xCoord; i < xCoord + length; i += 1) {
        if (board[i][yCoord] === 'E') {
          board[i][yCoord] = 'S';
        } else {
          undoShipAdd(xCoord, yCoord, i, direction);
          break;
        }
      }
    } else if (direction === 'vertical' && yCoord + length <= height) {
      for (let i = yCoord; i < yCoord + length; i += 1) {
        if (board[xCoord][i] === 'E') {
          board[xCoord][i] = 'S';
        } else {
          undoShipAdd(xCoord, yCoord, i, direction);
          break;
        }
      }
    }
    ships.push({ ship: piece, xStart: xCoord, yStart: yCoord });
  };
  const hitShip = (xCoord, yCoord) => {
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].xStart === parseInt(xCoord, 10)
          && (yCoord >= ships[i].yStart
          && yCoord < ships[i].yStart + ships[i].ship.getLength())) {
        ships[i].ship.hit(yCoord - ships[i].yStart);
      } else if (ships[i].yStart === parseInt(yCoord, 10)
          && (xCoord >= ships[i].xStart
          && xCoord < ships[i].xStart + ships[i].ship.getLength())) {
        ships[i].ship.hit(xCoord - ships[i].xStart);
      }
    }
  };
  const recieveAttack = (xCoord, yCoord) => {
    if ((xCoord >= 0 && xCoord < width) && (yCoord >= 0 && yCoord < height)) {
      if (board[xCoord][yCoord] === 'S') {
        board[xCoord][yCoord] = 'H';
        hitShip(xCoord, yCoord);
      } else if (board[xCoord][yCoord] === 'E') {
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
    resetBoard, getBoard, getShips, placeShip, recieveAttack, allSunk,
  };
};

export default gameboard;
