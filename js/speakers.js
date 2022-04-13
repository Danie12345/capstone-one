const speaker = (name, titles, works, photo) => {
  const obj = {
    name, titles, works, photo,
  };
  return obj;
};

export const speakers = [
  speaker(
    'Scooby',
    'Professor at Harvard Detective School',
    'Scoob has solved countless mysteries along his journey with the gang, even capturing a metaphysical ghost once or twice in his time...',
    'assets/images/pattern_bg.png',
  ),
  speaker(
    'Cardi-O',
    'The only singer that will ever make you feel exhausted',
    'Walk walk walk walk walk walk... or so goes the most epic hit that this great singer has ever made, behold.',
    'assets/images/pattern_bg.png',
  ),
  speaker(
    'Dwayne (The Rock) Johnson',
    'Actor that is moved by nothing',
    'This man, standing at "a lot of feet tall", weighs about two tons, and his weight increases tenfold when he gets inside any vehicle.',
    'assets/images/pattern_bg.png',
  ),
  speaker(
    'The Grim Reaper',
    'Comes and goes as he pleases, and as he doesn\'t',
    'The only thing standing between you and the next life, will you be able to convince him to let you live a little longer?',
    'assets/images/pattern_bg.png',
  ),
  speaker(
    'Daniel Malo',
    '',
    'Has coded every single program you have encountered (and haven\'t) in your entire life, probably.',
    'assets/images/pattern_bg.png',
  ),
  speaker(
    'Sushi',
    'Everybody\'s favorite food',
    'Works everywhere, in everything.',
    'assets/images/pattern_bg.png',
  ),
  speaker(
    'Empire State Building',
    'Comes and goes as he pleases, and as he doesn\'t',
    'The only thing standing between you and the next life, will you be able to convince him to let you live a little longer?',
    'assets/images/pattern_bg.png',
  ),
  speaker(
    'The Grim Reaper',
    'Comes and goes as he pleases, and as he doesn\'t',
    'The only thing standing between you and the next life, will you be able to convince him to let you live a little longer?',
    'assets/images/pattern_bg.png',
  ),
];

export function speakerTemplate(speaker) {
  const speakerLi = document.createElement('li');
  speakerLi.classList.add('speaker');
  speakerLi.setAttribute('name', speaker.name.replaceAll(' ', '-'));

  const img = document.createElement('img');
  img.setAttribute('src', speaker.photo);
  img.setAttribute('alt', `${speaker.name}'s photo.`);

  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.innerHTML = speaker.name;
  const small = document.createElement('small');
  small.innerHTML = speaker.titles;
  const hr = document.createElement('hr');
  hr.classList.add('hr');
  const span = document.createElement('span');
  span.innerHTML = speaker.works;
  div.appendChild(h3);
  div.appendChild(small);
  div.appendChild(hr);
  div.appendChild(span);

  speakerLi.appendChild(img);
  speakerLi.appendChild(div);
  return speakerLi;
}