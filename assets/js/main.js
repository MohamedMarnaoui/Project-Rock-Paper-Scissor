let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreTafel_div = document.querySelector(".scoreTafel");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const scissor_div = document.getElementById("scissor");
const paper_div = document.getElementById("paper");

// converting function
function convertToFullWords(letter) {
    if (letter === "rock") return "Rock"
    if (letter === "paper") return "Paper"
    return "Scissor"
}



//Function for win
function win(playerChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToFullWords(playerChoice)} ${smallUserWord}  beats ${convertToFullWords(computerChoice)} ${smallCompWord}.You win!`;
    document.getElementById(playerChoice).classList.add("greenWins"); //Adding color win
    setTimeout(() => document.getElementById(playerChoice).classList.remove("greenWins"), 1000)
}

//Function for lose
function lose(playerChoice, computerChoice) {
    console.log("VERLOREN") //Später wegmachen..
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToFullWords(playerChoice)} ${smallUserWord}  loses to ${convertToFullWords(computerChoice)} ${smallCompWord}.You lost!`;
    document.getElementById(playerChoice).classList.add("redLoose");
    setTimeout(() => document.getElementById(playerChoice).classList.remove("redLoose"), 1000)
}

//Function for draw score unentschieden
function unentschieden(playerChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    result_p.innerHTML = `${convertToFullWords(playerChoice)} ${smallUserWord} equals ${convertToFullWords(computerChoice)} ${smallCompWord}.Draw!`;
    document.getElementById(playerChoice).classList.add("grayDraw");
    setTimeout(() => document.getElementById(playerChoice).classList.remove("grayDraw"), 1000)
}

//Creating function for player`s choice
function game(playerChoice) {
    const computerChoice = makeComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(playerChoice, computerChoice)
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(playerChoice, computerChoice)
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            unentschieden(playerChoice, computerChoice)
            break;
    }

}

game("erstmalIrgendWas")


//Adding an Event to rock
/*---------------------------------------------------------*/
function central() {
    rock_div.addEventListener('click', function () {
        game("rock")
        console.log("Du hast auf Stein geklickt.")

    })


    //Adding an Event through click to scissor
    scissor_div.addEventListener('click', function () {
        game("scissor")
        console.log("Du hast nun die Schere gewählt.")
    })

    //Addding an Event through click to paper
    paper_div.addEventListener('click', function () {
        game("paper")
        console.log("Du hast dich für Papier entschieden. ")
    })
}

central();
/*------------------------------------------------------------------*/
// Creating function for Computer choice

function makeComputerChoice() {
    const choices = ["rock", "scissor", "paper"];
    const randomMath = Math.floor(Math.random() * 3)
    return choices[randomMath];
}

//restart result 
function restart() {
    let userScore = 0;
    let computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}



