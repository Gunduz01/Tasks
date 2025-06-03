const player1 = document.querySelector('.player-1') as HTMLDivElement;
const player2 = document.querySelector('.player-2') as HTMLDivElement;

player1.style.position = 'absolute';
player1.style.top = '100px';
player1.style.left = '0px';
player1.style.width = '100px';
player1.style.height = '50px';
player1.style.background = 'red';

player2.style.position = 'absolute';
player2.style.top = '200px';
player2.style.left = '0px';
player2.style.width = '100px';
player2.style.height = '50px';
player2.style.background = 'blue';

let pos1 = 0;
let pos2 = 0;
const finish = window.innerWidth - 120;

function checkWinner() {
    if (pos1 >= finish) {
        alert('Player 1 Qazandı!');
        reset();
    } else if (pos2 >= finish) {
        alert('Player 2 Qazandı!');
        reset();
    }
}

function reset() {
    pos1 = 0;
    pos2 = 0;
    player1.style.left = pos1 + 'px';
    player2.style.left = pos2 + 'px';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        pos1 += 20;
        player1.style.left = pos1 + 'px';
        checkWinner();
    }
    if (e.key.toLowerCase() === 'd') {
        pos2 += 20;
        player2.style.left = pos2 + 'px';
        checkWinner();
    }
});