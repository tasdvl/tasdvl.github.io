import React from 'react';
import { useState } from "react";
import Neofetch from './Neofetch';

export default function TerminalBox() {
  const [donePrinting, setDonePrinting] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(napa.png)' }}>
      <div className="relative w-[80vw] h-[80vh] bg-gray-800 bg-opacity-80 rounded-lg shadow-lg overflow-auto">
        <div className="w-full flex text-white font-mono px-10 pt-10">
          <p className="text-left">&gt; neofetch </p>
          </div >
          <Neofetch onDone={() => setDonePrinting(true)}/>
          {donePrinting && (<p className="text-left px-10 text-white font-mono"><br/>&gt; linkedin instagram github <span className="animate-blink">_</span> </p>
          )}
        </div>
      </div>
  );
}
