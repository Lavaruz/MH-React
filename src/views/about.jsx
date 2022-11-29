import React from "react";
import Sidebar from "../components/sidebar";

function About(){
    return(
        <div className='main-content'>
            <div className="main-left">
                <Sidebar/>
            </div>
            
            <div className="vline"></div>

            <div className="main-right">
                <h1>About The Game</h1>
            </div>
        </div>
    )
    
}

export default About