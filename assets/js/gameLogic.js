/* declaring global variables */
var color = "";
var dont = "";
var name = "";
var stop = false;
var score = 0;
var message = "";
var timeLeft = 0;
function playAgain(){
    score = 0;
    $("#game-zone").html(`
    <div id="game-body">
    <div id="main-menu">
        <div id="main-menu-top-left" class="main-menu-item">
            <p>Theme</p>
        </div>
        <div id="main-menu-top-right" class="main-menu-item">
            <p>Suggestions</p>
        </div>
        <div id="main-menu-bottom-left" class="main-menu-item">
            <p>Tutorial</p>
        </div>
        <div id="main-menu-bottom-right" class="main-menu-item">
            <p>Quit</p>
        </div>
    </div>
    <div id="text-positioner">
        <h2 class="button-text" id="red-text-position">RED</h2>
        <h2 class="button-text" id="yellow-text-position">YELLOW</h2>
        <h2 class="button-text" id="blue-text-position">BLUE</h2>
        <h2 class="button-text" id="green-text-position">GREEN</h2>
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
            <h1 id="timer">${timeLeft}</h1>
        </div>
    </div>
    </div>
    <div id="score">
        <h2>Score: <span id="score-counter"></span></h2>
    </div>
    </div>`)
    command();
    timeLeft = 5;
    timer();
    document.getElementById("red").removeEventListener("click", highscore);
    document.getElementById("green").removeEventListener("click", playAgain);
    document.getElementById("middle").addEventListener("click", playGame);
    document.getElementById("red").addEventListener("click", redPressed);
    document.getElementById("yellow").addEventListener("click", yellowPressed);
    document.getElementById("blue").addEventListener("click", bluePressed);
    document.getElementById("green").addEventListener("click", greenPressed);
}
function highscore(){

}
function messageCaller(){
    let messages = ["Well that didn't go so well","we are into double digits!", "OOPS indeed!", "Better luck next time", "Not bad",
    "Triple digits wooo!","you're getting good at this", "Think this is hard? it gets tougher", "You're a good listener!"," did it just get faster?","Have you been practicing?",
    "It was literally just about to get harder!", "Wow maximum difficulty reached", "Didn't think anyone would make it this far","Damn you exceeded my expectations completely",
    "I almost didnt make a message for this score", "you beat the game well done" ]
    if (score < 10){
        message = messages[0];
    } else if (score < 15){
        message = messages[1]
    } else if (score < 30){
        message = messages[2]
    } else if (score < 50){
        message = messages[3]
    } else if (score < 75){
        message = messages[4]
    } else if (score < 100){
        message = messages[5]
    } else if (score < 120){
        message = messages[6]
    } else if (score < 150){
        message = messages[7]
    } else if (score < 200){
        message = messages[8]
    } else if (score < 250){
        message = messages[9]
    } else if (score < 280){
        message = messages[10]
    } else if (score < 300){
        message = messages[11]
    } else if (score < 350){
        message = messages[12]
    } else if (score < 400){
        message = messages[13]
    } else if (score < 450){
        message = messages[14]
    } else if (score < 500){
        message = messages[15]
    } else {
        message = messages[16]
    }    
}
/* what happens when correct answer is given */
function correct(){
    console.log("correct");
    if (score > 300){
    timeLeft = 5;
    } else if (score > 200){
    timeLeft = 4;   
    } else {
    timeLeft = 3;
    }
    score += timeLeft;
    $("#score-counter").html(`${score}`)
    command();
};
/* what happens when wrong answer is given */
function gameOver(){
    console.log("gameOver");
    messageCaller();
    stop = true;
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
    </div>
    <div id="score">
        <h2>Score: <span id="score-counter">${score}</span></h2>
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
};
/* timer functions */
function updateTimer(){
    if (stop){
        console.log("timer stop");
        stop = false;
    } else {
    console.log("timeLeft = " + timeLeft);
        $("#middle").html(`
        <h1 id="timer">${timeLeft}</h1>`);
        timeLeft--;
        /* https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak this site was a massive help here */
        setTimeout(function(){timer();},1000);
    }
};
function timer(){
    if (stop){
        console.log("timer stop");
        stop = false;
    } else if (timeLeft===0){
        $("#middle").html(`
        <h1 id="timer">${timeLeft}</h1>`);
        gameOver();
    } else {
        updateTimer();
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
    timeLeft = 5;
    timer();
    /* https://stackoverflow.com/questions/4402287/javascript-remove-event-listener this helped me learn how to use removeEventListener function */
    document.getElementById("middle").removeEventListener("click",playGame);
    document.getElementById("middle").addEventListener("click", middlePressed);
    document.getElementById("red").addEventListener("click", redPressed);
    document.getElementById("yellow").addEventListener("click", yellowPressed);
    document.getElementById("blue").addEventListener("click", bluePressed);
    document.getElementById("green").addEventListener("click", greenPressed);
    $("#middle").html`
    <h1 id="timer">5</h1>`;
};
/* Event Listeners */
document.getElementById("middle").addEventListener("click", playGame);
document.getElementById("main-menu-top-left").addEventListener("click", function(){console.log("theme clicked");});
document.getElementById("main-menu-top-right").addEventListener("click", function(){console.log("suggestions clicked");});
document.getElementById("main-menu-bottom-left").addEventListener("click", function(){console.log("tutorial clicked");});
document.getElementById("main-menu-bottom-right").addEventListener("click", function(){console.log("quit clicked");});
