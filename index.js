var drums = document.querySelectorAll(".drum");
var numberOfDrums = drums.length;

for (var i = 0; i < numberOfDrums; i++) {
  drums[i].addEventListener("click", function() {
    var buttonInnerText = this.innerText;
    playSound(buttonInnerText);
    buttionAnimation(buttonInnerText);
  });
}

document.addEventListener("keydown", function(event) {
  var key = event.key;
  playSound(key);
  buttionAnimation(key);
});

function playSound(buttonInnerText) {
  switch (buttonInnerText) {
    case "w":
      makeSound("sounds/tom-1.mp3");
      break;
    case "a":
      makeSound("sounds/tom-2.mp3");
      break;
    case "s":
      makeSound("sounds/tom-3.mp3");
      break;
    case "d":
      makeSound("sounds/tom-4.mp3");
      break;
    case "j":
      makeSound("sounds/crash.mp3");
      break;
    case "k":
      makeSound("sounds/snare.mp3");
      break;
    case "l":
      makeSound("sounds/kick-bass.mp3");
      break;
    default:
      console.log("Invalid button");
      break;
  }
}

function makeSound(path) {
  var audio = new Audio(path);
  audio.play();
}

function buttionAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}
