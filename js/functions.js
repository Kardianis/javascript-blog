function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
     return 'papier'; 
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
  }

  function displayResult(argPlayerMove, argComputerMove){
    if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
      printMessage('Wygrywasz!');
    } if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
      printMessage('Wygrywasz!');
    } if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('Wygrywasz!');
    } else { printMessage ('Przegrywasz');
    }
    
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');
  }

  