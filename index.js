// Detecting button pressed

var buttons = document.querySelectorAll("button");
var numberOfButtons = buttons.length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  })
}

// Detecting keyboard pressed

document.addEventListener("keydown", function(event) {

  makeSound(event.key)

  buttonAnimation(event.key);

})

function buttonAnimation(currentKey) {

  var activeKey = document.querySelector("." + currentKey);

  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);

}


function makeSound(key) {
  console.log(key);

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    default:

  }
}
