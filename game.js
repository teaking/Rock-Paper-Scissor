console.log('game.js');
const imgs = document.querySelectorAll('.choice');

let selection = ["SCISSOR", "PAPER", "ROCK"];
let userScore = 0;
let computerScore = 0;
let userSelection;
let computerSelection;
let gameStat = document.querySelector('#gameStat');
let userSelectionDOM=document.querySelector('#userSelection');
let computerSelectionDOM=document.querySelector('#computerSelection');
let userScoreDOM=document.querySelector('#userScore');
let computerScoreDOM=document.querySelector('#computerScore');
function rockPaperScissor(choice){
    // console.log(choice.target.alt);
    userSelection = choice.target.alt;
    computerSelection = computerChoice();
    let game = playRound(userSelection, computerSelection);
    userSelectionDOM.textContent = userSelection;
    computerSelectionDOM.textContent = computerSelection;

    if(game == "won"){
	userScore++;
    }else if(game == "lost"){
	computerScore++;
    }
    userScoreDOM.textContent = userScore;
    computerScoreDOM.textContent = computerScore;


    gameStat.textContent = game; 
}

function computerChoice(){
    // output random selection of either rock, paper or scissors
    let choice = Math.floor(Math.random() * 3); // return random integer from 0 to 2
    return getSelection(choice);
}

// get scissor, paper or rock from selection array
function getSelection(eltIndex) {
    return selection[eltIndex];
}

function playRound(playerSelection, computerSelection){
    console.log("playRound");
    console.log(playerSelection, computerSelection);
    let txt = "";
    switch(playerSelection){
    case "SCISSOR":
	if(computerSelection == "ROCK"){
	    txt += "lost";
	}else if(computerSelection == "SCISSOR"){
	    txt += "draw";
	}else{
	    txt += "won";
	}
	break;
    case "PAPER":
      	if(computerSelection == "SCISSOR"){
	    txt += "lost";
	}else if(computerSelection == "PAPER"){
	    txt += "draw";
	}else{
	    txt += "won";
	}
	break;
    case "ROCK":
      	if(computerSelection == "PAPER"){
	    txt += "lost";
	}else if(computerSelection == "ROCK"){
	    txt += "draw";
	}else{
	    txt += "won";
	}
	break;
    default:
	txt += "unknown selection";
    }
    return txt;
}


// add event listener to check what user is selection
imgs.forEach((img) => {img.addEventListener('click', rockPaperScissor)});


