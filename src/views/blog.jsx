import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function Blog(){
    const navigate = useNavigate()
    return(
        <div className='main-content'>
            <div className="main-left">
                <Sidebar />
            </div>
            
            <div className="vline"></div>

            <div className="main-right">
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
                <Footer />
            </div>

        </div>
    )
}