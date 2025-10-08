
import Rank from '@/components/rank';
import { logos } from '@/lib/constant';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import AllNews from '@/components/allnews';

export default function ClassementPage() {
  return (
    <main>
      <Navbar />
      <AllNews />
      <Footer />
    </main>
  );
}
