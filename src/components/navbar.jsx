// import '/css/navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-sticky">
                <div className="nav-brand">
                    <a href="/">
                        {/* <h2>Monster Hunter Wiki</h2> */}
                        <img src="/img/brand.png" alt=""/>
                    </a>
                </div>
                {/* <div className="nav-social">
                    <a href="https://github.com/Lavaruz/MH-React"><i className="github-icon fa-brands fa-github" style={{"fontSize":"1.5rem"}}></i></a>
                </div> */}
                <div className="nav-navigate">
                    <button><i class="uil uil-github"></i>Follow me on Github</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar