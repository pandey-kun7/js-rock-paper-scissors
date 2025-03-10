document.addEventListener("DOMContentLoaded",()=>{
    let humanScore = 0;
    let computerScore = 0;
    let ties=0;

    const showHumanScore=document.querySelector(".humanScore");
    const scissors=document.querySelector(".sci");
    const rock=document.querySelector(".rock");
    const paper=document.querySelector(".paper");

    scissors.addEventListener('click',()=>{
        humanChoice="scissors";
        playRound(humanChoice,getComputerChoice());
    });
    rock.addEventListener("click",()=>{
        humanChoice="rock";
        playRound(humanChoice,getComputerChoice());
    });
    paper.addEventListener("click",()=>{
        humanChoice="paper";
        playRound(humanChoice,getComputerChoice());
    });

    let humanChoice="";

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

    function playRound(humanChoice, computerChoice) {
        if(humanChoice=="paper" && computerChoice=="rock"){
            humanScore++;
            showHumanScore.textContent=humanScore;
            console.log("Human wins!!! Paper beats rock");
        }else if(humanChoice=="paper" && computerChoice=="scissors"){
            computerScore++;
            console.log("Computer wins!!! Scissors beats paper");
        }else if(humanChoice=="scissors" && computerChoice=="rock"){
            humanScore++;
            showHumanScore.textContent=humanScore;
            console.log("Computer wins!!! Rock beats scissors");
        }else if(humanChoice=="scissors" && computerChoice=="paper"){
            humanScore++;   
            showHumanScore.textContent=humanScore;
            console.log("Human wins!!! Scissors beats paper");
        }else if(humanChoice=="rock" && computerChoice=="paper"){
            computerScore++;
            console.log("Computer wins!!! Paper beats rock");
        }else if(humanChoice=="rock" && computerChoice=="scissors"){
            humanScore++;
            showHumanScore.textContent=humanScore;
            console.log("Human wins!!! Rock beats scissors");
        }else{
            ties++;
        }
    } 
});

