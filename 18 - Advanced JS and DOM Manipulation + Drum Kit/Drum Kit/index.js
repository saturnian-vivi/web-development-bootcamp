
for(var i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        buttonSound(buttonInnerHtml);  
        buttonAnimation(buttonInnerHtml);  
     });
};


document.addEventListener("keydown", function(event) {
        buttonSound(event.key);
        buttonAnimation(event.key);
});


function buttonSound (buttonAlphabet) {
    switch (buttonAlphabet) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "d":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play();
            break;
        default:
            console.log(buttonAlphabet);
    }
}


function buttonAnimation(selectedKey) {
    var activeKey = document.querySelector("." + selectedKey);
    activeKey.classList.add("pressed");
    setTimeout(function () { activeKey.classList.remove("pressed"); }, 100);
}
