import { founder } from '@/lib/constant';
import { section } from 'motion/react-client';
import * as motion from 'motion/react-client';
import { div } from 'motion/react-m';
import { Card } from './ui/card';
import { CardContent } from './ui/card';
import Image from 'next/image';

export default function Founder() {
  return (
    <section className="   mb-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl font-bold mb-8 text-center"
        >
          GravityLeague Founder
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8"
        >
          The iconic founder of GravityLeague .
        </motion.p>

        {/* founder grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founder.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, delay: 0 },
              }}
              key={t.name}
              className="group"
            >
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: index * 0.2,
                    }}
                    className="relative mb-6 h-30 w-24 mx-auto"
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="rounded-full object-cover border-4 border-primary/20
                                    group-hover:border-primary transition-colors duration-300"
                    />
                  </motion.div>

                  <motion.blockquote
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: index * 0.2,
                    }}
                    className="text-lg font-semibold font-heading
                                text-foreground mb-4"
                  >
                    {t.jobs}
                  </motion.blockquote>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: index * 0.2,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    &quot;{t.details}&quot;
                  </motion.p>

                  <motion.cite
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: index * 0.2,
                    }}
                    className="font-bold text-primary italic"
                  >
                    - {t.name}
                  </motion.cite>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
