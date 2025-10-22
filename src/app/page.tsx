import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import News from '@/components/news';
import Highlight from '@/components/highlight';
import Founder from '@/components/founder';
import Stream from '@/components/about';
import Streaming from '@/components/streaming';
import Footer from '@/components/footer';
import LogoTeam from '@/components/logoteam';
import About from '@/components/about';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <LogoTeam />
      <News />
      <Highlight />
     
      
    
      
      <Founder />
      <Footer />
    </main>
  );
}
