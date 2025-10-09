'use client';
import { useState } from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';

type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  date: string;
  time: string;
  score?: string;
};

const calendrier: Record<number, Match[]> = {
  1: [
    {
      id: 1,
      homeTeam: 'Pure Mamba',
      awayTeam: 'Sky Titans',
      homeLogo: '/images/logos/logo2.png',
      awayLogo: '/images/logos/logo3.png',
      date: '2025-10-01',
      time: '18:30',
      score: '85 - 79',
    },
    {
      id: 2,
      homeTeam: 'The Predators',
      awayTeam: 'The Warriors',
      homeLogo: '/images/logos/logo1.png',
      awayLogo: '/images/logos/logo4.png',
      date: '2025-10-02',
      time: '20:00',
      score: '91 - 88',
    },
    {
      id: 3,
      homeTeam: 'Wave Storm',
      awayTeam: 'Wolves Shot',
      homeLogo: '/images/logos/logo5.png',
      awayLogo: '/images/logos/logo6.png',
      date: '2025-10-10',
      time: '19:00',
      score: '85 - 99',
    },
  ],
  2: [
    {
      id: 4,
      homeTeam: 'The Warriors',
      awayTeam: 'Sky Titans',
      homeLogo: '/images/logos/logo4.png',
      awayLogo: '/images/logos/logo3.png',
      date: '2025-10-10',
      time: '19:00',
      score: '95 - 70',
    },
    {
      id: 5,
      homeTeam: 'Wave Storm',
      awayTeam: 'Pure Mamba',
      homeLogo: '/images/logos/logo5.png',
      awayLogo: '/images/logos/logo2.png',
      date: '2025-10-12',
      time: '17:30',
      score: '80 - 90',
    },
    {
      id: 6,
      homeTeam: 'Wolves Shot',
      awayTeam: 'The Predators',
      homeLogo: '/images/logos/logo6.png',
      awayLogo: '/images/logos/logo1.png',
      date: '2025-10-18',
      time: '18:00',
      score: '75 - 66',
    },
  ],

  3: [
    { id: 7, homeTeam: 'The Warriors', awayTeam: 'Wave Storm', homeLogo: '/images/logos/logo4.png', awayLogo: '/images/logos/logo5.png', date: '2025-10-18', time: '18:00', },
    { id: 8, homeTeam: 'The Predators', awayTeam: 'Pure Mamba', homeLogo: '/images/logos/logo1.png', awayLogo: '/images/logos/logo2.png', date: '2025-10-19', time: '20:30', },
    { id: 9, homeTeam: 'Sky Titans', awayTeam: 'Wolves Shot', homeLogo: '/images/logos/logo3.png', awayLogo: '/images/logos/logo6.png', date: '2025-10-20', time: '19:00', },
  ],

  4:
    [
      { id: 10, homeTeam: 'Sky Titans', awayTeam: 'The Predators', homeLogo: '/images/logos/logo3.png', awayLogo: '/images/logos/logo1.png', date: '2025-10-21', time: '17:30', },
      { id: 11, homeTeam: 'Wave Storm', awayTeam: 'The Warriors', homeLogo: '/images/logos/logo5.png', awayLogo: '/images/logos/logo4.png', date: '2025-10-22', time: '20:00', },
      {
        id: 12, homeTeam: 'Pure Mamba', awayTeam: 'Wolves Shot', homeLogo: '/images/logos/logo2.png', awayLogo: '/images/logos/logo6.png', date: '2025-10-23', time: '18:30',

      },
    ],

  5:
    [
      { id: 13, homeTeam: 'Pure Mamba', awayTeam: 'Sky Titans', homeLogo: '/images/logos/logo2.png', awayLogo: '/images/logos/logo3.png', date: '2025-10-24', time: '18:30', },
      { id: 14, homeTeam: 'The Predators', awayTeam: 'The Warriors', homeLogo: '/images/logos/logo1.png', awayLogo: '/images/logos/logo4.png', date: '2025-10-25', time: '20:00', },
      {
        id: 15, homeTeam: 'Wolve Shot ', awayTeam: 'Wave Storm', homeLogo: '/images/logos/logo6.png', awayLogo: '/images/logos/logo5.png', date: '2025-10-26', time: '19:00',

      },
    ],

  6:
    [
      {
        id: 16, homeTeam: 'Wolves Shot', awayTeam: 'The Predators', homeLogo: '/images/logos/logo6.png', awayLogo: '/images/logos/logo1.png', date: '2025-10-27', time: '17:30',
      },
      {
        id: 17, homeTeam: 'The Warriors', awayTeam: 'Wave Storm', homeLogo: '/images/logos/logo4.png', awayLogo: '/images/logos/logo5.png', date: '2025-10-28', time: '18:00',
      },
      {
        id: 18, homeTeam: 'Pure Mamba', awayTeam: 'Sky Titans', homeLogo: '/images/logos/logo2.png', awayLogo: '/images/logos/logo3.png', date: '2025-10-29', time: '20:30',
      },
    ],
};

export default function CalendrierPage() {
  const [journee, setJournee] = useState(1);
  const totalJournees = Object.keys(calendrier).length;

  const nextJournee = () => {
    if (journee < totalJournees) setJournee(journee + 1);
  };

  const prevJournee = () => {
    if (journee > 1) setJournee(journee - 1);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/herosection3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/90 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading mb-6 leading-tight mt-30 text-center">
          Season's Calendar
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-white">
          MatchDay {journee}
        </h2>

        <div className="w-full max-w-4xl flex flex-col gap-4">
          {calendrier[journee].map((match) => (
            <div
              key={match.id}
              className="relative flex justify-between items-center bg-gray-800/80 rounded-lg p-4 backdrop-blur-sm hover:scale-105 transform transition"
            >
              {/* Équipe à domicile */}
              <div 
             

              className="flex items-center gap-2 sm:gap-4 w-1/3 sm:w-auto justify-start">
                <Image
                  src={match.homeLogo}
                  alt={match.homeTeam}
                  width={70}
                  height={70}
                  className="object-contain w-12 h-12 sm:w-20 sm:h-20"
                />
                <span className="font-semibold text-sm sm:text-base truncate">{match.homeTeam}</span>
              </div>

              
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center bg-gray-600/80 rounded-lg z-20 p-2 w-28 sm:w-32">
                {match.score ? (
                  <div 
                    
                  className="text-yellow-400 font-bold text-sm sm:text-lg">{match.score}</div>
                ) : (
                  <>
                    <div
                      
                    className="text-yellow-400 font-semibold text-xs sm:text-base">
                      {match.date}
                    </div>

                    <div
                    
                    className="text-gray-300 text-xs sm:text-sm">{match.time}</div>
                  </>
                )}
              </div>

              
              <div 
              
              className="flex items-center gap-2 sm:gap-4 w-1/3 sm:w-auto justify-end">
                <span className="font-semibold text-sm sm:text-base truncate">{match.awayTeam}</span>
                <Image
                  src={match.awayLogo}
                  alt={match.awayTeam}
                  width={70}
                  height={70}
                  className="object-contain w-12 h-12 sm:w-20 sm:h-20"
                />
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <button
            onClick={prevJournee}
            disabled={journee === 1}
            className={`flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base ${journee === 1
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-white text-black hover:bg-primary/90'
              }`}
          >
            <span className="text-lg">←</span> Back
          </button>

          <button
            onClick={nextJournee}
            disabled={journee === totalJournees}
            className={`flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base ${journee === totalJournees
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-white text-black hover:bg-primary/90'
              }`}
          >
            Next <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
