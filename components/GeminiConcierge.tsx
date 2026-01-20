
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User as UserIcon, Loader2, Sparkles, MapPin, Calendar, Info } from 'lucide-react';
import { getConciergeResponseStream } from '../geminiService';
import { Message } from '../types';

interface GeminiConciergeProps {
  onClose: () => void;
}

const GeminiConcierge: React.FC<GeminiConciergeProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Välkommen till Slätterne Gård. Jag är din digitala assistent. Har du frågor om våra ridturer, vår avel med Askur eller Marias privatlektioner? Hur kan jag hjälpa dig idag?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion);
    // Auto-submit would be even better for CRO
  };

  const handleSubmit = async (e: React.FormEvent | string) => {
    if (typeof e !== 'string') e.preventDefault();
    
    const messageToSend = typeof e === 'string' ? e : input.trim();
    if (!messageToSend || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      let fullResponse = '';
      const stream = getConciergeResponseStream(messageToSend);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = fullResponse;
          return newMessages;
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("AI Stream Error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = "Något gick fel vid anslutningen. Prova ringa Maria direkt på 070-20 77 375!";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    { label: "Boka Lyxturen", icon: <MapPin size={10} />, text: "Hur bokar jag Lyxturen?" },
    { label: "Hingstavgifter", icon: <Info size={10} />, text: "Vad kostar det att betäcka med Askur?" },
    { label: "Ridläger", icon: <Calendar size={10} />, text: "Har ni några ridläger inplanerade?" },
  ];

  return (
    <div 
      className="fixed inset-0 sm:inset-auto sm:bottom-8 sm:right-8 w-full sm:w-[420px] sm:max-h-[650px] h-full sm:h-auto bg-white sm:rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] z-[60] flex flex-col border border-gold/20 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-12 duration-500"
      role="dialog"
      aria-label="AI Gårdshjälpen"
    >
      <div className="bg-forest p-8 flex items-center justify-between text-stone relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/30">
            <Sparkles size={20} className="text-gold" />
          </div>
          <div>
            <h3 className="font-serif italic text-xl leading-none mb-1">Gårdshjälpen</h3>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold/60 font-bold">Smart Concierge</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="p-3 hover:bg-white/10 rounded-full transition-colors relative z-10"
          aria-label="Stäng chatt"
        >
          <X size={20} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-stone/20 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse text-right' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border mt-1 ${msg.role === 'user' ? 'bg-gold border-gold text-white' : 'bg-white border-gold/20 text-forest shadow-sm'}`}>
                {msg.role === 'user' ? <UserIcon size={12} /> : <Bot size={12} />}
              </div>
              <div className={`p-5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap transition-all duration-300 ${msg.role === 'user' ? 'bg-forest text-stone rounded-tr-none' : 'bg-white text-charcoal rounded-tl-none border border-gold/5'}`}>
                {msg.content || (isLoading && idx === messages.length - 1 ? "..." : "")}
              </div>
            </div>
          </div>
        ))}
        {isLoading && !messages[messages.length - 1].content && (
          <div className="flex justify-start">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white border border-gold/20 flex items-center justify-center shrink-0">
                <Bot size={12} className="text-forest animate-pulse" />
              </div>
              <div className="p-5 rounded-2xl bg-white/50 text-charcoal/40 text-xs italic flex items-center gap-2 border border-dashed border-gold/20">
                <Loader2 size={12} className="animate-spin text-gold" />
                Analyserar din förfrågan...
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-stone flex flex-col gap-4">
        {/* CRO: Quick Suggestions nudge users toward high-value intents */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {suggestions.map((s, i) => (
            <button 
              key={i}
              onClick={() => handleSubmit(s.text)}
              className="flex items-center gap-2 px-3 py-2 bg-stone/50 text-[10px] font-bold tracking-widest uppercase text-charcoal/70 border border-stone rounded-full hover:border-gold/50 hover:bg-stone transition-all whitespace-nowrap"
            >
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Skriv din fråga..."
            className="flex-1 bg-stone/30 border border-stone rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all placeholder:text-charcoal/30"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-forest text-gold p-4 rounded-2xl hover:bg-gold hover:text-white transition-all disabled:opacity-30 shadow-lg shadow-forest/10"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeminiConcierge;
