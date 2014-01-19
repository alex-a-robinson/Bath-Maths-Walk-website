/**
* Must make IE 8 compatible and check mobile and firefox compatability
* Create editor to easily create site
* Create editor to easily create questions (!)
* Look into:
* https://github.com/aFarkas/html5shiv 
* https://code.google.com/p/html5shiv/
*/


var question = {'ba-1': ['If King Edgar was crowned in 1558 and the year is 2013.  Then 2013 - 1558 = 456.  So its has been 456 years since King Edgar was born.', 0, 'Look at the plack on the back of the abbey', ['456', 'four hundered and fifty six'], 200], 
				'ba-2': ['5 Angles, each touchs 4 rungs of the lader (two feet, two hands).  If there are 56 rungs, 4/56 * 100 = ~7.14.  Lets round that up to 8', 0, 'There are 5 angles', ['15', '15%'], 250],
				'ba-3': ['The doorway is a semi circle ontop of a square, The windows are arcs, some of the windows are kites', 0, 'What shape is the door on the front of the Abbey?', ['square', 'circle', 'cuboid', 'kite'], 150],
				'ba-3': ['The doorway is a semi circle ontop of a square, The windows are arcs, some of the windows are kites', 0, 'What shape is the door on the front of the Abbey?', ['square', '2 to 3', '2 over 3', '2/3'], 250]};
				
// Format:
// {ID: [Solution, Attempts, Hint, [Possible solutions], points]}

var MIN_ATTEMPTS = 2; // Minimum number of attempts at each question before can see solution
var HINT_POINT_MODIFIER = 0.5; // Decrease points gained after hint seen

// Checks if the submitted answer is correct
function checkAnswer(ID) {
	var answer = document.getElementById(ID+'-a').value;
	
	if ((localStorage['solution_seen']) && (localStorage['solution_seen'].split(',').indexOf(ID) > -1)) { // cannot get correct answer if the solution has been seen
		alert(phrase('solution seen'));
	} else if (answer == '') { // cannot get correct answer with no answer
		alert(phrase('no input'));
	} else if (question[ID][3].indexOf(answer) > -1) { // if answer is correct
		updateScore(ID);
	} else { // else add 1 to attempts
		question[ID][1] += 1;
		alert(phrase('wrong answer'));
	}
}

// Creates alternatives phrases to use in alerts.
function phrase(situation) {

	var possible = [['Incorrect.', 'That\'s not right.', 'Wrong answer.', 'No that is not right.', 'Nope, wrong answer.', 'Wrong answer, why not try a hint?', 'False.', 'Answer is off target.', 'This answer is not correct', 'The answer is untrue.', 'That answer is not right.', 'You didn\'t submit the right answer.', 'Get it right next time.', 'Try again.', 'Why not use a hint.'], // wrong answer
					['You already got those points!', 'You have already answered the question.'], // points redeemed
					['You have not typed anything.', 'You haven\'t submited anything.', 'There is no text in the box.', 'Put some text in the box, then submit.', 'You just left a blank space.', 'Type somthing in the box.'],  // no input 
					['You have already seen the solution.', 'You cannot answer after seeing the solution.', 'You can\'t get the points after seeing the solution.', 'You don\'t need to submit after having seen the solution.'], // solution seen
					['Have another go first.', 'Try another time first.', 'You need to try more times to see the solution', 'Have a few more tries befor you see the solution.', 'Think a bit harder, have another go, then you can see the solution.']]; // try again 

	switch(situation) {
		case 'wrong answer':
			var index = Math.floor(Math.random() * possible[0].length);
			return possible[0][index];
		case 'points redemed':
			var index = Math.floor(Math.random() * possible[1].length);
			return possible[1][index];
		case 'no input':
			var index = Math.floor(Math.random() * possible[2].length);
			return possible[2][index];
		case 'solution seen':
			var index = Math.floor(Math.random() * possible[3].length);
			return possible[3][index];
		case 'try again':
			var index = Math.floor(Math.random() * possible[4].length);
			return possible[4][index];
	} 
}

// Displays the question hint
function displayHint(ID) {
	var hintContext = document.getElementById(ID + '-h');
	hintContext.innerHTML = question[ID][2];
	
	// Changes point score if hint used
	question[ID][4] = Math.floor(question[ID][4]*HINT_POINT_MODIFIER);
}

// Display solution for question
function displaySolution(ID) {

	if (!localStorage['solution_seen']) { // Check if solution_seen list exists in local storage
		localStorage['solution_seen'] = [];
	} 
	
	if ((localStorage['points_redeemed']) && (localStorage['points_redeemed'].split(',').indexOf(ID) > -1)) { // Solution can be seen if answed correctly
		updateSolutionHTML(ID);
	} else if (question[ID][1] >= MIN_ATTEMPTS) { // Solution can be seen if min attempts number of attempts attempted.
		updateSolutionHTML(ID);
		if (localStorage['solution_seen'].split(',').indexOf(ID) < 0) { // Store ID is storage so user cannot redem points after seeing the answer
			var solution = localStorage['solution_seen'].split(',');
			solution.push(ID);
			localStorage['solution_seen'] = solution;
		}
	} else { // Else asks for another attempt before showing the solution
		alert(phrase('try again'));
	}
}

// Update question to display solution
function updateSolutionHTML(ID) {
	var solutionContext = document.getElementById(ID+'-s');
	solutionContext.innerHTML = question[ID][0];
	
	// Disable further input
	document.getElementById(ID + '-a').disabled  = 'true';
}

// Updates the score and saves it to local storage
function updateScore(ID) {
	if (!localStorage['points_redeemed']) { // Check if points_redeemed list exists in local storage
		localStorage['points_redeemed'] = [];
	}
	
	if (localStorage['points_redeemed'].split(',').indexOf(ID) > -1) { // Don't give points to already redeemed questions
		alert(phrase('points redemed'));
	} else { // Update score and add ID to redeemed list
		updatePoints(question[ID][4]);
		var redeemed = localStorage['points_redeemed'].split(',');
		redeemed.push(ID);
		localStorage['points_redeemed'] = redeemed;
	}
}

// Updates score local storage and HTML to keep track of score
function updatePoints(amount) {
	
	if (!localStorage['score']) { // Check if score exists in local storage, if not sets to 0
		localStorage['score'] = 0;
	}
	
	var pointsContext = document.getElementById('points');
	var points = parseInt(localStorage['score']) + amount;
	pointsContext.innerHTML = points;
	localStorage['score'] = points;
}

window.onload = function() {
	// This is done so if you already have points the counter is updated
	updatePoints(0);
}