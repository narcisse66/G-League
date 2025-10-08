import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 text-neutral-100 transition-colors duration-300 overflow-x-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-w-full ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/*Branding */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black font-heading text-primary mb-4">
              GravityLeague 
            </h3>
            <p className="mb-6 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              quaerat id doloribus rem nam minima sed quibusdam quae. Dolores
              veritatis aperiam mollitia ratione rerum commodi quos, tempore
              dicta incidunt eos?
            </p>

            <div className="flex space-x-4">
              <Link
                href="/"
                className="w-10 h-10 bg-secondary/40 rounded-full
                            flex items-center justify-center hover:bg-primary  transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 " />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 bg-secondary/40 rounded-full
                            flex items-center justify-center hover:bg-primary  transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 " />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 bg-secondary/40 rounded-full
                            flex items-center justify-center hover:bg-primary  transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 " />
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Home',
                'About Us',
                'Services',
                'Pricing',
                'Blog',
                'Contact',
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">
              Contact Info
            </h4>
            <div className="space-y-2">
              <p>
                {' '}
                <strong>Phone:</strong> +229 (01) 955 555 55
              </p>
              <p>
                {' '}
                <strong>Email:</strong> GravityLeague@gmail.com
              </p>
              <p>
                <strong> Location:</strong> Ab-Calavi 123 Main St.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t  border-secondary/40 mt-8 pt-8 text-center text-sm text-muted-foreground text-neutral-400 pt-20">
          <p>@ 2025 GravityLeague. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
