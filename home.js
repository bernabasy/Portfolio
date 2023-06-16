const nav = document.querySelector('.nav-items');
const humburger1 = document.querySelector('.humburger');
humburger1.addEventListener('click', () => {
  humburger1.classList.toggle('active');
  nav.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  humburger1.classList.remove('active');
  nav.classList.remove('active');
}));

const projectsCard = [
  {
    id: '1',
    image: 'image/budget.png',
    tittle: 'Budget App',
    infoProject: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'Budget management web application empowering users to effortlessly track and organize expenses while providing seamless functionality for viewing, adding, and deleting categories and purchases.',
    technologies: ['Ruby on rails', 'Bootstrap', 'Jsx'],
    linkLiveVersion: 'https://budget-app-rails-9xci.onrender.com/',
    linkSource: 'https://github.com/bernabasy/Budget-app',
  },
  {
    id: '2',
    image: 'image/Screenshot-Detail-Desktop.png',
    tittle: 'Crypto-Coin',
    infoProject: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'Web app that gives us real-time data on cryptocurrency. Displays a list of Cryptos, including their name, image, average price, todays lowest price today highest price, and algorithm.',
    technologies: ['React', 'Redux', 'Bootstrap', 'Jsx'],
    linkLiveVersion: 'https://cryptocurrency-news.onrender.com/',
    linkSource: 'https://github.com/bernabasy/Crypto-Coin-Market-Cap',
  },
  {
    id: '3',
    image: 'image/to-do-list.png',
    tittle: 'To-Do List',
    infoProject: ['MICROVERSE', 'Front-end', '2022'],
    description: 'An educational project which allows the user to enter, delete and edit tasks. It used local storage to store data. Moreover, to enhance user experience, tasks can be edited, deleted, and removed when completed.',
    technologies: ['html', 'Webpack', 'css', 'javaScript'],
    linkLiveVersion: 'https://to-do-list-ochre-mu.vercel.app/',
    linkSource: 'https://github.com/bernabasy/ToDo_list',
  },

  {
    id: '4',
    image: 'image/world-conference.png',
    tittle: 'world conference alerts',
    infoProject: ['MICROVERSE', 'Front-end', '2022'],
    description: 'User-friendly informative website that shows world conference alerts. Provides users with all conference information, including dates, times, locations, and speakers.',
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: 'https://bernabasy.github.io/World-conference-alerts/',
    linkSource: 'https://github.com/bernabasy/World-conference-alerts',
  },

  {
    id: '5',
    image: 'image/book.png',
    tittle: 'Bookstore',
    infoProject: ['MICROVERSE', 'Front-end', '2023'],
    description: 'A Minimum Viable Product (MVP) website built with React and Redux. It allows users to: Display a list of books, Add a book, Remove a selected book, The Bookstore project was created to demonstrate my skills in React, Redux, and web development in general. The project is still under development.',
    technologies: ['React', 'Redux', 'CSS', 'Jsx'],
    linkLiveVersion: 'https://bernabasy-bookstore.onrender.com/',
    linkSource: 'https://github.com/bernabasy/Bookstore',
  },
];

const cardsSection = document.querySelector('.work-card');

