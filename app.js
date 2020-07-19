// Game score variables
let playerWin = 0;
let computerWin = 0;


// Selectors
const playerOption = document.querySelector(".player");
const computerOption = document.querySelector("#computer-option");
const reset = document.querySelector("#play-again");
const winner = document.querySelector("#winner");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerScore = document.querySelector(".score__player");
const computerScore = document.querySelector(".score__computer");


// Event listeners
// Play game
playerOption.addEventListener("click", (e) => {

   if (e.srcElement.id === "rock" || e.srcElement.id === "paper" || e.srcElement.id === "scissors"){
      if (playerWin == 5 || computerWin == 5) {
         reset.style.animation = "rotation 0.5s ease-in-out";
         return;
      } else {
         removeBorder();
         playRound(e.srcElement, e.srcElement.id);
      }
   }
})

// Reset game
reset.addEventListener("click", () => {
   playerWin = 0;
   computerWin = 0;

   setScore();
   removeBorder();

   computerOption.setAttribute("style", "opacity: 0");
   winner.textContent = "Be the first to win 5 rounds";

})


// Remove border
function removeBorder() {
   rock.setAttribute("style", "border: none; border-radius: none");
   paper.setAttribute("style", "border: none; border-radius: none");
   scissors.setAttribute("style", "border: none; border-radius: none");

   playerScore.style = "border: 1px solid #333";
   computerScore.style = "border: 1px solid #333";
}


// Get computer selection
function computerPlay() {
   let gameOptions = ["rock", "paper", "scissors"];
   let computer = gameOptions[randomNumber(0,2)];

   if (computer === "rock"){
      computerOption.src = "./img/rock-right.png";
   } else if (computer === "paper"){
      computerOption.src = "./img/paper-right.png";
   } else if (computer === "scissors"){
      computerOption.src = "./img/scissors-right.png";
   }

   computerOption.setAttribute("style", "opacity: 1");
   return computer;
}


// Set the score of the game
function setScore(){
   playerScore.textContent = playerWin;
   computerScore.textContent = computerWin;
}


// Get random number from interval, min and max are inclusive
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Get winner of next round
function playRound(e, player){
   let computer = computerPlay();

   // Player wins, computer loose
   if (player == "rock" && computer == "scissors" || player == "scissors" && computer == "paper" || player == "paper" && computer == "rock") {
      playerWin++;
      setScore();
      e.setAttribute("style", "border: 1px solid green; border-radius: 50px");
   } 
   // Player loose, computer wins
   else if (computer == "rock" && player == "scissors" || computer == "scissors" && player == "paper" || computer == "paper" && player == "rock") {
      computerWin++;
      setScore();
      e.setAttribute("style", "border: 1px solid red; border-radius: 50px");
   } else if (player == computer) {
      e.setAttribute("style", "border: 1px solid #333; border-radius: 50px");
   }

   if (playerWin == 5 || computerWin == 5) {
      setWinner();
   }
}


// Play 5 games and display winner
function setWinner() {
   if(playerWin == 5) {
      winner.textContent = "You win!";
      playerScore.style = "border: 3px solid green";
   } else {
      winner.textContent = "You loose!";
      computerScore.style = "border: 3px solid red";
   }
}
