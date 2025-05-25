import React from 'react';
import { Plane as Planet } from 'lucide-react';
import Navigation from './Navigation';

const Poster: React.FC = () => {
  return (
    <div className="relative w-full max-w-md aspect-[9/16] bg-gradient-to-b from-[#d6f5a8] to-[#c5ee8e] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-8">
      <div className="w-full text-center space-y-2 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          小红书封面设计神器
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          简单设计
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mt-6 tracking-wider">
          量化帮
        </h3>
      </div>
      
      <div className="mt-12 relative">
        <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto">
          <div className="absolute inset-0 rounded-full bg-white border-2 border-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-8 bg-transparent transform -rotate-12">
            <div className="w-full h-full border-t-2 border-b-2 border-black rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              {[...Array(12)].map((_, index) => (
                <div 
                  key={index}
                  className="absolute w-1 h-1 rounded-full bg-black"
                  style={{
                    top: `${30 + Math.sin(index * (Math.PI / 6)) * 30}%`,
                    left: `${30 + Math.cos(index * (Math.PI / 6)) * 30}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute -top-1 -left-1 w-4 h-4">
          <div className="w-1 h-1 bg-black rounded-full absolute top-0 left-0"></div>
          <div className="w-1 h-1 bg-black rounded-full absolute top-0 left-2"></div>
          <div className="w-1 h-1 bg-black rounded-full absolute top-2 left-0"></div>
        </div>
      </div>

      <Navigation total={18} current={0} />
    </div>
  );
};

export default Poster;
