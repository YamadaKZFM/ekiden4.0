import React from 'react';
import { RelaySection } from '../types';
import { ArrowRight, Circle } from 'lucide-react';

interface SectionCardProps {
  data: RelaySection;
  onClick: (data: RelaySection) => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({ data, onClick }) => {
  return (
    <div 
      onClick={() => onClick(data)}
      className="group relative bg-black border border-stone-800 hover:border-white/60 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      
      <div className="p-5 flex items-stretch">
        {/* Left: Section Number */}
        <div className="flex flex-col items-center justify-center mr-5 min-w-[3rem] border-r border-stone-800 group-hover:border-stone-600 transition-colors">
          <span className="text-xs font-mono text-stone-500 mb-1">SEC</span>
          <span className="text-3xl font-black italic text-white leading-none font-serif">
            {data.id}
          </span>
        </div>

        {/* Right: Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
           <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-stone-300 truncate pr-2 group-hover:text-white transition-colors">
                {data.label}
              </h3>
              <span className="text-[10px] font-mono text-stone-500 border border-stone-800 px-1.5 py-0.5 whitespace-nowrap">
                {data.distance}
              </span>
           </div>

           {/* Runners Names - Text Only for cleanliness */}
           <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {data.runners.map((runner, i) => (
                <div key={i} className="flex items-center gap-1.5">
                   {/* Tiny dot indicator instead of image for minimal list view */}
                   <Circle className="w-1.5 h-1.5 fill-white text-white" />
                   <span className="text-xs font-medium text-white tracking-wide">
                     {runner.name.split(' ')[0]} {/* Display First Name/Surname only for compactness */}
                   </span>
                </div>
              ))}
           </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
           <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};