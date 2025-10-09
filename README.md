Gravity League - Next.js Project

Gravity League est une application web pour suivre une ligue de basket.
Les utilisateurs peuvent consulter les statistiques des équipes et joueurs, le calendrier des matchs, les actualités et détails des matchs.

Ce projet utilise Next.js 13+ (App Router), TypeScript, Tailwind CSS, et est déployé sur Vercel.

Table des matières

1 - Prérequis

2 - Installation

3 - Développement et Production

4 - Structure du projet

Technologies

1 - Prérequis

Avant de commencer, assurez-vous d’avoir :

Node.js >= 18.x

npm ou yarn

Git

Un compte Vercel pour le déploiement
'''

2 - Installation

Clonez le projet et installez les dépendances :

git clone https://github.com/narcisse66/G-League.git
cd G-League
npm install
 ou
yarn install
'''

3- Developpement

Pour lancer le serveur de développement :

npm run dev
ou
yarn dev

## Structure du projet

**G-League/**  
├─ **public/** — Assets statiques (images, logos)  
├─ **src/**  
│   ├─ **app/** — Pages et routes (Next.js App Router)  
│   │   ├─ calendar/  
│   │   ├─ classement/  
│   │   ├─ match/  
│   │   ├─ news/  
│   │   ├─ newsdetails/  
│   │   └─ team/  
│   ├─ **components/** — Composants UI réutilisables (Hero, Card, Button, Footer)  
│   ├─ **lib/** — Constantes et données statiques (teams, players)  
│   └─ **styles/** — CSS global ou Tailwind overrides  
├─ **.gitignore**  
├─ **next.config.js**  
├─ **package.json**  
├─ **tsconfig.json**  
└─ **README.md**

'''

4- Technologies

Next.js 13+ (App Router)

TypeScript

Tailwind CSS

Motion

Lucide Icons

Vercel
