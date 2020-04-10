var numSquares = 6;
var colours = [];
var pickedColour;

var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  // mode button event listeners
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // ternary operator - good for simple if statements
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  for (var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab colour of picked square
      var clickedColour = this.style.backgroundColor;
      //compare colour to pickedColour
      if (clickedColour === pickedColour){
        messageDisplay.textContent = "Correct!";
        changeColours(clickedColour);
        colourDisplay.innerHTML = pickedColour;
        h1.style.backgroundColor = pickedColour;
        resetButton.innerHTML = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}


resetButton.addEventListener("click", function(){
  reset();
});





function reset(){
  //generate new colours
  colours = generateRandomColours(numSquares);
  //pick new colours from array
  pickedColour = pickColour();
  //change colourDisplay to match picked colour
  colourDisplay.textContent = pickedColour;
  //change all colours on page
  for (var i = 0; i < squares.length; i++){
    if(colours[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = " ";
  resetButton.innerHTML = "New Colours";
};


function pickColour(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num){
  //make an array
  var arr = []
  //add num random colours to array
  for (var i = 0; i < num; i++){
    //get random colour and push into array
    arr.push(randomColour());
  };
  //return array
  return arr;
};

function randomColour(){
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  // make rgb code
  return `rgb(${r}, ${g}, ${b})`;
}


function changeColours(colour){
  //loop through all squares
  for (var i = 0; i < squares.length; i++){
    //change each colour to match given colour
    squares[i].style.backgroundColor = colour;
  };
};
