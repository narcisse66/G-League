import Rank from '@/components/rank';
import { logos } from '@/lib/constant';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import TeamsPage from '@/components/team';

export default function ClassementPage() {
  return (
    <main>
      <Navbar />
      <TeamsPage />
      <Footer />
    </main>
  );
}
