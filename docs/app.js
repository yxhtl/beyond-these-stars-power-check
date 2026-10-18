'use strict';

// These are manual checks, not a connection to the player's game.
const buttons = [...document.querySelectorAll('[data-symptom]')];
const answers = [...document.querySelectorAll('[data-answer]')];
let interactionRecorded = false;

function selectSymptom(key) {
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.dataset.symptom === key));
  }
  for (const answer of answers) answer.hidden = answer.dataset.answer !== key;
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    selectSymptom(button.dataset.symptom);
    if (!interactionRecorded && typeof window.gtag === 'function') {
      interactionRecorded = true;
      window.gtag('event', 'check_start', { send_to: 'G-7SWJCZGP6J' });
      window.gtag('event', 'recommendation_view', { send_to: 'G-7SWJCZGP6J' });
    }
  });
}

selectSymptom('connection');
