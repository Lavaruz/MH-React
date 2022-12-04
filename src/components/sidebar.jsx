import { useState } from 'react'
import {useNavigate} from 'react-router-dom'



function Sidebar(){

    const [menu, setMenu] = useState('hide sidebar')
    const [menuOn, setMenuOn] = useState(false)
    const navigate = useNavigate()

    function menuBar(){
        if (!menuOn){
            setMenu('show sidebar')
            setMenuOn(true)
        }else{
            setMenu('hide sidebar')
            setMenuOn(false)
        }
    }
    
    return(
        <>
            <div className="sidebar-toggle" onClick={menuBar}>
                <i className="uil uil-setting"></i>
            </div>
            <div className={menu}>
                <div className="sidebar-stick">
                    <div className="sidebar-main">
                        <div className="sidebar-main-item" onClick={()=> navigate('/')}>
                            <p><i className="uil uil-estate"></i>Home</p>
                        </div>
                        <div className="sidebar-main-item" onClick={()=> navigate('/about')}>
                            <p><i className="uil uil-exclamation-circle"></i>About The Game</p>
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
                        <div className="sidebar-data-item" onClick={()=> navigate('/databases')}>
                            <p><img src="/img/ticket.webp" alt="" /> Databases</p>
                        </div>
                    </div>
                    <hr />
                    <div className="sidebar-blog" onClick={()=> navigate('/blog')}>
                        <div className="sidebar-blog-item">
                            <p><img src="/img/blog.webp" alt="" />Blog</p>
                        </div>
                    </div>
                    <hr />
                    <div className="sidebar-download">
                        <a href="https://store.steampowered.com/app/582010/Monster_Hunter_World/" rel="noopener noreferrer" target={"_blank"}>
                            <div className="sidebar-download-item">
                                <p><i className="uil uil-desktop"></i>Play on Steam</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar