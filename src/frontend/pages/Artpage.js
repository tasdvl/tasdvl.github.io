import React from "react";
import TerminalBox from "../TerminalBox";
import Carousel from "./Carousel";

export function Artpage() {
    return(
        <div className="Art">
                <TerminalBox text={<Carousel />} cmd="art"/>
            </div>
    )
}

export default Artpage;
