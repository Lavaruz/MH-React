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
                    <ul>
                        <li><a href="/armors">Equipments</a></li>
                        {/* <li><a href="/events">Events</a></li> */}
                        {/* <li><a href="/write-tips"><button>SignIn</button></a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar