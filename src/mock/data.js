import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mika.IO', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá!! Tudo bem? Meu nome é',
  name: 'Mikaio!!',
  subtitle: 'Eu sou Desenvolvedor Web!!',
  cta: 'Saiba mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'Mikaio Faria CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Ecoleta',
    info: 'Ecoleta foi o projeto resultante do NLW-1. O projeto foi desenvolvido baseado na semana internacional do Meio Ambiente. O Objetivo é conectar pessoas a empresas que coletam resíduos específicos, como lâmpadas, baterias, óleo de cozinha, etc.',
    info2: '',
    url: '',
    repo: 'https://github.com/Mika-IO/Ecoleta', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Copymoney',
    info: 'Foi um projeto freelancer que desenvolvi. Se tratava de uma plataforma de copy trader parar IQ Option. O projeto me trouxe grandes desafios relacionados aos consumo e criação de APIs e tratamento de dados.',
    info2: '',
    url: '',
    repo: 'https://github.com/Mika-IO/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'TRRBot',
    info: 'TRRBot é um script de automação que realizar scrap dos indicadores da IQOption e faz entradas automáticas baseado nesses indicadores.',
    info2: '',
    url: '',
    repo: 'https://github.com/Mika-IO/TRRB', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mlevanto',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mikaiofaria/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Mika-IO',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
