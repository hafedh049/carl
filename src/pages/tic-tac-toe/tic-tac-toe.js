player1 = "Hafedh";
player2 = "Hafedh";

grid = Array(9);

function load() {
  for (indx = 0; indx < 9; indx++) {
    grid[indx] = document.getElementById(`${indx + 1}`);
  }
  console.log(JSON.stringify(grid));
}

document.addEventListener("DOMContentLoaded", load);

turn = false;

function drawLine(startX, startY, endX, endY) {
  const line = document.getElementById('line');

  // Calculate distance and angle between two points
  const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  // Set line length, angle, and position
  line.style.width = distance + 'px';
  line.style.transform = `rotate(${angle}deg)`;
  line.style.left = startX + 'px';
  line.style.top = startY + 'px';
}

function drawPlayer(id = 0) {
  if (!grid[id - 1].innerHTML) {
    console.log(grid[id - 1].style.position);
    turn = !turn;
    grid[
      id - 1
    ].innerHTML = `<img class='duration-700 hover:scale-110' src='../../../assets/images/${
      turn ? "x" : "o"
    }.png'></img>`;
  }
}

