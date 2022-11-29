import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
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
                <div className="home-blog">
                    <h2>Latest Blog Post</h2>
                    <hr />
                    <div className="blog-main">
                    <div className="blog-card" onClick={()=> navigate('/blog/1')}>
                        <img src="/img/wallpaper.jpg" alt="" />
                        <p className="blog-card-date">Thursday, 24 November 2022</p>
                        <h3>Reviews and ratings going forward</h3>
                        <p>After Laplace release again created issues, we are making changes in our process of adding new characters to the website.</p>
                    </div>
                    <div className="blog-card" onClick={()=> navigate('/blog/2')}>
                        <img src="/img/background.jpg" alt="" />
                        <p className="blog-card-date">Wednesday, 23 November 2022</p>
                        <h3>23/11 Developer Notes - Bug fixes incoming!</h3>
                        <p>The second-ever developer notes talk about all the bugs that have been annoying the players since the release and how they will deal with them</p>
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

                <Footer/>

            </div>
        </div>
    )
    
}

export default Home