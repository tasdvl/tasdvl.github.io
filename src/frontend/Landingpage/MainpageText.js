import React from "react";
import Neofetch from "./Neofetch";

export default function MainpageText() {
  return (
    <div >
        <Neofetch />
        <p className="text-left px-10 text-white font-mono"><br/>
        &gt;  <a href="https://www.linkedin.com/in/tasfia-ahmed-189296287/" class="font-display">linkedin</a><br/>  
        &gt;  <a href="https://www.instagram.com/tasdvl/" class="font-display">instagram</a><br/>  
        &gt;  <a href="https://github.com/tasdvl" class="font-display">github</a><br/>  
        &gt;  <span className="animate-blink">_</span> </p>
    </div>
  );
}
