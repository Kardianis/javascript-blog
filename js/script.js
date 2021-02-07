var computerMove, playerMove, randomNumber, argButtonName, buttonTest, buttonRock, buttonScissors, buttonPaper ;

buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');
buttonPaper = document.getElementById('button-paper');

buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ 
  buttonClicked('Guzik TEST') 
});

function OnClickHandler(event) {
  playerMove = event.target.innerText;

clearMessages()


console.log('Wpisana odpowiedź to: ' + playerMove);

randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
  } else if (randomNumber == "2") {
    computerMove = "papier" ;
} else if (randomNumber == "3") {
    computerMove = "nożyce" ;
} ;
  printMessage('Mój ruch: ' + computerMove);
  
displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', OnClickHandler);
buttonScissors.addEventListener('click', OnClickHandler);
buttonPaper.addEventListener('click', OnClickHandler);