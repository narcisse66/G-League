import { desc } from 'motion/react-client';
import { features } from 'process';



export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Matchs', href: '/match' },
  { name: 'News', href: '/news' },
  { name: 'Ranking', href: '/classement' },
  { name: 'Teams', href: '/team' },
];



export const newwsItems = [
  {
    title: 'Finals Summer Tournament',
    description:
      'The Summer Tournament finals will take place in summer 2025, featuring the Warriors and the Predators.',
    image: '/images/news6.jpg',
    href: '#',
    details: `The Summer Tournament finals promise to be an intense showdown between the Warriors and the Predators. Both teams have shown remarkable skill throughout the season, with star players leading the charge. Fans can expect thrilling gameplay, strategic plays, and unforgettable moments. The finals will be streamed live on GravityLeagueTV at 8pm, giving viewers around the world the chance to experience every dunk, pass, and three-pointer in real time.`,
    slug: 'finals-summer-tournament',
  },
  {
    title: 'October Promotions',
    description:
      'Enjoy the full GravityLeague experience this October with GravityLeagueTV, our streaming service now on special offer.',
    image: '/images/news7.2.jpg',
    href: '#',
    details: `This October, GravityLeagueTV is offering exclusive promotions to give fans full access to all matches, behind-the-scenes content, and player interviews. Subscribers can enjoy live streams, replays, and highlights from their favorite teams. Take advantage of our special monthly offer and experience the excitement of the league from the comfort of your home. Don't miss out on limited-time bonuses and extra features available only this month.`,
    slug: 'october-promotions',
  },
  {
    title: 'Rachid TOSSA',
    description:
      'Rachid TOSSA is close to signing with the Wolves Shot! The rising star is expected to bring precision and presence to the court.',
    image: '/images/news8.jpg',
    href: '#',
    details: `Rachid TOSSA has been turning heads this season with his exceptional skills, court vision, and leadership on the floor. Scouts and analysts predict that his signing with the Wolves Shot could elevate the team’s performance significantly. Known for his agility and shooting accuracy, Rachid is expected to make a major impact, thrilling fans and challenging opponents. His integration into the Wolves’ lineup will be one of the most anticipated moments of the season.`,
    slug: 'rachid-tossa',
  },
  {
    title: 'Trade Pure Mamba',
    description:
      'Pure Mamba traded young player Dillon G. from the Predators for a future draft pick.',
    image: '/images/news1.2.png',
    href: '#',
    details: `In a strategic move during the trade season, Pure Mamba acquired a future draft pick by trading Dillon G., a promising young player from the Predators. This decision aims to strengthen Pure Mamba's roster in upcoming seasons, while Dillon G. will join a new environment to further develop his skills. Analysts are discussing the potential impact on both teams, with fans debating how this trade will shape the league’s competitive balance.`,
    slug: 'trade-pure-mamba',
  },
  {
    title: 'Future Stars',
    description:
      'Paul Francis is the next big star rising fast in the basketball world today on GravityLeague.',
    image: '/images/news4.png',
    href: '#',
    details: `Paul Francis has quickly become one of the most talked-about talents in GravityLeague. With his remarkable athleticism, sharp shooting, and intelligent gameplay, he is expected to dominate the league for years to come. Coaches and analysts have highlighted his consistency and ability to perform under pressure. Fans are eager to see how Paul will lead his team in upcoming matches and what records he might break this season.`,
    slug: 'future-stars',
  },
  {
    title: 'Young Talent',
    description:
      'Jaden Williams of the Sky Titans stunned in the last game vs the Warriors.',
    image: '/images/news3.png',
    href: '#',
    details: `Jaden Williams delivered a spectacular performance in the recent clash against the Warriors, scoring a career-high 30 points and making crucial defensive plays. His agility, vision, and composure under pressure impressed both teammates and fans alike. Many are calling him one of the rising stars to watch this season. With such performances, Jaden is expected to continue making headlines and become a cornerstone player for the Sky Titans.`,
    slug: 'young-talent',
  },
];


export const founder = [
  {
    name: 'Sarah H.',
    jobs: 'CEO GravityLeague',
    details: 'When determination meets talent, legends are born',
    image: '/images/sarah.jpg',
  },

  {
    name: 'Reina G.',
    jobs: 'Executive Director GravityLeague',
    details: 'To innovate is to dare to create a field where everyone can shine.',
    image: '/images/Reina.jpg',
  },

  {
    name: 'Narcisse D.',
    jobs: 'PDG GravityLeague',
    details: "Leaders not only follow the game, they reinvent it.",
    image: '/images/narcisse2.png',
  },
];

