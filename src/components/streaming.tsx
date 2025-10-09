import { pricingTable } from '@/lib/constant';
import * as motion from 'motion/react-client';
import { Card } from './ui/card';
import { CardHeader } from './ui/card';
import { CardTitle } from './ui/card';
import { CardContent } from './ui/card';
import { Button } from './ui/button';
import { CardFooter } from './ui/card';
import { CardDescription } from './ui/card';
import { CardAction } from './ui/card';
import { Badge } from '@/components/ui/badge';

import { Check } from 'lucide-react';

export default function Streaming() {
  return (
    <section className="bg-foreground/4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {' '}
          <span className="text-primary">GravityLeague TV </span>subscription
          plans{' '}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="text-xl text-muted-foreground text-center max-w-2xl mb-16 mx-auto"
        >
          Choose the perfect plan for watch your favorite team.
        </motion.p>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {pricingTable.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              key={plan.name}
              className="relative"
            >
              <Card
                className={` duration-300 md:hover:scale-105  ${
                  plan.popular
                    ? 'border-primary border-2 ring-1 ring-primary/20'
                    : ''
                } `}
              >
                {plan.popular && (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary 
                                    text-primary-foreground px-6 py-1"
                  >
                    {' '}
                    Most Popular{' '}
                  </Badge>
                )}

                <CardHeader className="text-center p-8 pb-0">
                  <h3 className="font-bold font-heading text-2xl text-foreground mb-2 ">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div>
                    <span className="text-5xl font-black font heading text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 mr-3 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 text-lg font-semibold transition-colors duration-300 ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : 'bg-secondary hover:bg-primary text-primary-foreground dark:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="mt-12 text-center "
        >
          <p className="text-muted-foreground">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
