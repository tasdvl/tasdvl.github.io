import React from "react";
import { Link } from "react-router-dom";

export default function WhoamiText() {
  return (
    <div className="text-center px-10 text-emerald-200 font-display">
        <p >============================================================================================================================================</p>
        <p className="text-white"><br/> Nice to meet you! I'm Tas and I'm a computer science student from UNSW, Sydney :)<br/></p>
        <p>=================================================== <span className="text-[30px] before:content-['𓆝_𓆟_𓆞_𓆟_𓆝'] before:animate-fish"></span> =====================================================</p>
        <p className="text-center text-[25px] text-white">Some background info</p>
        <div className="flex pt-2 ">
            <div className=" px-10 w-1/2">
                <span className="text-white text-center font-bold text-[18px]">About me</span>
                <p className="text-justify pt-2 text-[14.5px]">
                Over the years I've gathered tons of sidequests like digital and traditional art, building keyboards, editing videos, playing volleyball and so much more. I've also been playing video games for a large portion of my life, though I've retired from the competitive side of things and am focusing on
                playing all of the indie classics. If you have reccomendations please send them over... 
                </p>
                <br/>
                <span className="text-white text-center font-bold text-[18px]">What kind of stuff do you work on?</span>
                <p className="text-justify pt-2 text-[14.5px]">
                It's a bit of a mixed bag. I've played around with stuff like OpenGL, had some industry experience working with backend web-dev / databases
                and such, but currently my interest lies in low-level programming, which is what I've been tutoring at UNSW for the past 2 years! I've been super
                invested in kernel/OS level C and assembly programming, and recently have been dipping my feet into embedded microcontroller software too, which
                I've enjoyed a lot :^). 
                </p>
            </div>
            <div className="pt-12 px-10 w-1/2">
                <span className="text-white font-bold text-left">Why is the personal projects page (and my github) mostly empty?</span><br />
                <p className="text-justify pt-2 text-[14.5px] text-shadow-lg">Some combination of having too much imposter syndrome to unprivate repositories unless they
                have a substantial amount of progress, or my tendency to start a morbillion unfinished projects and not be able to hold myself accountable.
                I promise I do make stuff though! I've been helping build infrastructure and code in a bunch of societies at uni, cause it's a lot easier to
                keep yourself accountable when others are relying on you :P That being said I am working on a bunch of stuff! Hopefully ill be able to unprivate
                them soon........
                </p>
                <br/>
                <span className="text-white text-center font-bold text-[18px]">What's the point of this website?</span>
                <p className="text-justify pt-2 text-[14.5px]">
                This site was created so I can finally stop hiding from my fears (frontend web development). I also noticed a lot of
                people making their own site and I figured I had enough creative expression to try build something from scratch :)
                All of this w as built with (vanilla) React and Tailwind. This is also my first proper frontend project
                so feel free to laugh at my codebase (it's a mess...)
                </p>
            </div>
        </div>
        <p className="text-left text-white pt-3">&gt; <Link to="/" className="hover:underline">back</Link><span className="animate-blink">_</span></p>
    </div>
  );
}
