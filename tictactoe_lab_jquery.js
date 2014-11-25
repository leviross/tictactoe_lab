$(function(){
	var turns = 0;
	var cells = $('.cell2');
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
	var reset = $('#reset');
	reset.on('click', function() {
		$(cells).text('');

		// window.location.reload();
	})

}) 









// // document.addEventListener('DOMContentLoaded', function() {
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