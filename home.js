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
    infoProject: ['CANOPY',  '• Back End Dev',  '• 2015','CANOPY',  '• Back End Dev',  '• 2015'],
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
    infoProject: ['CANOPY',  '• Back End Dev',  '• 2015','FACEBOOK', '• Full Stack Dev', '• 2015'],
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
    infoProject: ['CANOPY',  '• Back End Dev',  '• 2015','FACEBOOK', '• Full Stack Dev', '• 2015'],
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
    infoProject: ['CANOPY',  '• Back End Dev',  '• 2015','Uber', '• Lead Developer', '• 2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['github', 'github', 'Bootstraps'],
    linkLiveVersion: 'https://bernabasy.github.io/poritipholio/',
    linkSource: 'https://github.com/bernabasy/poritipholio',
  },
];