const createProjects = () => {
  projectsCard.forEach((project) => {
    const card1 = document.createElement('div');
    card1.classList.add('works');
    cardsSection.appendChild(card1);

    if (card1 % 2 === 1) {
      card1.classList.add('works-2');
    }

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    card1.appendChild(imgContainer);

    const imgCard = document.createElement('img');
    imgCard.classList.add('image');
    imgCard.setAttribute('src', project.image);
    imgCard.setAttribute('alt', 'projects');
    imgContainer.appendChild(imgCard);

    const infoCard = document.createElement('div');
    infoCard.classList.add('projects');
    card1.appendChild(infoCard);

    const tittleCard = document.createElement('h2');
    tittleCard.classList.add('project-tittle');
    tittleCard.innerText = project.tittle;
    infoCard.appendChild(tittleCard);

    const clientRole = document.createElement('ul');
    clientRole.classList.add('project-info');
    infoCard.appendChild(clientRole);

    project.infoProject.splice(1, 0, 'image/Counter.png');
    project.infoProject.splice(3, 0, 'image/Counter.png');

    project.infoProject.forEach((item, index) => {
      const itemInfo = document.createElement('li');
      clientRole.appendChild(itemInfo);

      if (index === 0) {
        itemInfo.classList.add('client');
      }

      if (item === 'image/Counter.png') {
        const itemImg = document.createElement('img');
        itemImg.classList.add('imgPoint');
        itemImg.setAttribute('src', item);
        itemImg.setAttribute('alt', 'point');
        itemInfo.appendChild(itemImg);
      } else {
        itemInfo.innerText = item;
      }
    });

    const textCard = document.createElement('p');
    textCard.classList.add('primary-text');
    textCard.innerText = project.description;
    infoCard.appendChild(textCard);

    const technologyCard = document.createElement('ul');
    technologyCard.classList.add('categories');
    infoCard.appendChild(technologyCard);

    project.technologies.forEach((item, index) => {
      const technology = document.createElement('li');
      technology.innerText = item;
      technologyCard.appendChild(technology);

      if (index === 1) {
        technology.classList.add('ruby');
      }
    });

    const seeProject = document.createElement('button');
    seeProject.classList.add('button2');
    seeProject.innerText = 'See Project';
    seeProject.id = project.id;
    infoCard.appendChild(seeProject);
  });
};

createProjects();

const modalsSection = document.querySelector('.modal-container');
const createModal = () => {
  projectsCard.forEach((modal) => {
    const cardModal = document.createElement('div');
    cardModal.classList.add('overlay-card');
    cardModal.classList.add('hide');
    modalsSection.appendChild(cardModal);

    const modalNav = document.createElement('div');
    modalNav.classList.add('modal-nav');
    cardModal.appendChild(modalNav);

    const tittleModal = document.createElement('h2');
    tittleModal.classList.add('project-tittle', 'modal12');
    tittleModal.innerText = modal.tittle;
    modalNav.appendChild(tittleModal);

    const cancelModal = document.createElement('a');
    cancelModal.setAttribute('href', '#');
    cancelModal.classList.add('close');
    modalNav.appendChild(cancelModal);

    const cancelImg = document.createElement('img');
    cancelImg.setAttribute('src', 'image/pop-close.png');
    cancelImg.setAttribute('alt', 'pop-close icone');
    cancelModal.appendChild(cancelImg);

    const clientRoleModal = document.createElement('ul');
    clientRoleModal.classList.add('project-info', 'modal28', 'modal12');
    cardModal.appendChild(clientRoleModal);

    modal.infoProject.forEach((item, index) => {
      const elementModal = document.createElement('li');
      clientRoleModal.appendChild(elementModal);

      if (index === 0) {
        elementModal.classList.add('client');
      }

      if (item === 'image/Counter.png') {
        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', item);
        imgItem.setAttribute('alt', 'point');
        elementModal.appendChild(imgItem);
      } else {
        elementModal.innerText = item;
      }
    });

    const imgModal = document.createElement('img');
    imgModal.classList.add('image', 'img-modal', 'modal12');
    imgModal.setAttribute('src', modal.image);
    imgModal.setAttribute('alt', 'project image');
    cardModal.appendChild(imgModal);

    const modalInfo = document.createElement('div');
    modalInfo.classList.add('modal-card-info');
    cardModal.appendChild(modalInfo);

    const textmodal = document.createElement('p');
    textmodal.classList.add('primary-text', 'modal-text', 'modal12');
    textmodal.innerText = modal.description;
    modalInfo.appendChild(textmodal);

    const technologiesModal = document.createElement('div');
    technologiesModal.classList.add('modal-tecnologies');
    modalInfo.appendChild(technologiesModal);

    const languages = document.createElement('ul');
    languages.classList.add('categories', 'categ-modal');
    technologiesModal.appendChild(languages);

    modal.technologies.push('github', 'Bootstraps');
    modal.technologies.splice(1, 1);

    modal.technologies.forEach((lang, index) => {
      const langModal = document.createElement('li');
      langModal.innerText = lang;
      languages.appendChild(langModal);

      if (index > 2) {
        langModal.classList.add('ruby');
      }
    });

    const imgDevider = document.createElement('img');
    imgDevider.classList.add('img-devider');
    imgDevider.setAttribute('src', 'image/devider-icon.png');
    imgDevider.setAttribute('alt', 'devider icon');
    technologiesModal.appendChild(imgDevider);

    const btnsModal = document.createElement('div');
    btnsModal.classList.add('btn-modal');
    technologiesModal.appendChild(btnsModal);

    const btnSee = document.createElement('a');
    btnSee.classList.add('button2', 'btn-link');
    btnSee.setAttribute('href', modal.linkLiveVersion);
    btnSee.innerText = 'See live';
    btnsModal.appendChild(btnSee);

    const seeIcon = document.createElement('img');
    seeIcon.classList.add('icon-btn');
    seeIcon.setAttribute('src', 'image/live.png');
    seeIcon.setAttribute('alt', 'link liveVersion');
    btnSee.appendChild(seeIcon);

    const btnSource = document.createElement('a');
    btnSource.classList.add('button2', 'btn-link');
    btnSource.setAttribute('href', modal.linkSource);
    btnSource.innerText = 'See Source';
    btnsModal.appendChild(btnSource);

    const sourceIcon = document.createElement('img');
    sourceIcon.classList.add('icon-btn');
    sourceIcon.setAttribute('src', 'image/github.png');
    sourceIcon.setAttribute('alt', 'link source');
    btnSource.appendChild(sourceIcon);
  });
};

