import { turnToCoorString } from './utils';

const makeRandomShot = () => {
  // eslint-disable-next-line no-constant-condition
  const x = Math.ceil(Math.random() * 10);
  const y = Math.ceil(Math.random() * 10);
  return turnToCoorString(x, y);
};

const Players = () => {
  const _players = [
    {
      name: 'P1',
    },
    {
      name: 'P2',
    },
  ];

  let [_current] = _players;


  return Object.create({

    changeTurn() {
      if (_current.name === _players[0].name) {
        [, _current] = _players;
      } else {
        [_current] = _players;
      }
    },

    isPlayerOnePlaying() {
      return _current.name === _players[0].name;
    },

    computerPlay(history) {
      let choice;
      while (true) {
        choice = makeRandomShot();
        if (!history.some(coor => coor === choice) || history.length === 100) {
          break;
        }
      }
      return choice;
    },

    getCurrentPlayerName: () => _current.name,

  });
};

export default Players;
