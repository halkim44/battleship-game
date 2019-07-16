import { isCoorFormat } from './utils';
import Ship from './ship';

const Gameboard = (coordinates) => {
	const shipObjs = [];
	const miss = [];
	const hit = [];

	coordinates.forEach(coor => shipObjs.push(new Ship(coor.length)));

	return Object.create({

		receiveAttack(xy) {
			if (typeof xy === 'string' && isCoorFormat(xy)) {
				xy = xy.toUpperCase();

				if (this.isHit(xy)) {
					coordinates.forEach((ship, i) => {
						const hitIndex = ship.indexOf(xy);
						if (hitIndex !== -1) {
							shipObjs[i].hit(hitIndex + 1);
							hit.push(xy);
						}
					});
				} else {
					miss.push(xy);
				}
			}
		},
		status() {
			return {
				miss,
				hit,
			};
		},

		isDefeated: () => shipObjs.every(ship => ship.isSunk()),

		isHit: coor => coordinates.some(ship => ship.some(str => str === coor)),

	});
};

export default Gameboard;
