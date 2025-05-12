import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Neofetch() {
    function NeofetchText() {

        const categories = "font-bold text-emerald-200 font-display"
        const lines = [
        <p><span class={categories}>OS</span>: MacOS / Windows</p>,
        <p><span class={categories}>University</span>: UNSW, Sydney</p>,
        <p><span class={categories}>Uptime</span>: 19 years 11 months</p>,
        <p><span class={categories}>Studying</span>: Computer Science, Physics</p>,
        <p><span class={categories}>Packages</span>: she/her</p>,
        <br/>,
        <img src="/colors.png" alt="colorscheme" class="w-[225px] h-auto"/>,
        <br/>,
        <Link to="/aboutme" class=" hover:underline font-display"><span class="font-extrabold text-emerald-200">About me</span><br/></Link>,
        <Link to="/art" class=" hover:underline font-display"><span class="font-extrabold text-emerald-200">Art</span><br/></Link>,
        <a href="#" class=" hover:underline font-display"><span class="font-extrabold text-emerald-200">Projects</span><br/></a>,
        <a href="#" class=" hover:underline font-display"><span class="font-extrabold text-emerald-200">Resume</span><br/></a>,
        <a href="#" class=" hover:underline font-display"><span class="font-extrabold text-emerald-200">Blogs? (coming soon)</span></a>
        ];
    
        const [visibleLines, setVisibleLines] = useState([]);
        const [currentLineIndex, setCurrentLineIndex] = useState(0);
        const [showCursor, setShowCursor] = useState(true);
    
        useEffect(() => {
        const typingInterval = setInterval(() => {
            setVisibleLines((prev) => [...prev, lines[currentLineIndex]]);
            setCurrentLineIndex((prev) => prev + 1);
            if (currentLineIndex === lines.length - 1) clearInterval(typingInterval);
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
            <> {line} </>
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
                <img src="/piccy.png" alt="Neofetch Logo" className="w-[450px] h-auto"/>
            </div>
            <div className="w-1/2 mr-10">
                    <p className="font-bold text-emerald-200">tasdvl<span className="text-white">@</span>personal-website</p>
                    <p>------------------------</p>
                    <NeofetchText/>
            </div>
        </div>)
}
