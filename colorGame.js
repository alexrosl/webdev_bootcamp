var numberSquares = 6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", function(){
	reset();
})

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){	
		modeButtons[i].addEventListener	("click", 	function()
		{

			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
			reset();
		}
		)
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;

			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}

		});
	}
}


function reset(){
	colors = generateRandomColors(numberSquares);
//pick a new random color
pickedColor = pickColor();
//change colorDisplay to match picked Color
colorDisplay.textContent = pickedColor;
resetButton.textContent = "NewColors";
messageDisplay.textContent = "";
//change color of squares
for(var i = 0; i < squares.length; i++){
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}
	else{
		squares[i].style.display = "none";
	}
	
}
h1.style.background = "steelblue";
}







function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}