'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import * as motion from 'motion/react-client';

type Match = {
    id: number;
    homeTeam: string;
    awayTeam: string;
    homeLogo: string;
    awayLogo: string;
    date: string;
    hour?: string;
    score?: string;
};

const matches: Match[] = [
    { id: 1, homeTeam: 'The Predators', awayTeam: 'The Warriors', homeLogo: '/images/logos/logo1.png', awayLogo: '/images/logos/logo4.png', date: '2025-10-09', hour: '19:30' },
    { id: 3, homeTeam: 'Wave Storm', awayTeam: 'Wolves Shot', homeLogo: '/images/logos/logo5.png', awayLogo: '/images/logos/logo6.png', date: '2025-10-09', hour: '16:30' },
    { id: 4, homeTeam: 'The Warriors', awayTeam: 'Sky Titans', homeLogo: '/images/logos/logo4.png', awayLogo: '/images/logos/logo3.png', date: '2025-10-05', score: '95 - 70' },
    { id: 5, homeTeam: 'Pure Mamba', awayTeam: 'Wave Storm', homeLogo: '/images/logos/logo2.png', awayLogo: '/images/logos/logo5.png', date: '2025-10-05', score: '80 - 90' },
    { id: 6, homeTeam: 'Wolves Shot', awayTeam: 'The Predators', homeLogo: '/images/logos/logo6.png', awayLogo: '/images/logos/logo1.png', date: '2025-10-05', score: '75 - 66' },
];

export default function MatchesPage() {
    const today = new Date().toISOString().split('T')[0];
    const pastMatches = matches.filter((m) => m.date < today);
    const upcomingMatches = matches.filter((m) => m.date >= today);

    const MatchCard = ({ match }: { match: Match }) => (
        <div className="relative flex flex-col sm:flex-row items-center sm:justify-between bg-gray-800/70 rounded-lg p-3 sm:p-4 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform w-full overflow-hidden">
            {/* Équipe à domicile */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 sm:gap-4 w-full sm:w-1/3 justify-start"
            >
                <Image
                    src={match.homeLogo}
                    alt={match.homeTeam}
                    width={70}
                    height={70}
                    className="object-contain w-10 h-10 sm:w-16 sm:h-16"
                />
                <span className="font-semibold text-xs sm:text-sm truncate">{match.homeTeam}</span>
            </motion.div>

            {/* Score ou date */}
            <div className="flex flex-col items-center justify-center text-center bg-gray-600/80 rounded-lg p-1 sm:p-2 my-2 sm:my-0 w-24 sm:w-32">
                {match.score ? (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-yellow-400 font-bold text-sm sm:text-lg"
                    >
                        {match.score}
                    </motion.div>
                ) : (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-yellow-400 font-semibold text-xs sm:text-base"
                        >
                            {match.date}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-gray-300 text-xs sm:text-sm"
                        >
                            {match.hour}
                        </motion.div>
                    </>
                )}
            </div>

            {/* Équipe à l’extérieur */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 sm:gap-4 w-full sm:w-1/3 justify-end"
            >
                <span className="font-semibold text-xs sm:text-sm truncate">{match.awayTeam}</span>
                <Image
                    src={match.awayLogo}
                    alt={match.awayTeam}
                    width={70}
                    height={70}
                    className="object-contain w-10 h-10 sm:w-16 sm:h-16"
                />
            </motion.div>
        </div>
    );

    return (
        <section
            className="min-h-screen flex flex-col items-center px-2 sm:px-6 py-8 relative text-white"
            style={{
                backgroundImage: "url('/images/herosection3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/90"></div>

            <h1 className="text-2xl sm:text-5xl md:text-6xl font-black mb-6 mt-30 sm:mb-10 mt-6 sm:mt-30 text-center relative z-10">
                Upcoming and Recents <br />
                <span className="text-primary">Matches</span>
            </h1>

            {/* Bloc "Next Day" */}
            <div className="w-full max-w-5xl flex flex-col gap-3 relative z-10">
                <h2 className="text-lg sm:text-2xl font-semibold text-white mb-2">Next Day</h2>
                {upcomingMatches.map((match) => <MatchCard key={match.id} match={match} />)}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8 mt-6 relative z-10">
                <Link href="/calendar">View Calendar</Link>
            </Button>

            {/* Bloc "Last Day" */}
            <div className="w-full max-w-5xl mt-8 flex flex-col gap-3 relative z-10">
                <h2 className="text-lg sm:text-2xl font-semibold text-white mb-2">Last Day</h2>
                {pastMatches.map((match) => <MatchCard key={match.id} match={match} />)}
            </div>
        </section>
    );
}
