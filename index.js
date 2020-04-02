
document.querySelectorAll(".drum").forEach(item=>{
    item.addEventListener("click", handleClick);
})

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function handleClick(){
  
    //this.style.color="white";
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
   
}

function makeSound(key){
    switch (key) {
        case "w":
            let tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            let crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            let kickbass=new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;

        case "l":
            let snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
    
        default:
            alert(buttonInnerHTML+" Wrong key pressed !");
            break;
    }
}


function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}




//Functions taking other functions as inputs are known as higher order function
/*

    function add(num1, num2) {
    return num1 + num2;
    }
     
    function subtract(num1, num2) {
    return num1 - num2;
    }
     
    function multiply(num1, num2) {
    return num1 * num2;
    }
     
    function divide(num1, num2) {
    return num1 / num2;
    }
     
    function calculator(num1, num2, operator) {
    return operator(num1, num2);
    }



*/ 

// CONSTRUCTOR
// function BellBoy(name,age,hasWork,languages){
//     this.name=name;
//     this.age=age;
//     this.hasWork=hasWork;
//     this.languages=languages;
//     this.moveSuitcase=function(){
//         alert("Can I take your suitcase ?");
//         pickUpCase();
//     }
// }

// function anotherEventListner(typeOfEvent, callback){
//     var eventThatHappened={
//         eventType:"keypress",
//         key:"p",
//         durationOfKeypress:2
//     }
//     if(eventThatHappened.eventType==typeOfEvent){
//     callback(eventThatHappened);
//     }
// }
// console.log(event);
// anotherEventListner("keypress",function(event){

// })console.log(event);