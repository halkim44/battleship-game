export default (controller, data) => {
	const generateGrid = () => {
		const container = document.createElement('table');
		const tbody = document.createElement('tbody');
		const firstRow = document.createElement('tr');
		tbody.appendChild(firstRow);
		firstRow.appendChild(document.createElement('td'));

		for (let y = 0; y < 10; y++) {
			const row = document.createElement('tr');

			const colIndex = document.createElement('td');
			const rowIndex = document.createElement('td');

			colIndex.classList = 'index';
			rowIndex.classList = 'index';
			rowIndex.textContent = String.fromCharCode(65 + y);
			colIndex.textContent = y + 1;

			row.appendChild(rowIndex);
			firstRow.appendChild(colIndex);

			for (let x = 1; x <= 10; x++) {
				const box = document.createElement('td');
				box.classList = 'box';
				box.dataset.coordinate = `${x}${String.fromCharCode(65 + y)}`
				row.appendChild(box);
			}

			tbody.appendChild(row);
		}
		container.appendChild(tbody);
		return container;
	};

	const playerOneBoard = document.getElementById('player-one');
	const playerTwoBoard = document.getElementById('player-two');
	playerOneBoard.appendChild(generateGrid());
	playerTwoBoard.appendChild(generateGrid());

	function updatePlayerBoard(playerDOM) {

		return (statusObj) => {
			for (const key in statusObj) {
				if (statusObj.hasOwnProperty(key)) {
					statusObj[key].forEach(coor => {

						const element = playerDOM.querySelector(`[data-coordinate="${coor}"]`);
						element.classList.add(key); // add miss or hit class
					});
				}
			}
		}
	}

	const alertWinner = (playerName) => {
		setTimeout(() => {
		alert(`${playerName} wins`);
		}, 0);
	}

	const alertChangeOfTurn = (playerName) => {
		setTimeout(() => {
			alert(`${playerName}'s turn.`);
		}, 0);
	}
	data.subscribe('player-one-board-update', updatePlayerBoard(playerOneBoard));
	data.subscribe('player-two-board-update', updatePlayerBoard(playerTwoBoard));
	data.subscribe('winner-decided', alertWinner);
	data.subscribe('change-turn', alertChangeOfTurn);

	document.addEventListener('click', controller);
};