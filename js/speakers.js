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
    'scooby.jpg',
  ),
  speaker(
    'Cardi-O',
    'The only singer that will ever make you feel exhausted',
    'Walk walk walk walk walk walk... or so goes the most epic hit that this great singer has ever made, behold.',
    'cardi-o.png',
  ),
  speaker(
    'Dwayne (The Rock) Johnson',
    'Actor that is moved by nothing',
    'This man, standing at "a lot of feet tall", weighs about two tons, and his seriousness increases tenfold when he gets inside any vehicle.',
    'rock.gif',
  ),
  speaker(
    'The Grim Reaper',
    'Comes and goes as he pleases, and as he doesn\'t',
    'The only thing standing between you and the next life, will you be able to convince him to let you live a little longer?',
    'reaper.jpg',
  ),
  speaker(
    'Daniel Malo',
    '',
    'Has coded every single program you have encountered (and haven\'t) in your entire life, probably.',
    'daniel.jpeg',
  ),
  speaker(
    'Sushi',
    'Everybody\'s favorite food',
    'Works everywhere, in everything.',
    'sushi.jpg',
  ),
  speaker(
    'Empire State Building',
    'The fattest (tallest but sideways) building ever built',
    'Word says that the workers that built this giant were having lunch at a steel bar that poked outward, 120 m above street level or something crazy like that.',
    'empire-state.jpg',
  ),
  speaker(
    'Evil Twin of The Grim Reaper',
    'He likes to make fun of his twin brother',
    'He\'s going to, ok?',
    'reaper-twin.jpg',
  ),
];

export function speakerTemplate(speaker) {
  const speakerLi = document.createElement('li');
  speakerLi.classList.add('speaker');
  speakerLi.setAttribute('name', speaker.name.replaceAll(' ', '-'));

  const img = document.createElement('img');
  img.setAttribute('src', `capstone-one/assets/images/${speaker.photo}`);
  img.setAttribute('alt', `${speaker.name}'s photo.`);

  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.innerHTML = speaker.name;
  h3.setAttribute('tabindex', '0');
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