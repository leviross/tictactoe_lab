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



// document.addEventListener('DOMContentLoaded', function() {
// 	var cells = document.getElementById('board').getElementsByTagName('p');
// 	for (var i = 0; i < cells.length; i++) {
// 		cells[i].addEventListener('click', function() {
// 		// cells[i].addEventListener('click', function() {
// 		// 	//alert('worked');
// 		this.innerHTML = 'X';
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
});


var reset  = document.querySelector('.footer');
document.addEventListener('DOMContentLoaded', function() {
var reset = document.getElementById('reset');
reset.addEventListener("click", function() {

		window.location.reload();

	
	});
});






