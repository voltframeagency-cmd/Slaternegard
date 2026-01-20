
import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Trees, 
  Sparkles,
  History,
  Award,
  Star,
  Play,
  User,
  Presentation
} from 'lucide-react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import StallionSection from './components/StallionSection.tsx';
import Accommodation from './components/Accommodation.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone selection:bg-gold/30 selection:text-forest">
      <Navbar />
      
      <main>
        <Hero />

        {/* E-E-A-T Credentials Bar */}
        <section className="bg-white py-12 border-b border-stone overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-4">
              <Award className="text-gold" size={24} />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Nationell Domare</span>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-gold" size={24} />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase">SIF Certifierad</span>
            </div>
            <div className="flex items-center gap-4">
              <Star className="text-gold" size={24} />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase">B-Instruktör</span>
            </div>
            <div className="flex items-center gap-4">
              <History className="text-gold" size={24} />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Etablerat 1992</span>
            </div>
          </div>
        </section>
        
        {/* Heritage Quote Section */}
        <section className="bg-stone py-24 px-6 md:px-12 text-center reveal">
          <div className="max-w-4xl mx-auto space-y-8">
            <History className="text-gold mx-auto opacity-40" size={32} />
            <p className="text-3xl md:text-5xl font-serif text-forest italic leading-snug">
              "Vår ambition är att förmedla kunskap, känsla och respekt för hästen i allt vi gör – från elitavel och utbildning till oförglömliga naturupplevelser."
            </p>
            <div className="flex flex-col items-center">
              <span className="font-bold tracking-[0.3em] uppercase text-xs text-gold">Maria Berg</span>
              <span className="text-[10px] uppercase tracking-widest text-charcoal/40 mt-2">Grundare & Nationell Domare</span>
            </div>
          </div>
        </section>

        {/* Upplevelser Section */}
        <section id="experiences" className="bg-forest relative pt-32 pb-40 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end reveal">
              <div>
                <span className="text-gold font-semibold tracking-[0.4em] uppercase text-xs">Upptäck Högboskogen</span>
                <h2 className="text-5xl md:text-7xl font-serif text-stone mt-6 italic">Turridning i<br/>världsklass</h2>
                <div className="w-24 h-[1px] bg-gold mt-10"></div>
              </div>
              <p className="text-stone/50 text-xl leading-relaxed font-light italic pb-2">
                En ridupplevelse utöver det vanliga. Vi förenar den isländska hästens urkraft med de vackra omgivningarna i Högbo.
              </p>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <Services />
            
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-stone/40 reveal stagger-2">
              <div className="space-y-4">
                <Trees className="text-gold opacity-60" size={32} />
                <h4 className="text-stone font-serif italic text-xl">Naturupplevelsen</h4>
                <p className="text-sm leading-relaxed">Våra turer går genom historisk mark i Högbo, där milsvida skogsstigar bjuder på ett lugn som bara kan upplevas från hästryggen.</p>
              </div>
              <div className="space-y-4">
                <Sparkles className="text-gold opacity-60" size={32} />
                <h4 className="text-stone font-serif italic text-xl">Gångartsglädje</h4>
                <p className="text-sm leading-relaxed">Att tölta genom skogen är en unik upplevelse. Våra välutbildade hästar tar dig fram med mjukhet och kraft i harmoni.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="text-gold opacity-60" size={32} />
                <h4 className="text-stone font-serif italic text-xl">Säkerhet & Kunskap</h4>
                <p className="text-sm leading-relaxed">Vi sätter hästens välmående och ryttarens säkerhet i första rummet. Allt under ledning av erfarna guider.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VEO Preparation: Cinematic Visual Gallery */}
        <section className="bg-white py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-24 reveal">
              <div className="md:w-1/3">
                <span className="text-gold font-bold tracking-widest uppercase text-[10px]">Perspektiv</span>
                <h3 className="text-4xl font-serif text-forest italic mt-2">Atmosfären på Slätterne</h3>
              </div>
              <div className="md:w-2/3 h-px bg-stone"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[600px]">
              <div className="relative group overflow-hidden rounded-3xl reveal stagger-1">
                <img 
                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="Klassisk röd lada i Högbo-stil" 
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-8 left-8">
                  <Play className="text-white fill-white/20 opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl md:mt-12 reveal stagger-2">
                <img 
                  src="https://images.unsplash.com/photo-1504194038171-893f4439c362?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="Rustik lada med trädetaljer" 
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl md:mt-24 reveal stagger-3">
                <img 
                  src="https://images.unsplash.com/photo-1593113016027-937d7768c95a?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="Stallbyggnad i sten och trä" 
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Avel Section */}
        <section id="stallion" className="bg-stone py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-y border-stone">
          <div className="max-w-7xl mx-auto mb-20 text-center reveal">
             <span className="text-gold font-semibold tracking-[0.4em] uppercase text-xs">Excellens i Avel</span>
             <h2 className="text-4xl md:text-6xl font-serif text-forest mt-4 italic">Vårt Avelsprogram</h2>
             <p className="text-charcoal/50 mt-6 max-w-2xl mx-auto font-light">
               Med över tre decennier av erfarenhet avlar vi för temperament, gångartskvalitet och en häst för framtiden.
             </p>
          </div>
          <StallionSection />
        </section>

        {/* Utbildning Section */}
        <section id="education" className="py-40 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-10 reveal">
              <div className="space-y-4">
                <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs">Utbildningscenter</span>
                <h2 className="text-5xl md:text-6xl font-serif text-forest italic leading-tight">Lärande för <br/>Häst & Ryttare</h2>
              </div>
              
              <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed font-light">
                <p>
                  Ledd av <strong>Maria Berg</strong>, certifierad B-instruktör och nationell domare. Vi erbjuder utbildning som vilar på gedigen kunskap och lång erfarenhet.
                </p>
                <p>
                  Vår vision är att stärka samarbetet mellan häst och ryttare, oavsett om målet är tävling eller en mer harmonisk fritidshäst.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="group p-8 border border-stone rounded-3xl bg-stone/20 hover:border-gold/30 transition-all duration-500">
                  <User className="text-gold mb-6" size={24} />
                  <h4 className="font-serif text-2xl text-forest mb-2 italic">Privatlektioner</h4>
                  <p className="text-sm text-charcoal/60 mb-6 font-light italic">Skräddarsydd undervisning för din och din hästs personliga utveckling.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold font-bold">Från 700 SEK</span>
                    <ArrowRight size={16} className="text-forest/20 group-hover:text-gold transition-colors" />
                  </div>
                </div>
                <div className="group p-8 border border-stone rounded-3xl bg-stone/20 hover:border-gold/30 transition-all duration-500">
                  <Presentation className="text-gold mb-6" size={24} />
                  <h4 className="font-serif text-2xl text-forest mb-2 italic">Kliniker</h4>
                  <p className="text-sm text-charcoal/60 mb-6 font-light italic">Fördjupningsdagar inom gångarter, domarhandledning och ridlära.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold font-bold">Boka idag</span>
                    <ArrowRight size={16} className="text-forest/20 group-hover:text-gold transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative group reveal stagger-1">
              <div className="absolute -inset-10 bg-forest/5 rounded-full blur-[100px] opacity-60"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl aspect-square object-cover" alt="Maria Berg Undervisning" />
                 <img src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl aspect-square object-cover mt-8" alt="Islandshäst Utbildning" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gold text-forest p-10 rounded-full shadow-2xl font-serif italic text-2xl z-20">
                 Kvalitetsridning
              </div>
            </div>
          </div>
        </section>

        {/* Logi Section */}
        <section id="stay" className="bg-stone py-40 px-6 md:px-12 lg:px-24 border-t border-stone">
          <Accommodation />
        </section>

        {/* Kontakt Section */}
        <section id="contact" className="py-40 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 skew-x-[-12deg] translate-x-20 pointer-events-none"></div>
          <Contact />
        </section>
      </main>

      {/* WhatsApp Floating Contact Button */}
      <a 
        href="https://wa.me/46702077375"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[55] bg-gold text-forest p-5 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 group flex items-center justify-center border border-gold/20"
        aria-label="Kontakta oss på WhatsApp"
      >
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest text-gold text-[10px] font-bold flex items-center justify-center rounded-full animate-bounce shadow-lg border-2 border-gold">
          1
        </div>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 group-hover:rotate-12 transition-transform">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .014 5.398 0 12.03c0 2.12.554 4.189 1.604 6.03L0 24l6.117-1.605a11.79 11.79 0 005.925 1.599h.005c6.635 0 12.034-5.401 12.035-12.034a11.761 11.761 0 00-3.517-8.292z"/>
        </svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-forest text-stone text-[10px] font-bold tracking-widest uppercase py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>

      <Footer />
    </div>
  );
};

export default App;
