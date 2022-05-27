import gameboard from './gameboard';

const player = (name, boardSize, isAi = false) => {
  const board = gameboard(boardSize, boardSize);
  const moveHistory = [];
  let lastHitX = -1;
  let lastHitY = -1;
  let triedAllAdj = false;

  const setMoveHistory = () => {
    for (let i = 0; i < boardSize; i += 1) {
      const col = [];
      for (let j = 0; j < boardSize; j += 1) {
        col[j] = 'E';
      }
      moveHistory[i] = col;
    }
  };
  setMoveHistory();

  const resetBoard = () => {
    board.resetBoard();
  };
  const resetMoveHistory = () => {
    const moveHistoryLength = moveHistory.length;
    for (let i = 0; i < moveHistoryLength; i += 1) {
      moveHistory.pop();
    }
    setMoveHistory();
  };
  const resetGame = () => {
    resetBoard();
    resetMoveHistory();
  };

  const getBoard = () => board.getBoard();
  const getMoveHistory = () => moveHistory;
  const getName = () => name;
  const placePiece = (xCoord, yCoord, length, direction) => {
    board.placeShip(xCoord, yCoord, length, direction);
  };
  const isLegalMove = (xCoord, yCoord) => {
    if ((xCoord >= 0 && xCoord < boardSize) && (yCoord >= 0 && yCoord < boardSize)) {
      return board.getBoard()[xCoord][yCoord] === 'E' || board.getBoard()[xCoord][yCoord] === 'S';
    }
    return false;
  };
  const isLegalAttack = (xCoord, yCoord) => {
    if ((xCoord >= 0 && xCoord < boardSize) && (yCoord >= 0 && yCoord < boardSize)) {
      return moveHistory[xCoord][yCoord] === 'E';
    }
    return false;
  };
  const attack = (enemy, xCoord, yCoord) => {
    if (isLegalAttack(xCoord, yCoord)) {
      enemy.recieveAttack(xCoord, yCoord);
      if (enemy.isHit(xCoord, yCoord)) {
        moveHistory[xCoord][yCoord] = 'H';
      } else if (enemy.isMiss(xCoord, yCoord)) {
        moveHistory[xCoord][yCoord] = 'M';
      }
    }
  };
  const recieveAttack = (xCoord, yCoord) => {
    if (isLegalMove(xCoord, yCoord)) {
      board.recieveAttack(xCoord, yCoord);
    }
  };
  const isMiss = (xCoord, yCoord) => board.getBoard()[xCoord][yCoord] === 'M';
  const isHit = (xCoord, yCoord) => board.getBoard()[xCoord][yCoord] === 'H';
  const hasLost = () => board.allSunk();
  const makeMove = (enemy, prevX = -1, prevY = -1) => {
    if (isAi) {
      let makingMove = true;
      while (makingMove) {
        if (prevX >= 0 && prevY >= 0) {
          lastHitX = prevX;
          lastHitY = prevY;
          triedAllAdj = false;
        }
        if (lastHitX >= 0 && lastHitY >= 0 && !triedAllAdj) {
          for (let i = 1; i < 6; i += 1) {
            if (isLegalAttack(lastHitX + i, lastHitY)) {
              attack(enemy, lastHitX + i, lastHitY);
              makingMove = false;
              return [lastHitX + i, lastHitY];
            }
            if (isLegalAttack(lastHitX - i, lastHitY)) {
              attack(enemy, lastHitX - i, lastHitY);
              makingMove = false;
              return [lastHitX - i, lastHitY];
            }
            if (isLegalAttack(lastHitX, lastHitY + i)) {
              attack(enemy, lastHitX, lastHitY + i);
              makingMove = false;
              return [lastHitX, lastHitY + i];
            }
            if (isLegalAttack(lastHitX, lastHitY - i)) {
              attack(enemy, lastHitX, lastHitY - i);
              makingMove = false;
              return [lastHitX, lastHitY - i];
            }
          }
          triedAllAdj = true;
        }

        const xRand = Math.floor(Math.random() * boardSize);
        const yRand = Math.floor(Math.random() * boardSize);
        if (isLegalAttack(xRand, yRand)) {
          attack(enemy, xRand, yRand);
          makingMove = false;
          return [xRand, yRand];
        }
      }
    }
    return null;
  };
  const randomShipPlacement = (length) => {
    let placingShip = true;
    while (placingShip) {
      const xRand = Math.floor(Math.random() * boardSize);
      const yRand = Math.floor(Math.random() * boardSize);
      // Randomize direction; 0 horizontal, 1 vertical
      const direction = Math.floor(Math.random() * 2);
      let foundLegalSpace = false;
      if (direction === 0) {
        if (xRand + length <= boardSize) {
          for (let i = xRand; i < xRand + length; i += 1) {
            if (board.getBoard()[i][yRand] !== 'E') {
              break;
            }
            if (i === xRand + length - 1) {
              foundLegalSpace = true;
            }
          }
        }
        if (foundLegalSpace) {
          placingShip = false;
          placePiece(xRand, yRand, length, 'horizontal');
        }
      } else if (direction === 1) {
        if (xRand + length <= boardSize) {
          for (let i = yRand; i < yRand + length; i += 1) {
            if (board.getBoard()[xRand][i] !== 'E') {
              break;
            }
            if (i === yRand + length - 1) {
              foundLegalSpace = true;
            }
          }
        }
        if (foundLegalSpace) {
          placingShip = false;
          placePiece(xRand, yRand, length, 'vertical');
        }
      }
    }
  };

  return {
    getBoard,
    getMoveHistory,
    getName,
    placePiece,
    isLegalMove,
    attack,
    recieveAttack,
    isMiss,
    isHit,
    hasLost,
    makeMove,
    randomShipPlacement,
    resetGame,
  };
};

export default player;
