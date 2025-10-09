"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useState } from "react";
import { useEffect } from "react";


export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    
    useEffect(() => {
        setMounted(true);
    }, []);

    
    if (!mounted) return null;
    return (

        <Button variant="ghost" 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
        >
           {theme ==="dark" ? (
                <Sun className="w-4 h-4"  />
            ) : (
                <Moon className="w-4 h-4"  />
            )
           }
        </Button>
    );
}