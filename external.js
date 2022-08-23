const buttons = document.querySelectorAll("button");
const playerDiv = document.querySelector("#playerScore");
const computerDiv = document.querySelector("#computerScore");
const winner = document.querySelector("#winner");  
const outcomeDiv = document.querySelector("#outcome");

let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let move;

    if(randomNumber == 1){
        move = "Rock";

    }else if(randomNumber == 2){
        move = "Paper";

    }else if(randomNumber == 3){
        move = "Scissor";

    }

    return move;
}

buttons.forEach((button) =>{

    button.addEventListener("click", function(){
        playerSelection = button.innerText;
        playRound(playerSelection,getComputerChoice());
           
    if(playerScore === 5){
        winner.innerText = "You have won against the machine";          
        buttons.forEach(e => e.remove());
        reset();
        
    }

    if(computerScore === 5){
        winner.innerText = "Machine have destroyed you";   
        buttons.forEach(e => e.remove());
        reset();
        
    }     
    });  
    
});
    
function reset() {
    var button = document.createElement("button");
    var text = document.createTextNode("Reset game");
    button.appendChild(text);
    document.body.appendChild(button);
    button.addEventListener('click',() => location.reload());
  }



function playRound(player,computerSelection){
    let outcome;


   if(computerSelection === "Rock" && player === "Scissor"){
    outcomeDiv.innerText = "You lose!! " + computerSelection + " beats " + player;
    computerScore++;
    computerDiv.innerText = "Computer score: " + computerScore;
   }
   else if(computerSelection === "Paper" && player === "Rock"){
    outcomeDiv.innerText = "You lose!! " + computerSelection + " beats " + player;
    computerScore++;
    computerDiv.innerText = "Computer score: " + computerScore;
   }
   else if(computerSelection === "Scissor" && player === "Paper"){
    outcomeDiv.innerText = "You lose!! " + computerSelection + " beats " + player;
    computerScore++;
    computerDiv.innerText = "Computer score: " + computerScore;
   }
   else if(computerSelection === "Scissor" && player === "Rock"){
    outcomeDiv.innerText = "You win!! " + player + " beats " + computerSelection;
    playerScore++
    playerDiv.innerText ="Player score: " +  playerScore;
   }
   else if(computerSelection === "Rock" && player === "Paper"){
    outcomeDiv.innerText = "You win!! " + player + " beats " + computerSelection;
    playerScore++;
    playerDiv.innerText = "Player score: " +  playerScore;
   }
   else if(computerSelection === "Paper" && player === "Scissor"){
    outcomeDiv.innerText = "You win!! " + computerSelection + " beats " + computerSelection;
    playerScore++;
    playerDiv.innerText = "Player score: " +  playerScore;
   }
   else{
    outcomeDiv.innerText = "It is a tie";
   }

   return outcome;

}
