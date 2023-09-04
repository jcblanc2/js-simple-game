let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loses: 0,
    ties: 0
};


// generate number between [min, max]
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// reset the score
function reset() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
}

// save the score in local storage
function saveScore(score) {
    localStorage.setItem("score", score);
}


function playGame(playeMove){
    // generate number between [1, 3]	
    computerChoice = getRandom(1, 3) == 1 ? "rock" : getRandom(1, 3) == 2 ? "paper" : "scissors";
    let result = ''

    // check state
    switch (playeMove) {
        case "rock":
          if (computerChoice === "scissors") {
            result = "You win.";
          } else if (computerChoice === "paper") {
            result = "You lose.";
          } else {
            result = "Tie.";
          }
          break;
      
        case "paper":
          if (computerChoice === "rock") {
            result = "You win.";
          } else if (computerChoice === "scissors") {
            result = "You lose.";
          } else {
            result = "Tie.";
          }
          break;
      
        case "scissors":
          if (computerChoice === "paper") {
            result = "You win.";
          } else if (computerChoice === "rock") {
            result = "You lose.";
          } else {
            result = "Tie.";
          }
          break;
      
        default:
          result = "Invalid player move.";
    }

    if (result === "Tie.") {
        score.ties++;
    } else if (result === "You lose.") {
        score.loses++;
    } else {
        score.wins++;
    }

    // save the score in local storage
    const jsonString = JSON.stringify(score);
    saveScore(jsonString);
    
    // display message
    alert(`You picked ${playeMove} and Computer picked ${computerChoice}.
    \n${result}
    \nWins: ${score.wins}  -  Loses: ${score.loses}  -  Ties: ${score.ties}`)
}
