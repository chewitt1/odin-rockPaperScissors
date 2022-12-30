//Trick from: https://stackoverflow.com/questions/2140627/how-to-do-case-insensitive-string-comparison
//cS = computerSelection, pS = playerSelection

let playerSelection, computerSelection;
let inputTries = 0, rounds = 1;
let playerScore = 0, computerScore = 0;
let cancelled = false;
alert("Welcome to the Odin Rock, Paper, Scissors Console Game\nOpen the console (F12 > Console tab) to see your scores!")
game();


//Check input for correctness
function checkInput(pS){
  if(pS != null){
    let bigPS;
    if(pS != ""){bigPS = pS.toUpperCase()}
    if(inputTries >= 2){
      alert("You have used all your attempts, please start a new game.")
    }
    while(inputTries < 2){
      if((bigPS == "ROCK") || (bigPS == "PAPER") || (bigPS ==  "SCISSORS")){
        return bigPS;
      }
      else{
        inputTries += 1;
        return checkInput(prompt("\"" + pS + "\" is not an option.\nPlease select Rock, Paper, Scissors\nAttempts Left: " + (3-inputTries)))
      }
    }
  }
  else{
    alert("Game Cancelled.\nGoodbye!")
    cancelled = true;
  }
}

// get random Comp Choice
function getComputerChoice(){
  let num = Math.floor(Math.random() * 3);
  return (num == 0) ? "ROCK" : (num == 1) ? "PAPER" : "SCISSORS";
}

// run one round of the game
function playRound(pS, cS){
  if (pS == cS){
    return ("It's a Tie! " + pS + " and " + cS + " are the same")
  }
  else if((pS == "ROCK" && cS == "SCISSORS") || (pS == "PAPER" && cS == "ROCK") || (pS == "SCISSORS" && cS == "PAPER")){
    playerScore += 1;
    return ("You Win! " + pS + " beats " + cS);
  }
  computerScore += 1;
  return ("You Lose! " + cS + " beats " + pS);
}

// run five rounds of the game and keep score
function game(){
  while(rounds < 6){
    if (cancelled){break}
    else if (inputTries >= 2 ){break}
    else{
      inputTries = 0;
      playerSelection = checkInput(prompt("Round #" + rounds +"\nMake a Selection: Rock, Paper, or Scissors"));
    
      if(playerSelection != null && playerSelection != undefined && playerSelection != ""){
      computerSelection = getComputerChoice();
      let winStr = playRound(playerSelection, computerSelection);
      let scoreStr = "Player: " + playerScore + " | Computer: " + computerScore + "\n";
      console.log(scoreStr + winStr);
    }
    
    }
    rounds += 1;
  }
  alert("Game Finished")
  console.log((playerScore > computerScore) ? "You won the game!! Great job!" : 
              (playerScore < computerScore) ? "You lost the game.. better luck next time" : 
              "It's a tie- but I mean, a wins a win right?");
}