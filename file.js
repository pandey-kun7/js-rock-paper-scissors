document.addEventListener("DOMContentLoaded",()=>{
    let humanScore = 0;
    let computerScore = 0;
    let ties=0;

    const showHumanScore=document.querySelector(".humanScore");
    const showTieScore=document.querySelector(".tie");
    const showComputerScore=document.querySelector(".computerScore");
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
        if(humanChoice=="paper" && computerChoice=="rock"||humanChoice=="scissors" && computerChoice=="paper"||humanChoice=="rock" && computerChoice=="scissors"){
            humanScore++;
            console.log("Human wins!!!");
            if(humanScore==5 || computerScore ==5){
                humanScore=0;
                computerScore=0;
                ties=0;
                showHumanScore.textContent=humanScore;
                showComputerScore.textContent=computerScore;
                showTieScore.textContent=ties;
            } 
            showHumanScore.textContent=humanScore;
        }else if(humanChoice=="paper" && computerChoice=="scissors"||humanChoice=="scissors" && computerChoice=="rock"||humanChoice=="rock" && computerChoice=="paper"){
            computerScore++;
            console.log("Computer wins!!!");
            if(humanScore==5 || computerScore ==5){
                humanScore=0;
                computerScore=0;
                ties=0;
                showHumanScore.textContent=humanScore;
                showComputerScore.textContent=computerScore;
                showTieScore.textContent=ties;
            } 
            showComputerScore.textContent=computerScore;
        }else{
            ties++;
            showTieScore.textContent=ties;
        }
    }

});

