import React from 'react';
import ColorScheme from './ColorScheme';

export default function Neofetch() {
    return(
        <div className="flex w-[80vw] text-white font-mono text-left px-10 pt-4">
            <div className=" flex w-1/2 justify-center items-center">
                <img src="/piccy.png" alt="Neofetch Logo" className="w-[500px] h-auto"/>
            </div>
            <div className="w-1/2 mr-10">
                    <p className="font-bold text-emerald-200">tasdvl<span className="text-white">@</span>personal-website</p>
                    <p>------------------------</p>
                    <p><span className="font-bold text-emerald-200">OS</span>: Windows XP 2007</p>
                    <p><span className="font-bold text-emerald-200">Kernel</span>: 5.15.0</p>
                    <p><span className="font-bold text-emerald-200">Uptime</span>: 19 years 11 months</p>
                    <p><span className="font-bold text-emerald-200">Packages</span>: Computer Science, Physics</p>
                    <p><span className="font-bold text-emerald-200">Shell</span>: @tasdvl</p>
                    <p><br/></p>
                    <img src="/colors.png" alt="colorscheme" className="w-[225px] h-auto"/>
                    <p><span><br/>Hello! My name is Tas and I'm currently a 3rd year computer science student at UNSW, sydney :)</span></p>
            </div>
        </div>)
}
