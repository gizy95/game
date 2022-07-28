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


function playerSelection(){

    let playerInput = prompt("Enter Rock,Papper or Scissor to defeat the machine");
    let capLetter = playerInput.substring(0,1);
    let rest = playerInput.substring(1);
    playerInput = capLetter.toUpperCase() + rest.toLowerCase();
    let move;

    if(playerInput.trim() == "Rock"){
        move = "Rock";
    } else if(playerInput.trim() == "Paper"){
        move = "Paper";
    } else if(playerInput.trim() == "Scissor"){
        move = "Scissor";
    }else{
        alert("Input was not valid try again");
    }

    return move;
      
}






function playRound(player,computerSelection){
    let outcome;


   if(computerSelection === "Rock" && player === "Scissor"){
    outcome = "You lose!! " + computerSelection + " beats " + player;
   }
   else if(computerSelection === "Paper" && player === "Rock"){
    outcome = "You lose!! " + computerSelection + " beats " + player;
   }
   else if(computerSelection === "Scissor" && player === "Paper"){
    outcome = "You lose!! " + computerSelection + " beats " + player;
   }
   else if(computerSelection === "Scissor" && player === "Rock"){
    outcome = "You win!! " + player + " beats " + computerSelection;
   }
   else if(computerSelection === "Rock" && player === "Paper"){
    outcome = "You win!! " + player + " beats " + computerSelection;
   }
   else if(computerSelection === "Paper" && player === "Scissor"){
    outcome = "You win!! " + computerSelection + " beats " + computerSelection;
   }
   else{
    outcome = "It is a tie";
   }

   return outcome;


}





function game(){

    let computerSelection = getComputerChoice();
    let player = playerSelection();

console.log(playRound(player,computerSelection));

}

game();