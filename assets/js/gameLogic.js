/* declaring global variables */
var color = "";
var dont = "";
var name = "";
var stop = false;
var score = 0;
var points = 0;
function playAgain(){
    
}
function highscore(){

}
function message(){
    let messages = ["Well that didn't go so well","we are into double digits!", "OOPS indeed!", "Better luck next time", "Not bad",
    "Triple digits wooo!","you're getting good at this", "Think this is hard? it gets tougher", "You're a good listener!"," did it just get faster?","Have you been practicing?",
    "It was literally just about to get harder!", "Wow maximum difficulty reached", "Didn't think anyone would make it this far","Damn you exceeded my expectations completely",
    "I almost didnt make a message for this score", "you beat the game well done" ]
    if (score < 10){
        let message = messages[0];
    } else if (score < 15){
        let message = messages[1]
    } else if (score < 30){
        let message = messages[2]
    } else if (score < 50){
        let message = messages[3]
    } else if (score < 75){
        let message = messages[4]
    } else if (score < 100){
        let message = messages[5]
    } else if (score < 120){
        let message = messages[6]
    } else if (score < 150){
        let message = messages[7]
    } else if (score < 200){
        let message = messages[8]
    } else if (score < 250){
        let message = messages[9]
    } else if (score < 280){
        let message = messages[10]
    } else if (score < 300){
        let message = messages[11]
    } else if (score < 350){
        let message = messages[12]
    } else if (score < 400){
        let message = messages[13]
    } else if (score < 450){
        let message = messages[14]
    } else if (score < 500){
        let message = messages[15]
    } else 
        let message = messages[16]
    } 
    
}
function addScore(){
    $("#score-counter").html(`${score}`)
}
/* what happens when correct answer is given */
function correct(){
    console.log("correct");
    if (score > 300){
    timer(3);
    } else if (score > 200){
    timer(4);    
    } else {
    timer(5);
    }
    score += points;
    addScore();
    command();
};
/* what happens when wrong answer is given */
function gameOver(){
    console.log("gameOver");
    message();
    $("#game-zone").html(`
    <div id="main-menu">
            <h3>${message}</h3>
        </div>
        <div id="text-positioner">
        <h2 class="button-text" id="highscore-text-position">Highscore</h2>
        <h2 class="button-text" id="yellow-text-position"></h2>
        <h2 class="button-text" id="blue-text-position"></h2>
        <h2 class="button-text" id="play-again-text-position">Play again</h2>
    <div id="main-game">
        <div id="red" class="triangle-buttons">
        </div>
        <div id="yellow" class="triangle-buttons">
        </div>
        <div id="blue" class="triangle-buttons">
        </div>
        <div id="green" class="triangle-buttons">
        </div>
        <div id="middle">
            <h1 id="play">OOPS</h1>
        </div>
    </div>
        <div id="score">
            <h2>Score: <span id="score-counter"></span></h2>
        </div>`);
        document.getElementById("middle").removeEventListener("click",middlePressed);
        document.getElementById("red").removeEventListener("click",redPressed);
        document.getElementById("yellow").removeEventListener("click",yellowPressed);
        document.getElementById("blue").removeEventListener("click",bluePressed);
        document.getElementById("green").removeEventListener("click",greenPressed);
        document.getElementById("red").addEventListener("click", highscore);
        document.getElementById("green").addEventListener("click", playAgain);

};
/* Tells user what to do */
function command(){
    let colorPicker = Math.floor((Math.random() * 100) + 1);
    if (colorPicker <= 25){
        color = "red";
    } else if (colorPicker <= 50) {
        color = "yellow";
    }else if (colorPicker <= 75){
        color = "blue";
    } else{
        color = "green";
    };
    let dontPicker = Math.floor((Math.random() * 10) + 1);
    if (dontPicker <= 5){
        dont = "do";
    } else {
        dont = "dont";   
    };
    let namePicker = Math.floor((Math.random() * 10) + 1);
    if (namePicker <= 5){
        name = "Dan";

    } else {
        name = "Simon";
    };
    $("#main-menu").html(`
    <h3 id="command" aria-live="polite">${name} says ${dont} press ${color}</h3>`)
};
/* checks if user gave correct answer */
function checkAnswer(choice){
    console.log("checkAnswer called");
    console.log(choice);
    if (name === "Simon"){
        if (choice === "middle"){
            correct();
        } else {
            gameOver();
        }        
    } else if (dont === "dont"){
        if (choice === "middle"){
        correct();
        } else {
            gameOver();
        }
    } else if (color === choice){
        correct();
    } else {
        gameOver();
    }
    stop = true;
};
/* timer functions */
function updateTimer(time){
    if (stop){
        console.log("timer stop");
        stop = false;
    } else {
    console.log("timeLeft = " + time);
        $("#middle").html(`
        <h1 id="timer">${time}</h1>`);
        time--;
        points = time;
        /* https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak this site was a massive help here */
        setTimeout(function(){timer(time)},1000);
    }
};
function timer(timeLeft){
    if (timeLeft===0){
        $("#middle").html(`
        <h1 id="timer">${timeLeft}</h1>`);
        checkAnswer("middle");
    } else {
        updateTimer(timeLeft);
    }
}
/* game button presses */
function redPressed(){
    checkAnswer("red");
};
function yellowPressed(){
    checkAnswer("yellow");
};
function bluePressed(){
    checkAnswer("blue");
};
function greenPressed(){
    checkAnswer("green");
};
function middlePressed(){
    checkAnswer("middle");
};
/* starts the game */
function playGame(){
    command();
    timer(5);
    /* https://stackoverflow.com/questions/4402287/javascript-remove-event-listener this helped me learn how to use removeEventListener function */
    document.getElementById("middle").removeEventListener("click",playGame);
    document.getElementById("middle").addEventListener("click", middlePressed);
    return $("#middle").html`
    <h1 id="timer">5</h1>`;
};
/* Event Listeners */
document.getElementById("middle").addEventListener("click", playGame);
document.getElementById("red").addEventListener("click", redPressed);
document.getElementById("yellow").addEventListener("click", yellowPressed);
document.getElementById("blue").addEventListener("click", bluePressed);
document.getElementById("green").addEventListener("click", greenPressed);
document.getElementById("main-menu-top-left").addEventListener("click", function(){console.log("theme clicked");});
document.getElementById("main-menu-top-right").addEventListener("click", function(){console.log("suggestions clicked");});
document.getElementById("main-menu-bottom-left").addEventListener("click", function(){console.log("tutorial clicked");});
document.getElementById("main-menu-bottom-right").addEventListener("click", function(){console.log("quit clicked");});
