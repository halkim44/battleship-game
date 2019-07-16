import Players from './player';
import GameBoard from './gameboard';
import PubSub from './pubsub';

const playerOneGameBoard = GameBoard([
	['2I'],
	['4C'],
	['2B', '2C'],
,
]);
const playerTwoGameBoard = GameBoard([
	['2I'],
	['4C'],
	['2B', '2C'],
,
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
