import React from 'react';

interface NavigationProps {
  total: number;
  current: number;
}

const Navigation: React.FC<NavigationProps> = ({ total, current }) => {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center">
      <div className="flex space-x-1.5">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'bg-black scale-125' : 'bg-black/50'
            } hover:scale-125 hover:bg-black`}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
