import './style.css';
import player from './player';
import displayController from './display-controller';

let player1;
let player2;
let gameOver;

displayController.createPage();

function shipDragInterface() {
  function validRotationPosition(ship) {
    const length = parseInt(ship.classList[1].slice(6), 10);
    const direction = ship.classList[2];
    const startX = parseInt(ship.parentElement.classList[0].slice(1), 10);
    const startY = parseInt(ship.parentElement.classList[1].slice(1), 10);
    if (direction === 'vertical') {
      if (startX + length > 10) {
        return false;
      }
      for (let i = startX; i < startX + length; i += 1) {
        const space = document.querySelector(`#player-board .x${i}.y${startY}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    } else if (direction === 'horizontal') {
      if (startY + length > 10) {
        return false;
      }
      for (let i = startY; i < startY + length; i += 1) {
        const space = document.querySelector(`#player-board .x${startX}.y${i}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  }
  function validDrop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const ship = document.getElementById(id);
    if (e.target.childNodes.length > 0 || e.target.classList.contains('ship')) {
      return false; // Ship present
    }
    const length = parseInt(ship.classList[1].slice(6), 10);
    const direction = ship.classList[2];
    const startX = parseInt(e.target.classList[0].slice(1), 10);
    const startY = parseInt(e.target.classList[1].slice(1), 10);
    if (direction === 'horizontal') {
      if (startX + length > 10) {
        return false;
      }
      for (let i = startX; i < startX + length; i += 1) {
        const space = document.querySelector(`#player-board .x${i}.y${startY}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    } else if (direction === 'vertical') {
      if (startY + length > 10) {
        return false;
      }
      for (let i = startY; i < startY + length; i += 1) {
        const space = document.querySelector(`#player-board .x${startX}.y${i}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    }
    return true;
  }
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }
  function dragEnd(e) {
    e.target.classList.remove('hide');
  }
  function dragEnter(e) {
    e.preventDefault();
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    draggable.classList.remove('hide');
    if (validDrop(e)) {
      e.target.appendChild(draggable);
      displayController.removeShipSpaces(draggable);
      displayController.fillShipSpaces(draggable, e.target);
    }
  }

  function rotateShip(e) {
    if (validRotationPosition(e.target)) {
      e.target.classList.toggle('vertical');
      e.target.classList.toggle('horizontal');
      displayController.removeShipSpaces(e.target);
      displayController.fillShipSpaces(e.target, e.target.parentElement);
    }
  }

  const ships = document.querySelectorAll('.ship');
  ships.forEach((ship) => {
    ship.addEventListener('dragstart', dragStart);
    ship.addEventListener('dragend', dragEnd);
    ship.addEventListener('click', rotateShip);
  });

  const spaces = document.querySelectorAll('#player-board .space');
  spaces.forEach((space) => {
    space.addEventListener('dragenter', dragEnter);
    space.addEventListener('dragover', dragOver);
    space.addEventListener('drop', drop);
  });
}

function aiAttack(lastMove = [-1, -1]) {
  const aiMove = player2.makeMove(player1, lastMove[0], lastMove[1]);
  displayController.updateBoard(true, aiMove[0], aiMove[1], player1.getBoard());
  if (player1.hasLost()) {
    gameOver = true;
    displayController.endGame(player2);
  } else if (player1.isHit(aiMove[0], aiMove[1])) {
    aiAttack(aiMove);
  }
}
function attack(xCoord, yCoord) {
  player1.attack(player2, xCoord, yCoord);
  displayController.updateBoard(false, xCoord, yCoord, player1.getMoveHistory());
  if (player2.hasLost()) {
    gameOver = true;
    displayController.endGame(player1);
  } else if (player2.isMiss(xCoord, yCoord)) {
    aiAttack();
  }
}

function startNewGame() {
  player1.resetGame();
  player2.resetGame();

  gameOver = false;

  displayController.startNewGame(player1);

  shipDragInterface();

  const placeBtn = document.querySelector('#place-button');
  // eslint-disable-next-line no-use-before-define
  placeBtn.addEventListener('click', () => startPlaying());
}
function startPlaying() {
  const carrier = document.querySelector('#carrier');
  const battleship = document.querySelector('#battleship');
  const destroyer = document.querySelector('#destroyer');
  const submarine = document.querySelector('#submarine');
  const patrolBoat = document.querySelector('#patrol-boat');
  player1.placePiece(
    parseInt(carrier.parentElement.classList[0].slice(1), 10),
    parseInt(carrier.parentElement.classList[1].slice(1), 10),
    5,
    carrier.classList[2],
  );
  player1.placePiece(
    parseInt(battleship.parentElement.classList[0].slice(1), 10),
    parseInt(battleship.parentElement.classList[1].slice(1), 10),
    4,
    battleship.classList[2],
  );
  player1.placePiece(
    parseInt(destroyer.parentElement.classList[0].slice(1), 10),
    parseInt(destroyer.parentElement.classList[1].slice(1), 10),
    3,
    destroyer.classList[2],
  );
  player1.placePiece(
    parseInt(submarine.parentElement.classList[0].slice(1), 10),
    parseInt(submarine.parentElement.classList[1].slice(1), 10),
    3,
    submarine.classList[2],
  );
  player1.placePiece(
    parseInt(patrolBoat.parentElement.classList[0].slice(1), 10),
    parseInt(patrolBoat.parentElement.classList[1].slice(1), 10),
    2,
    patrolBoat.classList[2],
  );

  player2.randomShipPlacement(5);
  player2.randomShipPlacement(4);
  player2.randomShipPlacement(3);
  player2.randomShipPlacement(3);
  player2.randomShipPlacement(2);

  displayController.getGameReady(player1);

  const spaces = document.querySelectorAll('#opponent-board .space');
  spaces.forEach((space) => space.addEventListener('click', () => {
    if (space.classList[2] === 'E' && !gameOver) {
      attack(space.classList[0].slice(1), space.classList[1].slice(1));
    }
  }));

  const startNewBtn = document.querySelector('#start-new-game');
  startNewBtn.addEventListener('click', () => startNewGame());
}
function startGame() {
  const player1Name = document.querySelector('#name-player-1').value;
  /* const player1Ai = document.querySelector('#ai-player-1').value; */
  const player2Name = document.querySelector('#name-player-2').value;
  /* const player2Ai = document.querySelector('#ai-player-1').value; */

  player1 = player(player1Name, 10);
  player2 = player(player2Name, 10, 1);

  gameOver = false;

  displayController.removeForm();
  displayController.createBoards(player1);

  shipDragInterface();

  const placeBtn = document.querySelector('#place-button');
  placeBtn.addEventListener('click', () => startPlaying());
}

const startBtn = document.querySelector('#start-button');
startBtn.addEventListener('click', () => startGame());
