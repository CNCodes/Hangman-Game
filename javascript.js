
var guesses = 13;

var vaquitaInfo = "The vaquita is a rarely seen critically endangered porpoise species native to the upper tip of baja California, it has a very small population size of approxiamtly 100 individuals. Its small numbers are due to very invasive fishing methods used by fisherman in the area as well as there already small range.";

var elephantInfo = "The elephant is an icon of the African wilderness, with some species being very close to extinction, many are poached due to an ever booming ivory trade in many Eastern countries such as China.";

var macawInfo = "A victim of the exotic pet trade, as well as habitat loss. Macaw are a large, beatifully colored group of parrots that are more likely to be seen on someone's shoulder than in their natural habitat in Central and South America";

var pangolinInfo = "The pangolin is an insectivorous animal that has had its numbers dwindle due to its popularity in Africa as food, known as Bush meat, as well as high trafficing to countries like china where it is seen as a delicacy with medicinal properties";

var gorillaInfo = "The largest of the primates, the gorilla is endangered mostly due to poaching and habitat loss, with one species having a population of only 800 individuals";

var turtleInfo = "Many sea turtles face extinction due to very special reproduction habits. By choosing only specific beaches to lay their egss, turtles are often eaten before they can make it to the sea. New development in these areas can also cause babies to go the opposite direction of the ocean and die ";

var tigerInfo = "With some species already extinct, tigers have seen a great decline in numbers over the years due to habitat loss and high levels of poaching for their striped furs";

var ferretInfo = "The black footed ferret is the only species of ferret in North America, they are greatly harmed by changes in the environment and are an indicator of the health of the grassland areas of the United States";

var wins = 0;

var losses = 0;

var gamePlaying = false;

var blankLetterArray = [];

var imageArray = ["http://nortedigital.mx/wp-content/uploads/2016/05/vaquita-marina_635.jpg",
				  "http://1.bp.blogspot.com/-VU64GTZ-pf8/UiyyyAOq89I/AAAAAAAAYSc/uzjfaaRLND0/s1600/African+Elephant+Wallpapers+%25281%2529.jpg",
				  "https://wallpapercave.com/wp/8XqVrP9.jpg",
				  "http://magazine.africageographic.com/wp-content/uploads/2014/09/pangolin-1-APWG.jpg",
				  "http://1.bp.blogspot.com/-JvCi0hqdxlc/UPamBJwOQZI/AAAAAAAAD7s/n2fgkQ9X03Q/s1600/Gorilla-Images-and-Facts+03.jpg",
				  "http://2.bp.blogspot.com/-b6qT1WwvlEg/UM1Vqg41pFI/AAAAAAAABw0/AEiwBJj7K8k/s1600/Hawksbill%2BTurtle%2BRed%2BSea.jpg",
				  "http://2.bp.blogspot.com/-BMkho2ZC2lk/TlZxN6fxvrI/AAAAAAAAAeg/cqZ3VPD9x6g/s1600/sumatran_tiger_1.jpg",
				  "http://www.animalspot.net/wp-content/uploads/2015/05/Black-Footed-Ferret.jpg"]

var infoArray = [];

infoArray.push(vaquitaInfo);
infoArray.push(elephantInfo);
infoArray.push(macawInfo);
infoArray.push(pangolinInfo);
infoArray.push(gorillaInfo);
infoArray.push(turtleInfo);
infoArray.push(tigerInfo);
infoArray.push(ferretInfo);

console.log(infoArray);

var hangmanWordArray = ["vaquita", "elephant", "macaw", "pangolin","gorilla","turtle","tiger","ferret"];

var lettersToChoose = ["a", "b", "c","d","e","f","g","h","i",
					       "j", "k", "l", "m", "n",
					       "o", "p", "q", "r", "s", "t", "u", "v",
					       "w", "x", "y", "z"];

var lettersChosen = [];

var computerSelect;

var imageSelect;

var infoSelect;

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
	
	randomNumber = Math.floor(Math.random()*hangmanWordArray.length);

	computerSelect = hangmanWordArray[randomNumber];

	imageSelect = imageArray[randomNumber];

	infoSelect = infoArray[randomNumber];

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


	console.log(lettersChosen);
	document.getElementById('guessWord').innerHTML = blankLetterArray.join("");
	document.getElementById('guessLeft').innerHTML = guesses;
	document.getElementById('guessedLetters').innerHTML = lettersChosen.join("");


	if (closeToWin == wordLength) {
		wins++;
		guesses = 13;
		gameOver = true;
		document.getElementById('changingImage').src = imageSelect;
		document.getElementById('animalFacts').innerHTML = infoSelect;
		document.getElementById('wins').innerHTML = wins;
	    document.getElementById('loser').innerHTML = losses;
	}

	if(closeToWin == wordLength) {
		setTimeout(function(){ alert("You Won!!"); }, 250);
	}
		
	if (guesses == 0) {
		losses++;
		guesses = 13;
		gameOver = true;
		document.getElementById('guessWord').innerHTML = computerSelect;
		document.getElementById('changingImage').src = imageSelect;
		document.getElementById('animalFacts').innerHTML = infoSelect;
		document.getElementById('wins').innerHTML = wins;
		document.getElementById('loser').innerHTML = losses;
		setTimeout(function(){ alert("You Lose!!"); }, 250);
	}

}

