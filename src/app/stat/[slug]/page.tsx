import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import TeamStats from '@/components/stat';
import { teams } from '@/lib/constant';

type Props = {
    params: { slug: string };
};

export default function TeamStatsPage({ params }: Props) {
    const { slug } = params;
    const team = teams.find((t) => t.slug === slug);

    if (!team) {
        return (
            <main>
                <Navbar />
                <p className="text-center mt-20 text-white">Team not found</p>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <TeamStats
                teamName={team.name}
                logo={team.logo}
                players={team.members}
            />
            <Footer />
        </main>
    );
}
