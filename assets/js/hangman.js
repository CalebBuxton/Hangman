var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessedLetters = [];
var alphabetArea = document.getElementById("alphabet");
var alphabetBtn = document.getElementsByClassName("alphabetBtn");
var guessedTitle = document.getElementById("guessedTitle");
var guessedLetters = document.getElementById("guessedLetters");

for(i = 0; i < alphabet.length; i++){
	alphabetArea.innerHTML = alphabetArea.innerHTML + '<button class="alphabetBtn"></button>';

}

for(i = 0; i < alphabet.length; i++){
	alphabetBtn[i].textContent = alphabet[i];
		alphabetBtn[i].addEventListener("click", function(){
		this.classList.add("disabledBtn");
	}
)}

function letterSelected(letter) {

	if (letter === ) {
		//fill in that space in the word
	}
	else {
		//add the letter to the letters selected area
		guessedLetters.innerHTML = guessedLetters.innerHTML +  
	}
}
