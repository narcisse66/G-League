'use client';
import { useState } from 'react';
import Image from 'next/image';

type Team = {
  rank: number;
  logo: string;
  name: string;
  matches?: number;
  wins: number;
  losses: number;
  points: number;
};

export default function Rank() {
  const [teams] = useState<Team[]>([
    { rank: 1, logo: '/images/logos/logo1.png', name: 'The Predators', matches: 2, wins: 2, losses: 0, points: 4 },
    { rank: 2, logo: '/images/logos/logo2.png', name: 'Pure Mamba', matches: 2, wins: 2, losses: 0, points: 4 },
    { rank: 3, logo: '/images/logos/logo3.png', name: 'Sky Titans', matches: 2, wins: 2, losses: 0, points: 4 },
    { rank: 4, logo: '/images/logos/logo4.png', name: 'The Warriors', matches: 2, wins: 0, losses: 2, points: 0 },
    { rank: 5, logo: '/images/logos/logo5.png', name: 'Wave Storm', matches: 2, wins: 0, losses: 2, points: 0 },
    { rank: 6, logo: '/images/logos/logo6.png', name: 'Wolves Shot', matches: 2, wins: 0, losses: 2, points: 0 },
  ]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-2 py-4 sm:px-4"
      style={{
        backgroundImage: "url('/images/herosection3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <h1 className=" text-2xl sm:text-4xl font-bold mb-6 sm:mb-10 mt-6 sm:mt-40 uppercase tracking-wide z-10 text-center">
        Team Rankings
      </h1>

      <div className="relative w-full max-w-6xl z-10 overflow-x-auto">
        <table className="w-full min-w-[500px] border-collapse border border-gray-700 text-center backdrop-blur-sm bg-black/60 rounded-lg">
          <thead className="bg-gray-900 text-yellow-400 uppercase text-xs sm:text-sm">
            <tr>
              <th className="border border-gray-700 px-2 sm:px-4 py-2">Rank</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2">Team</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2">Points</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2">Matches</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2">Wins</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2">Losses</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.rank} className="hover:bg-gray-800 transition-all duration-200">
                <td className="border border-gray-700 px-1 sm:px-4 py-2 font-bold text-yellow-400">{team.rank}</td>
                <td className="border border-gray-700 px-1 sm:px-4 py-2">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className="relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]">
                      <Image
                        src={team.logo}
                        alt={team.name}
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm">{team.name}</span>
                  </div>
                </td>
                <td className="border border-gray-700 px-1 sm:px-4 py-2 text-xs sm:text-sm">{team.points}</td>
                <td className="border border-gray-700 px-1 sm:px-4 py-2 text-xs sm:text-sm">{team.matches}</td>
                <td className="border border-gray-700 px-1 sm:px-4 py-2 text-xs sm:text-sm">{team.wins}</td>
                <td className="border border-gray-700 px-1 sm:px-4 py-2 text-xs sm:text-sm">{team.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
