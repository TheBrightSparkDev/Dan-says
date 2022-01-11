function checkAnswer(){

};
function timer(timeLeft){
    TimeUnit.seconds.sleep(1);
    if(timeLeft === 0){
        checkAnswer()
        console.log("checkAnswer called")
    } else {
        timeLeft -= 1;
        console.log("timeLeft = " + timeLeft)
        timer(timeLeft);
        return $("#timer").html`
        ${timeLeft}`;
    }
    
};
function playGame(){
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
