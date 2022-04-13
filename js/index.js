import partners from './partners.js';
import license from './license.js';
import { speakers, speakerTemplate } from './speakers.js';

const speakersList = document.querySelector('#speakers-list');
const moreSpeakers = document.querySelector('#all-speakers');
let moreSpeakersToggle = false;
const burger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('.close-menu');
let toggleDesktop = false;

function showSpeakers(allowSpeakers) {
  let i = 0;
  speakersList.innerHTML = '';
  speakers.every((speaker) => {
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
  burger.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  document.querySelector('.nav-options').classList.toggle('active');
  burger.classList.toggle('active');
});

moreSpeakers.addEventListener('click', () => {
  speakersList.innerHTML = '';
  if (moreSpeakersToggle) {
    showSpeakers(1);
    document.querySelector('[class~=btn-more]').innerHTML = 'More';
    document.querySelector('[class~=rotate]').classList.remove('pi');
  } else {
    showSpeakers(speakers.length);
    document.querySelector('[class~=btn-more]').innerHTML = 'Less';
    document.querySelector('[class~=rotate]').classList.add('pi');
  }
  moreSpeakersToggle = !moreSpeakersToggle;
});

Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}, false;

function resizeDesktop() {
  if (window.innerWidth >= 768 && !toggleDesktop) {
    partners.appendAfter(document.getElementById('speakers'));
    license.appendAfter(partners);
    moreSpeakersToggle = false;
    moreSpeakers.dispatchEvent(new Event('click'));
    toggleDesktop = !toggleDesktop;
  } else if (window.innerWidth < 768 && toggleDesktop) {
    document.querySelector('body').removeChild(partners);
    document.querySelector('body').removeChild(license);
    toggleDesktop = !toggleDesktop;
  }
}

resizeDesktop();
window.addEventListener('load', window.innerWidth < 768 ? showSpeakers(1) : showSpeakers(speakers.length));
window.addEventListener('resize', resizeDesktop);