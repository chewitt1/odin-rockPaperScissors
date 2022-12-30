//Trick from: https://stackoverflow.com/questions/2140627/how-to-do-case-insensitive-string-comparison

// global:
// Create playerSelection and computerSelection variables
let playerSelection, computerSelection;
let checks = 0;
// Welcome the user to the game (alert)
alert("Welcome to the Odin Rock, Paper, Scissors Console Game\nOpen the console (F12 > Console tab) to see your scores!")
// Ask for user input (prompt)
// parseInput: check that value is rock, paper, or scissors (case insensitive)
// Save input in playerSelection (pS = prompt)
playerSelection = checkInput(prompt("Make a Selection: Rock, Paper, or Scissors"));
// -- Only move on if max checks not reached
if (checks < 3){
  if(playerSelection != null && playerSelection != undefined && playerSelection != ""){
    // Call getComputerChoice and save result in computerSelection (cS = getCC())
    computerSelection = getComputerChoice();
    // Call playRound with playerSelection and computerSelection
    // Send the result to the console
    console.log(playRound(playerSelection, computerSelection));
  }
  
}


//Check/Parse the input
function checkInput(pS){
  // -- if(pS == null){console.log("null")}
  if(pS != null){
    // -- if(pS == ""){console.log("empty")}
    let bigPS;
    if(pS != ""){bigPS = pS.toUpperCase()}
    if(checks >= 2){
      alert("You have used all your attempts, please start a new game.")
    }
    while(checks < 2){
      if((bigPS == "ROCK") || (bigPS == "PAPER") || (bigPS ==  "SCISSORS")){
        return bigPS;
      }
      else{
        checks += 1;
        return checkInput(prompt("\"" + pS + "\" is not an option.\nPlease select Rock, Paper, Scissors\nAttempts Left: " + (3-checks)))
      }
    }
  }
  else{
    alert("Game Cancelled.\nGoodbye!")
  }
}


// getComputerChoice:
function getComputerChoice(){
  // Pick a random number in [0,2] (3 choices) (Math.random() + Math.floor + * 3)
  let num = Math.floor(Math.random() * 3);
  // Set string based on number (ternary or ||)
  // Return the string
  // -- console.log(num)
  return (num == 0) ? "ROCK" : (num == 1) ? "PAPER" : "SCISSORS";
}
//playRound:
/*
  - if pS and cS are the same, it's tie - return tie string
  - if pS is rock and cS is scissors, pS wins - return win string
  - else if pS is paper and cS is rock, pS wins - return win string
  - else if pS is scissors and cS is paper, pS wins - return win string
  - else pS loses - return lose string
*/

function playRound(pS, cS){
  if (pS == cS){
    return ("It's a Tie! " + pS + " and " + cS + " are the same")
  }
  else if((pS == "ROCK" && cS == "SCISSORS") || (pS == "PAPER" && cS == "ROCK") || (pS == "SCISSORS" && cS == "PAPER")){
    return ("You Win! " + pS + " beats " + cS);
  }
  return ("You Lose! " + cS + " beats " + pS);
}
