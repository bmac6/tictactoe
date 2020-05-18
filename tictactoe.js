let cells = document.querySelectorAll(".row > div");
let startMsg = document.getElementById("start-msg");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
let counter = 0;
let winner = false;
let turn = "X";
if (counter == 0) {
}

startMsg.innerText = "X gets to start the game";
function cellClicked() {
  if (event.target.textContent == "") {
    event.target.textContent = turn;
    switchTurn();
    winningCombos();
  }
}
function switchTurn() {
  counter++;
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}
function winningCombos() {
  if (
    cells[0].innerText === cells[1].innerText &&
    cells[1].innerText === cells[2].innerText &&
    cells[0].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[0].innerText} won!`);
    showButton();
  } else if (
    cells[3].innerText === cells[4].innerText &&
    cells[4].innerText === cells[5].innerText &&
    cells[3].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[3].innerText} won!`);
    showButton();
  } else if (
    cells[6].innerText === cells[7].innerText &&
    cells[7].innerText === cells[8].innerText &&
    cells[6].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[6].innerText} won!`);
    showButton();
  } else if (
    cells[0].innerText === cells[4].innerText &&
    cells[4].innerText === cells[8].innerText &&
    cells[0].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[0].innerText} won!`);
    showButton();
  } else if (
    cells[2].innerText === cells[4].innerText &&
    cells[4].innerText === cells[6].innerText &&
    cells[2].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[2].innerText} won!`);
    showButton();
  } else if (
    cells[0].innerText === cells[3].innerText &&
    cells[3].innerText === cells[6].innerText &&
    cells[0].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[0].innerText} won!`);
    showButton();
  } else if (
    cells[1].innerText === cells[4].innerText &&
    cells[4].innerText === cells[7].innerText &&
    cells[1].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[1].innerText} won!`);
    showButton();
  } else if (
    cells[2].innerText === cells[5].innerText &&
    cells[5].innerText === cells[8].innerText &&
    cells[2].innerText !== ""
  ) {
    winner = true;
    console.log(`${cells[2].innerText} won!`);
    showButton();
  } else if (counter === 9 && winner == false) {
    console.log(`It's a tie!`);
    showButton();
  }
}

function showButton() {
  let btnDiv = document.getElementById("btn-div");
  let btn = document.createElement("button");
  btnDiv.appendChild(btn);
  btn.innerText = "Rematch?";
  btn.addEventListener("click", function () {
    window.location.reload();
  });
}
