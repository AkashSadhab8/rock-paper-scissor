let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let urScore = document.querySelector("#user-score");
let coScore = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const showWinner = (userWin) => {
  if (userWin) {
    // console.log("you won the match");
    userScore++;
    urScore.innerText = userScore;
    msg.innerHTML = "Yeah You Win! 😎";
    msg.style.backgroundColor = "green";
  } else {
    // console.log("comp won the match");
    compScore++;
    coScore.innerText = compScore;
    msg.innerText = "Ah You Lose 😫";
    msg.style.backgroundColor = "red";
  }
};
const drawGame = () => {
  //   console.log("The game was draw");
  msg.innerText = "WTF It's Draw 🤨";
  msg.style.backgroundColor = "#08131b";
};

const playGame = (userChoice) => {
  console.log(`user's choice is ${userChoice}`);
  const compChoice = genCompChoice();
  console.log(`computer's choice is ${compChoice}`);

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
