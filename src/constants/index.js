import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  figma,
  postgresql,
  rubyrails,
  ruby,
  sql,
  weather_wanderer,
  kitten_around,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  comptia,
  google,
  wrapbook,
  prevail,
  ernst_and_young,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
];

const services = [
  {
    title: 'Full Stack Development',
    icon: backend,
  },
  {
    title: 'Responsive Design',
    icon: frontend,
  },
  {
    title: 'Automated Testing',
    icon: ux,
  },
  {
    title: 'Agile Development',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Ruby',
    icon: ruby,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'Sql',
    icon: sql,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const certifications = [
  {
    name: 'Comptia Security+ ce Certification',
    issuer: 'CompTIA',
    date: 'May 2025',
    icon: comptia,
    link: 'https://www.credly.com/badges/e757a1fd-58d4-448c-9477-a15a6e8c9b31/linked_in_profile',
  },
  {
    name: 'Google Cybersecurity Certificate V2 ',
    issuer: 'Google',
    date: 'Mar 2025',
    icon: google,
    link: 'https://www.credly.com/badges/c78028ad-b1eb-49aa-948f-e7cbf44d7519/linked_in_profile',
  },
]

const experiences = [
  {
    title: 'Software Engineer II',
    company_name: 'Wrapbook',
    icon: wrapbook,
    iconBg: '#333333',
    date: 'Mar 2024 - Present',
  },
  {
    title: 'Software Engineer',
    company_name: 'Prevail Legal',
    icon: prevail,
    iconBg: '#333333',
    date: 'Jun 2022 - Mar 2024',
  },
  {
    title: 'Audit Intern',
    company_name: 'Ernst and Young',
    icon: ernst_and_young,
    iconBg: '#333333',
    date: 'Jun 2021 - Aug 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Weather Wanderer',
    description: 'An interactive weather app that lets users explore real-time weather conditions worldwide.',
    tags: [
    ],
    image: weather_wanderer,
    repo: 'https://github.com/amandac3600/Weather_Wanderer',
    demo: 'https://weather-wanderer-wild-cherry-8496.fly.dev/',
  },
  {
    id: 'project-2',
    name: "Kitten' Around",
    description:
      'A 2-D Platformer game where you play as a kitten to collect a fish while avoiding obstacles.',
    tags: [
    ],
    image: kitten_around,
    repo: 'https://github.com/amandac3600/Kitten_Around',
    demo: 'https://amandakchen.com/Kitten_Around/',
  },
];

export { services, technologies, certifications, experiences, projects };
