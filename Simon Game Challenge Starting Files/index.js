gamePattern = [];
userClickedPattern = [];

buttonColours = ["red","green","blue","yellow"];

var starter = false;

var level = 0;

$(document).keypress(function{
    if (starter != true){
        $("#level-title").text( "Level" + level);
        nextSequence();
        starter = true;

    }
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        console.log("success")

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function{
                nextSequence
            },1000)
        }
    }
    else{
        console.log("wrong");
        var wsound = new Audio("sounds/wrong.mp3");
      wsound.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}

function nextSequence(){

    level++;
    $("#level-title").text( "Level" + level);

    randomNumber = Math.ceil(Math.random() * 4 ) - 1;

    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);


   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

   var sound = new Audio("/sounds/" + randomChosenColour + ".mp3");
   sound.play();

}

$(".btn").click(function(){
   var  userChosenColour = $(this).attr("id");

   userClickedPattern.push[userChosenColour];

   var playSound = new Audio("/sounds/" + userChosenColour + ".mp3");
   playSound.play();
   animatePress(userChosenColour);


   checkAnswer(userChosenColour.length - 1);

   
}

   
function animatePress(currentColor){
        $("#" + currentColor).addClass("pressed");
        setTimeout(function{
            (".btn").removeClass("pressed")
        },100)
        
    }
function starter(){
    level = 0;
  gamePattern = [];
  started = false;
}
