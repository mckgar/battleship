import player from '../player';

test('Player can check if move on empty space is legal', () => {
  const player1 = player('Capt Cutter', 10);
  expect(player1.isLegalMove(2, 3)).toBeTruthy();
});

test('Player can check if move on ship space is legal', () => {
  const player1 = player('Capt Cutter', 10);
  player1.placePiece(2, 3, 1);
  expect(player1.isLegalMove(2, 3)).toBeTruthy();
});

test('Player can check if move on miss space is illegal', () => {
  const player1 = player('Capt Cutter', 10);
  player1.recieveAttack(2, 3, 1);
  expect(player1.isLegalMove(2, 3)).toBeFalsy();
});

test('Player can check if move on hitSpace space is illegal', () => {
  const player1 = player('Capt Cutter', 10);
  player1.placePiece(2, 3, 1);
  player1.recieveAttack(2, 3);
  expect(player1.isLegalMove(2, 3)).toBeFalsy();
});

test('Players can attack other players', () => {
  const player1 = player('Capt Cutter', 10);
  const player2 = player('Capt Sisko', 10);
  player1.attack(player2, 2, 4);
  expect(player2.isMiss(2, 4)).toBeTruthy();
});

test('Players can attack other players ships', () => {
  const player1 = player('Capt Cutter', 10);
  const player2 = player('Capt Sisko', 10);
  player2.placePiece(2, 4, 1, 'horizontal');
  player1.attack(player2, 2, 4);
  expect(player2.isHit(2, 4)).toBeTruthy();
});

test('AI players can attack other players', () => {
  const player1 = player('Capt Cutter', 3, 1);
  const player2 = player('Capt Sisko', 3);
  player1.makeMove(player2);
  let attacked = false;
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (player2.isMiss(i, j)) {
        attacked = true;
      }
    }
  }
  expect(attacked).toBeTruthy();
});

test('Player reports correctly when all ships are sunk', () => {
  const player1 = player('Capt Cutter', 3);
  const player2 = player('Capt Sisko', 3);
  player1.placePiece(1, 1, 1, 'horizontal');
  player2.attack(player1, 1, 1);
  expect(player1.hasLost()).toBeTruthy();
});

test('Player can randomly place ship', () => {
  const player1 = player('Capt Keys', 3);
  player1.randomShipPlacement(1);
  let placed = false;
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (player1.getBoard()[i][j]) {
        placed = true;
      }
    }
  }
  expect(placed).toBeTruthy();
});

test('Player can reset game', () => {
  const player1 = player('Admiral Hood', 10);
  player1.placePiece(2, 2, 2, 'vertical');
  player1.placePiece(6, 7, 2, 'horizontal');
  player1.recieveAttack(1, 3);
  player1.recieveAttack(4, 9);
  player1.resetGame();
  let boardEmpty = true;
  let moveHistoryEmpty = true;
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (player1.getBoard()[i][j] !== 'E') {
        boardEmpty = false;
      }
    }
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (player1.getMoveHistory()[i][j] !== 'E') {
        moveHistoryEmpty = false;
      }
    }
  }
  expect(boardEmpty).toBeTruthy();
  expect(moveHistoryEmpty).toBeTruthy();
});
