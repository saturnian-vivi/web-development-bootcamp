var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
gameStart();

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn();
    level++;
    $("h1").text("Level " + level);
}

function playSound(selectedColor) {
    var audio = new Audio("sounds/" + selectedColor + ".mp3"); 
    audio.play();
}

function animatePress(selectedColor) {
    $("#" + selectedColor).addClass("pressed");
    setTimeout( function (){
        $("#" + selectedColor).removeClass("pressed")
    }, 100);
}

$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function gameStart() {
    $(document).one("keypress", function (){
        $("h1").text("Level 0");
        nextSequence();
    });
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    }
    else {
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        playSound("wrong");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        level = 0;
        gamePattern = [];
        gameStart();
    }
}
