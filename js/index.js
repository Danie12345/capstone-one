import { speakers, speakerTemplate } from './speakers.js';

const speakersList = document.querySelector('#speakers-list');
const moreSpeakers = document.querySelector('#all-speakers');
let moreSpeakersToggle = false;

function showSpeakers(allowSpeakers) {
  let i = 0;
  Object.values(speakers).every((speaker) => {
    if (i > allowSpeakers) {
      return false;
    }
    speakersList.appendChild(speakerTemplate(speaker));
    i += 1;
    return true;
  });
}

moreSpeakers.addEventListener('click', () => {
  speakersList.innerHTML = '';
  if (moreSpeakersToggle) {
    showSpeakers(1);
    document.querySelector('[class~=btn-more]').innerHTML = 'More';
    document.querySelector('[class~=rotate]').classList.remove('pi');
    document.querySelector('[class~=rotate]').setAttribute('viewBox', '-6 -6 32 32');
  } else {
    showSpeakers(Object.keys(speakers).length);
    document.querySelector('[class~=btn-more]').innerHTML = 'Less';
    document.querySelector('[class~=rotate]').classList.add('pi');
    document.querySelector('[class~=rotate]').setAttribute('viewBox', '-6 -10 32 32');
  }
  moreSpeakersToggle = !moreSpeakersToggle;
});

showSpeakers(1);