# odin-rockPaperScissors
The Odin Project - Project 3

## Planning
To do
- getComputerChoice: chooses computer rock/paper/scissors based on random #
  - input: none
  - output: computerSelection (Rock/Paper/Scissor or 0/1/2)
- playRound: runs a single round of game
  - input: playerSelection, computerSelection (case-insensitive)
  - output: conditional ("You Lose! cS beats pS") or ("You Win! pS beats cS")
- game: plays a 5 round game and keeps track of score
  - input: none (handled by playRound)
  - output: none (console.log's results and score)
  - print: score and round results (playRound output)

## Pseudocode
global:
- Create playerSelection and computerSelection variables
- Welcome the user to the game (alert)
- Ask for user input (prompt)
  - parseInput: check that value is rock, paper, or scissors (case insensitive)
- Save input in playerSelection (pS = prompt)
- Call getComputerChoice and save result in computerSelection (cS = getCC())
- Call playRound with playerSelection and computerSelection
- Send the result to the console
- V2: CALL game instead of the above

getComputerChoice:
- Pick a random number in [0,2] (3 choices) (Math.random() + Math.floor() + * 3)
- Set string based on number (ternary or ||)
  - 0 = "Rock"
  - 1 = "Paper"
  - 2 = "Scissors"
- Return the string

playRound:
- if pS and cS are the same, it's tie - return tie string
- if pS is rock and cS is scissors, pS wins - return win string
- else if pS is paper and cS is rock, pS wins - return win string
- else if pS is scissors and cS is paper, pS wins - return win string
- else pS loses - return lose string

game:
- does the same thing as global 5 times (loop)
- update scores
- print scores (in addition to round results)
- comment out/ move global code to game
- offer to end game if player is going to lose?

# Side Notes
- I would have called getComputerChoice, getComputerSelection or changed computerSelection, computerChoice (and playerSelection, playerChoice). Obviously the former is simpler.