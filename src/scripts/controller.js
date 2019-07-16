let isGameEnd = false;

export default (model) => {
	const handleEvent = (e) => {
		if (!isGameEnd) {

			if (e.target.classList.value.includes('box') &&
				!e.target.classList.value.includes('marked')) {
				const enemy = model.players.isPlayerOnePlaying() ? 'player-two' : 'player-one';
				const enemyBoard = document.getElementById(enemy);

				if (enemyBoard.contains(e.target)) {
					const target = e.target.dataset.coordinate;
					model.manageAttack(target);
					model.events.publish(`${enemy}-board-update`, model.getEnemyStats());

					if (model.checkIfWin()) {
							model.events.publish('winner-decided', model.players.getCurrentPlayerName());
						isGameEnd = true;

					} else if (!model.isAttackSuccess(target)) {
						model.players.changeTurn();
						model.events.publish('change-turn', model.players.getCurrentPlayerName());

					}
				}
			}
		}
	};
	return {
		handleEvent,
	};
};