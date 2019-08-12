var origBoard;
const player1 = 'O';
const player2 = 'X';
const winCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8], 
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame(){
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        // event listener, turnClick is the callback function
        cells[i].addEventListener('click', turnClick, false);
    }
}
// once a cell is clicked, its going to call turnClick function and pass in the clicked squre
function turnClick(square){
    if (typeof  origBoard[square.target.id] === 'number'){
        // clicked square's id, player marker
        turn(square.target.id, player1)
        if (!checkTie()) turn(bestSpot(), player2)
    }
}
// call turn function 
function turn(squareId, player){
    // track each move
    origBoard[squareId] = player;
    // select the square and let its text to be player's marker
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player);
    if(gameWon) gameOver(gameWon);
}

function checkWin(board, player){
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (var [index, win] of winCombos.entries()){
        if (win.every(elem => plays.indexOf(elem) > -1)){
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon){
    for (let index of winCombos[gameWon.index]){
        document.getElementById(index).style.backgroundColor = 
        gameWon.player === player1 ? 'blue': "red";
    }
    for(var i = 0; i< cells.length; i++){
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player === player1 ? "Player1 Win": "Player2 Win")
}

function declareWinner(who){
    document.querySelector('.endgame').style.display = "block"
    document.querySelector('.endgame .text').innerText = who;
}

function emptySquares(){
    return origBoard.filter(s => typeof s === 'number');
}

function bestSpot(){
    return emptySquares()[0];
}

function checkTie(){
    if(emptySquares().length === 0){
        for( var i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = 'green';
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game");
    }
}