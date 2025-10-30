let yourScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");

const drawGame = () => {
    msg.innerText="Game was a Draw.Play Again!"
    msg.style.backgroundColor = "#FFA630";
}

const showWinner = (userWin,userChoice,aiChoice) => {
    if(userWin) {
        yourScore++
        userScorePara.innerText = yourScore;
        msg.innerText=`You WON!!! ${userChoice} beats ${aiChoice}.Wanna Play Again?"`;
        msg.style.backgroundColor = "green";
    } else {
        aiScore++
        aiScorePara.innerText = aiScore;
        msg.innerText=`You Lost :( ${aiChoice} beats ${userChoice}.Play Again?`;
        msg.style.backgroundColor = "red";
    }
}

const ranAiChoice = () => {
    const items = ["rock","paper","scissor"];
    const random = Math.floor(Math.random()*3);
    return items[random]; 
}
    
    // Since Math.floor(Math.random()*3) will give a value from "0-2",So [random] will be [0-2],suppose random is 1,therefore [random]=[1] that is the 2nd index and "paper" is in the 2nd index to it will print "paper".

const playGame = (userChoice) => {
    const aiChoice = ranAiChoice();

if (userChoice === aiChoice) {
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock") {
        userWin = aiChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        userWin = aiChoice === "scissor" ? false : true;
    } else {
        userWin = aiChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,aiChoice);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
})