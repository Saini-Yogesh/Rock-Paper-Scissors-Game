let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara = document.querySelector(".user-score");
let computerScorePara = document.querySelector(".com-score");
let userScore = 0;
let computerScore = 0;

const winnerCombinations = [
  ["rock", "scissors", "rock"],
  ["rock", "paper", "paper"],
  ["rock", "rock", "draw"],
  ["paper", "rock", "paper"],
  ["paper", "scissors", "scissors"],
  ["paper", "paper", "draw"],
  ["scissors", "paper", "scissors"],
  ["scissors", "rock", "rock"],
  ["scissors", "scissors", "draw"],
];
// generate computer choice
const genComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};
// user Wins
const userWinner = (userChoice, computerChoice) => {
  userScore++;
  userScorePara.innerText = `${userScore}`;
  msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
  msg.style.backgroundColor = "green";
};
//computer Wins
const computerWinner = (userChoice, computerChoice) => {
  computerScore++;
  computerScorePara.innerText = `${computerScore}`;
  msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
  msg.style.backgroundColor = "red";
};
//draw Game
const DrawGame = () => {
  msg.innerText = "Game Was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};
// check winner
function checkWinner(userChoice) {
  let computerChoice = genComputerChoice();
  for (let combinatoin of winnerCombinations) {
    if (userChoice === combinatoin[0] && computerChoice === combinatoin[1]) {
      if (combinatoin[2] === userChoice) {
        userWinner(userChoice, computerChoice);
      } else if (combinatoin[2] === computerChoice) {
        computerWinner(userChoice, computerChoice);
      } else {
        DrawGame();
      }
      break;
    }
  }
}
// choose
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    checkWinner(userChoice);
  });
});
// dark mode
let darkModeButton = document.querySelector(".dark-mode-button");
let body = document.querySelector("body");
let currentMode = "light";
darkModeButton.addEventListener("click", () => {
  if (currentMode == "light") {
    currentMode = "dark";
    body.style.backgroundColor = "black";
    userScorePara.style.color = "white";
    computerScorePara.style.color = "white";
    darkModeButton.innerText = "Light Mode";
  } else {
    currentMode = "light";
    body.style.backgroundColor = "white";
    userScorePara.style.color = "black";
    computerScorePara.style.color = "black";
    darkModeButton.innerText = "Dark Mode";
  }
});
