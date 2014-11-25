$(function(){
	var turns = 0;
	var cells = $('.cell2');
	var gameOver = "";
	var reset = $('#reset');

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
		checkForWinner(cells); 

	})
	reset.on('click', function() {
		$(cells).text('');


	})
});
var checkForWinner = function(myCells) {
	var winningArray = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];
	for (i = 0; i < winningArray.length; i++) {
		if (myCells[winningArray[i][0]].innerText !== "" &&
			myCells[winningArray[i][1]].innerText === myCells[winningArray[i][0]].innerText && 
			myCells[winningArray[i][2]].innerText === myCells[winningArray[i][0]].innerText) {
			alert(myCells[winningArray[i][1]].innerText + " has won!");
		return myCells[winningArray[i][1]].innerText;
		};
	}
}


