import Rank from '@/components/rank';
import { logos } from '@/lib/constant';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ClassementPage() {
  return (
    <main>
      <Navbar />
      <Rank />
      <Footer />
    </main>
  );
}
