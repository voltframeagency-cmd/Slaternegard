
import React from 'react';
import { Clock, Info, ChevronRight, Sparkles } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps & { staggerClass?: string }> = ({ 
  title, description, price, duration, inclusions, constraint, image, staggerClass 
}) => (
  <div className={`reveal ${staggerClass} group bg-[#16271D] border border-white/10 rounded-sm overflow-hidden flex flex-col h-full hover:border-gold/40 transition-all duration-700 shadow-2xl`}>
    <div className="relative h-[32rem] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=1200";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#16271D] via-transparent to-transparent"></div>
      
      <div className="absolute top-10 left-10">
        <div className="flex items-center gap-3 bg-forest/80 backdrop-blur-md px-5 py-2 border-l-2 border-gold text-stone shadow-2xl">
          <Sparkles size={14} className="text-gold" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Premium-Erbjudande</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 right-10">
        <h3 className="text-4xl md:text-5xl font-serif text-stone italic leading-tight group-hover:text-gold transition-colors duration-500">{title}</h3>
      </div>
    </div>
    
    <div className="p-12 flex-1 flex flex-col space-y-10">
      <div className="flex items-center justify-between text-stone/40 border-b border-white/5 pb-6">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-gold/60" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{duration} Tid</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-1">Pris</span>
          <span className="text-2xl font-serif text-stone italic">{price}</span>
        </div>
      </div>
      
      <p className="text-stone/60 text-lg leading-relaxed font-light italic">
        {description}
      </p>

      {inclusions && (
        <div className="space-y-6 pt-2">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold">Specifikationer</p>
          <div className="grid grid-cols-1 gap-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 text-sm text-stone/80 font-light group-hover:text-stone transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0 opacity-40"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {constraint && (
        <div className="p-5 bg-white/[0.02] border border-white/5 text-[11px] text-stone/40 italic flex gap-4 items-center">
          <Info size={14} className="shrink-0 text-gold/40" />
          <span>{constraint}</span>
        </div>
      )}

      <div className="pt-8 mt-auto">
        <button className="w-full py-6 bg-gold text-forest font-bold text-xs uppercase tracking-[0.3em] rounded-sm hover:bg-stone hover:text-forest transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl relative">
          <span className="relative z-10">Boka Nu</span>
          <ChevronRight size={16} className="relative z-10" />
        </button>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const experiences: ServiceCardProps[] = [
    {
      title: "Lyxturen",
      description: "Vår signaturtur genom Högboskogen. En cinematisk 3-timmars resa som avslutas med en hantverksmässig lyxfika på gården.",
      price: "800 SEK",
      duration: "3 Timmar",
      inclusions: [
        "2 timmar effektiv ridning i gångarter",
        "Skogsstopp med bubbel eller lyxmust",
        "Kurerad gourmetsmörgås & gårdsbakat bakverk",
        "Privat genomgång av lokalt kulturarv"
      ],
      constraint: "Maxvikt 90kg för hästarnas välmående.",
      image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Prova på tur",
      description: "En professionell introduktion till den isländska hästens fem gångarter. Perfekt för dig som söker teknisk insikt och ett första möte med tölt.",
      price: "500 SEK",
      duration: "2 Timmar",
      inclusions: [
        "1 timme effektiv teknisk ridning",
        "Guidad introduktion till töltens mekanik",
        "Genomgång av rasens unika karaktär",
        "Säkerhetsgenomgång och utrustningslära"
      ],
      image: "https://images.unsplash.com/photo-1551150441-3f3828204ef0?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {experiences.map((exp, idx) => (
        <ServiceCard key={idx} {...exp} staggerClass={idx === 1 ? 'stagger-1' : ''} />
      ))}
    </div>
  );
};

export default Services;
