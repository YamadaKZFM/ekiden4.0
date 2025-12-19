import React, { useState } from 'react';
import { RELAY_DATA } from './constants';
import { RelaySection } from './types';
import { SectionCard } from './components/SectionCard';
import { DetailModal } from './components/DetailModal';
import { Map, Zap, HeartHandshake, MapPin, Clock, Banknote, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<RelaySection | null>(null);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-black shadow-2xl relative overflow-hidden text-white font-sans selection:bg-white selection:text-black">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/40 via-black to-black z-0" />

      {/* Sticky Header: Minimalist Black & White with Wave Design */}
      <header className="sticky top-0 z-20 bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden">
        {/* Wave Lines Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d={`M0 ${50 + i * 4} Q100 ${30 + i * 4 + Math.sin(i) * 10} 200 ${50 + i * 4} T400 ${50 + i * 4}`}
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-4">
          {/* NCA Logo - Larger with glow effect */}
          <div className="mb-2 relative">
            <div className="absolute inset-0 blur-2xl bg-white/10 rounded-full scale-150"></div>
            <img
              src="./images/nca_logo.jpg"
              alt="NCA"
              className="h-20 w-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            />
          </div>
          <span className="text-[10px] font-bold tracking-[0.5em] text-stone-400 uppercase">
            Hakone Relay 2025
          </span>
        </div>
      </header>

      {/* Intro Text: High Contrast */}
      <div className="relative z-10 px-6 py-10 text-center">
        <p className="font-bold text-2xl leading-tight mb-4 tracking-tight">
          スポーツを<br/>もっと自分らしく。
        </p>
        <p className="font-serif text-xs leading-7 text-stone-400">
          選ばれし速い学生だけの“憧れの舞台”ではない。<br/>
          伝統に敬意を払い、<span className="text-white border-b border-white pb-0.5">再構築する。</span>
        </p>
      </div>

      {/* Main Content List */}
      <main className="relative z-10 px-4 pb-12 space-y-3">
        <div className="flex items-center justify-between mb-6 px-1 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
            <Map className="w-3 h-3" />
            <span>Course Sections</span>
          </div>
          <span className="font-mono text-stone-500 text-[10px]">2025.12.21</span>
        </div>

        {RELAY_DATA.map((item) => (
          <SectionCard 
            key={item.id} 
            data={item} 
            onClick={setSelectedSection} 
          />
        ))}

        {/* Divider */}
        <div className="py-10 flex flex-col items-center opacity-50 gap-2">
           <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>

        {/* Charity Section: Monotone with minimal accent if needed, keeping it cool */}
        <div className="group bg-stone-950 rounded-none border border-white/20 overflow-hidden relative transition-all duration-500 hover:border-white/50">
           
           <div className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-block bg-white text-black text-[10px] font-black px-2 py-1 uppercase tracking-wider">
                  Charity Event
                </div>
                <HeartHandshake className="w-6 h-6 text-stone-400 group-hover:text-white transition-colors" />
              </div>

              <h2 className="font-serif text-3xl font-bold text-white leading-none mb-2 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all">
                Charity 5KM Run
              </h2>
              <p className="text-xs text-stone-400 mb-8 font-serif">
                移動経費支援のためのチャリティーラン。
              </p>

              <div className="grid gap-6">
                 {/* For Runners */}
                 <div className="relative pl-4 border-l border-white/30">
                    <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">
                       Runners
                    </h3>
                    <div className="space-y-1 text-sm text-stone-400 font-mono">
                       <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-white" />
                          <span>17:30 @ Otemachi</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-white" />
                          <span>5km (Imperial Palace)</span>
                       </div>
                    </div>
                 </div>

                 {/* For Spectators */}
                 <div className="relative pl-4 border-l border-white/30">
                    <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">
                       Spectators
                    </h3>
                    <div className="space-y-1 text-sm text-stone-400 font-mono">
                       <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-white" />
                          <span>18:30 @ Otemachi</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <Banknote className="w-3 h-3 text-white" />
                          <span>Donation: ¥500~</span>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                 <p className="text-xs font-mono text-white inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                    GOAL: ¥40,000
                 </p>
              </div>
           </div>
        </div>

        <footer className="text-center py-16 flex flex-col items-center relative overflow-hidden">
          {/* Circular Pattern Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-64 h-64 rounded-full border border-white animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute w-48 h-48 rounded-full border border-white animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            <div className="absolute w-32 h-32 rounded-full border border-white animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>

          <div className="relative z-10 mb-4 group">
            <div className="absolute inset-0 blur-xl bg-white/5 rounded-full scale-150 group-hover:bg-white/10 transition-all"></div>
            <img
              src="./images/nca_logo.jpg"
              alt="NCA"
              className="h-12 w-auto object-contain relative z-10 opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </div>
          <p className="text-[10px] text-stone-600 uppercase tracking-widest relative z-10">
            Tokyo Hakone Round-Trip College Ekiden Race
          </p>
          <p className="text-[9px] text-stone-700 mt-2 font-mono relative z-10">
            NCA × 2025
          </p>
        </footer>
      </main>

      {/* Detail Modal */}
      {selectedSection && (
        <DetailModal 
          data={selectedSection} 
          onClose={() => setSelectedSection(null)} 
        />
      )}
    </div>
  );
};

export default App;