
import React from 'react';
import { Home, Coffee, Utensils, Calendar, Users, Star, ArrowRight } from 'lucide-react';

const Accommodation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-gold font-semibold tracking-[0.2em] uppercase text-sm">Inspirerande Vistelse</span>
          <h2 className="text-5xl md:text-7xl font-serif text-forest mt-4 italic leading-tight">Historiska Retreater</h2>
        </div>
        <p className="text-charcoal/50 max-w-sm text-sm leading-relaxed mb-2 font-light italic">
          "Där högkompetent utbildning möter lugnet i det historiska Högbodistriktet."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Weekend Camps focus */}
        <div className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] h-[700px] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200" 
            alt="Estate Grounds" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent"></div>
          
          <div className="absolute bottom-16 left-16 right-16 text-stone space-y-8">
            <div className="inline-flex items-center gap-3 bg-gold/90 text-forest px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-xl">
               <Star size={12} fill="currentColor" /> Premier-Retreat
            </div>
            
            <div className="space-y-4">
               <h3 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight">Weekendläger</h3>
               <p className="max-w-xl text-lg opacity-80 leading-relaxed font-light">
                 Våra weekendläger är designade för total fördjupning. Förvänta dig intensiv privatundervisning, teoretiska kliniker och <strong>"god mat"</strong> – lokalproducerad mat lagad med kärlek på gården.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <Users size={24} className="text-gold mb-3" />
                <h5 className="text-xs uppercase tracking-widest font-bold mb-2">Gruppdynamik</h5>
                <p className="text-[10px] opacity-60 italic">Små, intima grupper för fokuserad utveckling.</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <Utensils size={24} className="text-gold mb-3" />
                <h5 className="text-xs uppercase tracking-widest font-bold mb-2">Helpension</h5>
                <p className="text-[10px] opacity-60 italic">Traditionell frukost, lunch och gemensamma gårds middagar.</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <Calendar size={24} className="text-gold mb-3" />
                <h5 className="text-xs uppercase tracking-widest font-bold mb-2">Tid</h5>
                <p className="text-[10px] opacity-60 italic">2-3 dagar av intensiv utbildning på isländsk häst.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guest House focus */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-stone flex flex-col h-full hover:border-gold/30 transition-all duration-500">
            <div className="w-16 h-16 bg-stone rounded-2xl flex items-center justify-center mb-10">
               <Home className="text-gold" size={32} />
            </div>
            <h4 className="text-3xl font-serif text-forest italic mb-6">Gästhuset</h4>
            <p className="text-charcoal/60 text-base leading-relaxed mb-8 font-light">
              Upplev det autentiska lantlivet på Kvarnströmsvägen 18. Våra gästrum är kurerade för att erbjuda en fristad av fred bara några steg från stallen.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Lantlig ro i Högbo',
                'Snabbt fiber-Wi-Fi',
                'Kurerad historisk interiör',
                'Direkt tillgång till skogsstigar'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-charcoal/80">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-sm"></div> {item}
                </li>
              ))}
            </ul>
            <button className="flex items-center justify-center gap-3 w-full py-6 bg-forest text-stone font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-gold transition-all shadow-xl group/btn">
              Se Tillgänglighet <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-forest p-12 rounded-[2.5rem] shadow-xl flex flex-col justify-center items-center text-center text-stone relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
               <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            </div>
            <Coffee className="text-gold mb-6 relative z-10" size={40} />
            <h4 className="text-2xl font-serif italic mb-4 relative z-10">Hantverksmässig Fika</h4>
            <p className="text-stone/60 text-sm leading-relaxed max-w-xs relative z-10 font-light">
              Vi värnar om den svenska fikatraditionen med hembakat bröd och bakverk från lokala hantverksbagare i Sandviken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
