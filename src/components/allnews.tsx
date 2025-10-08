


import { newwsItems } from '@/lib/constant';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import { Card } from './ui/card';
import { CardContent } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { h1 } from 'motion/react-m';
export default function AllNews() {
  return (

   <section
          className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-12"
          style={{
              backgroundImage: "url('/images/herosection4.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}>
    <div className="absolute inset-0 bg-white/90"></div>
   
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
         
          <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}   
              transition={{ duration: 0.7, ease: 'easeOut' }}  
              className="text-4xl text-primary font-bold mb-10 mt-10 uppercase tracking-wide z-10 text-center"
          >
        Week  News
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-xl text-muted-foreground text-center max-w-2xl mx-auto"
      >
       Stay updated with all the latest news from the GravityLeague community..
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {newwsItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            key={item.title}
            className="group cursor-pointer"
          >
            <Card className="p-0 transition-shadow duration-300 shadow-2xl">
              <div className="relative overflow-hidden rounded-t-lg h-64 w-full md:h-80 lg:h-72">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className=" object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <CardContent className="p-6 pt-0">
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-xl font-bold font-heading mb-3 text text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-muted-foreground mb-4 leading-relaxed"
                >
                  {item.description}
                </motion.p>

                <div>
                  <Button
                    variant="outline"
                    className="w-full transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground hover:bg-primary hover:text-primary-foreground group cursor-pointer"
                  >
                                <Link key={item.slug} href={`/newsdetails/${item.slug}`}>
                      Learn more
                    </Link>
                    
                              

                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
      </section>
  );
}
