
//detecting button press
noOfClicks = document.querySelectorAll(".drum").length;
for (var i=0; i < noOfClicks; i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML); //add sound
makeAnimation(buttonInnerHTML); //add animation using class
});
}
//detecting keyboard press
document.addEventListener("keypress", function(event){
makeSound(event.key);
makeAnimation(event.key);
});
function makeSound(key){
  switch (key) {

  case "w":
  var ravi = new Audio("sounds/crash.mp3");
  ravi.play();
  break;

  case "a":
  var ravi = new Audio("sounds/kick-bass.mp3");
  ravi.play();
  break;

  case "s":
  var ravi = new Audio("sounds/snare.mp3");
  ravi.play();
  break;

  case "d":
  var ravi = new Audio("sounds/tom-1.mp3");
  ravi.play();
  break;

  case "j":
  var ravi = new Audio("sounds/tom-2.mp3");
  ravi.play();
  break;

  case "k":
  var ravi = new Audio("sounds/tom-3.mp3");
  ravi.play();
  break;

  case "l":
  var ravi = new Audio("sounds/tom-4.mp3");
  ravi.play();
  break;

    default: console.log(buttonInnerHTML);
  }
}
function makeAnimation (parameter){
  var activeButton = document.querySelector("."+parameter);
  activeButton.classList.add("pressed");//added class
 setTimeout(function(){activeButton.classList.remove("pressed")}, 100);//remove class after 100 msec
}
