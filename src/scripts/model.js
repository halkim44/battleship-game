import Players from './player';
import GameBoard from './gameboard';
import PubSub from './pubsub';

const playerOneGameBoard = GameBoard([
	['2I'],
	['4C'],
	['2B', '2C'],
	['4E', '5E'],
	['3G', '4G', '5G'],
	['8E', '8F', '8G', '8H'],
	['10B', '10C', '10D', '10E', '10F'],
]);
const playerTwoGameBoard = GameBoard([
	['2I'],
	['4C'],
	['2B', '2C'],
	['4E', '5E'],
	['3G', '4G', '5G'],
	['8E', '8F', '8G', '8H'],
	['10B', '10C', '10D', '10E', '10F'],
]);

const players = Players();

const getEnemyBoard = () => players.isPlayerOnePlaying() ? playerTwoGameBoard : playerOneGameBoard;

const Model = () => Object.assign(Object.create({
	players,

	manageAttack(coor) {
		const enemy = getEnemyBoard();
		enemy.receiveAttack(coor);
	},

	getEnemyStats() {
		return getEnemyBoard().status();
	},

	isAttackSuccess: coor => getEnemyBoard().isHit(coor),

	checkIfWin: () => getEnemyBoard().isDefeated(),

}), {
	events: PubSub(),
});

export default Model;
