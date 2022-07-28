function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let move;

    if(randomNumber == 1){
        move = "rock";

    }else if(randomNumber == 2){
        move = "papper";

    }else if(randomNumber == 3){
        move = "scissor";

    }

    return move;
}

console.log(getComputerChoice());