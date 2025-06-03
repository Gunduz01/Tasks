var player1 = document.querySelector('.player-1');
var player2 = document.querySelector('.player-2');
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
var pos1 = 0;
var pos2 = 0;
var finish = window.innerWidth - 120;
function checkWinner() {
    if (pos1 >= finish) {
        alert('Player 1 Kazandı!');
        reset();
    }
    else if (pos2 >= finish) {
        alert('Player 2 Kazandı!');
        reset();
    }
}
function reset() {
    pos1 = 0;
    pos2 = 0;
    player1.style.left = pos1 + 'px';
    player2.style.left = pos2 + 'px';
}
document.addEventListener('keydown', function (e) {
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
