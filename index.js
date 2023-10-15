
var numOfDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); //higher order function

    function handleClick(){
        this.style.color="white";
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
}  

//detecting keyboard press

document.addEventListener("keydown",function(event){ //callback function
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch(key){
        case"w":
        var snd1 = new Audio("sounds/1.mp3"); // buffers automatically when created
        snd1.play();
        break;

        case"a":
        var snd2 = new Audio("sounds/2.mp3"); // buffers automatically when created
        snd2.play();
        break;

        case"s":
        var snd3 = new Audio("sounds/mahakal1.mp3"); // buffers automatically when created
        snd3.play();
        break;

        case"d":
        var snd4 = new Audio("sounds/mahakal.mp3"); // buffers automatically when created
        snd4.play();
        break;

        case"j":
        var snare = new Audio("sounds/snare.mp3"); // buffers automatically when created
        snare.play();
        break;

        case"k":
        var crash = new Audio("sounds/crash.mp3"); // buffers automatically when created
        crash.play();
        break;

        case"l":
        var kick = new Audio("sounds/kick-bass.mp3"); // buffers automatically when created
        kick.play();
        break;

        default: console.log(buttonInnerHTML);
    }
        
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}