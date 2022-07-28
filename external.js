function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let move;

    if(randomNumber == 1){
        move = "Rock";

    }else if(randomNumber == 2){
        move = "Papper";

    }else if(randomNumber == 3){
        move = "Scissor";

    }

    return move;
}


function playerSelection(){

    let playerInput = prompt("Enter Rock,Paper or Scissor to defeat the machine");
    let capLetter = playerInput.substring(0,1);
    let rest = playerInput.substring(1);
    playerInput = capLetter.toUpperCase() + rest.toLowerCase();
    let move;

    if(playerInput.trim() == "Rock"){
        move = "Rock";
    } else if(playerInput.trim() == "Papper"){
        move = "Papper";
    } else if(playerInput.trim() == "Scissor"){
        move = "Scissor";
    }else{
        alert("Input was not valid try again");
    }

    return move;
    

    

}

console.log(getComputerChoice());
console.log(playerSelection());