var number = document.querySelectorAll(".drum").length;

for(i=0;i<number;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){


        var buttonValue = this.innerHTML;
        makeSound(buttonValue);

       
    });

    document.addEventListener("keypress",function(e){

        
        makeSound(e.key);
    })
}

function makeSound(key){

    switch(buttonValue){
        case("w"):
         var tom1 = new Audio("sounds/crash.mp3");
         tom1.play();
         break;

        case("a"):
         var tom2 = new Audio("sounds/kick-bass.mp3");
         tom2.play();
         break;

        default:
            var tom3 = new Audio("sounds/snare.mp3");
            tom3.play();
    }
}




