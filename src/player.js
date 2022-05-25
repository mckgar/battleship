import gameboard from './gameboard';

const player = (name, boardSize, isAi = false) => {
  const board = gameboard(boardSize, boardSize);
  const moveHistory = [];
  for (let i = 0; i < boardSize; i += 1) {
    const col = [];
    for (let j = 0; j < boardSize; j += 1) {
      col[j] = 0;
    }
    moveHistory[i] = col;
  }

  const getBoard = () => board;
  const getMoveHistory = () => moveHistory;
  const getName = () => name;
  const placePiece = (xCoord, yCoord, length) => {
    board.placeShip(xCoord, yCoord, length);
  };
  const isLegalMove = (xCoord, yCoord) => board.getBoard()[xCoord][yCoord] === 0 || board.getBoard()[xCoord][yCoord] === 'S';
  const isLegalAttack = (xCoord, yCoord) => moveHistory[xCoord][yCoord] === 0;
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
  const makeMove = (enemy) => {
    if (isAi) {
      let makingMove = true;
      while (makingMove) {
        const xRand = Math.floor(Math.random() * boardSize);
        const yRand = Math.floor(Math.random() * boardSize);
        if (isLegalAttack(xRand, yRand)) {
          attack(enemy, xRand, yRand);
          makingMove = false;
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
    makeMove,
  };
};

export default player;
