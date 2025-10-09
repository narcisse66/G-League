import Link from 'next/link';
import { navItems } from '@/lib/constant';
import { Button } from './ui/button';
import MobileNavigation from './mobilenavigation';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function navbar() {
  return (
    <nav
      className=" dark:bg-gray-800 fixed  top-0 left-0 right-0  z-50  bg-background/95
          backdrop-blur-md border-b border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-23">
          
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logos/logo7.png"  
              alt="Gravity League Logo"
              width={60}
              height={60}
              className="object-contain dark:hidden"
            />

            <Image
              src="/images/logos/logo7white.png"
              alt="Gravity League Logo Dark"
              width={60}
              height={60}
              className="object-contain hidden dark:block"
            />
            <h1 className="text-2xl font-black font-heading text-primary">
              GravityLeague
            </h1>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center spaxe-x-4">
            <ThemeToggle />
            <Button className="font-semibold">Join us</Button>
          </div>

          {/* Mobile navigation*/}
          <div className='md:hidden'>
            <MobileNavigation />

          </div>
        </div>
      </div>
    </nav>
  );
}