export const pricingTable = [
  {
    name: 'Basic',
    price: 10.99,
    period: 'month',
    description: 'Essential features to watch live games.',
    features: [
      'Access to live game streams',
      'Basic player and team statistics',
      'Access to player and team profiles',
    ],
    cta: 'Join Now',
    popular: false,
  },

  {
    name: 'Pro',
    price: 50.99,
    period: 'month',
    description:
      'Essential features to watch live games and access basic stats.',
    features: [
      'Access to live game streams',
      'Basic player and team statistics',
      'Access to player and team profiles',
      'Access to player and team news',
      'Ad-free experience',
    ],
    cta: 'Join Now',
    popular: true,
  },

  {
    name: 'All',
    price: 100.99,
    period: 'month',
    description: 'All features to watch live games.',
    features: [
      'Access to live game streams',
      'Basic player and team statistics',
      'Access to player and team profiles',
      'Access to player and team news',
      'Ad-free experience',
      'Exclusive content and interviews',
    ],
    cta: 'Join Now',
    popular: false,
  },
];

export const logos = [
  '/images/logos/logo1.png',
  '/images/logos/logo2.png',
  '/images/logos/logo3.png',
  '/images/logos/logo4.png',
  '/images/logos/logo5.png',
  '/images/logos/logo6.png',
];


export type Player = {
  id: number;
  name: string;
  position?: string;
  points?: number;
  rebounds?: number;
  assists?: number;
  steals?: number;
  blocks?: number;
};


 export type Coach = {
  id: number;
  name: string;
  role?: string;
};

type Team = {
  id: number;
  name: string;
  logo: string;
  members: Player[];
  coach: Coach[];
  slug?: string;
};

