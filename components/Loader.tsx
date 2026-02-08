import React from 'react';

interface Props {
    text?: string;
}

const Loader: React.FC<Props> = ({ text = "Consulting the Archives..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-stone-800 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-heritage-gold rounded-full animate-spin border-t-transparent"></div>
      </div>
      <p className="text-heritage-gold font-serif animate-pulse">{text}</p>
    </div>
  );
};

export default Loader;