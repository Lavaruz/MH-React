import {Link, useNavigate} from 'react-router-dom'

function Sidebar(){
    const navigate = useNavigate()
    
    return(
        <div className="sidebar">
            <div className="sidebar-stick">
                <div className="sidebar-main">
                    <div className="sidebar-main-item" onClick={()=> navigate('/')}>
                        <p><img src="/img/home.webp" alt="" />Home</p>
                    </div>
                    <div className="sidebar-main-item" onClick={()=> navigate('/about')}>
                        <p><img src="/img/about.webp" alt="" />About The Game</p>
                    </div>
                </div>
                <hr />
                <div className="sidebar-data">
                    <div className="sidebar-data-item" onClick={()=> navigate('/weapons')}>
                        <p><img src="/img/weapon.webp" alt="" /> Weapons</p>
                    </div>
                    <div className="sidebar-data-item" onClick={()=> navigate('/armors')}>
                        <p><img src="/img/armor.webp" alt="" /> Armors</p>
                    </div>
                    <div className="sidebar-data-item" onClick={()=> navigate('/events')}>
                        <p><img src="/img/ticket.webp" alt="" /> Event</p>
                    </div>
                </div>
                <hr />
                <div className="sidebar-blog">
                    <div className="sidebar-blog-item">
                        <p><img src="/img/blog.webp" alt="" />Blog</p>
                    </div>
                </div>
                <hr />
                <div className="sidebar-download">
                    <a href="https://store.steampowered.com/app/582010/Monster_Hunter_World/" target={"_blank"}>
                        <div className="sidebar-download-item">
                            <p><img src="/img/download.webp" alt="" />Play On Steam</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar