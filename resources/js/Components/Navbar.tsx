import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from "@/Components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="h-20 md:h-32 flex items-center bg-primary">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="p-0 lg:hidden text-primary-foreground hover:text-secondary transition-colors duration-200" onClick={toggleMenu}>
              <Menu className="h-5 w-5" />
            </Button>
            <img src="/img/Fit Co_White.svg" alt="FIT FOOD co" className="h-8 md:h-10" />
          </div>
          <div className="flex items-center space-x-4">
            <p className="hidden lg:block text-sm font-medium text-primary-foreground">Conveniently Good Food!</p>
            <Button variant="ghost" size="sm" className="p-1 text-primary-foreground hover:text-secondary transition-colors duration-200">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-start pt-8"
          >
            <div className="w-full flex flex-col items-center">
              <img src="/img/Fit Co_White.svg" alt="FIT FOOD co" className="w-1/2 max-w-[150px] mb-8" />
              <Button
                onClick={toggleMenu}
                className="mt-4 text-primary-foreground font-semibold hover:bg-secondary transition-colors duration-200"
                variant="ghost"
              >
                <X className="mr-2 h-5 w-5" /> Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
