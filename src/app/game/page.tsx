
import Rank from '@/components/rank';
import { logos } from '@/lib/constant';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import GamePage from '@/components/game';

export default function ClassementPage() {
  return (
    <main>
      <Navbar />
      <GamePage />
      <Footer />
    </main>
  );
}
