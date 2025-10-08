import { div, section } from 'motion/react-client';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function hero() {
  return (
    <section className="h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Image
          src="/images/herosection3.jpg"
          alt="basketleague"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-black font-heading mb-6  leading-tighter"
          >
            This Is More Than a Game,{' '}
            <span className="text-primary"> This Is GravityLeague.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Where passion meets purpose. Where every drive, every play, every second counts. This is the league where legends are made.  The court is calling <br /> will you rise?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4  justify-center "
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg font-semibold transition-transform
                    duration-300 hover:scale-105 px-8"
            >
              {' '}
              <Link href="/match">
              
              Upcoming Game
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-lg font-semibold transition-transform duration 300 hover:scale-105 px-8"
            >
              {' '}
              <Link href="/match">Last Game</Link>
              
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
