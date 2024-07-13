const app = () => {
    const board = document.querySelector('.board');
    const cells = Array.from(document.querySelectorAll('.cell'));
    const infoDisplay = document.getElementById('currentPlayer')
    let currentPlayer = 'X';

    function handleCellClick(event) {
        const cell = event.target;
       

        if (isValidMove(cell)) {
            makeMove(cell);
            if (checkWin()){
                announceWinner()
                resetBoard()
            } else if(checkDraw()){
                announceDraw()
                resetBoard()
            }   
            else {
                changePlayer();
            }
        }
    }

    function makeMove(cell) {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
    }

    function changePlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function isValidMove(cell) {
        return cell.textContent === '';
    }

    function checkWin() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winningCombinations.some(combination => {
            return combination.every(index => {
                return cells[index].classList.contains(currentPlayer);
            });
        });
    }
    function announceWinner(){
        alert(`Player ${currentPlayer} wins!`)
    }
    function announceDraw(){
        alert("It's a DRAW!")
    }
    function checkDraw(){
        return cells.every(cell => cell.textContent !== '')
    }
    function resetBoard(){
        cells.forEach(cell =>{
            cell.textContent = '';
            cell.classList.remove('X', 'O')
        })
    }
    board.addEventListener('click', handleCellClick);
};

window.addEventListener('load', app);
