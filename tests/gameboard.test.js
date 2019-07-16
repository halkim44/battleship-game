const Gameboard = require('../src/scripts/gameboard').default;

describe('gameboard', () => {
	const ships = [
		['2I'],
		['4C'],
		['2B', '2C'],
		['4E', '5E'],
		['3G', '4G', '5G'],
		['8E', '8F', '8G', '8H'],
		['10B', '10C', '10D', '10E', '10F'],
	];

	it('receiveAttack function parameter should be accurate', () => {
		const testBoard = Gameboard(ships);

		testBoard.receiveAttack('shoot!');
		expect(testBoard.status()).toEqual({
			hit: [],
			miss: []
		});

		const testBoard2 = Gameboard(ships);

		testBoard2.receiveAttack(null);
		expect(testBoard2.status()).toEqual({
			hit: [],
			miss: []
		});

		const testBoard3 = Gameboard(ships);

		testBoard3.receiveAttack(13);
		expect(testBoard3.status()).toEqual({
			hit: [],
			miss: []
		});

		const testBoard4 = Gameboard(ships);

		testBoard4.receiveAttack('12b');
		expect(testBoard4.status()).toEqual({
			hit: [],
			miss: []
		});

		const testBoard5 = Gameboard(ships);
		testBoard5.receiveAttack('10h');
		expect(testBoard5.status()).toEqual({
			hit: [],
			miss: ['10H']
		});
	});

	it('should report if all ships has been sink', () => {
		const ships2 = [
			['2I'],
			['4C'],
			['2B', '2C'],
		];
		const testBoard = Gameboard(ships2);

		testBoard.receiveAttack('2I');
		testBoard.receiveAttack('4C');
		testBoard.receiveAttack('2B');
		testBoard.receiveAttack('2C');

		expect(testBoard.isDefeated()).toEqual(true);
		const testBoard2 = Gameboard(ships2);

		testBoard2.receiveAttack('2I');
		testBoard2.receiveAttack('4C');
		testBoard2.receiveAttack('2C');

		expect(testBoard2.isDefeated()).toEqual(false);
	});

	it('determine if ships is hit or not in an attack', () => {
		const ships = [
			['2I'],
			['4C'],
			['2B', '2C'],
		];
		const testBoard = Gameboard(ships);

		expect(testBoard.isHit('2I')).toEqual(true);
		expect(testBoard.isHit('2C')).toEqual(true);
		expect(testBoard.isHit('2J')).toEqual(false);
		expect(testBoard.isHit('4C')).toEqual(true);
		expect(testBoard.isHit('10J')).toEqual(false);
	});

	it('provide the hit and miss position', () =>{
		const testBoard = Gameboard(ships);

		testBoard.receiveAttack('2I');
		testBoard.receiveAttack('4C');
		testBoard.receiveAttack('2C');
		testBoard.receiveAttack('4A');
		testBoard.receiveAttack('10J');

		expect(testBoard.status()).toEqual({
			hit: ['2I', '4C', '2C'],
			miss: ['4A', '10J'],
		});

	});
});