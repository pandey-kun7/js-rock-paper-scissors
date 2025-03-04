let humanScore = 0;
let computerScore = 0;
let ties=0;
function getComputerChoice(){
    let computerChoice= (Math.random() * 100) + 1;
    if (computerChoice<=33){
        return "paper";
    }else if(computerChoice<=66 && computerChoice>33){
        return "rock";
    }else{
        return "scissors";
    }
}
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice punk","scissors");
    humanChoice=humanChoice.toLowerCase()
    return humanChoice;
}
let playgame=parseInt(prompt("Enter number of rounds to be played",5));

function playRound(humanChoice, computerChoice) {
    if(humanChoice=="paper" && computerChoice=="rock"){
        humanScore++;
        return "Human wins!!! Paper beats rock";
    }else if(humanChoice=="paper" && computerChoice=="scissors"){
        computerScore++;
        return "Computer wins!!! Scissors beats paper";
    }else if(humanChoice=="scissors" && computerChoice=="rock"){
        humanScore++;
        return "Computer wins!!! Rock beats scissors";
    }else if(humanChoice=="scissors" && computerChoice=="paper"){
        humanScore++;   
        return "Human wins!!! Scissors beats paper";
    }else if(humanChoice=="rock" && computerChoice=="paper"){
        computerScore++;
        return "Computer wins!!! Paper beats rock"
    }else if(humanChoice=="rock" && computerChoice=="scissors"){
        humanScore++;
        return "Human wins!!! Rock beats scissors";
    }else{
        ties++;
    }
  }
  while(playgame!=0){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    playgame--;
}