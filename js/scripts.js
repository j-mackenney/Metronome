var intervalID;
var bpm;
var beats;
var count = 1;

function startMetronome() {
	if (!validInput())
		return;
		
	toggleButton('toggleMetronome', 'Stop', stopMetronome);
	
	// set the bpm depending on duration of beat (minim, crotchet, quaver, semiquaver) 
	bpm = document.querySelector('[name="bpm"]').value * (document.querySelector('[name="lower"]').value / 4);
	
	// set the amount of beats per bar
	beats = document.querySelector('[name="upper"]').value;
	
	intervalID = setInterval(playSound, (60000/bpm));
}

function stopMetronome() {
	toggleButton('toggleMetronome', 'Start', startMetronome);
	clearInterval(intervalID);
	count = 1;
}

function playSound() {
	if (count == 1) {
		var sound1 = new Audio('audio/tick_01.wav');
		sound1.play();
	} else {
		var sound2 = new Audio('audio/tick_02.wav');
		sound2.play();
	}
	if (count == beats)
		count = 1;
	else
		count++;
}

function toggleButton(id, value, functionCallback) {
	document.getElementById(id).onclick = functionCallback;
	document.getElementById(id).value = value;
}

function validInput() {
	var a = document.querySelector('[name="bpm"]').value;
	var b = document.querySelector('[name="upper"]').value;
	if (isNaN(a) || a < 1 || a == '' || a == null) {
		alert('Select a valid BPM!');
		return false;
	}
	if (isNaN(b) || b < 1 || b == '' || b == null) {
		alert('Select a valid Time Signature!');
		return false;
	}
	return true;
}