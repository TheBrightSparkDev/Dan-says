function correct(){};
function gameOver(){};
function answer(){};
function command(){

};
function checkAnswer(choice){
    console.log("checkAnswer called");
    let answer = answer();
    if (choice === answer){
        correct();
    } else {
        gameOver();
    }
};
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
        checkAnswer(middle);
    } else {
        updateTimer(timeLeft);
    }
}
function playGame(){
    command();
    timer(5);
    return $("#middle").html`
    <h1 id="timer">5</h1>`;
};
console.log("just checking");
document.getElementById("middle").addEventListener("click", function(){playGame()});
console.log("checking again");
document.getElementById("red").addEventListener("click", function(){console.log("red clicked");});
document.getElementById("yellow").addEventListener("click", function(){console.log("yellow clicked");});
document.getElementById("blue").addEventListener("click", function(){console.log("blue clicked");});
document.getElementById("green").addEventListener("click", function(){console.log("green clicked");});
document.getElementById("main-menu-top-left").addEventListener("click", function(){console.log("theme clicked");});
document.getElementById("main-menu-top-right").addEventListener("click", function(){console.log("suggestions clicked");});
document.getElementById("main-menu-bottom-left").addEventListener("click", function(){console.log("tutorial clicked");});
document.getElementById("main-menu-bottom-right").addEventListener("click", function(){console.log("quit clicked");});
