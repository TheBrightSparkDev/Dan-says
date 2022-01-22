/* declaring global variables */
var color = "";
var dont = "";
var name = "";
var stop = false;
var score = 0;
var message = "";
var timeLeft = 0;
var timeCounter = 0;
let timeout;
function playAgain(){
    score = 0;
    command();
    $("#game-zone").html(`
    <div id="game-body">
    <div id="main-menu">
    <h3>${message}</h3>
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
            <h1 id="timer"></h1>
        </div>
    </div>
    </div>
    <div id="score">
        <h2>Score: <span id="score-counter"></span></h2>
    </div>
    </div>`)
    timeCounter = 0;
    timeout = setTimeout(timerCounter,100);
    document.getElementById("red").removeEventListener("click", highscore);
    document.getElementById("green").removeEventListener("click", playAgain);
    document.getElementById("middle").addEventListener("click", middlePressed);
    document.getElementById("red").addEventListener("click", redPressed);
    document.getElementById("yellow").addEventListener("click", yellowPressed);
    document.getElementById("blue").addEventListener("click", bluePressed);
    document.getElementById("green").addEventListener("click", greenPressed);
    document.getElementById("main-menu").addEventListener("click", pause);
}
function pause(){
    stop = true;
    $("#game-body").html(`
        <div id="main-menu">
            <div id="main-menu-top-left" class="main-menu-item">
                <p>Colorblind mode</p>
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
        <div id="text-positioner" class="darken">
            <h2 class="button-text standard" id="red-text-position">RED</h2>
            <h2 class="button-text standard" id="yellow-text-position">YELLOW</h2>
            <h2 class="button-text standard" id="blue-text-position">BLUE</h2>
            <h2 class="button-text standard" id="green-text-position">GREEN</h2>
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
                <h1 id="play">Play</h1>
            </div>
        </div>
        </div>
        <div id="score">
            <h2>Score: <span id="score-counter"></span></h2>
        </div>`)
};
function unpause(){
    stop = false;
    $("#main-menu").html(`
    <div id="main-menu">
            <h3>${message}</h3>
    </div>`);
};
function highscore(){

};
function messageCaller(){
    let messages = ["Well that didn't go so well","we are into double digits!", "OOPS indeed!", "Better luck next time", "Not bad", "so close to triple digits!",
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
    if (score > 300){
    timeCounter = 20;
    } else if (score > 200){
    timeCounter = 10;   
    } else {
    timeCounter = 0;
    };
    if (timeCounter > 40){
        score += 1;
    } else if(timeCounter > 30){
        score += 2;
    } else if(timeCounter > 20){
        score += 3;
    } else if(timeCounter > 10){
        score += 4;
    } else {
        score += 5;
    };
    stop = true;
    timeout = setTimeout(timerCounter,100);
    $("#score-counter").html(`${score}`)
    command();
};
/* what happens when wrong answer is given */
function gameOver(){
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
        timeCounter = 0;
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
function timerCounter(){
    timeCounter++;
    timeout = setTimeout(updateTimer,100);   
    };
function updateTimer(){
    if (stop){
        stop = false;
    } else {
        if(timeCounter > 50){
        $("#middle").html(`
        <h1 id="timer">0</h1>`);
        gameOver();
        stop = true;
        } else if(timeCounter > 40){
            $("#middle").html(`
            <h1 id="timer">1</h1>`);
            timerCounter();
        } else if(timeCounter > 30){
            $("#middle").html(`
            <h1 id="timer">2</h1>`);
            timerCounter();
        } else if(timeCounter > 20){
            $("#middle").html(`
            <h1 id="timer">3</h1>`);
            timerCounter();
        } else if(timeCounter > 10){
            $("#middle").html(`
            <h1 id="timer">4</h1>`);
            timerCounter();
        } else if(timeCounter >= 0){
            $("#middle").html(`
            <h1 id="timer">5</h1>`);
            timerCounter();
    }
}
};
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
    timeCounter = 0;
    timerCounter();
    /* https://stackoverflow.com/questions/4402287/javascript-remove-event-listener this helped me learn how to use removeEventListener function */
    document.getElementById("middle").removeEventListener("click",playGame);
    document.getElementById("middle").addEventListener("click", middlePressed);
    document.getElementById("red").addEventListener("click", redPressed);
    document.getElementById("yellow").addEventListener("click", yellowPressed);
    document.getElementById("blue").addEventListener("click", bluePressed);
    document.getElementById("green").addEventListener("click", greenPressed);
    document.getElementById("main-menu").addEventListener("click", pause);
    $("#middle").html(`
    <h1 id="timer">5</h1>`);
};
function theme(){
    /* https://www.w3schools.com/howto/howto_js_toggle_class.asp helped me understand how to use classList.toggle */
    document.getElementById("red-text-position").classList.toggle("colorblind");
    document.getElementById("blue-text-position").classList.toggle("colorblind");
    document.getElementById("yellow-text-position").classList.toggle("colorblind");
    document.getElementById("green-text-position").classList.toggle("colorblind");
};
/* Event Listeners */
document.getElementById("middle").addEventListener("click", playGame);
document.getElementById("main-menu-top-left").addEventListener("click",theme);
document.getElementById("main-menu-top-right").addEventListener("click", function(){console.log("suggestions clicked");});
document.getElementById("main-menu-bottom-left").addEventListener("click", function(){console.log("tutorial clicked");});
document.getElementById("main-menu-bottom-right").addEventListener("click", function(){console.log("quit clicked");});
