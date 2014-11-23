//Lets first make our variables

var nextTurn = 'X';
function next() {
	turn = turn === 'X' ? 'O' : 'X';
}
function play() { 
	if (this.innerHTML === '') {
		this.innerHTML = turn; 
		next();
	}
}




document.addEventListener('DOMContentLoaded', function() {
	var cells = document.getElementById('board').getElementsByTagName('p');
	for (var i in cells) {
		cells[i].addEventListener('click', function() {
			play(); 
		})
	}
});
document.getElementById('reset').addEventListener('click', function() {
	for (var i in cells) {
		cells[i].innerHTML = ' ';
	}
}); 

// So one thing we can do it make a function that will register events 9 times

// for (var i=1; i< 10; i++) {

// 	document.addEventListener('DOMContentLoaded', function() {
// 	document.getElementsByTagName('p').addEventListener('click', function() {
// 		document.getElementsByTagName('p').innerHTML = playersTurn();

// 	 });
// });

// }


// This might be a little ghetto, but does it make sense?
// yes! this is much smatter. i totally it so far. 

// cool


// Another option is to make one listner, and then just do a onclick event in the html
// that was wrong file, anyways..
// No worries. I guess the harder q is th logic of the game, mess with it a little, and come to me if ur stuck



// two more small things
// 1. Remember what I said about thinking in terms of not repeating yourself. As much as possible, not always tho
// 2. Wanna teach you a cool trick.

// Every language has shorthand, shortcuts for common things


// imagine this code
// btw that was wrong (== means we compare, = means we assign, lmk if your confused about that)
// if(y == true) {
// 	x= false
// } 
// else {
// 	x = 'Whatever'
// }









