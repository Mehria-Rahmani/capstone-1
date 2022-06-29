const speakers = [
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/51737508?v=4',
    name: 'Tacettin Kustu',
    organization: 'Full Stack Developer at Microverse',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image:
      'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg',
    name: 'Elon Musk',
    organization: 'CEO of Tesla',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image:
      'https://www.ortakdurak.com/wp-content/uploads/2021/06/Jeff-Bezos.png',
    name: 'Jeff Bezos',
    organization: 'CEO of Amazon',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: 'https://i1.sndcdn.com/avatars-000099702312-agl30n-t500x500.jpg',
    name: 'Mark Zuckerberg',
    organization: 'CEO of Facebook',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image:
      'https://eshop.macsales.com/blog/wp-content/uploads/2015/03/TimCookTwitter.jpg',
    name: 'Tim Cook',
    organization: 'CEO of Apple',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image:
      'https://www.glusea.com/wp-content/uploads/2020/11/M-FEJMZ0_400x400.jpg',
    name: 'Sunder Pichai',
    organization: 'CEO of Google',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const featuredSpeakers = document.querySelector('.speakers-list');
const speakersButton = document.querySelector('.speakers-btn');

function loadSpeakers() {
  speakers.forEach((speaker, index) => {
    const speakerContainer = document.createElement('article');
    speakerContainer.className = index > 1 ? 'flex-row-center speakers-display' : 'flex-row-center';
    featuredSpeakers.appendChild(speakerContainer);

    const speakerImage = document.createElement('img');
    speakerImage.src = `${speaker.image}`;
    speakerImage.alt = `Image of ${speaker.name}`;
    speakerImage.className = 'speaker-image';
    speakerContainer.appendChild(speakerImage);

    const speakerInfos = document.createElement('div');
    speakerInfos.className = 'speaker-infos';
    speakerContainer.appendChild(speakerInfos);

    const speakerName = document.createElement('h3');
    speakerName.className = 'light-black heading-medium speaker-heading';
    speakerName.textContent = `${speaker.name}`;
    speakerInfos.appendChild(speakerName);

    const speakerOrganization = document.createElement('h4');
    speakerOrganization.className = 'dark-orange';
    speakerOrganization.textContent = `${speaker.organization}`;
    speakerInfos.appendChild(speakerOrganization);

    const speakerBackground = document.createElement('h4');
    speakerBackground.className = 'light-black';
    speakerBackground.textContent = `${speaker.background}`;
    speakerInfos.appendChild(speakerBackground);
  });
}

function toggleSpeakers() {
  const displayedItems = document.querySelectorAll('.speakers-display');
  const toggledItems = document.querySelectorAll('.toggle');

  if (toggledItems.length === 0) {
    displayedItems.forEach((item) => {
      item.className = 'flex-row-center toggle';
    });
    speakersButton.textContent = 'LESS';
    const arrow = document.createElement('i');
    arrow.className = 'fas fa-angle-up down-arrow';
    speakersButton.appendChild(arrow);
  }
  if (toggledItems.length) {
    toggledItems.forEach((item) => {
      item.className = 'flex-row-center speakers-display';
      speakersButton.textContent = 'MORE';
      const arrow = document.createElement('i');
      arrow.className = 'fas fa-angle-down down-arrow';
      speakersButton.appendChild(arrow);
    });
  }
}

featuredSpeakers.addEventListener('DOMContentLoaded', loadSpeakers());
speakersButton.addEventListener('onclick', toggleSpeakers);

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();
closeNav();
