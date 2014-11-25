$(function(){
//Set Global Variables here	
var winGame = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];
var turns = 0;
var cells = $('.cell2');
var gameOver = "";
var reset = $('#reset');

//jQuery syntax
cells.on('click', function() {
		// alert('this worked!');
		if ($(this).text() === 'X' || $(this).text() === 'O') {
			return;
			// $(this).disabled.true;
		}
		turns += 1; 
		if (turns % 2 === 0) {
			$(this).text('X'); 
			$(this).css('color', 'red');
		}
		else {
			$(this).text('O'); 
			$(this).css('color', 'blue');
		}


	})
reset.on('click', function() {
	$(cells).text('');


})
// Cant get this to work still
var winnerChickenDinner = function() {
	for (var j = 0; j<winGame.length; j++) {
		if((cells[winGame[j][0]].innerText !== "") && 
			(cells[winGame[j][1]].innerText === cells[winGame[j][0]].innerText) && 
			(cells[winGame[j][2]].innerText === cells[winGame[j][0]].innerText)) {
			alert(cells[winGame[j][1]].innerText + " wins a taco!");
		gameOver = true
		return cells[winGame[j][1]].innerText;
	}    
}
}   
}); 



// var checkForWinner = function() {
// 	var cells = $('.cell2');
// 	var winningArray = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];
// 	$.each(winningArray, function (i, val) {
// 		if (!i[0].text('') && i[1].text() === i[0].text() &&
// 			i[2].text() === i[0].text() ) {
// 			alert(i[1] + " has won!");
// 		return i[0].text();

// 	}                
// })
// };
// checkForWinner();








// document.addEventListener('DOMContentLoaded', function() {
// 	var cells = document.getElementById('board').getElementsByTagName('p');
// 	for (var i = 0; i < cells.length; i++) {
// 		cells[i].addEventListener("click", function() {
// 			if ((this.innerText === 'X') || (this.innerText === 'O')) {
// 				return;
// 			}
// 			turns += 1; 
// 			if (turns % 2 === 0) {
// 				this.innerText = 'X'; 
// 				this.style.color = "red";
// 			}
// 			else {
// 				this.innerText = 'O';
// 				this.style.color = "blue";
// 			}

// 		})
// 	}
// 	var reset = document.getElementById('reset');



// reset.addEventListener("click", function() {
// 			for (var i = 0; i < cells.length; i++) {
// 				cells[i].innerText = '';
// 		// window.location.reload();
// 			}
	
// 	});

// });