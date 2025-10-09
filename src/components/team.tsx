import { teams } from '@/lib/constant';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { Button } from './ui/button';
import { BarChart3 } from "lucide-react";

export default function TeamsPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-12 relative"
            style={{
                backgroundImage: "url('/images/herosection3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/80"></div>
            <h1 className="text-4xl font-bold mb-10 relative z-10 mt-30">All Teams</h1>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl relative z-10">
                {teams.map((team) => (

                

                    <div key={team.id} className=" bg-gray-800/70 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition">
                        <div
                          
                            className="bg-gray-700/70 p-4 flex flex-col items-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5}}
                            >


                                <Image
                                    src={team.logo}
                                    alt={team.name}
                                    width={100}
                                    height={100}
                                    className="object-contain mb-2"
                                />
                            </motion.div>
                         
                            <motion.h2
                            
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            
                            
                            className="text-2xl text-center font-bold">
                               
                                    {team.name}
                                
                            </motion.h2>
                        </div>

                        <motion.div
                            
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        
                            className="p-4"
                        >
                            <h3 className="text-lg font-semibold mb-2">Players :</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {team.members.map((player) => (
                                    <li key={player.id}>
                                        {player.name} {player.position && `- ${player.position}`}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-lg font-semibold mt-2 mb-2">Coach :</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {team.coach.map((coach) => (
                                    <li key={coach.id}>
                                        {coach.name} {coach.role && `- ${coach.role}`}
                                    </li>
                                ))}
                            </ul>

                            <Button className=" w-full mt-4 mx-auto block flex items-center gap-2">
                                <Link href={`/stat/${team.slug}`} className="flex items-center gap-2 hover:underline text-white">
                                    <BarChart3 className="w-5 h-5" />
                                    View Stats
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                   
                ))}
            </div>
            

            
        </section>
    );
}
