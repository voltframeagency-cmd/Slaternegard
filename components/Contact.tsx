
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
      <div className="md:w-1/2 space-y-12 reveal">
        <div>
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs">Concierge-Modellen</span>
          <h2 className="text-4xl md:text-6xl font-serif text-forest mt-4 italic">Direkt Konsultation</h2>
          <p className="text-charcoal/60 mt-6 text-lg leading-relaxed font-light">
            Varje kundrelation på Slätterne Gård hanteras med personlig omsorg. För att bibehålla högsta servicenivå börjar alla bokningar med ett direkt samtal.
          </p>
        </div>

        <div className="space-y-10">
          <div className="group">
            <a href="tel:+46702077375" className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-stone flex items-center justify-center text-forest group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase mb-2">Primär Telefon</p>
                <p className="text-3xl font-serif text-forest gold-link">070-20 77 375</p>
              </div>
            </a>
          </div>

          <div className="group">
            <a href="mailto:slatterne@slatternegard.se" className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-stone flex items-center justify-center text-forest group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase mb-2">Digitala Förfrågningar</p>
                <p className="text-2xl font-serif text-forest gold-link">slatterne@slatternegard.se</p>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-stone flex items-center justify-center text-forest shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase mb-2">Besöksadress</p>
              <p className="text-2xl font-serif text-forest leading-snug">
                Kvarnströmsvägen 18 <br />
                811 92 Sandviken
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 reveal stagger-1">
        <div className="bg-stone rounded-[2.5rem] overflow-hidden h-[600px] relative shadow-2xl border border-gold/10 group">
          <img 
            src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=1000" 
            alt="Slätterne Gård Omgivning" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="bg-white/90 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl max-w-sm text-center border border-white/50">
              <h4 className="text-2xl font-serif italic text-forest mb-6">Planera ditt besök</h4>
              <p className="text-charcoal/60 text-sm mb-8 leading-relaxed font-light">
                Beläget i det historiska Högbo, ligger vår gård en timmes bilresa från huvudstaden och erbjuder en omedelbar tillflykt till den svenska vildmarken.
              </p>
              <button className="flex items-center justify-center gap-3 w-full py-5 bg-forest text-gold font-bold rounded-2xl hover:bg-gold hover:text-white transition-all shadow-xl">
                Öppna i Kartor <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
