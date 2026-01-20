
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-stone/80 pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-serif text-2xl tracking-widest text-stone mb-4 uppercase">
            Slätterne Gård
          </h3>
          <p className="text-xs tracking-[0.3em] font-medium text-gold mb-8">ETABLERAT 1992</p>
          <p className="text-sm leading-relaxed opacity-60">
            En exklusiv hästgård dedikerad till den isländska hästen. Vi bevarar det kulturella arvet genom utbildning, turridning och avel i världsklass.
          </p>
        </div>

        <div>
          <h4 className="font-serif italic text-stone text-lg mb-6">Genvägar</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#experiences" className="hover:text-gold transition-colors">Turridning i Högbo</a></li>
            <li><a href="#stallion" className="hover:text-gold transition-colors">Våra Hingstar</a></li>
            <li><a href="#education" className="hover:text-gold transition-colors">Undervisning & Kurser</a></li>
            <li><a href="#stay" className="hover:text-gold transition-colors">Boende & Retreater</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif italic text-stone text-lg mb-6">Adress</h4>
          <p className="text-sm leading-relaxed opacity-60">
            Kvarnströmsvägen 18<br />
            811 92 Sandviken<br />
            Gävleborgs län
          </p>
          <div className="mt-8">
            <h4 className="font-serif italic text-stone text-lg mb-4">Kontakt</h4>
            <p className="text-sm opacity-60">070-20 77 375</p>
            <p className="text-sm opacity-60">slatterne@slatternegard.se</p>
          </div>
        </div>

        <div>
          <h4 className="font-serif italic text-stone text-lg mb-6">Medlemskap</h4>
          <div className="space-y-6">
            <div className="p-4 bg-white/5 border border-gold/10 rounded-xl">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">SIF Ansluten</p>
              <p className="text-xs opacity-60 leading-relaxed italic">
                Stolt medlem av Svenska Islandshästförbundet.
              </p>
            </div>
            <div className="p-4 bg-white/5 border border-gold/10 rounded-xl">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2">Heritage Source</p>
              <p className="text-xs opacity-60 leading-relaxed italic">
                Innehåll verifierat via <a href="https://web.archive.org/web/20240224155942/https://www.slatternegard.se/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold transition-colors">Web Archive</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase font-medium opacity-40">
        <p>© {new Date().getFullYear()} Slätterne Gård. Innehåll baserat på gårdens anrika historia.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold">Integritet</a>
          <a href="#" className="hover:text-gold">Villkor</a>
          <a href="#" className="hover:text-gold">Webbkakor</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
