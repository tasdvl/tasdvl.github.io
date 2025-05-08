import React from 'react';
import Neofetch from './Neofetch';

export default function TerminalBox() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(napa.png)' }}>
      <div className="relative w-[80vw] h-[80vh] bg-gray-800 bg-opacity-80 rounded-lg shadow-lg overflow-auto">
        <div className="w-full flex text-white font-mono px-10 pt-10">
          <p className="text-left">&gt; neofetch </p>
          </div >
          <Neofetch/>
        </div>
      </div>
  );
}
