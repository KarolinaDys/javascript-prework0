let computerMove = 'kamień';
let playerMove = 'papier';


function printMessage(msg ''Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!' ){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}