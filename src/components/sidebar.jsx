import {useNavigate} from 'react-router-dom'

function Sidebar(){
    const navigate = useNavigate()
    
    return(
        <div className="sidebar">
            <div className="sidebar-stick">
                <div className="sidebar-main">
                    <div className="sidebar-main-item" onClick={()=> navigate('/home')}>
                        <p>Home</p>
                    </div>
                    <div className="sidebar-main-item" onClick={()=> navigate('/weapons')}>
                        <p>About The Game</p>
                    </div>
                </div>
                <div className="sidebar-data">
                    <div className="sidebar-data-item" onClick={()=> navigate('/weapons')}>
                        <p>Weapons</p>
                    </div>
                    <div className="sidebar-data-item" onClick={()=> navigate('/armors')}>
                        <p>Armors</p>
                    </div>
                    <div className="sidebar-data-item" onClick={()=> navigate('/events')}>
                        <p>Event</p>
                    </div>
                </div>
                <div className="sidebar-blog">
                    <div className="sidebar-blog-item">
                        <p>Blog</p>
                    </div>
                </div>
                <div className="sidebar-download">
                    <div className="sidebar-download-item">
                        <p>Play On Steam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar