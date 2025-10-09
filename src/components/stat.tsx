"use client";
import Image from "next/image";
import { Player } from "@/lib/constant";

type Props = {
    teamName: string;
    logo: string;
    players: Player[];
};

export default function TeamStats({ teamName, logo, players }: Props) {
    return (
        <section
            className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12 py-12 relative text-white"
            style={{
                backgroundImage: "url('/images/herosection3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/90"></div>

            <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-6 mt-30 sm:mb-10 mt-6 sm:mt-30 text-center relative z-10">
                {"Season's Statistics"}
            </h1>

            <div className="relative z-10 w-full max-w-5xl bg-gray-800/70 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
                    <Image
                        src={logo}
                        alt={teamName}
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mt-2 sm:mt-0 sm:ml-4 uppercase tracking-wide text-center sm:text-left">
                        {teamName}
                    </h1>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-700 text-center text-sm sm:text-base">
                        <thead className="bg-gray-900 text-yellow-400">
                            <tr>
                                <th className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">Player</th>
                                <th className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">PTS</th>
                                <th className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">REB</th>
                                <th className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">AST</th>
                                <th className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">STL</th>
                                <th className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">BLK</th>
                            </tr>
                        </thead>

                        <tbody>
                            {players.map((player) => (
                                <tr
                                    key={player.id}
                                    className="hover:bg-gray-700/60 transition border-b border-gray-700"
                                >
                                    <td className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3 font-semibold">
                                        {player.name}
                                    </td>
                                    <td className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">{player.points ?? 0}</td>
                                    <td className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">{player.rebounds ?? 0}</td>
                                    <td className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">{player.assists ?? 0}</td>
                                    <td className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">{player.steals ?? 0}</td>
                                    <td className="border border-gray-700 px-2 py-2 sm:px-3 sm:py-3">{player.blocks ?? 0}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
