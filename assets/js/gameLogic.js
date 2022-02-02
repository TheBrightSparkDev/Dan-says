/* declaring global variables */
var color = "";
var dont = "";
var name = "";
var stop = false;
var score = 0;
var message = "";
var timeCounter = 0;
let timeout;
var command;
var round = 1;
var tempColorBlind = "";
var colorBlind = "standard";
let highscores = [
    {name:"Rhi",score:1021},
    {name:"Ashley",score:989},
    {name:"Dean",score:737},
    {name:"Barry",score:633},
    {name:"Giles",score:493},
    {name:"Emma",score:472},
    {name:"Rachel",score:470},
    {name:"Megan",score:395},
    {name:"Sharron",score:368},
    {name:"Niall",score:360},
    {name:"Kera",score:261},
    {name:"Claire",score:198},
    {name:"Josh",score:82}
];
/* tutorial functions */
/* displays the game */
function displayGame(){
    $("#game-zone").html(`
    <div id="game-body">
    <div id="main-menu">
    <h3 id="command" aria-live="polite">${name} says ${dont} press ${color}</h3>
    </div>
    <div id="text-positioner">
        <h2 class="button-text ${colorBlind}" id="red-text-position">RED</h2>
        <h2 class="button-text ${colorBlind}" id="yellow-text-position">YELLOW</h2>
        <h2 class="button-text ${colorBlind}" id="blue-text-position">BLUE</h2>
        <h2 class="button-text ${colorBlind}" id="green-text-position">GREEN</h2>
        <div id="pause" class="invisible">
                <h1 id="unpause">Continue?</h1>
        </div>
        <div id="tutorial-bg"></div>
        <div id="correct" class="invisible">
        </div>
    <div id="main-game">
        <div id="red" class="triangle-buttons">
        </div>
        <div id="yellow" class="triangle-buttons">
        </div>
        <div id="blue" class="triangle-buttons">
        </div>
        <div id="green" class="triangle-buttons">
        </div>
        <div id="middle" class="display-order">
            <h1 id="timer">5</h1>
        </div>
    </div>
    <div id="score">
        <h2>Score: <span id="score-counter"></span></h2>
    </div>
    </div>`);
    document.getElementById("red").removeEventListener("click", highscorers);
    document.getElementById("green").removeEventListener("click", playAgain);
    document.getElementById("middle").addEventListener("click", middlePressed);
    document.getElementById("red").addEventListener("click", redPressed);
    document.getElementById("yellow").addEventListener("click", yellowPressed);
    document.getElementById("blue").addEventListener("click", bluePressed);
    document.getElementById("green").addEventListener("click", greenPressed);
}
/* displays the message for the tutorial */
function tips(round){
    if (round === 1){
        $("#tutorial-bg").html(`<p> If Dan says something do it! </p>`);
    } else if (round === 2){
        $("#tutorial-bg").html(`<p> If Simon says something press the middle button to ignore him </p>`);
    } else if (round === 3){
        $("#tutorial-bg").html(`<p> If Dan says dont do something press the middle button to skip </p>`);
    } else if (round === 4){
        $("#tutorial-bg").html(`
        <p>Pressing the above message pauses the game</p>
        <p>The quicker you are the more score you get per correct answer</p>
        <p>The further along you get the less time you get and the less points per correct answer!</p>
        <p>Try and beat the highest score on the leaderboard!</p>
        <p>Press the message (pause the game) to go back to main menu</p>`);
    }
}
/* only displays the correct answer */
function highlighter(round){
    if (round === 1){
        document.getElementById("middle").classList.toggle("hide");
        document.getElementById("red").classList.toggle("hide");
        document.getElementById("blue").classList.toggle("hide");
        document.getElementById("yellow").classList.toggle("hide");
    } else if (round === 2){
        document.getElementById("green").classList.toggle("hide");
        setTimeout(() =>{
            document.getElementById("middle").classList.toggle("hide");
        },400);
        document.getElementById("middle").removeEventListener("click",tutorial);
    } else if (round === 3){
    } else if (round === 4){
        document.getElementById("middle").classList.toggle("hide");
        document.getElementById("red").classList.toggle("hide");
        document.getElementById("blue").classList.toggle("hide");
        document.getElementById("yellow").classList.toggle("hide");
        document.getElementById("green").classList.toggle("hide");
    } else if (round === 5){
        document.getElementById("middle").classList.toggle("hide");
        document.getElementById("red").classList.toggle("hide");
        document.getElementById("blue").classList.toggle("hide");
        document.getElementById("yellow").classList.toggle("hide");
        document.getElementById("green").classList.toggle("hide");
    }
}
/* set the page to default */
function reload(){
    $("#game-zone").html(`<div id="game-body">
    <div id="main-menu">
        <div id="main-menu-top-left" class="main-menu-item">
            <p>Colorblind mode</p>
        </div>
        <div id="main-menu-top-right" class="main-menu-item">
            <a href="suggestions.html"><p>Suggestions</p></a>
        </div>
        <div id="main-menu-bottom-left" class="main-menu-item">
            <p>Tutorial</p>
        </div>
        <div id="main-menu-bottom-right" class="main-menu-item" onclick="self.close()">
            <p>Quit</p>
        </div>
    </div>
    <div id="text-positioner">
        <h2 class="button-text ${colorBlind}" id="red-text-position">RED</h2>
        <h2 class="button-text ${colorBlind}" id="yellow-text-position">YELLOW</h2>
        <h2 class="button-text ${colorBlind}" id="blue-text-position">BLUE</h2>
        <h2 class="button-text ${colorBlind}" id="green-text-position">GREEN</h2>
        <div id="pause" class="invisible">
            <h1 id="unpause">Continue?</h1>
        </div>
        <div id="tutorial-bg"></div>
        <div id="correct" class="invisible">
        </div>
    <div id="main-game">
        <div id="red" class="triangle-buttons">
        </div>
        <div id="yellow" class="triangle-buttons">
        </div>
        <div id="blue" class="triangle-buttons">
        </div>
        <div id="green" class="triangle-buttons">
        </div>
        <div id="middle" class="display-order">
            <h1 id="play">Play</h1>
        </div>
    </div>
    <div id="score">
        <h2>Score: <span id="score-counter"></span></h2>
    </div>
</div>`);
document.getElementById("middle").addEventListener("click", playGame);
document.getElementById("main-menu-top-left").addEventListener("click",theme);
document.getElementById("main-menu-bottom-left").addEventListener("click", startTutorial);
document.getElementById("pause").addEventListener("click",unpause);
}
/* creates the message for the player to see */
function tutorialCommand(round) {
    if (round === 1){
        dont = "do";
        name = "Dan";
        color = "green";
    } else if (round === 2){
        dont = "do";
        name = "Simon";
        color = "green";
    } else if (round === 3){
        dont = "don't";
        name = "dan";
        color = "green";
    }
    $("#main-menu").html(`<h3 id="command" aria-live="polite">${name} says ${dont} press ${color}</h3>`);
}
/* calls the various functions that display the tutorial in order */
function tutorial() {
    if (round === 1){
        tutorialCommand(1);
        displayGame();
        highlighter(1);
        tips(1);
        document.getElementById("green").addEventListener("click",tutorial);
        round = 2;
    } else if (round === 2){
        tutorialCommand(2);
        highlighter(2);
        tips(2);
        document.getElementById("middle").addEventListener("click",tutorial);
        round = 3;
    } else if (round === 3){
        tutorialCommand(3);
        highlighter(3);
        tips(3);
        document.getElementById("middle").addEventListener("click",tutorial);
        round = 4;
        tempColorBlind = colorBlind;
        colorBlind = "standard";
    } else if (round === 4){
        displayGame();
        highlighter(4);
        tips(4);
        round = 1;
        colorBlind = tempColorBlind;
        document.getElementById("main-menu").addEventListener("click", reload);
    }
}
/* initializes the tutorial */
function startTutorial(){
    tutorial(1);
    document.getElementById("middle").removeEventListener("click",middlePressed);
    document.getElementById("red").removeEventListener("click",redPressed);
    document.getElementById("yellow").removeEventListener("click",yellowPressed);
    document.getElementById("blue").removeEventListener("click",bluePressed);
    document.getElementById("green").removeEventListener("click",greenPressed);
}
/* controls what happens when you press play again on gameover screen */
function playAgain(){
    score = 0;
    command();
    $("#game-zone").html(`
    <div id="game-body">
    <div id="main-menu">
    <h3 id="command" aria-live="polite">${name} says ${dont} press ${color}</h3>
    </div>
    <div id="text-positioner">
        <h2 class="button-text ${colorBlind}" id="red-text-position">RED</h2>
        <h2 class="button-text ${colorBlind}" id="yellow-text-position">YELLOW</h2>
        <h2 class="button-text ${colorBlind}" id="blue-text-position">BLUE</h2>
        <h2 class="button-text ${colorBlind}" id="green-text-position">GREEN</h2>
        <div id="pause" class="invisible">
                <h1 id="unpause">Continue?</h1>
        </div>
        <div id="correct" class="invisible">
        </div>
    <div id="main-game">
        <div id="tutorial-bg"></div>
        <div id="red" class="triangle-buttons">
        </div>
        <div id="yellow" class="triangle-buttons">
        </div>
        <div id="blue" class="triangle-buttons">
        </div>
        <div id="green" class="triangle-buttons">
        </div>
        <div id="middle" class="display-order">
            <h1 id="timer"></h1>
        </div>
    </div>
    <div id="score">
        <h2>Score: <span id="score-counter"></span></h2>
    </div>
    </div>`);
    stop = false;
    timeCounter = 0;
    timerCounter();
    document.getElementById("red").removeEventListener("click", highscorers);
    document.getElementById("green").removeEventListener("click", playAgain);
    document.getElementById("main-menu").removeEventListener("click", playAgain);
    document.getElementById("middle").addEventListener("click", middlePressed);
    document.getElementById("red").addEventListener("click", redPressed);
    document.getElementById("yellow").addEventListener("click", yellowPressed);
    document.getElementById("blue").addEventListener("click", bluePressed);
    document.getElementById("green").addEventListener("click", greenPressed);
    document.getElementById("main-menu").addEventListener("click", pause);
}
/* pauses the game stops the timer */
function pause(){
    stop = true;
    $("#main-menu").html(`
    <div id="main-menu-top-left" class="main-menu-item">
        <p>Colorblind mode</p>
    </div>
    <div id="main-menu-top-right" class="main-menu-item">
        <a href="suggestions.html"><p>Suggestions</p></a>
    </div>
    <div id="main-menu-bottom-left" class="main-menu-item">
        <p>Tutorial</p>
    </div>
    <div id="main-menu-bottom-right" class="main-menu-item" onclick="self.close()">
        <p>Quit</p>
    </div>`);
    document.getElementById("pause").classList.toggle("invisible");
    document.getElementById("main-menu").removeEventListener("click", pause);
    document.getElementById("main-menu-top-left").addEventListener("click",theme);
    document.getElementById("pause").addEventListener("click",unpause);
    document.getElementById("main-menu-bottom-left").addEventListener("click", startTutorial);
}
/* unpauses the game */
function unpause(){
    stop = false;
    $("#main-menu").html(`
    <h3 id="command" aria-live="polite">${name} says ${dont} press ${color}</h3>`);
    document.getElementById("pause").classList.toggle("invisible");
    updateTimer();
    document.getElementById("main-menu").addEventListener("click", pause);
}
/* calls the highscore table builder and clears a space for it */
function highscorers(){
    $("#text-positioner").html(`<div id="main-game"></div>`);
    $("#main-game").html(tableBuilder());
    document.getElementById("back").addEventListener("click",gameOver);
}
/* builds the highscore table */
function tableBuilder(){
    let HTML = `
    <table id="highscores">
    <thead>
    <tr>
    <th>Name</th>
    <th>Score</th>
    </tr>
    </thead>
    <tbody>`;
    for (var highscore of highscores){
        let tableRow = `
        <tr>
        <td>${highscore.name}</td>
        <td>${highscore.score}</td>
        </tr>`;
        HTML += tableRow;
    }
    let tableEnd = `
    </tbody>
    </table>
    <div id="back"><h3>Back</h3></div>`;
    let table = HTML + tableEnd;
    return table;
}
/* calls the gameover message */
function messageCaller(){
    let messages = ["Well that didn't go so well","We are into double digits!", "OOPS indeed!",
    "Better luck next time", "Not bad", "So close to triple digits!", "Triple digits wooo!",
    "You're getting good at this", "Think this is hard? it gets tougher", "You're a good listener!",
    "Did it just get faster?","Have you been practicing?", "It was literally just about to get harder!",
    "Wow maximum difficulty reached", "Didn't think anyone would make it this far",
    "Damn you exceeded my expectations completely","How much?", "Unbelievable",
    "I couldn't make it past 500 and I made this game!",
    "I almost didnt make a message for this score", "nearly at 1000?!? HOW DID YOU DO THAT!",
    "How did you make it to 1000??",
    "You beat the game well done, AKA I didn't expect anyone to ever make it this far..." ];
    if (score < 10){
        message = messages[0];
    } else if (score < 15){
        message = messages[1];
    } else if (score < 30){
        message = messages[2];
    } else if (score < 50){
        message = messages[3];
    } else if (score < 75){
        message = messages[4];
    } else if (score < 100){
        message = messages[5];
    } else if (score < 120){
        message = messages[6];
    } else if (score < 150){
        message = messages[7];
    } else if (score < 200){
        message = messages[8];
    } else if (score < 250){
        message = messages[9];
    } else if (score < 280){
        message = messages[10];
    } else if (score < 300){
        message = messages[11];
    } else if (score < 350){
        message = messages[12];
    } else if (score < 400){
        message = messages[13];
    } else if (score < 450){
        message = messages[14];
    } else if (score < 500){
        message = messages[15];
    } else if(score < 600){
        message = messages[16];
    } else if(score < 700){
        message = messages[17];
    } else if(score < 800){
        message = messages[18];
    } else if(score < 900){
        message = messages[19];
    } else if(score < 1000){
        message = messages[20];
    } else if(score < 1500){
        message = messages[21];
    } else {message = messages[22];
    }
}
/* what happens when correct answer is given */
function correct(){
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
    }
    if (score > 300){
        timeCounter = 20;
    } else if (score > 200){
        timeCounter = 10;   
    } else {
        timeCounter = 0;
    }
    stop = true;
    timeout = setTimeout(timerCounter,100);
    $("#score-counter").html(`${score}`);
    command();
    document.getElementById("correct").classList.toggle("invisible");
    timeout = setTimeout(correctAnimation,100);
}
function correctAnimation(){
    document.getElementById("correct").classList.toggle("invisible");
}
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
            <div id="tutorial-bg"></div>
            <div id="red" class="triangle-buttons">
            </div>
            <div id="yellow" class="triangle-buttons">
            </div>
            <div id="blue" class="triangle-buttons">
            </div>
            <div id="green" class="triangle-buttons">
            </div>
            <div id="middle" class="display-order">
                <h1 id="play">OOPS</h1>
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
        document.getElementById("red").addEventListener("click", highscorers);
        document.getElementById("green").addEventListener("click", playAgain);
        timeCounter = 0;
        document.getElementById("main-menu").removeEventListener("click", pause);
}
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
    }
    let dontPicker = Math.floor((Math.random() * 10) + 1);
    if (dontPicker <= 5){
        dont = "do";
    } else {
        dont = "don't";   
    }
    let namePicker = Math.floor((Math.random() * 10) + 1);
    if (namePicker <= 5){
        name = "Dan";

    } else {
        name = "Simon";
    }
    $("#main-menu").html(`
    <h3 id="command" aria-live="polite">${name} says ${dont} press ${color}</h3>`);
}
/* checks if user gave correct answer */
function checkAnswer(choice){
    if (name === "Simon"){
        if (choice === "middle"){
            correct();
        } else {
            gameOver();
        }        
    } else if (dont === "don't"){
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
}
/* timer functions */
function timerCounter(){
    timeCounter++;
    timeout = setTimeout(updateTimer,100);   
    }
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
}
/* game button presses */
function redPressed(){
    checkAnswer("red");
}
function yellowPressed(){
    checkAnswer("yellow");
}
function bluePressed(){
    checkAnswer("blue");
}
function greenPressed(){
    checkAnswer("green");
}
function middlePressed(){
    checkAnswer("middle");
}
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
}
function theme(){
    /* https://www.w3schools.com/howto/howto_js_toggle_class.asp helped me understand how to use classList.toggle */
    document.getElementById("red-text-position").classList.toggle("colorblind");
    document.getElementById("blue-text-position").classList.toggle("colorblind");
    document.getElementById("yellow-text-position").classList.toggle("colorblind");
    document.getElementById("green-text-position").classList.toggle("colorblind");
    if (colorBlind === "standard"){
        colorBlind = "colorblind";
    } else {colorBlind = "standard";
    }
}
/* Event Listeners */
document.getElementById("middle").addEventListener("click", playGame);
document.getElementById("main-menu-top-left").addEventListener("click",theme);
document.getElementById("main-menu-bottom-left").addEventListener("click", startTutorial);
document.getElementById("pause").addEventListener("click",unpause);

/* double checks when quit is pressed */
window.onbeforeunload = function() {
    return true;};
