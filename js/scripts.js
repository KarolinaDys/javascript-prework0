

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  
 
let argComputerMove = getMoveName(randomNumber);
/*if(randomNumber == 1){
  computerMove = 'kamień';
}
if(randomNumber == 2){
    computerMove = 'papier';
}
if(randomNumber == 3){
    computerMove = 'nożyce';
}*/
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(randomNumber);;

/*if(playerInput == '1'){
    playerMove = 'kamień';
}
if(playerInput == '2'){
  playerMove = 'papier';
}
if(playerInput == '3'){
    playerMove = 'nożyce';
}*/
  
printMessage('Twój ruch to: ' + argPlayerMove);

function console.log('moves:', argComputerMove, argPlayerMove);
  displayResult(argComputerMove, argPlayerMove)
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
  } else {
   printMessage('Tym razem przegrywasz :(');
  }
  }


/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  }*/