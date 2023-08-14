let antrianCs = 0
let antrianT = 0
const gdisplay = document.getElementById('guest-display')
const textCs1 = document.getElementById('text-cs-1')
const textCs2 = document.getElementById('text-cs-2')
const textT1 = document.getElementById('text-t-1')

function setGuestToCS(cs, text) {
  cs.innerText = 'A' + ++antrianCs
  gdisplay.innerText = `antrian A${antrianCs} ke ${text.innerText}`
}

function setGuestToT(t, text) {
  t.innerText = 'B'+ ++antrianT
  gdisplay.innerText = `antrian B${antrianT} ke ${text.innerText}`
}

const gcs1 = document.getElementById('guest-cs-1')
const gcs2 = document.getElementById('guest-cs-2')
const gt1 = document.getElementById('guest-t-1')

const btnNextCs1 = document.getElementById('btn-cs-1')

const btnNextCs2 = document.getElementById('btn-cs-2')

const btnNextT1 = document.getElementById('btn-t-1')



btnNextCs1.addEventListener('click', function() { setGuestToCS(gcs1, textCs1) })
btnNextCs2.addEventListener('click', function() { setGuestToCS(gcs2, textCs2) })
btnNextT1.addEventListener('click', function() { setGuestToT(gt1, textT1) })