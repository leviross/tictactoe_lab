// This commented code is what I pieced togehter, almost got there..

// var nextTurn = 'X';
// var next = function() {
// 	turn = turn === 'X' ? 'O' : 'X';
// };
// var play = function() { 
// 	 if (this.innerHTML === ' ') {
// 		//console.log(this);
// 		this.innerHTML = 'X'; 
// 	 	//next(); 
// 	 	nextTurn = 'O';
// 	 }
// }

// 1) Wait for the page to load , then start the function
// 2) Target all the html elements by filtering the ones we need into an array
// 3) Iterate over the array with a for loop
// 4) For each iteration, listen for a 'click' event
// 5) For each 'click', check to make sure the square is empty
// 6) For each 'click', raise the counter variable
// 7) If its not empty, dont do anything, dont raise counter
// 8) If its empty, toggle between X and O in innerText of 'this' element
// 9) 

// document.addEventListener('DOMContentLoaded', function() {

// 	var cells = document.querySelectorAll('.cell');
// 	for (var i = 0; i < cells.length; i++) {
// 		cells[i].addEventListener('click', function() {
// 		alert('worked');
// 		// this.innerHTML = 'X';
// 		// 	//play(); 
// 		// })
// 		})
// 	}
// });

var turns = 0; 

document.addEventListener('DOMContentLoaded', function() {
	var cells = document.getElementById('board').getElementsByTagName('p');
	for (var i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", function() {
			if ((this.innerText === 'X') || (this.innerText === 'O')) {
				return;
			}
			turns += 1; 
			if (turns % 2 === 0) {
				this.innerText = 'X'; 
				this.style.color = "red";
			}
			else {
				this.innerText = 'O';
				this.style.color = "blue";
			}

		})
	}
	var reset = document.getElementById('reset');



reset.addEventListener("click", function() {
			for (var i = 0; i < cells.length; i++) {
				cells[i].innerText = '';
		// window.location.reload();
			}
	
	});

});









