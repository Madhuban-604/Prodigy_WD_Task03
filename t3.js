// Game variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let scoreX = 0;
let scoreO = 0;

// Function to handle cell clicks
function handleClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        checkForWinner();
        switchPlayer();
    }
}

// Function to switch players
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check for a winner
function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            endGame(`${currentPlayer} wins!`);
            updateScore(currentPlayer);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        endGame('It\'s a tie!');
    }
}

// Function to end the game
function endGame(message) {
    document.getElementById('status').innerText = message;
    gameActive = false;
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    // Clear the board
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
    }

    // Reset status message
    document.getElementById('status').innerText = '';
}

// Function to update the score
function updateScore(player) {
    if (player === 'X') {
        scoreX++;
        document.getElementById('scoreX').innerText = scoreX;
    } else {
        scoreO++;
        document.getElementById('scoreO').innerText = scoreO;
    }
}
