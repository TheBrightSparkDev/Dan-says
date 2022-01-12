/* declaring global variables */
var color = "";
var dont = "";
var name = "";
/* what happens when correct answer is given */
function correct(){
    console.log("correct");
};
/* what happens when wrong answer is given */
function gameOver(){
    console.log("gameOver");
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
    <h3 id="command">${name} says ${dont} press ${color}</h3>`)
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
function updateTimer(time){
    console.log("timeLeft = " + time);
        $("#middle").html(`
        <h1 id="timer">${time}</h1>`);
        time--;
        /* https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak this site was a massive help here */
        setTimeout(function(){timer(time)},1000);
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
