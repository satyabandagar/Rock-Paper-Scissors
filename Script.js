const backroundColorChnage = document.querySelector(".parent");

function backColor() {
  backroundColorChnage.classList.toggle("parent");
}

let computerCount = 0;
let user = 0;
const computer = ["rock", "paper", "scissors"];

const score = document.getElementById("score");

const userChoice = document.getElementById("userChoice");
const computerCh = document.getElementById("computerCh");
function playGame(userInput) {
  let random = Math.floor(Math.random() * 3);

  let computerchoice = computer[random];

  console.log("computer choice", computerchoice);
  
  computerCh.innerText = `Computer Choice: ${computerchoice}`;

  console.log("User Choice", userInput);
  userChoice.innerText = `User Choice: ${userInput}`;

  if (userInput === computerchoice) {
    score.innerText = `Drawp`;
  } else if (
    (userInput === "rock" && computerchoice === "scissors") ||
    (userInput === "scissors" && computerchoice === "paper") ||
    (userInput === "paper" && computerchoice === "rock")
  ) {
    user += 1;
    score.innerText = `User wine ${user}`;
  } else {
    computerCount += 1;
    score.innerText = `Computer wine ${computerCount}`;
  }
}
