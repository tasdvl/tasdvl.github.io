import React from 'react';
import { useState, useEffect } from "react";

export default function Neofetch({onDone}) {
    function NeofetchText() {
        const lines = [
        '<span class="font-bold text-emerald-200">OS</span>: MacOS / Windows',
        '<span class="font-bold text-emerald-200">University</span>: UNSW, Sydney',
        '<span class="font-bold text-emerald-200">Uptime</span>: 19 years 11 months',
        '<span class="font-bold text-emerald-200">Studying</span>: Computer Science, Physics',
        '<span class="font-bold text-emerald-200">Shell</span>: @tasdvl',
        '<br/>',
        '<img src="/colors.png" alt="colorscheme" class="w-[225px] h-auto"/>',
        '<br/>',
        '<a href="#" class=" hover:underline"><span class="font-extrabold text-emerald-200">Art</span></a>',
        '<a href="#" class=" hover:underline"><span class="font-extrabold text-emerald-200">Projects</span></a>',
        '<a href="#" class=" hover:underline"><span class="font-extrabold text-emerald-200">About me</span></a>',
        '<a href="#" class=" hover:underline"><span class="font-extrabold text-emerald-200">Resume</span></a>',
        '<a href="#" class=" hover:underline"><span class="font-extrabold text-emerald-200">Blogs? (coming soon)</span></a>'
        ];
    
        const [visibleLines, setVisibleLines] = useState([]);
        const [currentLineIndex, setCurrentLineIndex] = useState(0);
        const [showCursor, setShowCursor] = useState(true);
    
        useEffect(() => {
        const typingInterval = setInterval(() => {
            setVisibleLines((prev) => [...prev, lines[currentLineIndex]]);
            setCurrentLineIndex((prev) => prev + 1);
            if (currentLineIndex === lines.length - 1) clearInterval(typingInterval);
            onDone()
        }, 300);
    
        return () => clearInterval(typingInterval);
        }, [currentLineIndex]);
    
        useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
    
        return () => clearInterval(cursorInterval);
        }, []);
    
        return (
        <div className="text-white font-mono text-left space-y-1">
            {visibleLines.map((line, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
    
            {currentLineIndex < lines.length && (
            <span className="text-emerald-200">{showCursor ? "|" : " "}</span>
            )}
        </div>
        );
    }
    return(
        <div className="flex w-[80vw] text-white font-mono text-left px-10 pt-4">
            <div className=" flex w-1/2 justify-center items-center">
                <img src="/piccy.png" alt="Neofetch Logo" className="w-[500px] h-auto"/>
            </div>
            <div className="w-1/2 mr-10">
                    <p className="font-bold text-emerald-200">tasdvl<span className="text-white">@</span>personal-website</p>
                    <p>------------------------</p>
                    <NeofetchText/>
            </div>
        </div>)
}
