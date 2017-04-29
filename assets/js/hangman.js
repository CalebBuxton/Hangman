var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessedLettersArr = [];
var pickedWord = "winner";
var pickedWordChars = pickedWord.split("");
var alphabetArea = document.getElementById("alphabet");
var alphabetBtn = document.getElementsByClassName("alphabetBtn");
var guessedTitle = document.getElementById("guessedTitle");
var guessedLetters = document.getElementById("guessedLetters");
var wordSpaces = document.getElementById("wordSpaces")


for(i = 0; i < pickedWordChars.length; i++){
	wordSpaces.innerHTML += '<div class="wordSpace"></div>';
}


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


function guessedLetter(letter) {
	guessedTitle.textContent = "Guessed Letters"
	guessedLetters.innerHTML = " ";
	for(i = 0; i < guessedLettersArr.length; i++)
	guessedLetters.textContent += guessedLettersArr[i];
}

function letterSelected(letter) {
	var result = 0;
	for(i = 0; i < pickedWordChars.length; i++) {
		
		if (letter === pickedWordChars[i]) {
			console.log(letter);
		}
		else {
			result++;
		}
	}
	if (result === pickedWordChars.length) {
		console.log("Wrong")
	}
}
