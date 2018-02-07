
var guesses = 13;

var wins = 0;

var losses = 0;

var gamePlaying = false;

var blankLetterArray = [];

var hangmanWordArray = ["alligator", "zebra", "lion"];

var lettersToChoose = ["a", "b", "c","d","e","f","g","h","i",
					       "j", "h", "j", "k", "l", "m", "n",
					       "o", "p", "q", "r", "s", "t", "u", "v",
					       "w", "x", "y", "z"];

var lettersChosen = [];

var computerSelect;

var wordLength;

var closeToWin = 0;

document.onkeyup = function(event){



if (gamePlaying == false){


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

		guesses = guesses - 1;
		gamePlaying = true;

	}

if (gamePlaying == true) {

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

	if (closeToWin == wordLength) {
		alert("You win the game!");
		wins++;
		guesses = 13;

	}
		
	if (guesses == 0) {
		alert("You lose");
		losses++;
		guesses = 13;
	}

	console.log(lettersChosen);
	document.getElementById('guessWord').innerHTML = blankLetterArray.join("") ;
	document.getElementById('guessLeft').innerHTML = guesses;
	document.getElementById('guessedLetters').innerHTML = lettersChosen.join("");
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('loser').innerHTML = losses;

}