export const teams: Team[] = [
  {
    id: 1,
    name: 'The Predators',
    slug: 'the-predators',
    logo: '/images/logos/logo1.png',
    members: [
      { id: 1, name: 'Jaden Miller', position: 'Small Forward', points: 28, rebounds: 10, assists: 5, steals: 2, blocks: 1 },
      { id: 2, name: 'Marcus Green', position: 'Center', points: 26, rebounds: 8, assists: 3, steals: 1, blocks: 0 },
      { id: 3, name: 'Ethan Brooks', position: 'Point Guard', points: 23, rebounds: 7, assists: 4, steals: 2, blocks: 1 },
      { id: 4, name: 'Liam Scott', position: 'Shooting Guard', points: 21, rebounds: 6, assists: 3, steals: 1, blocks: 0 },
      { id: 5, name: 'Noah White', position: 'Power Forward', points: 20, rebounds: 5, assists: 2, steals: 0, blocks: 0 },
      { id: 6, name: 'Oliver Black', position: 'Small Forward', points: 17, rebounds: 4, assists: 1, steals: 0, blocks: 0 },
      { id: 7, name: 'Elijah Moore', position: 'Point Guard', points: 12, rebounds: 3, assists: 0, steals: 0, blocks: 0 },
      { id: 8, name: 'James Taylor', position: 'Center', points: 10, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 9, name: 'Benjamin Anderson', position: 'Shooting Guard', points: 9, rebounds: 1, assists: 0, steals: 0, blocks: 0 },
      { id: 10, name: 'Lucas Thomas', position: 'Power Forward', points: 9, rebounds: 0, assists: 0, steals: 0, blocks: 0 },
    ],
    coach: [
      { id: 1, name: 'John Carter', role: 'Coach' },
      { id: 2, name: 'Mike Johnson', role: 'Assistant Coach' },
      { id: 3, name: 'Alex Lee', role: 'Physical Trainer' },
    ],
  },
  {
    id: 2,
    name: 'Pure Mamba',
    slug: 'pure-mamba',
    logo: '/images/logos/logo2.png',
    members: [
      { id: 1, name: 'Ryan Adams', position: 'Small Forward', points: 30, rebounds: 9, assists: 4, steals: 1, blocks: 1 },
      { id: 2, name: 'Samuel Brooks', position: 'Center', points: 25, rebounds: 10, assists: 2, steals: 0, blocks: 1 },
      { id: 3, name: 'Lucas Evans', position: 'Point Guard', points: 22, rebounds: 6, assists: 5, steals: 2, blocks: 0 },
      { id: 4, name: 'Eli Turner', position: 'Shooting Guard', points: 20, rebounds: 5, assists: 3, steals: 1, blocks: 0 },
      { id: 5, name: 'Owen Harris', position: 'Power Forward', points: 18, rebounds: 4, assists: 2, steals: 0, blocks: 0 },
      { id: 6, name: 'Mason Clark', position: 'Small Forward', points: 16, rebounds: 3, assists: 1, steals: 0, blocks: 0 },
      { id: 7, name: 'Nathan Scott', position: 'Point Guard', points: 14, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 8, name: 'Isaac Lewis', position: 'Center', points: 12, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 9, name: 'Logan White', position: 'Shooting Guard', points: 10, rebounds: 1, assists: 0, steals: 0, blocks: 0 },
      { id: 10, name: 'Caleb Young', position: 'Power Forward', points: 8, rebounds: 0, assists: 0, steals: 0, blocks: 0 },
    ],
    coach: [
      { id: 1, name: 'Peter Brown', role: 'Coach' },
      { id: 2, name: 'James Wilson', role: 'Assistant Coach' },
      { id: 3, name: 'Kyle Martin', role: 'Physical Trainer' },
    ],
  },
  {
    id: 3,
    name: 'Sky Titans',
    slug: 'sky-titans',
    logo: '/images/logos/logo3.png',
    members: [
      { id: 1, name: 'Daniel Green', position: 'Center', points: 28, rebounds: 11, assists: 3, steals: 2, blocks: 2 },
      { id: 2, name: 'Henry White', position: 'Small Forward', points: 24, rebounds: 7, assists: 4, steals: 1, blocks: 0 },
      { id: 3, name: 'Lucas King', position: 'Point Guard', points: 22, rebounds: 6, assists: 5, steals: 2, blocks: 1 },
      { id: 4, name: 'Alexander Young', position: 'Shooting Guard', points: 20, rebounds: 5, assists: 3, steals: 1, blocks: 0 },
      { id: 5, name: 'Matthew Lewis', position: 'Power Forward', points: 18, rebounds: 4, assists: 2, steals: 0, blocks: 0 },
      { id: 6, name: 'Evan Harris', position: 'Small Forward', points: 15, rebounds: 3, assists: 1, steals: 0, blocks: 0 },
      { id: 7, name: 'Calvin Miller', position: 'Point Guard', points: 12, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 8, name: 'Sebastian Taylor', position: 'Center', points: 10, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 9, name: 'Derek Adams', position: 'Shooting Guard', points: 6, rebounds: 1, assists: 0, steals: 0, blocks: 0 },
      { id: 10, name: 'Tristan White', position: 'Power Forward', points: 4, rebounds: 0, assists: 0, steals: 0, blocks: 0 },
    ],
    coach: [
      { id: 1, name: 'Robert Allen', role: 'Coach' },
      { id: 2, name: 'David Clark', role: 'Assistant Coach' },
      { id: 3, name: 'Brian Scott', role: 'Physical Trainer' },
    ],
  },
  {
    id: 4,
    name: 'The Warriors',
    slug: 'the-warriors',
    logo: '/images/logos/logo4.png',
    members: [
      { id: 1, name: 'Ethan Parker', position: 'Center', points: 32, rebounds: 10, assists: 4, steals: 2, blocks: 1 },
      { id: 2, name: 'Jacob Wilson', position: 'Small Forward', points: 30, rebounds: 8, assists: 3, steals: 1, blocks: 0 },
      { id: 3, name: 'Aiden Thomas', position: 'Point Guard', points: 27, rebounds: 6, assists: 5, steals: 1, blocks: 0 },
      { id: 4, name: 'Logan Carter', position: 'Shooting Guard', points: 25, rebounds: 5, assists: 2, steals: 0, blocks: 0 },
      { id: 5, name: 'Cameron Scott', position: 'Power Forward', points: 23, rebounds: 4, assists: 1, steals: 0, blocks: 0 },
      { id: 6, name: 'Nathan Hill', position: 'Small Forward', points: 18, rebounds: 3, assists: 0, steals: 0, blocks: 0 },
      { id: 7, name: 'Tyler Lewis', position: 'Point Guard', points: 14, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 8, name: 'Connor Adams', position: 'Center', points: 12, rebounds: 1, assists: 0, steals: 0, blocks: 0 },
      { id: 9, name: 'Dylan Walker', position: 'Shooting Guard', points: 6, rebounds: 0, assists: 0, steals: 0, blocks: 0 },
      { id: 10, name: 'Brandon Hall', position: 'Power Forward', points: 6, rebounds: 0, assists: 0, steals: 0, blocks: 0 },
    ],
    coach: [
      { id: 1, name: 'Michael Young', role: 'Coach' },
      { id: 2, name: 'Andrew Harris', role: 'Assistant Coach' },
      { id: 3, name: 'Nathan King', role: 'Physical Trainer' },
    ],
  },

  {
  id: 5,
  name: 'Wave Storm',
  slug: 'wave-storm',
  logo: '/images/logos/logo5.png',
  members: [
      { id: 1, name: 'Liam Johnson', position: 'Center', points: 27, rebounds: 10, assists: 3, steals: 1, blocks: 1 },
      { id: 2, name: 'Ethan Brown', position: 'Small Forward', points: 26, rebounds: 8, assists: 4, steals: 2, blocks: 0 },
      { id: 3, name: 'Noah Davis', position: 'Point Guard', points: 23, rebounds: 6, assists: 5, steals: 1, blocks: 0 },
      { id: 4, name: 'Oliver Miller', position: 'Shooting Guard', points: 21, rebounds: 5, assists: 3, steals: 1, blocks: 0 },
      { id: 5, name: 'Lucas Wilson', position: 'Power Forward', points: 19, rebounds: 4, assists: 2, steals: 0, blocks: 0 },
      { id: 6, name: 'Caleb Anderson', position: 'Small Forward', points: 15, rebounds: 3, assists: 1, steals: 0, blocks: 0 },
      { id: 7, name: 'Mason Taylor', position: 'Point Guard', points: 13, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 8, name: 'James Martin', position: 'Center', points: 11, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 9, name: 'Benjamin White', position: 'Shooting Guard', points: 9, rebounds: 1, assists: 0, steals: 0, blocks: 0 },
      { id: 10, name: 'Elijah Harris', position: 'Power Forward', points: 4, rebounds: 0, assists: 0, steals: 0, blocks: 0 },
  ],
  coach: [
    { id: 1, name: 'Daniel Scott', role: 'Coach' },
    { id: 2, name: 'Ryan Hall', role: 'Assistant Coach' },
    { id: 3, name: 'Alex Walker', role: 'Physical Trainer' },
  ],
},
{
  id: 6,
  name: 'Wolves Shot',
  slug: 'wolves-shot',
  logo: '/images/logos/logo6.png',
  members: [
     { id: 1, name: 'Jacob Lee', position: 'Center', points: 30, rebounds: 11, assists: 4, steals: 2, blocks: 1 },
      { id: 2, name: 'Henry Adams', position: 'Small Forward', points: 28, rebounds: 9, assists: 3, steals: 1, blocks: 0 },
      { id: 3, name: 'Evan Davis', position: 'Point Guard', points: 26, rebounds: 6, assists: 5, steals: 2, blocks: 0 },
      { id: 4, name: 'Calvin Wilson', position: 'Shooting Guard', points: 23, rebounds: 5, assists: 3, steals: 1, blocks: 0 },
      { id: 5, name: 'Matthew Brown', position: 'Power Forward', points: 21, rebounds: 4, assists: 2, steals: 0, blocks: 0 },
      { id: 6, name: 'Nathan Clark', position: 'Small Forward', points: 18, rebounds: 3, assists: 1, steals: 0, blocks: 0 },
      { id: 7, name: 'Isaac Lewis', position: 'Point Guard', points: 13, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 8, name: 'Samuel Scott', position: 'Center', points: 9, rebounds: 2, assists: 0, steals: 0, blocks: 0 },
      { id: 9, name: 'Dylan Harris', position: 'Shooting Guard', points: 5, rebounds: 1, assists: 0, steals: 0, blocks: 0 },
      { id: 10, name: 'Tristan Young', position: 'Power Forward', points: 1, rebounds: 0, assists: 0, steals: 0, blocks: 0 },
  ],
  coach: [
    { id: 1, name: 'Michael Carter', role: 'Coach' },
    { id: 2, name: 'Andrew Johnson', role: 'Assistant Coach' },
    { id: 3, name: 'Brian Lewis', role: 'Physical Trainer' },
  ],
},

];