import partners from './partners.js';
import license from './license.js';
import { speakers, speakerTemplate } from './speakers.js';

const speakersList = document.querySelector('#speakers-list');
const moreSpeakers = document.querySelector('#all-speakers');
let moreSpeakersToggle = false;
const burger = document.querySelector('#hamburger');
let toggleDesktop = false;

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

burger.addEventListener('click', () => {
  document.querySelector('.nav-options').classList.toggle('active');
});

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

function resizeDesktop() {
  if (window.innerWidth >= 768 && !toggleDesktop) {
    partners.appendAfter(document.getElementById('speakers'));
    license.appendAfter(partners);
    toggleDesktop = !toggleDesktop;
  } else if (window.innerWidth < 768 && toggleDesktop) {
    document.querySelector('body').removeChild(partners);
    document.querySelector('body').removeChild(license);
    toggleDesktop = !toggleDesktop;
  }
}

resizeDesktop();
window.addEventListener('resize', resizeDesktop);