var words = ["active", "beyond", "center"]
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessedLettersArr = [];
var correctLettersArr =[];
var pickedWord 
var pickedWordChars
var alphabetArea = document.getElementById("alphabet");
var alphabetBtn = document.getElementsByClassName("alphabetBtn");
var guessedTitle = document.getElementById("guessedTitle");
var guessedLetters = document.getElementById("guessedLetters");
var wordSpaces = document.getElementById("wordSpaces")
var resetGame = document.getElementById("resetGame");
var gameResult = document.getElementById("gameResult")
var gameOver
var winner
var letterSpaces 
var guesses
var correct

init();

resetGame.addEventListener("click", function(){
	newGame();
	gameResult.classList.add("hidden");
})

function init() {
	createButtons();
	newGame();
};

function pickWord() {
	pickedWord = words[Math.floor(Math.random() * 3)];
	pickedWordChars = pickedWord.split("");
	createWordSpaces();
};


function createWordSpaces() {
	for(i = 0; i < pickedWordChars.length; i++){
		wordSpaces.innerHTML += '<div class="wordSpace"><div class="letter"></div></div>';
	}

	letterSpaces = document.getElementsByClassName("letter");
};

function createButtons() {
	for(i = 0; i < alphabet.length; i++){
		alphabetArea.innerHTML += '<button class="alphabetBtn"></button>';
	}

	for(i = 0; i < alphabet.length; i++){
		alphabetBtn[i].textContent = alphabet[i];
		alphabetBtn[i].addEventListener("click", function(){
			this.classList.add("disabledBtn");
			guessedLettersArr.push(this.textContent);
			guessedLetter();
			letterSelected(this.textContent);
		}
		)}
	};


	function newGame(){
		for(var i = 0; i < alphabetBtn.length; i++){
			alphabetBtn[i].classList.remove("disabledBtn");

		}
		resetGame.textContent = "New Word";
		guessedTitle.textContent = " ";
		guessedLettersArr = [];
		guessedLetters.textContent = " ";
		wordSpaces.innerHTML = null;
		gameResult.classList.add("hidden");
		gameOver = false;
		winner = false;
		guesses = 0;
		correct = 0;
		gameResult.classList.remove("winner");
		pickWord();
	};


	function guessedLetter(letter) {
		guessedTitle.textContent = "Guessed Letters"
		guessedLetters.innerHTML = " ";
		for(i = 0; i < guessedLettersArr.length; i++)
			guessedLetters.textContent += guessedLettersArr[i];
	};

	function letterSelected(letter) {
		var wrong = 0;
		for(i = 0; i < pickedWordChars.length; i++) {

			if (letter === pickedWordChars[i]) {
				letterSpaces[i].textContent = letter;
				pickedWordChars[i] = "Correct";
				correct++;
			}
			else {
				wrong++;
			}
		}
		if (wrong === pickedWordChars.length) {
			guesses++

		}
		gameStatus();
	};


	function gameStatus() {
		if (correct === pickedWordChars.length) {
			gameOver = true;
			winner = true
		}
		if (guesses === 6) {
			gameOver = true;
		}
		if (gameOver === true) {
			resetGame.textContent = "Play Again?"
			gameResult.classList.remove("hidden")
			for(var i = 0; i < alphabetBtn.length; i++){
				alphabetBtn[i].classList.add("disabledBtn")
			}
			if (winner === true) {
				gameResult.textContent = "You Won!"
				gameResult.classList.add("winner")
			}
			else {
				gameResult.textContent = "Sorry, you lost..."
			}
		}

	};

