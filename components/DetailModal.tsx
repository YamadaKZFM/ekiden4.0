import React, { useEffect } from 'react';
import { RelaySection } from '../types';
import { X, Map, Quote, Instagram, Timer, School, MapPin, ExternalLink, Camera, Droplets } from 'lucide-react';

interface DetailModalProps {
  data: RelaySection | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [data]);

  if (!data) return null;

  // 出発場所 (Start point)
  const startMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.coordinates)}`;
  // たすき受け渡し場所 (Handover point)
  const handoverMapsUrl = data.handoverCoordinates
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.handoverCoordinates)}`
    : null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black animate-in slide-in-from-bottom duration-300 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-stone-800 bg-black/90 backdrop-blur-md sticky top-0 z-20">
        <div>
          <div className="flex items-baseline gap-2">
             <span className="font-serif text-xl font-black italic">{data.section}</span>
             <span className="font-mono text-xs text-stone-500">{data.distance}</span>
          </div>
          <h1 className="text-sm font-bold text-stone-300 mt-1">{data.label}</h1>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-black pb-24">

        {/* Map Area - たすき受け渡し場所 */}
        <div className="w-full border-b border-stone-800 bg-stone-950 relative">
          <div className="absolute top-3 left-3 z-10 bg-black/70 px-2 py-1 text-[10px] text-stone-400 rounded">
            たすき受け渡し場所
          </div>
          <div className="aspect-[4/3] w-full flex items-center justify-center overflow-hidden">
            <img
              src={data.mapImage}
              alt={`Map for ${data.section}`}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          {/* Floating Action Buttons for Maps */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            {handoverMapsUrl && (
              <a
                href={handoverMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold text-[10px] px-3 py-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform flex items-center gap-1.5"
              >
                <MapPin className="w-3 h-3" />
                受け渡し場所
              </a>
            )}
            {data.coordinates && (
              <a
                href={startMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 text-white font-bold text-[10px] px-3 py-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform flex items-center gap-1.5 border border-stone-600"
              >
                <MapPin className="w-3 h-3" />
                出発場所
              </a>
            )}
          </div>
        </div>

        <div className="p-5 space-y-8">
          
          {/* Runners Section */}
          <div>
            <h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 border-b border-stone-800 pb-2">
               Runners
            </h2>
            
            <div className="space-y-6">
              {data.runners.map((runner, index) => (
                <div key={index} className="bg-stone-950 border border-stone-800 p-4 rounded-sm relative overflow-hidden">
                   {/* Subtle glow effect for runner card */}
                   <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 blur-2xl -mr-10 -mt-10 rounded-full"></div>

                  <div className="flex items-start gap-4 relative z-10">
                    <img
                      src={runner.image}
                      alt={runner.name}
                      className="w-20 h-20 rounded-full object-cover bg-stone-900 border border-stone-700 grayscale"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-bold text-white">{runner.name}</span>
                        {runner.instagramId && (
                          <a
                            href={`https://instagram.com/${runner.instagramId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700 border border-stone-600 transition-colors"
                          >
                            <Instagram className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                         {runner.hobby && (
                           <span className="text-[10px] font-medium text-stone-400 flex items-center gap-1">
                              <School className="w-3 h-3" /> {runner.hobby}
                           </span>
                         )}
                         {runner.targetTime && (
                           <span className="text-[10px] font-mono text-white border border-stone-700 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                              <Timer className="w-3 h-3" /> {runner.targetTime}
                           </span>
                         )}
                      </div>

                      {runner.message && (
                        <div className="relative pl-3 border-l-2 border-stone-700">
                          <p className="text-xs text-stone-300 font-serif italic leading-relaxed">
                            "{runner.message}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route Images Section */}
          {data.routeImages && data.routeImages.length > 0 && (
            <div>
              <h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 border-b border-stone-800 pb-2">
                Route Guide
              </h2>
              <div className="space-y-4">
                {data.routeImages.map((img, index) => (
                  <div key={index} className="rounded-sm overflow-hidden border border-stone-800">
                    <img
                      src={img}
                      alt={`Route guide ${index + 1} for ${data.section}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spot Links Section */}
          {data.spotLinks && data.spotLinks.length > 0 && (
            <div>
              <h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4 border-b border-stone-800 pb-2">
                Spots
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.spotLinks.map((spot, index) => (
                  <a
                    key={index}
                    href={spot.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-stone-500 px-4 py-3 rounded-lg transition-all group"
                  >
                    {spot.label.includes('写真') ? (
                      <Camera className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Droplets className="w-4 h-4 text-blue-400" />
                    )}
                    <span className="text-sm font-medium text-stone-300 group-hover:text-white">
                      {spot.label}
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Description & Logistics Grid */}
          <div className="grid gap-6">
             <div>
                <h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                   <Map className="w-3 h-3" /> Course Guide
                </h2>
                <p className="text-sm text-stone-300 leading-relaxed font-light border-l border-white/20 pl-4 py-1">
                  {data.description}
                </p>
             </div>

             <div>
                <h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">
                   Logistics
                </h2>
                <div className="bg-stone-900/50 p-4 border border-stone-800 text-sm text-stone-300">
                   {data.logistics}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};