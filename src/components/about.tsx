import { Calendar, CheckCircle, TrendingUp, Users, Trophy, ShieldCheck, BarChart3, FileText } from 'lucide-react';
import { div, h1 } from 'motion/react-client';
import * as motion from 'motion/react-client';
import { title } from 'process';

export default function About() {
  const features = [
    {
      icon: FileText,
      title: 'Teams & Format',
      description:
        '6 professional teams. One goal: the title. The season includes regular games, playoffs, and the ultimate finals showdown.',
    },

    {
      icon: Calendar,
      title: 'Season Structure',
      description:
        'A competitive format with weekly matchups, mid-season tournaments, and a high-energy playoff bracket that crowns the champion.',
    },

    {
      icon: TrendingUp,
      title: 'Player Development',
      description:
        "GravityLeague focuses on developing talent. Up-and-coming stars, local talents, and future professionals all have the chance to shine.",
    },

    {
      icon: Users,
      title: 'Community & Culture',
      description:
        'More than basketball : GravityLeague fuels a culture. Fans, players, and cities come together to celebrate the game in its purest form.',
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-3xl font-bold mb-8 text-center"
      >
         {"What's"} <span className="text-primary">GravityLeague</span> ?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="text-xl text-muted-foreground text-center max-w-2xl mx-auto"
      >
        GravityLeague is a professional basketball league showcasing the top teams of Abomey-Calavi and rising talent. .
      </motion.p>

      {/*Features grid */}
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            className="group text-center"
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-primary/20
                    inline-flex text-primary items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.18,
              }}
            >
              <feature.icon className="w-8 h-8" />
            </motion.div>
            <motion.h3
              className="text-xl font-bold font-heading mb-4 text-foreground"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.14,
              }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.16,
              }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
