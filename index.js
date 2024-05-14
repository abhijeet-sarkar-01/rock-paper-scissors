// const rock_btn = document.querySelector(".rock")
// const paper_btn = document.querySelector(".paper")
// const scissor_btn = document.querySelector(".scissor")
const both_disp_img = document.querySelector(".display-img");
const player_display_img = document.querySelector(".player-display-img");
const computer_display_img = document.querySelector(".computer-display-img");

const wins_disp = document.querySelector(".wins");
const losses_disp = document.querySelector(".losses");
const ties_disp = document.querySelector(".ties");


function handleClick(name){
    player_display_img.classList.remove("shake-ani");
    computer_display_img.classList.remove("shake-ani");
    
    player_display_img.src = `images/${name}.jpg`
    let playerMove;
    switch (name) {
        case "rock":
            playerMove = 1;
            break;
        case "paper":
            playerMove = 2;
            break;
        case "scissor":
            playerMove = 3;
            break;
        default:
            break;
    }

    let computerMove = randomComputerMove();

    // Check winners and update results
    checkWinner(playerMove, computerMove);

}

// Generate random move for the computer and also change the move image
function randomComputerMove(){
    const move = Math.ceil(Math.random()*3);
    let move_name;
    switch (move) {
        case 1:
            move_name = "rock";
            break;
        case 2:
            move_name = "paper";
            break;
        case 3:
            move_name = "scissor";
            break;
        default:
            break;
    }
    computer_display_img.src = `images/${move_name}.jpg`;
    return move;
}
// 1 - Rock
// 2 - Paper
// 3 - Scissor

let wins = 0, losses = 0, ties = 0;

function checkWinner(playerMove, computerMove){
    if (playerMove == computerMove) ties++;
    else if ((playerMove == 1 && computerMove == 3) || (playerMove == 3 && computerMove == 2) || (playerMove == 2 && computerMove == 1))
    {
        wins++;
    }else{
        losses++;
    }
    wins_disp.innerHTML = wins;
    losses_disp.innerHTML = losses;
    ties_disp.innerHTML = ties;
}