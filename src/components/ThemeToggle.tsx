
import React from 'react';
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="hover:bg-accent/20"
    >
      <Sun 
        className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" 
      />
      <Moon 
        className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" 
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
