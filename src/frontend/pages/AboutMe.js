import React from "react";
import TerminalBox from "../TerminalBox";
import WhoamiText from "./WhoamiText";
export function Artpage() {
    return(
        <div className="Art">
                <TerminalBox text={<WhoamiText />} cmd="whoami"/>
            </div>
    )
}

export default Artpage;
