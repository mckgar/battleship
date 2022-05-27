import gameboard from '../gameboard';

test('Gameboard can place ships horizontally in valid coordinates', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 3, 'horizontal');
  const testBoard = board.getBoard();
  expect(testBoard[2][2]).toBe('S');
  expect(testBoard[3][2]).toBe('S');
  expect(testBoard[4][2]).toBe('S');
});

test('Gameboard can place ships vertically in valid coordinates', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 3, 'vertical');
  const boardCoord = board.getBoard();
  expect(boardCoord[2][2]).toBe('S');
  expect(boardCoord[2][3]).toBe('S');
  expect(boardCoord[2][4]).toBe('S');
});

test('Ships cannot be placed on top of each other', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 4, 'vertical');
  board.placeShip(1, 3, 4, 'horizontal');
  const boardCoord = board.getBoard();
  expect(boardCoord[1][3]).toBe('E');
});

test('Gameboard can recieve incoming attacks on ships', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 3, 'vertical');
  board.recieveAttack(2, 2);
  expect(board.getBoard()[2][2]).toBe('H');
});

test('Gameboard sends hit call to ship that has been hit', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 3, 'vertical');
  board.recieveAttack(2, 2);
  const { ship } = board.getShips()[0];
  expect(ship.getHealth()[0]).toBeTruthy();
});

test('Gameboard records coordinates of missed attacks', () => {
  const board = gameboard(10, 10);
  board.recieveAttack(2, 2);
  expect(board.getBoard()[2][2]).toBe('M');
});

test('Gameboard reports correctly when all ships are sunk', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 1, 'vertical');
  board.recieveAttack(2, 2);
  expect(board.allSunk()).toBeTruthy();
});

test('Gameboard reports correctly when not all ships are sunk', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 1, 'vertical');
  expect(board.allSunk()).toBeFalsy();
});

test('Gameboard can be fully reset', () => {
  const board = gameboard(10, 10);
  board.placeShip(2, 2, 1, 'horizontal');
  board.placeShip(8, 7, 2, 'vertical');
  board.resetBoard();
  let boardEmpty = true;
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (board.getBoard()[i][j] !== 'E') {
        boardEmpty = false;
      }
    }
  }
  expect(boardEmpty).toBeTruthy();
  expect(board.getShips().length).toBe(0);
});
