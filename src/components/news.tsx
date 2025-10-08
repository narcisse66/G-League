import { newwsItems } from '@/lib/constant';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import { Card } from './ui/card';
import { CardContent } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
export default function News() {
  return (
    <section className=" dark:bg-foreground/4  mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-15">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Latest News
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="text-xl text-muted-foreground text-center max-w-2xl mx-auto"
      >
        The latest news and updates from our basketball Gravity League community.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {newwsItems.slice(0,3).map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            key={item.title}
            className="group cursor-pointer"
          >
            <Card className="p-0 transition-shadow duration-300 hover:shadow-2xl">
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                    delay: index * 0.2,
                  }}
                  className="text-xl font-bold font-heading mb-3 text text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                    delay: index * 0.3,
                  }}
                  className="text-muted-foreground mb-4 leading-relaxed"
                >
                  {item.description}
                </motion.p>

                <div>
                  <Button
                    variant="outline"
                    className="w-full transition-colors duration-300 group-hover:bg-primary dark:group-hover:bg-primary group-hover:text-primary-foreground hover:bg-primary hover:text-primary-foreground group cursor-pointer"
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
    </section>
  );
}
