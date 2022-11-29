import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";

function Home(){
    const navigate = useNavigate()
    return(
        <div className='main-content'>
            <div className="main-left">
                <Sidebar/>
            </div>
            
            <div className="vline"></div>

            <div className="main-right">
                <div className="home-header">
                    <h1>Lavaruz - Monster Hunter: World Wiki</h1>
                    <p>Lavaruz is a wiki for Monster Hunter: World. Check our guides, tier lists and reviews for characters available in the game.</p>
                </div>
                <div className="home-download">
                    <h2>Play on PC</h2>
                    <hr />
                    <div className="home-download-img">
                        <div className="home-download-img-layer">
                            <h2>Play Monster Hunter World</h2>
                            <button onClick={ ()=> navigate('/about')}>Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="home-community">
                    <h2>Community</h2>
                    <hr />
                    <div className="home-community-pattreon">
                        <div className="pattreon-left">
                            <h1>Support Lavaruz on <span>Patreon</span></h1>
                            <p>If you love what we are doing and you would like to support us, you can do it via Patreon and gain some unique benefits in return!</p>
                            <button>Support Us on Pattreon</button>
                        </div>
                        <div className="pattreon-right">
                            <img src="/img/favicon.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default Home