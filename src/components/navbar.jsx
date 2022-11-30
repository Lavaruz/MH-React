// import '/css/navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-sticky">
                <div className="nav-brand">
                    <a href="/">
                        <img src="/img/brand.png" alt=""/>
                    </a>
                </div>
                <div className="nav-navigate">
                    <button><i class="uil uil-github"></i><p>Follow me on Github</p></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar