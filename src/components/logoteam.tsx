import Image from 'next/image';
import { logos } from '../lib/constant';
import { Button } from './ui/button';
import Link from 'next/link';
export default function LogoTeam() {
  return (
    <div className="overflow-hidden  bg-white dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">
        All Teams
      </h1>
      <div className="flex gap-12 animate-marquee">
        {logos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            width={200}
            height={200}
            className="object-contain"
          />
        ))}

       
        {logos.map((src, index) => (
          <Image
            key={`clone-${index}`}
            src={src}
            alt={`Logo clone ${index + 1}`}
            width={200}
            height={200}
            className="object-contain"
          />
        ))}

        
      </div>
      <Button className="mt-8 mx-auto block">
        <Link href="/teams" className="hover:underline">
          View All Teams
        </Link>

      </Button>

     
    </div>
  );
}
