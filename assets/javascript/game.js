//State capitals array
var capitalArray = ["Albany", "Annapolis", "Atlanta", "Augusta", "Austin", "Baton Rouge", "Bismarck", "Boise", "Boston", "Carson City", "Charleston", "Cheyenne", "Columbia", "Columbus", "Concord", "Denver", "Des Moines", "Dover", "Frankfort", "Harrisburg", "Hartford", "Helena", "Honolulu", "Indianapolis", "Jackson", "Jefferson City", "Juneau", "Lansing", "Lincoln", "Little Rock", "Madison", "Montgomery", "Montpelier", "Nashville", "Oklahoma City", "Olympia", "Phoenix", "Pierre", "Providence", "Raleigh", "Richmond", "Sacramento", "Saint Paul", "Salem", "Salt Lake City", "Santa Fe", "Springfield", "Tallahassee", "Topeka", "Trenton"];
var states = {"MONTGOMERY": "ALABAMA", "JUNEAU": "ALASKA", "PHOENIX": "ARIZONA", "LITTLE ROCK": "ARKANSAS", "SACRAMENTO": "CALIFORNIA", "DENVER": "COLORADO", "HARTFORD": "CONNECTICUT", "DOVER": "DELAWARE", "TALLAHASSEE": "FLORIDA", "ATLANTA": "GEORGIA", "HONOLULU": "HAWAII", "BOISE": "IDAHO", "SPRINGFIELD": "ILLINOIS", "INDIANAPOLIS": "INDIANA", "DES MOINES": "IOWA", "TOPEKA": "KANSAS", "FRANKFORT": "KENTUCKY", "BATON ROUGE": "LOUISIANA", "AUGUSTA": "MAINE", "ANNAPOLIS": "MARYLAND", "BOSTON": "MASSACHUSETTS", "LANSING": "MICHIGAN", "SAINT PAUL": "MINNESOTA", "JACKSON": "MISSISSIPPI", "JEFFERSON CITY": "MISSOURI", "HELENA": "MONTANA", "LINCOLN": "NEBRASKA", "CARSON CITY": "NEVADA", "CONCORD": "NEW HAMPSHIRE", "TRENTON": "NEW JERSEY", "SANTA FE": "NEW MEXICO", "ALBANY": "NEW YORK", "RALEIGH": "NORTH CAROLINA", "BISMARCK": "NORTH DAKOTA", "COLUMBUS": "OHIO", "OKLAHOMA CITY": "OKLAHOMA", "SALEM": "OREGON", "HARRISBURG": "PENNSYLVANIA", "PROVIDENCE": "RHODE ISLAND", "COLUMBIA": "SOUTH CAROLINA", "PIERRE": "SOUTH DAKOTA", "NASHVILLE": "TENNESSEE", "AUSTIN": "TEXAS", "SALT LAKE CITY": "UTAH", "MONTPELIER": "VERMONT", "RICHMOND": "VIRGINIA", "OLYMPIA": "WASHINGTON", "CHARLESTON": "WEST VIRGINIA", "MADISON": "WISCONSIN", "CHEYENNE": "WYOMING"};

//Variables
var capital="";
var blanksArray = [];
var currentAnswer = "";
var oldAnswer = "";
var userGuess = "";
var checkerArray = [];
var checker = "";
var changeAnswer = "";
var countdown = 9;
var badGuesses = [];
var badCheck = 0;
var goodCheck = 0;


//Choose a capital
chooseCapital();

//Display answer-blanks and countdown
getDisplay();



//Game function
document.onkeyup = function() {
	userGuess = String.fromCharCode(event.keyCode).toUpperCase();	
	//Check that user input is a letter
	if ((userGuess < "A") || (userGuess > "Z")) {
		validate();
	}
	//main part of game else-if
	else if ((countdown > 0) && (currentAnswer !== capital)) {
		//Update currentAnswer string
		getCurrentAnswer();
		//update display
		updateDisplay();
		if (countdown == 0) {
		lose();
		} else if (capital == currentAnswer) {
		document.querySelector("#capitalWell").innerHTML = capital;
		win();
		}
	}//end main part of game
}//end of Game Function



//FUNCTIONS!!FUNCTIONS!!FUNCTIONS!!FUNCTIONS!!FUNCTIONS!!

function chooseCapital () {
	capital = capitalArray[Math.floor(Math.random()*capitalArray.length)].toUpperCase();
	console.log("The capital is " + capital);
}//end of chooseCapital function



function getDisplay () {
	var underscore = "_";
	var space = " ";
	for (var i=0; i<capital.length; i++) {
		if (capital[i]!= space) {
			blanksArray[i] = underscore;
		}else {
			blanksArray[i] = space;
		}
	}
	for (i=0; i<capital.length; i++){
		currentAnswer = currentAnswer + blanksArray[i];
		}
	document.querySelector("#capitalWell").innerHTML = currentAnswer;
	document.querySelector("#guessesleft").innerHTML = countdown;
	document.querySelector("#guessedletters").innerHTML = badGuesses;
}//end of getDisplay function



function validate () {
			alert("Please type a letter.")
			userGuess = "";
}//end of validate function



function getCurrentAnswer () {
		oldAnswer = currentAnswer;
		checkerArray = [];
		for (var i=0; i<capital.length; i++){
			checkerArray[i] = currentAnswer[i]
		}
		for (var i=0; i<capital.length; i++){
			if (userGuess === capital[i]) {
				checkerArray[i]=userGuess;
			}
		}
		currentAnswer = "";
		for (var i=0; i < capital.length; i++) {
			currentAnswer = currentAnswer + checkerArray[i];
		}
}//end of getCurrentAnswer function



function updateDisplay () {		
		badCheck = badGuesses.indexOf(userGuess, 0);
		goodCheck = currentAnswer.indexOf(userGuess, 0);
		if ( (check = -1 && currentAnswer!==oldAnswer) || (goodCheck != -1) || (badCheck != -1) ){
			document.querySelector("#guessesleft").innerHTML = countdown;
			document.querySelector("#capitalWell").innerHTML = currentAnswer;
			document.querySelector("#guessedletters").innerHTML = badGuesses;
		} else if (badCheck = -1 && currentAnswer === oldAnswer) {
			badGuesses[badGuesses.length] = userGuess;
			countdown = 9 - badGuesses.length;
			document.querySelector("#guessesleft").innerHTML = countdown;
			document.querySelector("#capitalWell").innerHTML = currentAnswer;
			document.querySelector("#guessedletters").innerHTML = badGuesses;
		}
}//end of updateDisplay function



function lose () {
	alert("You lose.  The answer was " + capital + ", the capital of " + states[capital] + ".");
	reset();
	chooseCapital();
	getDisplay()
}


function win () {
	alert("Yes! The answer was " + capital + ", " + states[capital] + "...YOU WIN!!!");
	reset();
	chooseCapital();
	getDisplay();
}


function reset () {
	capital="";
	blanksArray = [];
	currentAnswer = "";
	oldAnswer = "";
	userGuess = "";
	checkerArray = [];
	checker = "";
	changeAnswer = "";
	countdown = 9;
	badGuesses = [];
}