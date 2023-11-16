player1 = 'Hafedh';
player2 = 'Hafedh';

start = false; 

function drawPlayer(id = 0) {
    start = !start;
    document.getElementById(String(id)).innerHTML = "<img class='duration-700 hover:scale-120' src='../../../assets/images/o.png'></img>";
}