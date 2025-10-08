
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import TeamStats from '@/components/stat';
import { teams } from '@/lib/constant';
import { newwsItems } from '@/lib/constant';
import DetailNew from '@/components/detailnew';

type Props = {
    params: { slug: string };
};

export default function TeamStatsPage({ params }: Props) {
    const { slug } = params;
    const newsitem = newwsItems.find((t) => t.slug === slug);

    if (!newsitem) {
        return (
            <main>
                <Navbar />
                <p className="text-center mt-20 text-white">New not found</p>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <DetailNew
                newtitle={newsitem.title}
                image={newsitem.image}
                description={newsitem.description}
                detail={newsitem.details}
            />
            <Footer />
        </main>
    );
}
