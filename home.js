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
    image: 'image/yoga.png',
    image2: 'image/left-big-img-for-tonic.png',
    tittle: 'Tonic',
    infoProject: ['CANOPY', '• Back End Dev', '• 2015', 'CANOPY', '• Back End Dev', '• 2015'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://bernabasy.github.io/poritipholio/',
    linkSource: 'https://github.com/bernabasy/poritipholio',
  },

  {
    id: '2',
    image: 'image/multi.png',
    image2: 'image/desiktop-images/Portfolio-art.desktop.png',
    tittle: 'Multi-Post Stories',
    infoProject: ['CANOPY', '• Back End Dev', '• 2015', 'FACEBOOK', '• Full Stack Dev', '• 2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://bernabasy.github.io/poritipholio/',
    linkSource: 'https://github.com/bernabasy/poritipholio',
  },

  {
    id: '3',
    image: 'image/yoga.png',
    image2: 'image/desiktop-images/image-for-3rd-conitainer-big.png',
    tittle: 'Tonic',
    tittle2: 'Facebook 360',
    infoProject: ['CANOPY', '• Back End Dev', '• 2015', 'FACEBOOK', '• Full Stack Dev', '• 2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://bernabasy.github.io/poritipholio/',
    linkSource: 'https://github.com/bernabasy/poritipholio',
  },

  {
    id: '4',
    image: 'image/art.png',
    image2: 'image/desiktop-images/desktop-vertion-big-image-for-c-4.png',
    tittle: 'Uber Navigation',
    infoProject: ['CANOPY', '• Back End Dev', '• 2015', 'Uber', '• Lead Developer', '• 2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://bernabasy.github.io/poritipholio/',
    linkSource: 'https://github.com/bernabasy/poritipholio',
  },
];

let counter = -1;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.popbtn1').forEach((item) => {
    item.addEventListener('click', () => {
      counter += 1;
      const blur = document.getElementById('blur1');
      blur.classList.toggle('active');
      const div1 = document.createElement('div');
      div1.classList.add('popdiv1');
      div1.setAttribute = 25;

      const div2 = document.createElement('div');
      div2.classList.add('popdiv2');
      div2.textContent = projectsCard[0].tittle;
      div1.appendChild(div2);

      const ul2 = document.createElement('ul');
      ul2.classList.add('ul-pop1');
      div1.appendChild(ul2);
      for (let i = 0; i < projectsCard[0].infoProject.length; i += 1) {
        const li2 = document.createElement('li');
        li2.classList.add('li-pop1');
        ul2.appendChild(li2);
        li2.textContent = projectsCard[0].infoProject[i];
      }

      const element1 = document.querySelector('body');
      element1.appendChild(div1);

      const img = document.createElement('img');
      img.classList.add('event-img');
      img.setAttribute('src', projectsCard[2].image2);
      img.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img.setAttribute('width', 'auto');
      img.setAttribute('height', '586');
      div1.appendChild(img);

      const img2 = document.createElement('img');
      img2.classList.add('event-img2');
      img2.setAttribute('src', projectsCard[0].image2);
      img2.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img2.setAttribute('width', 'auto');
      img2.setAttribute('height', '586');
      div1.appendChild(img2);

      const div3big = document.createElement('div');
      div3big.classList.add('did3bigpopup');
      div1.appendChild(div3big);

      const text = document.createElement('div');
      text.classList.add('textpoup');
      text.textContent = projectsCard[0].description;
      div3big.appendChild(text);

      const div3 = document.createElement('div');
      div3.classList.add('did3popup');
      div3big.appendChild(div3);

      const ul = document.createElement('ul');
      ul.classList.add('ul-pop');
      div3.appendChild(ul);
      for (let i = 0; i < projectsCard[0].technologies.length; i += 1) {
        const li = document.createElement('li');
        li.classList.add('li-pop');
        ul.appendChild(li);
        li.textContent = projectsCard[0].technologies[i];
      }
      const ul3 = document.createElement('ul');
      ul3.classList.add('ul-pop0');
      div3.appendChild(ul3);
      for (let i = 0; i < projectsCard[0].technologies2.length; i += 1) {
        const li3 = document.createElement('li');
        li3.classList.add('li-pop');
        ul3.appendChild(li3);
        li3.textContent = projectsCard[0].technologies2[i];
      }
      const div4 = document.createElement('div');
      div4.classList.add('did4popup');
      div3.appendChild(div4);

      const seeIcon = document.createElement('img');
      seeIcon.classList.add('icon-btn');
      seeIcon.setAttribute('src', 'image/github.png');
      seeIcon.setAttribute('alt', 'link liveVersion');
      seeIcon.setAttribute('height', '12');

      const seeIcon2 = document.createElement('img');
      seeIcon2.classList.add('icon-btn');
      seeIcon2.setAttribute('src', 'image/live.png');
      seeIcon2.setAttribute('alt', 'sorcevertion');
      seeIcon2.setAttribute('height', '12');

      const btnPop = document.createElement('button');
      btnPop.classList.add('btn-pop');
      div4.appendChild(btnPop);
      const aBtn = document.createElement('a');
      aBtn.href = projectsCard[0].linkLiveVersion;
      btnPop.appendChild(aBtn);
      btnPop.appendChild(seeIcon2);
      aBtn.textContent = 'SeeLive  ';

      const ctnPop = document.createElement('button');
      ctnPop.classList.add('btn-pop');
      div4.appendChild(ctnPop);
      const dBtn = document.createElement('a');
      dBtn.href = projectsCard[0].linkSource;
      ctnPop.appendChild(dBtn);
      ctnPop.appendChild(seeIcon);
      dBtn.textContent = 'SeeSource  ';

      const closeSign = document.createElement('p');
      closeSign.classList.add('closesign');
      div2.appendChild(closeSign);
      closeSign.textContent = 'X';
      closeSign.addEventListener('click', () => {
        document.getElementsByClassName('popdiv1')[counter].style.display = 'none';
        const blur = document.getElementById('blur1');
        blur.classList.toggle('active');
      });
    });
  });

  // new popup class 2

  document.querySelectorAll('.popbtn2').forEach((item) => {
    item.addEventListener('click', () => {
      counter += 1;
      const blur = document.getElementById('blur1');
      blur.classList.toggle('active');
      const div1 = document.createElement('div');
      div1.classList.add('popdiv1');
      div1.setAttribute = 25;

      const div2 = document.createElement('div');
      div2.classList.add('popdiv2');
      div2.textContent = projectsCard[1].tittle;
      div1.appendChild(div2);

      const ul2 = document.createElement('ul');
      ul2.classList.add('ul-pop1');
      div1.appendChild(ul2);
      for (let i = 0; i < projectsCard[1].infoProject.length; i += 1) {
        const li2 = document.createElement('li');
        li2.classList.add('li-pop1');
        ul2.appendChild(li2);
        li2.textContent = projectsCard[1].infoProject[i];
      }

      const element1 = document.querySelector('body');
      element1.appendChild(div1);

      const img = document.createElement('img');
      img.classList.add('event-img');
      img.setAttribute('src', projectsCard[1].image);
      img.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img.setAttribute('width', 'auto');
      img.setAttribute('height', '586');
      div1.appendChild(img);

      const img2 = document.createElement('img');
      img2.classList.add('event-img2');
      img2.setAttribute('src', projectsCard[1].image2);
      img2.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img2.setAttribute('width', 'auto');
      img2.setAttribute('height', '586');
      div1.appendChild(img2);

      const div3big = document.createElement('div');
      div3big.classList.add('did3bigpopup');
      div1.appendChild(div3big);

      const text = document.createElement('div');
      text.classList.add('textpoup');
      text.textContent = projectsCard[0].description;
      div3big.appendChild(text);

      const div3 = document.createElement('div');
      div3.classList.add('did3popup');
      div3big.appendChild(div3);

      const ul = document.createElement('ul');
      ul.classList.add('ul-pop');
      div3.appendChild(ul);
      for (let i = 0; i < projectsCard[1].technologies.length; i += 1) {
        const li = document.createElement('li');
        li.classList.add('li-pop');
        ul.appendChild(li);
        li.textContent = projectsCard[1].technologies[i];
      }
      const ul3 = document.createElement('ul');
      ul3.classList.add('ul-pop0');
      div3.appendChild(ul3);
      for (let i = 0; i < projectsCard[0].technologies2.length; i += 1) {
        const li3 = document.createElement('li');
        li3.classList.add('li-pop');
        ul3.appendChild(li3);
        li3.textContent = projectsCard[0].technologies2[i];
      }
      const div4 = document.createElement('div');
      div4.classList.add('did4popup');
      div3.appendChild(div4);

      const seeIcon = document.createElement('img');
      seeIcon.classList.add('icon-btn');
      seeIcon.setAttribute('src', 'image/github.png');
      seeIcon.setAttribute('alt', 'link liveVersion');
      seeIcon.setAttribute('height', '12');

      const seeIcon2 = document.createElement('img');
      seeIcon2.classList.add('icon-btn');
      seeIcon2.setAttribute('src', 'image/live.png');
      seeIcon2.setAttribute('alt', 'sorcevertion');
      seeIcon2.setAttribute('height', '12');

      const btnPop = document.createElement('button');
      btnPop.classList.add('btn-pop');
      div4.appendChild(btnPop);
      const aBtn = document.createElement('a');
      aBtn.href = projectsCard[0].linkLiveVersion;
      btnPop.appendChild(aBtn);
      btnPop.appendChild(seeIcon2);
      aBtn.textContent = 'SeeLive  ';

      const ctnPop = document.createElement('button');
      ctnPop.classList.add('btn-pop');
      div4.appendChild(ctnPop);
      const dBtn = document.createElement('a');
      dBtn.href = projectsCard[0].linkSource;
      ctnPop.appendChild(dBtn);
      ctnPop.appendChild(seeIcon);
      dBtn.textContent = 'SeeSource  ';

      const closeSign = document.createElement('p');
      closeSign.classList.add('closesign');
      div2.appendChild(closeSign);
      closeSign.textContent = 'X';
      closeSign.addEventListener('click', () => {
        document.getElementsByClassName('popdiv1')[counter].style.display = 'none';
        const blur = document.getElementById('blur1');
        blur.classList.toggle('active');
      });
    });
  });

  // new poup class 3

  document.querySelectorAll('.popbtn3').forEach((item) => {
    item.addEventListener('click', () => {
      counter += 1;
      const blur = document.getElementById('blur1');
      blur.classList.toggle('active');
      const div1 = document.createElement('div');
      div1.classList.add('popdiv1');
      div1.setAttribute = 25;

      const apender1 = document.createElement('div');
      apender1.classList.add('apender1');
      div1.appendChild(apender1);

      const div2 = document.createElement('div');
      div2.classList.add('popdiv2mob');
      div2.textContent = projectsCard[2].tittle;
      apender1.appendChild(div2);

      const div2big = document.createElement('div');
      div2big.classList.add('popdiv2big');
      div2big.textContent = projectsCard[2].tittle2;
      apender1.appendChild(div2big);

      const closeSign = document.createElement('p');
      closeSign.classList.add('closesign');
      apender1.appendChild(closeSign);
      closeSign.textContent = 'X';
      closeSign.addEventListener('click', () => {
        document.getElementsByClassName('popdiv1')[counter].style.display = 'none';
        const blur = document.getElementById('blur1');
        blur.classList.toggle('active');
      });

      const ul2 = document.createElement('ul');
      ul2.classList.add('ul-pop1');
      div1.appendChild(ul2);
      for (let i = 0; i < projectsCard[2].infoProject.length; i += 1) {
        const li2 = document.createElement('li');
        li2.classList.add('li-pop1');
        ul2.appendChild(li2);
        li2.textContent = projectsCard[2].infoProject[i];
      }

      const element1 = document.querySelector('body');
      element1.appendChild(div1);

      const img = document.createElement('img');
      img.classList.add('event-img');
      img.setAttribute('src', projectsCard[0].image);
      img.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img.setAttribute('width', 'auto');
      img.setAttribute('height', '586');
      div1.appendChild(img);

      const img2 = document.createElement('img');
      img2.classList.add('event-img2');
      img2.setAttribute('src', projectsCard[2].image2);
      img2.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img2.setAttribute('width', 'auto');
      img2.setAttribute('height', '586');
      div1.appendChild(img2);

      const div3big = document.createElement('div');
      div3big.classList.add('did3bigpopup');
      div1.appendChild(div3big);

      const text = document.createElement('div');
      text.classList.add('textpoup');
      text.textContent = projectsCard[0].description;
      div3big.appendChild(text);

      const div3 = document.createElement('div');
      div3.classList.add('did3popup');
      div3big.appendChild(div3);

      const ul = document.createElement('ul');
      ul.classList.add('ul-pop');
      div3.appendChild(ul);
      for (let i = 0; i < projectsCard[0].technologies.length; i += 1) {
        const li = document.createElement('li');
        li.classList.add('li-pop');
        ul.appendChild(li);
        li.textContent = projectsCard[0].technologies[i];
      }
      const ul3 = document.createElement('ul');
      ul3.classList.add('ul-pop0');
      div3.appendChild(ul3);
      for (let i = 0; i < projectsCard[0].technologies2.length; i += 1) {
        const li3 = document.createElement('li');
        li3.classList.add('li-pop');
        ul3.appendChild(li3);
        li3.textContent = projectsCard[0].technologies2[i];
      }
      const div4 = document.createElement('div');
      div4.classList.add('did4popup');
      div3.appendChild(div4);

      const seeIcon = document.createElement('img');
      seeIcon.classList.add('icon-btn');
      seeIcon.setAttribute('src', 'image/github.png');
      seeIcon.setAttribute('alt', 'link liveVersion');
      seeIcon.setAttribute('height', '12');

      const seeIcon2 = document.createElement('img');
      seeIcon2.classList.add('icon-btn');
      seeIcon2.setAttribute('src', 'image/live.png');
      seeIcon2.setAttribute('alt', 'sorcevertion');
      seeIcon2.setAttribute('height', '12');

      const btnPop = document.createElement('button');
      btnPop.classList.add('btn-pop');
      div4.appendChild(btnPop);
      const aBtn = document.createElement('a');
      aBtn.href = projectsCard[0].linkLiveVersion;
      btnPop.appendChild(aBtn);
      btnPop.appendChild(seeIcon2);
      aBtn.textContent = 'SeeLive  ';

      const ctnPop = document.createElement('button');
      ctnPop.classList.add('btn-pop');
      div4.appendChild(ctnPop);
      const dBtn = document.createElement('a');
      dBtn.href = projectsCard[0].linkSource;
      ctnPop.appendChild(dBtn);
      ctnPop.appendChild(seeIcon);
      dBtn.textContent = 'SeeSource  ';
    });
  });

  // new popup class 4

  document.querySelectorAll('.popbtn4').forEach((item) => {
    item.addEventListener('click', () => {
      counter += 1;
      const blur = document.getElementById('blur1');
      blur.classList.toggle('active');
      const div1 = document.createElement('div');
      div1.classList.add('popdiv1');
      div1.setAttribute = 25;

      const apender1 = document.createElement('div');
      apender1.classList.add('apender1');
      div1.appendChild(apender1);

      const div2 = document.createElement('div');
      div2.classList.add('popdiv2mob');
      div2.textContent = projectsCard[1].tittle;
      apender1.appendChild(div2);

      const div2big = document.createElement('div');
      div2big.classList.add('popdiv2big');
      div2big.textContent = projectsCard[3].tittle;
      apender1.appendChild(div2big);

      const closeSign = document.createElement('p');
      closeSign.classList.add('closesign');
      apender1.appendChild(closeSign);
      closeSign.textContent = 'X';
      closeSign.addEventListener('click', () => {
        document.getElementsByClassName('popdiv1')[counter].style.display = 'none';
        const blur = document.getElementById('blur1');
        blur.classList.toggle('active');
      });

      const ul2 = document.createElement('ul');
      ul2.classList.add('ul-pop1');
      div1.appendChild(ul2);
      for (let i = 0; i < projectsCard[2].infoProject.length; i += 1) {
        const li2 = document.createElement('li');
        li2.classList.add('li-pop1');
        ul2.appendChild(li2);
        li2.textContent = projectsCard[3].infoProject[i];
      }

      const element1 = document.querySelector('body');
      element1.appendChild(div1);

      const img = document.createElement('img');
      img.classList.add('event-img');
      img.setAttribute('src', projectsCard[3].image);
      img.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img.setAttribute('width', 'auto');
      img.setAttribute('height', '586');
      div1.appendChild(img);

      const img2 = document.createElement('img');
      img2.classList.add('event-img2');
      img2.setAttribute('src', projectsCard[3].image2);
      img2.setAttribute('alt', 'National Day for Truth & Reconciliation');
      img2.setAttribute('width', 'auto');
      img2.setAttribute('height', '586');
      div1.appendChild(img2);

      const div3big = document.createElement('div');
      div3big.classList.add('did3bigpopup');
      div1.appendChild(div3big);

      const text = document.createElement('div');
      text.classList.add('textpoup');
      text.textContent = projectsCard[3].description;
      div3big.appendChild(text);
      const div3 = document.createElement('div');
      div3.classList.add('did3popup');
      div3big.appendChild(div3);
      const ul = document.createElement('ul');
      ul.classList.add('ul-pop');
      div3.appendChild(ul);
      for (let i = 0; i < projectsCard[0].technologies.length; i += 1) {
        const li = document.createElement('li');
        li.classList.add('li-pop');
        ul.appendChild(li);
        li.textContent = projectsCard[0].technologies[i];
      }
      const ul3 = document.createElement('ul');
      ul3.classList.add('ul-pop0');
      div3.appendChild(ul3);
      for (let i = 0; i < projectsCard[0].technologies2.length; i += 1) {
        const li3 = document.createElement('li');
        li3.classList.add('li-pop');
        ul3.appendChild(li3);
        li3.textContent = projectsCard[0].technologies2[i];
      }
      const div4 = document.createElement('div');
      div4.classList.add('did4popup');
      div3.appendChild(div4);
      const seeIcon = document.createElement('img');
      seeIcon.classList.add('icon-btn');
      seeIcon.setAttribute('src', 'image/github.png');
      seeIcon.setAttribute('alt', 'link liveVersion');
      seeIcon.setAttribute('height', '12');
      const seeIcon2 = document.createElement('img');
      seeIcon2.classList.add('icon-btn');
      seeIcon2.setAttribute('src', 'image/live.png');
      seeIcon2.setAttribute('alt', 'sorcevertion');
      seeIcon2.setAttribute('height', '12');
      const btnPop = document.createElement('button');
      btnPop.classList.add('btn-pop');
      div4.appendChild(btnPop);
      const aBtn = document.createElement('a');
      aBtn.href = projectsCard[0].linkLiveVersion;
      btnPop.appendChild(aBtn);
      btnPop.appendChild(seeIcon2);
      aBtn.textContent = 'SeeLive  ';
      const ctnPop = document.createElement('button');
      ctnPop.classList.add('btn-pop');
      div4.appendChild(ctnPop);
      const dBtn = document.createElement('a');
      dBtn.href = projectsCard[0].linkSource;
      ctnPop.appendChild(dBtn);
      ctnPop.appendChild(seeIcon);
      dBtn.textContent = 'SeeSource  ';
    });
  });
});