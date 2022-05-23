import ship from './ship';

test('Ship is hit when valid target', () => {
  const target = ship(4);
  target.hit(2);
  expect(target.getHealth()[2]).toBeTruthy();
});

test('Ship is not hit when invalid target', () => {
  const target = ship(1);
  target.hit(3);
  expect(target.getHealth()[0]).toBeFalsy();
});

test('Ship is still hit when retargeted', () => {
  const target = ship(4);
  target.hit(2);
  target.hit(2);
  expect(target.getHealth()[2]).toBeTruthy();
});

test('Ship is sunk when all portions are hit', () => {
  const target = ship(4);
  for (let i = 0; i < 4; i += 1) {
    target.hit(i);
  }
  expect(target.isSunk()).toBeTruthy();
});

test('Ship is not sunk when undamaged', () => {
  const target = ship(2);
  expect(target.isSunk()).toBeFalsy();
});

test('Ship is not sunk when not all portions are hit', () => {
  const target = ship(2);
  target.hit(0);
  expect(target.isSunk()).toBeFalsy();
});
