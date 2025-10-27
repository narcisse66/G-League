"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { navItems } from '@/lib/constant';
import ThemeToggle from "./ThemeToggle";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-between">
                <ThemeToggle />
                <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
            </div>

            <div className=  {` mt-7 shadow-lg fixed left-0 right-0 top-16 z-40 md:hidden bg-background border-t border-border dark:border-secondary/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => 
                        (<Link className=" text-center text-foreground hover:text-primary block px-3 py-2 font-medium" key={item.name} href={item.href} > 
                        {item.name} </Link>))}

                    <div className="px-3 py-2">
                        <Button className="w-full font-semibold">Join Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
