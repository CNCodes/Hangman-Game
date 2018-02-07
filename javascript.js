
var guesses = 13;

var wins = 0;

var losses = 0;

var gamePlaying = false;

var blankLetterArray = [];

var hangmanWordArray = ["alligator", "zebra", "lion", "peacock", "whale", "honeybee", "tortoise", "hyena", "lamprey"];

var lettersToChoose = ["a", "b", "c","d","e","f","g","h","i",
					       "j", "k", "l", "m", "n",
					       "o", "p", "q", "r", "s", "t", "u", "v",
					       "w", "x", "y", "z"];

var lettersChosen = [];

var computerSelect;

var wordLength;

var closeToWin = 0;

var gameOver = false;

function resetMe() {
	gamePlaying = false;
	gameOver = false;
	lettersToChoose = ["a", "b", "c","d","e","f","g","h","i",
					   "j", "k", "l", "m", "n",
					   "o", "p", "q", "r", "s", "t", "u", "v",
					   "w", "x", "y", "z"];
	lettersChosen = [];
	blankLetterArray = [];
	closeToWin = 0;
	guesses = 13;
}

function initializeGame() {
	var userSelect = event.key;
	

	computerSelect = hangmanWordArray[Math.floor(Math.random()*hangmanWordArray.length)];

	wordLength = computerSelect.length;

	for (var i = 0; i < wordLength; i++) {
		if(computerSelect[i] == userSelect){
			blankLetterArray.push(userSelect);
		} else {
			blankLetterArray.push("_ ");
		}

		}

		gamePlaying = true;

	}

function playGame(){
		userSelect = event.key;

	for(var i = 0; i < lettersToChoose.length; i++){

	if(lettersToChoose[i] === userSelect){


		lettersChosen.push(lettersToChoose.splice(i, 1));

		for (var j = 0; j < wordLength; j++) {

			if (computerSelect[j] == userSelect) {

				blankLetterArray[j] = userSelect;

				closeToWin++;

				console.log(blankLetterArray);


			}

		}

	guesses = guesses - 1;
} 	
}
}

document.onkeyup = function(event){

if(gameOver === true){
	resetMe();
}


if (gamePlaying == false){
	initializeGame();
}

if (gamePlaying == true) {
	playGame();
}

	if (closeToWin == wordLength) {
		alert("You win the game!");
		wins++;
		guesses = 13;
		gameOver = true;

	}
		
	if (guesses == 0) {
		alert("You lose");
		losses++;
		guesses = 13;
		gameOver = true;
	}

	console.log(lettersChosen);
	document.getElementById('guessWord').innerHTML = blankLetterArray.join("") ;
	document.getElementById('guessLeft').innerHTML = guesses;
	document.getElementById('guessedLetters').innerHTML = lettersChosen.join("");
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('loser').innerHTML = losses;

}

