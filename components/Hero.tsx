
import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-forest">
      {/* Cinematic Verified Horse Portrait */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=2000" 
          alt="Porträtt av en ståtlig Isländsk häst" 
          className="w-full h-full object-cover opacity-60 animate-slow-zoom"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1598974357851-cb05bf3714a4?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-transparent to-forest/90"></div>
      </div>

      {/* Hero Branding Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-stone select-none">
        <div className="mb-10 inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-stone/10 px-8 py-3 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="text-xs tracking-[0.4em] font-bold uppercase text-gold/80">Välkommen till Slätterne Gård</span>
        </div>
        
        <div className="relative">
          <h1 className="text-6xl md:text-[10rem] font-serif mb-10 leading-[0.8] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-2xl">
            Isländsk <br /> 
            <span className="italic text-gold">Mästerlighet</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-light mb-14 max-w-2xl mx-auto opacity-80 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            Trettio år av elitavel, högkompetent utbildning och cinematiska ridsportupplevelser i hjärtat av Sverige.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <a 
            href="#experiences" 
            className="group relative px-12 py-6 bg-gold text-forest font-bold text-sm uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gold/30"
          >
            Utforska Gården <ChevronRight size={18} className="inline ml-2" />
          </a>
          <a 
            href="#stallion" 
            className="px-12 py-6 border border-stone/30 text-stone font-bold text-sm uppercase tracking-[0.2em] rounded-full hover:bg-stone/10 transition-all backdrop-blur-sm"
          >
            Avelsprogram
          </a>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-16 left-0 right-0 z-10 hidden lg:block pointer-events-none">
        <div className="max-w-7xl mx-auto px-12 flex justify-between items-center text-stone/40 uppercase tracking-[0.4em] text-[10px] font-bold">
          <div className="flex items-center gap-4">
            <span className="text-gold text-2xl font-serif italic">30+</span>
            År av Erfarenhet
          </div>
          <div className="flex flex-col items-center">
             <ArrowDown className="animate-bounce text-gold mb-2" size={20} />
             <span>Scrolla för att Utforska</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold text-2xl font-serif italic">Elit</span>
            BLUP-Ranking
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
