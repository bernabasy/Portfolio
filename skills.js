// Toggle containers
const frontendContainer = document.querySelector('#frontend-container');
const frontendToggle = document.querySelector('#frontend-toggle');
const frontendHeader = document.querySelector('#frontend-header');

const backendContainer = document.querySelector('#backend-container');
const backendToggle = document.querySelector('#backend-toggle');
const backendHeader = document.querySelector('#backend-header');

const practicesContainer = document.querySelector('#practices-container');
const practicesToggle = document.querySelector('#practices-toggle');
const practicesHeader = document.querySelector('#practices-header');

const skillData = {
  frontend: [
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      name: 'React',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      name: 'Redux',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      name: 'JavaScript',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      name: 'TypeScript',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      name: 'HTML5',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      name: 'CSS3',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
      name: 'Bootstrap',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      name: 'Jest',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
      name: 'Webpack',
    },
  ],
  backend: [
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
      name: 'Ruby on Rails',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
      name: 'PostgreSQL',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
      name: 'Ruby',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
      name: 'Rspec',
    },
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      name: 'Node',
    },
  ],
  practices: [
    {
      imgUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
      name: 'Git Flow',
    },
    {
      imgUrl: 'image/tw.png',
      name: 'Test Driven',
    },
    {
      imgUrl: 'image/tw.png',
      name: 'Agile Development',
    },
    {
      imgUrl: 'image/tw.png',
      name: 'Project Management',
    },
    {
      imgUrl: 'image/tw.png',
      name: 'Remote Collaboration',
    },
  ],
};

// Helper Functions
// -------------------------------------------------------------------------

function makeSkillItem(item) {
  const li = document.createElement('li');
  li.classList.add('skill__item');
  const img = document.createElement('img');
  img.classList.add('skill__logo');
  img.alt = item.name;
  img.src = item.imgUrl;
  const p = document.createElement('p');
  p.classList.add('skill__name');
  p.innerText = item.name;

  li.appendChild(img);
  li.appendChild(p);
  return li;
}

function appendSkillItems(container, itemList) {
  container.textContent = '';
  itemList.forEach((item) => {
    const element = makeSkillItem(item);
    container.appendChild(element);
  });
}

function toggleDropDown(container, header, btn) {
  container.classList.toggle('hidden');
  header.classList.toggle('closed');
  btn.querySelector('.skill__toggle-arrow').classList.toggle('upward');
}

// Toggle dropdown buttons
frontendToggle.addEventListener('click', () => toggleDropDown(frontendContainer, frontendHeader, frontendToggle));
backendToggle.addEventListener('click', () => toggleDropDown(backendContainer, backendHeader, backendToggle));
practicesToggle.addEventListener('click', () => toggleDropDown(practicesContainer, practicesHeader, practicesToggle));

const skillList = skillData;

appendSkillItems(frontendContainer, skillList.frontend);
appendSkillItems(backendContainer, skillList.backend);
appendSkillItems(practicesContainer, skillList.practices);