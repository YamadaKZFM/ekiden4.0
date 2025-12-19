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
          箱根駅伝<br/>by NCA TOKYO
        </p>
        <p className="font-serif text-xs leading-7 text-stone-400">
          NCA TOKYOが創る、もうひとつの箱根<br/>
          箱根•芦ノ湖から大手町の道を、<span className="text-white border-b border-white pb-0.5">24人の学生が襷で繋ぎます。</span>
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
              <p className="text-xs text-stone-400 mb-6 font-serif">
                応援旗・ゼッケン・新聞号外などの制作費、移動に伴う経費のためチャリティーでのご支援を募っています。
              </p>

              {/* Special Guest Section */}
              <div className="mb-8 p-4 bg-black/50 border border-lime-400/30 rounded-sm">
                <div className="text-[10px] text-lime-400 font-bold tracking-widest mb-2">SPECIAL GUEST</div>
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-stone-800 rounded-full overflow-hidden flex-shrink-0 border border-lime-400/50">
                    <img
                      src="./images/kansuke.jpg"
                      alt="Kansuke Morihashi"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-stone-500 mb-1">Nike Running Coach</p>
                    <h3 className="text-white font-bold text-lg leading-tight">森橋 勘助</h3>
                    <p className="text-[10px] text-lime-400 font-mono">Kansuke Morihashi</p>
                  </div>
                </div>
                <p className="text-xs text-stone-400 mt-3 leading-relaxed">
                  大東文化大学出身。箱根駅伝では"花の二区"を走った経験を持つ。現在は080TOKYOのディレクターとして活動。
                </p>
                <p className="text-xs text-white mt-2 font-medium">
                  ゲストとして一緒に走っていただきます！
                </p>
              </div>

              <div className="grid gap-6">
                 {/* For Runners */}
                 <div className="relative pl-4 border-l border-lime-400/50">
                    <h3 className="text-lime-400 font-bold text-sm mb-3 uppercase tracking-wide">
                       Charity 5KM Runに参加する方
                    </h3>
                    <div className="space-y-2 text-sm text-stone-400">
                       <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-white" />
                          <span className="font-mono">17:30 @ 大手町駅</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-white" />
                          <span>読売新聞前・箱根ゴール石碑前</span>
                       </div>
                       <div className="text-xs text-stone-500 mt-2">
                         皇居1周｜約5km<br/>
                         19:00〜選手の到着を迎えます<br/>
                         <span className="text-white">参加無料</span> / ペース別グループあり
                       </div>
                    </div>
                 </div>

                 {/* For Spectators */}
                 <div className="relative pl-4 border-l border-white/30">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">
                       学生のゴールを見届ける方
                    </h3>
                    <div className="space-y-2 text-sm text-stone-400">
                       <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-white" />
                          <span className="font-mono">18:30 @ 大手町</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-white" />
                          <span>読売新聞前・箱根ゴール石碑前</span>
                       </div>
                       <div className="text-xs text-stone-500 mt-2">
                         選手のゴールの瞬間を、<br/>
                         <span className="text-white">FINISH LINE</span>で共に迎えましょう。
                       </div>
                    </div>
                 </div>
              </div>

              {/* Donation Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-center mb-4">
                  <p className="text-xs font-mono text-white inline-block border border-white px-6 py-2 rounded-full">
                    目標金額: ¥40,000
                  </p>
                </div>
                <p className="text-xs text-stone-400 text-center leading-relaxed">
                  <span className="text-lime-400 font-bold">500円〜</span>（お気持ちで）ご支援いただいた方には当日、<br/>
                  オリジナル応援用の手旗をお渡しします。<br/>
                  <span className="text-stone-500 text-[10px]">※数量限定（高額支援の方から優先）</span>
                </p>
              </div>

              {/* Instagram Link */}
              <div className="mt-6 text-center">
                <a
                  href="https://www.instagram.com/p/DSZatAwkz2p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-stone-500 hover:text-white transition-colors"
                >
                  <span>詳細はInstagramで</span>
                  <Zap className="w-3 h-3" />
                </a>
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
