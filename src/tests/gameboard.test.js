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
  const testBoard = board.getBoard();
  expect(testBoard[2][2]).toBe('S');
  expect(testBoard[2][3]).toBe('S');
  expect(testBoard[2][4]).toBe('S');
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
  expect(ship.getHealth()).toBeTruthy();
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
  const board = gameboard(10);
  board.placeShip(2, 2, 1, 'vertical');
  expect(board.allSunk()).toBeFalsy();
});
