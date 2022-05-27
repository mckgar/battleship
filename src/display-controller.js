const displayController = (() => {
  const createHeader = () => {
    const header = document.createElement('div');
    header.id = 'header';
    const logo = document.createElement('h1');
    logo.id = 'name';
    logo.textContent = 'Battleship';
    header.appendChild(logo);
    return header;
  };
  const createStartForm = () => {
    const form = document.createElement('div');
    form.id = 'start-form';

    for (let i = 1; i <= 2; i += 1) {
      const playerForm = document.createElement('div');
      playerForm.classList.add('player-form');
      const nameField = document.createElement('div');
      nameField.classList.add('form-item');
      const nameLabel = document.createElement('label');
      nameLabel.for = `name-player-${i}`;
      nameLabel.textContent = `Player ${i} Name`;
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = `name-player-${i}`;
      nameInput.id = `name-player-${i}`;
      if (i === 1) {
        nameInput.value = 'Player';
      } else {
        nameInput.value = 'AI';
      }
      nameField.appendChild(nameLabel);
      nameField.appendChild(nameInput);
      /* const aiField = document.createElement('div');
      aiField.classList.add('form-item');
      const aiLabel = document.createElement('label');
      aiLabel.for = `ai-player-${i}`;
      aiLabel.textContent = 'AI';
      const aiInput = document.createElement('input');
      aiInput.type = 'checkbox';
      aiInput.name = `ai-player-${i}`;
      aiInput.id = `ai-player-${i}`;
      aiField.appendChild(aiLabel);
      aiField.appendChild(aiInput);
      playerForm.appendChild(nameField);
      playerForm.appendChild(aiField); */
      playerForm.appendChild(nameField);

      form.appendChild(playerForm);
    }
    const startButton = document.createElement('div');
    startButton.id = 'start-button';
    startButton.textContent = 'START GAME';
    form.appendChild(startButton);
    return form;
  };
  const createBoard = (board) => {
    const playSpace = document.createElement('div');
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        const space = document.createElement('div');
        space.classList.add(`x${j}`, `y${i}`, board[j][i], 'space');
        playSpace.appendChild(space);
      }
    }

    return playSpace;
  };
  const createPage = () => {
    const body = document.querySelector('body');
    const header = createHeader();
    const form = createStartForm();
    const endingBanner = document.createElement('div');
    endingBanner.id = 'ending-banner';

    body.appendChild(header);
    body.appendChild(form);
    body.appendChild(endingBanner);
  };
  const removeForm = () => {
    const body = document.querySelector('body');
    const form = document.querySelector('#start-form');
    body.removeChild(form);
  };
  const fillShipSpaces = (ship, parent) => {
    const length = parseInt(ship.classList[1].slice(6), 10);
    const direction = ship.classList[2];
    if (direction === 'horizontal') {
      const startIndex = parseInt(parent.classList[0].slice(1), 10);
      const yIndex = parent.classList[1];
      for (let i = startIndex; i < startIndex + length; i += 1) {
        const space = document.querySelector(`#player-board .x${i}.${yIndex}`);
        space.classList.add(`${ship.id}-present`);
      }
    } else if (direction === 'vertical') {
      const startIndex = parseInt(parent.classList[1].slice(1), 10);
      const xIndex = parent.classList[0];
      for (let i = startIndex; i < startIndex + length; i += 1) {
        const space = document.querySelector(`#player-board .y${i}.${xIndex}`);
        space.classList.add(`${ship.id}-present`);
      }
    }
  };
  const removeShipSpaces = (ship) => {
    const oldSpaces = document.querySelectorAll(`.${ship.id}-present`);
    oldSpaces.forEach((space) => space.classList.remove(`${ship.id}-present`));
  };
  const createShipDraggable = (length) => {
    const ship = document.createElement('div');
    ship.draggable = true;
    ship.classList.add('ship', `Length${length}`, 'vertical');
    return ship;
  };
  const createBoards = (player) => {
    const body = document.querySelector('body');

    const startButton = document.createElement('div');
    startButton.id = 'place-button';
    startButton.textContent = 'PLACE SHIPS';
    body.appendChild(startButton);

    const main = document.createElement('div');
    main.id = 'main';
    body.appendChild(main);

    const playerBoard = createBoard(player.getBoard());
    playerBoard.id = 'player-board';
    main.appendChild(playerBoard);

    const carrier = createShipDraggable(5);
    carrier.id = 'carrier';
    const battleship = createShipDraggable(4);
    battleship.id = 'battleship';
    const destroyer = createShipDraggable(3);
    destroyer.id = 'destroyer';
    const submarine = createShipDraggable(3);
    submarine.id = 'submarine';
    const patrolBoat = createShipDraggable(2);
    patrolBoat.id = 'patrol-boat';

    const boatStart1 = document.querySelector('.x0.y0');
    const boatStart2 = document.querySelector('.x2.y0');
    const boatStart3 = document.querySelector('.x4.y0');
    const boatStart4 = document.querySelector('.x6.y0');
    const boatStart5 = document.querySelector('.x8.y0');

    boatStart1.appendChild(carrier);
    boatStart2.appendChild(battleship);
    boatStart3.appendChild(destroyer);
    boatStart4.appendChild(submarine);
    boatStart5.appendChild(patrolBoat);

    fillShipSpaces(carrier, carrier.parentElement);
    fillShipSpaces(battleship, battleship.parentElement);
    fillShipSpaces(destroyer, destroyer.parentElement);
    fillShipSpaces(submarine, submarine.parentElement);
    fillShipSpaces(patrolBoat, patrolBoat.parentElement);

    const oppenentBoard = createBoard(player.getMoveHistory());
    oppenentBoard.id = 'opponent-board';
    main.appendChild(oppenentBoard);
  };
  const getGameReady = (player) => {
    const body = document.querySelector('body');
    const main = document.querySelector('#main');

    const carrier = document.querySelector('#carrier');
    const battleship = document.querySelector('#battleship');
    const destroyer = document.querySelector('#destroyer');
    const submarine = document.querySelector('#submarine');
    const patrolBoat = document.querySelector('#patrol-boat');

    removeShipSpaces(carrier);
    carrier.parentElement.removeChild(carrier);
    removeShipSpaces(battleship);
    battleship.parentElement.removeChild(battleship);
    removeShipSpaces(destroyer);
    destroyer.parentElement.removeChild(destroyer);
    removeShipSpaces(submarine);
    submarine.parentElement.removeChild(submarine);
    removeShipSpaces(patrolBoat);
    patrolBoat.parentElement.removeChild(patrolBoat);

    const placeBtn = document.querySelector('#place-button');
    placeBtn.parentElement.removeChild(placeBtn);

    const newGameBtn = document.createElement('div');
    newGameBtn.id = 'start-new-game';
    newGameBtn.textContent = 'START NEW GAME';
    body.appendChild(newGameBtn);

    main.removeChild(document.querySelector('#player-board'));
    const playerBoard = createBoard(player.getBoard());
    playerBoard.id = 'player-board';
    main.appendChild(playerBoard);
  };
  const updateBoard = (playerBoard, xCoord, yCoord, board) => {
    try {
      let toUpdate;
      if (playerBoard && board[xCoord][yCoord] === 'H') {
        toUpdate = document.querySelector(`#player-board [class = 'x${xCoord} y${yCoord} S space']`);
      } else if (playerBoard) {
        toUpdate = document.querySelector(`#player-board [class = 'x${xCoord} y${yCoord} E space']`);
      } else {
        toUpdate = document.querySelector(`#opponent-board [class = 'x${xCoord} y${yCoord} E space']`);
      }
      toUpdate.classList.replace(toUpdate.classList[2], board[xCoord][yCoord]);
    } catch (err) {
      throw new Error(`${err} at move: (${xCoord}, ${yCoord}); board: ${board[xCoord][yCoord]}`);
    }
  };
  const endGame = (player) => {
    const endingBanner = document.querySelector('#ending-banner');
    endingBanner.textContent = `${player.getName()} wins!`;
  };
  const startNewGame = (player) => {
    const body = document.querySelector('body');
    const main = document.querySelector('#main');
    const startNewBtn = document.querySelector('#start-new-game');
    body.removeChild(main);
    body.removeChild(startNewBtn);
    document.querySelector('#ending-banner').textContent = '';
    createBoards(player);
  };

  return {
    createPage,
    removeForm,
    fillShipSpaces,
    removeShipSpaces,
    createBoards,
    getGameReady,
    updateBoard,
    endGame,
    startNewGame,
  };
})();

export default displayController;
