let antrianCs = 0;
let antrianT = 0;

const gcs1 = document.getElementById('guest-cs-1');
const gcs2 = document.getElementById('guest-cs-2');
const gt1 = document.getElementById('guest-t-1');

const gdisplay = document.getElementById('guest-display');
const textCs1 = document.getElementById('text-cs-1');
const textCs2 = document.getElementById('text-cs-2');
const textT1 = document.getElementById('text-t-1');

const btnNextCs1 = document.getElementById('btn-cs-1');
const btnNextCs2 = document.getElementById('btn-cs-2');
const btnNextT1 = document.getElementById('btn-t-1');
const btnRecallCs1 = document.getElementById('btn-re-cs-1');
const btnRecallCs2 = document.getElementById('btn-re-cs-2');
const btnRecallT1 = document.getElementById('btn-re-t-1');

function setGuestToCS(cs, text) {
  cs.innerText = 'A' + ++antrianCs;
  gdisplay.innerText = `Panggilan untuk antrian A${antrianCs} ke ${text.innerText}`;
  gdisplaySpeech()
}

function setGuestToT(t, text) {
  t.innerText = 'B' + ++antrianT;
  gdisplay.innerText = `Panggilan untuk antrian B${antrianT} ke ${text.innerText}`;
  gdisplaySpeech()
}

function recallGuestToCS(cs, text) {
  gdisplay.innerText = `Panggilan untuk antrian ${cs.innerText} ke ${text.innerText}`;
  gdisplaySpeech()
}

function recallGuestToT(t, text) {
  gdisplay.innerText = `Panggilan untuk antrian ${t.innerText} ke ${text.innerText}`;
  gdisplaySpeech()
}

function gdisplaySpeech() {
  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = gdisplay.innerText;
  utterance.lang = 'id-ID';

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
}

btnNextCs1.addEventListener('click', function () {
  setGuestToCS(gcs1, textCs1);
});
btnNextCs2.addEventListener('click', function () {
  setGuestToCS(gcs2, textCs2);
});
btnNextT1.addEventListener('click', function () {
  setGuestToT(gt1, textT1);
});
btnRecallCs1.addEventListener('click', function () {
  recallGuestToCS(gcs1, textCs1);
});
btnRecallCs2.addEventListener('click', function () {
  recallGuestToCS(gcs2, textCs2);
});
btnRecallT1.addEventListener('click', function () {
  recallGuestToT(gt1, textT1);
});
