{
     const playGame = function (playerInput) {
        /*clearMessaages();*/
        clearMessages()
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const getMoveName = function(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            }
            else if (argMoveId == 2) {
                return 'papier';
            }
            else if (argMoveId == 3) {
                return 'nożyce';
            }
            else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }
        const argPlayerMove = getMoveName(playerInput);
        const argComputerMove = getMoveName(randomNumber);
        /*if(randomNumber == 1){
          computerMove = 'kamień';
        }
        if(randomNumber == 2){
            computerMove = 'papier';
        }
        if(randomNumber == 3){
            computerMove = 'nożyce';
        }*/
        /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
        console.log('Gracz wpisał: ' + playerInput);

        
        /*if(playerInput == '1'){
            playerMove = 'kamień';
        }
        if(playerInput == '2'){
          playerMove = 'papier';
        }
        if(playerInput == '3'){
            playerMove = 'nożyce';
        }*/
        printMessage('Mój ruch to: ' + argPlayerMove);
        printMessage('Twój ruch to: ' + argComputerMove);
       const displayResult = function (argComputerMove, argPlayerMove) {
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            }
            else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
            }
            else {
                printMessage('Tym razem przegrywasz :(');
            }
        }
        displayResult(argComputerMove, argPlayerMove)
        /*if( computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
          }
          if( computerMove == 'papier' && playerMove == 'kamień'){
            printMessage('Komputer wygrywa!');
          }*/
    }
    const buttonStone = function() {
        playGame(1);
    }
    const stoneButton = document.getElementById('stone-button');
    stoneButton.addEventListener('click', buttonStone);
    const buttonPaper = function() {
        playGame(2);
    }
    const paperButton = document.getElementById('paper-button');
    paperButton.addEventListener('click', buttonPaper);
    const buttonScissors = function() {
        playGame(3);
    }
    const scissorsButton = document.getElementById('scissors-button');
    scissorsButton.addEventListener('click', buttonScissors);
}

