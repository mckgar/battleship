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
