
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Upplevelser', href: '#experiences' },
    { name: 'Avel', href: '#stallion' },
    { name: 'Utbildning', href: '#education' },
    { name: 'Boende', href: '#stay' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-2xl tracking-widest transition-colors ${isScrolled ? 'text-forest' : 'text-stone'}`}>
            SLÄTTERNE GÅRD
          </span>
          <span className={`text-[10px] tracking-[0.4em] font-medium transition-colors ${isScrolled ? 'text-gold' : 'text-gold/80'}`}>
            ETABLERAT 1992
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium tracking-wide hover:text-gold transition-colors ${isScrolled ? 'text-charcoal' : 'text-stone'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+46702077375" 
            className="bg-gold text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gold/90 transition-all shadow-lg hover:shadow-gold/20"
          >
            Boka Nu
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className={isScrolled ? 'text-forest' : 'text-stone'} /> : <Menu className={isScrolled ? 'text-forest' : 'text-stone'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-stone shadow-xl p-8 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif text-forest border-b border-stone pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+46702077375" 
            className="bg-forest text-gold text-center py-4 rounded-lg font-bold"
          >
            Kontakta Maria Berg
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
