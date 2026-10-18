'use strict';

// These are manual checks, not a connection to the player's game.
const buttons = [...document.querySelectorAll('[data-symptom]')];
const answers = [...document.querySelectorAll('[data-answer]')];

function selectSymptom(key) {
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.dataset.symptom === key));
  }
  for (const answer of answers) answer.hidden = answer.dataset.answer !== key;
}

for (const button of buttons) {
  button.addEventListener('click', () => selectSymptom(button.dataset.symptom));
}

selectSymptom('connection');
