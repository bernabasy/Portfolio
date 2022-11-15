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
    tittle: 'Tonic',
    infoProject: ['CANOPY',  '⚫Back End Dev',  '⚫2015'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry, ',
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
  },

  {
    id: '2',
    image: 'image/multi.png',
    tittle: 'Multi-Post Stories',
    infoProject: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
  },

  {
    id: '3',
    image: 'img/desktop3.png',
    tittle: 'Facebook 360',
    infoProject: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
  },

  {
    id: '4',
    image: 'img/desktop4.png',
    tittle: 'Uber Navigation',
    infoProject: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
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
    img.setAttribute('src', projectsCard[0].image);
    img.setAttribute('alt', 'National Day for Truth & Reconciliation');
    img.setAttribute('width', 'auto');
    img.setAttribute('height', '586');
    div1.appendChild(img);

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
      

      const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            div4.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = projectsCard[0].liveLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'SeeLive ♂';

      const ctnPop = document.createElement('button');
            ctnPop.classList.add('btn-pop');
            div4.appendChild(ctnPop);
            const dBtn = document.createElement('a');
            dBtn.href = projectsCard[0].sourceLink;
            ctnPop.appendChild(dBtn);
            dBtn.textContent = 'SeeSource ♂';

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

    // new popup class

    
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
        li2.textContent = projectsCard[0].infoProject[i];
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

    const div3big = document.createElement('div');
    div3big.classList.add('did3bigpopup');
    div1.appendChild(div3big);

    const text = document.createElement('div');
    text.classList.add('textpoup');
    text.textContent = projectsCard[1].description;
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
      

      const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            div4.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = projectsCard[0].liveLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'SeeLive ♂';

      const ctnPop = document.createElement('button');
            ctnPop.classList.add('btn-pop');
            div4.appendChild(ctnPop);
            const dBtn = document.createElement('a');
            dBtn.href = projectsCard[0].sourceLink;
            ctnPop.appendChild(dBtn);
            dBtn.textContent = 'SeeSource ♂';

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

  
  document.querySelectorAll('.popbtn').forEach((item) => {
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
    img.setAttribute('src', projectsCard[0].image);
    img.setAttribute('alt', 'National Day for Truth & Reconciliation');
    img.setAttribute('width', 'auto');
    img.setAttribute('height', '586');
    div1.appendChild(img);

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
      

      const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            div4.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = projectsCard[0].liveLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'SeeLive ♂';

      const ctnPop = document.createElement('button');
            ctnPop.classList.add('btn-pop');
            div4.appendChild(ctnPop);
            const dBtn = document.createElement('a');
            dBtn.href = projectsCard[0].sourceLink;
            ctnPop.appendChild(dBtn);
            dBtn.textContent = 'SeeSource ♂';

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

  // new popup class 4
  
  document.querySelectorAll('.popbtn').forEach((item) => {
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
    img.setAttribute('src', projectsCard[0].image);
    img.setAttribute('alt', 'National Day for Truth & Reconciliation');
    img.setAttribute('width', 'auto');
    img.setAttribute('height', '586');
    div1.appendChild(img);

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
      

      const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            div4.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = projectsCard[0].liveLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'SeeLive ♂';

      const ctnPop = document.createElement('button');
            ctnPop.classList.add('btn-pop');
            div4.appendChild(ctnPop);
            const dBtn = document.createElement('a');
            dBtn.href = projectsCard[0].sourceLink;
            ctnPop.appendChild(dBtn);
            dBtn.textContent = 'SeeSource ♂';

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
});