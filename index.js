/* --- VARIABLES --- */
const choices = ["✊", "🤚", "✌️"];
let player1Points = 0;
const player1 = document.getElementById("player-1");
const player1Score = document.getElementById("player1Score");

/* 1a. */
let player2Points = 0;
const player2 = document.getElementById("player-2");
const player2Score = document.getElementById("player2Score");

/* 1b. */
const resultArea = document.getElementById("result-area");

/* 1c. */
const playBtn = document.getElementById("play-btn");

/* This will help check your results */
console.log(player2Score, player1Score);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

const generateChoice = () => {
  let r = Math.floor(Math.random() * 3);
  return choices[r];
};

const insertHTML = (choice1, choice2, result) => {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  resultArea.innerHTML = result;
};

const decideWinner = (a, b) => {
  if ((a === "✊" && b === "✊") || (a === "🤚" && b === "🤚") || (a === "✌️" && b === "✌️")) {
    /* 3a. */ return "Ah bummer, it's a draw!";
  } else if ((a === "✊" && b === "✌️") || (a === "🤚" && b === "✊") || (a === "✌️" && b === "🤚")) {
    player1Points += 1;
    player1Score.insertAdjacentHTML("beforeend", "<div class='point'></div>");
    return "Player 1 wins! Woohoo!";
  } else {
    player2Points += 1;
    player2Score.insertAdjacentHTML("beforeend", "<div class='point'></div>");
    /* 3c. */ return "Player 2 wins! Hurrah!";
  }
};

const reset = () => {
  player1Points = 0;
  player2Points = 0;
  player1Score.innerHTML = "";
  player2Score.innerHTML = "";
};

const checkWinner = () => {
  if (player1Points === 3) {
    alert("Player 1 Wins!");
    reset();
  }

  if (player2Points === 3) {
    alert("Player 2 Wins!");
    reset();
  }
};

const play = () => {
  let choice1 = generateChoice();
  let choice2 = generateChoice();
  let result = decideWinner(choice1, choice2);

  insertHTML(choice1, choice2, result);

  checkWinner();
};

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

/* 2. */
playBtn.addEventListener("click", play);

/* ------------------------------- */