createModal();

const modal = document.querySelectorAll('.overlay-card');

cardsSection.addEventListener('click', (e) => {
  if (e.target.textContent === 'See Project') {
    const { id } = e.target;
    modal[id - 1].classList.remove('hide');
    modalsSection.classList.remove('hide');
  }
});

modalsSection.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('close')) {
    modalsSection.classList.add('hide');
    e.target.parentElement.parentElement.parentElement.classList.add('hide');
  } else if (e.target.classList.contains('modal-container')) {
    modalsSection.classList.add('hide');
    modal.forEach((element) => element.classList.add('hide'));
  }
});

const form = document.querySelector('.contacte-form');
const word = document.querySelector('.msg');
const Email = document.querySelector('.mail');
const userName = document.querySelector('.name');
const userMsg = document.querySelector('.messge');
form.addEventListener('submit', (e) => {
  if (Email.value === Email.value.toLowerCase()) {
    word.textContent = '';
  } else {
    e.preventDefault();
    word.textContent = 'The email must be in lowercase';
  }
});

form.addEventListener('input', () => {
  const contactForm = {
    name: userName.value,
    email: Email.value,
    message: userMsg.value,
  };

  localStorage.setItem('inputForm', JSON.stringify(contactForm));
});

window.onload = () => {
  let savedFormData = localStorage.getItem('inputForm');

  savedFormData = JSON.parse(savedFormData);
  form.reset();

  // Check if the form data object is found on localStorage

  if (savedFormData) {
  // populate inputs values if data was found
    const Email2 = document.querySelector('.mail');
    const userName2 = document.querySelector('.name');
    const userMsg2 = document.querySelector('.messge');

    // ex: nameInput.value = savedFormData.name
    Email2.value = savedFormData.email;
    userName2.value = savedFormData.name;
    userMsg2.value = savedFormData.message;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.submit();
  form.reset();
});
