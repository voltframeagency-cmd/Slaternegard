
import React, { useState } from 'react';
import { Heart, Dna, Info, ChevronRight } from 'lucide-react';

const StallionSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const panels = [
    {
      id: 'profile',
      title: 'Hingsten',
      subtitle: 'Askur frá Enni',
      image: 'https://images.unsplash.com/photo-1598974357851-cb05bf3714a4?auto=format&fit=crop&q=80&w=1200',
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-gold/60 font-mono text-[10px] tracking-widest uppercase border-b border-white/10 pb-4">
            <span>IS2014158455</span>
            <span className="w-12 h-[1px] bg-gold/30"></span>
            <span>Kolsvart</span>
          </div>
          <p className="text-xl text-stone/80 font-light italic leading-relaxed">
            "Vill du avla topphästar eller fantastiska ridhästar? Askur tillför en gedigen avel för goda hästar som presterar i både sport och avel."
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Mankhöjd</span>
              <span className="text-2xl font-serif text-stone italic">148 cm</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Bedömning</span>
              <span className="text-2xl font-serif text-stone italic">8.50 Totalt</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'scores',
      title: 'Prestation',
      subtitle: 'Teknisk Skicklighet',
      image: 'https://images.unsplash.com/photo-1551150441-3f3828204ef0?auto=format&fit=crop&q=80&w=1200',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {[
            { l: 'Tölt', v: '9.0' },
            { l: 'Helhetsintryck', v: '9.0' },
            { l: 'Ande', v: '8.5' },
            { l: 'Trav', v: '8.5' },
            { l: 'Galopp', v: '8.5' },
            { l: 'Skritt', v: '8.5' }
          ].map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col justify-center text-center">
              <span className="text-[9px] uppercase tracking-widest text-gold font-bold mb-1">{s.l}</span>
              <span className="text-2xl font-serif text-stone italic">{s.v}</span>
            </div>
          ))}
          <div className="col-span-2 p-4 bg-gold/10 rounded-xl border border-gold/20">
             <p className="text-[10px] text-stone/60 leading-relaxed italic">
                Topp-BLUP i Sverige för tölt och helhetsintryck. Bedömd utan pass.
             </p>
          </div>
        </div>
      )
    },
    {
      id: 'pedigree',
      title: 'Härstamning',
      subtitle: 'Elitstamtavla',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200',
      content: (
        <div className="space-y-6">
          <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
            <div className="flex items-center gap-3 text-gold mb-3">
              <Dna size={16} />
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase">Far: Loki frá Selfossi</p>
            </div>
            <p className="text-xs text-stone/60 leading-relaxed">
              1:a klass för avkommor. 9,5 för tölt och helhetsintryck. Far till Fenrir frá Fet.
            </p>
          </div>
          <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
            <div className="flex items-center gap-3 text-gold mb-3">
              <Heart size={16} />
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase">Mor: Sending frá Enni</p>
            </div>
            <p className="text-xs text-stone/60 leading-relaxed">
              Hederspremie för avkommor. 8 av 11 visade avkommor i 1:a klass.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'breeding',
      title: 'Betäckning',
      subtitle: 'Priser & Villkor',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-[9px] uppercase text-gold font-bold">Språngavgift</p>
              <p className="text-xl font-serif text-stone">5,000:-</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-[9px] uppercase text-gold font-bold">45 Dygn</p>
              <p className="text-xl font-serif text-stone">5,000:-</p>
            </div>
          </div>
          <div className="p-4 bg-forest border border-gold/20 rounded-xl flex items-start gap-4">
            <div className="p-1.5 bg-gold/20 rounded-md">
              <Info size={14} className="text-gold shrink-0" />
            </div>
            <p className="text-[10px] text-stone/60 italic leading-relaxed">
              Endast handbetäckning. Bete (100:-/dygn) & Uppstallning (150:-/dygn) tillgängligt. Priser exkl. moms.
            </p>
          </div>
          <a href="tel:+46702077375" className="w-full py-4 bg-gold text-forest font-bold text-[10px] uppercase tracking-[0.3em] rounded-lg hover:bg-stone transition-all flex items-center justify-center gap-3">
            Bokningsförfrågan 2025 <ChevronRight size={14} />
          </a>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto h-[700px] flex overflow-hidden rounded-[3rem] shadow-2xl border border-stone/50 bg-forest relative">
      {panels.map((panel, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          className={`relative h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0
            ${hoveredIdx === null ? 'flex-1' : hoveredIdx === idx ? 'flex-[4]' : 'flex-[0.5]'}`}
        >
          {/* Background Image */}
          <img 
            src={panel.image} 
            alt={panel.title} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2.5s] ease-out
              ${hoveredIdx === idx ? 'scale-110 grayscale-0 brightness-[0.45]' : 'scale-100 grayscale brightness-[0.25]'}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=1200';
            }}
          />
          
          {/* Vertical Collapsed Title */}
          <div className={`absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-700
            ${hoveredIdx === idx || hoveredIdx === null ? 'opacity-0 translate-y-10' : 'opacity-40'}`}>
            <span className="text-stone font-serif text-lg italic uppercase tracking-[0.4em] whitespace-nowrap -rotate-90">
              {panel.title}
            </span>
          </div>

          {/* Expanded Content Wrapper */}
          <div className={`absolute inset-0 flex flex-col justify-end p-12 transition-all duration-1000 transform
            ${hoveredIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
            
            <div className="mb-8 space-y-2">
              <span className="text-gold text-[10px] tracking-[0.5em] font-bold uppercase block border-l-2 border-gold pl-4">
                {panel.subtitle}
              </span>
              <h3 className="text-stone font-serif text-5xl md:text-6xl italic leading-tight">{panel.title}</h3>
            </div>
            
            <div className="max-w-lg transition-all duration-1000 delay-200">
              {panel.content}
            </div>
          </div>

          {/* Neutral State Overlay */}
          <div className={`absolute inset-x-0 bottom-12 px-6 text-center transition-all duration-700
            ${hoveredIdx === null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <h4 className="text-stone font-serif text-2xl italic mb-2">{panel.title}</h4>
            <div className="w-8 h-px bg-gold/40 mx-auto"></div>
          </div>
        </div>
      ))}

      {/* Center Label */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000
        ${hoveredIdx !== null ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
         <div className="bg-forest/80 backdrop-blur-2xl p-12 rounded-full border border-gold/20 shadow-2xl flex flex-col items-center">
            <span className="text-[10px] tracking-[0.6em] font-bold uppercase text-gold mb-4">Elithingst</span>
            <h2 className="text-5xl font-serif italic text-stone">Askur frá Enni</h2>
         </div>
      </div>
    </div>
  );
};

export default StallionSection;
