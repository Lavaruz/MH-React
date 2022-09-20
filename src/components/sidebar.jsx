function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-stick">
                <h3>List Of Items</h3>
                <div className="sidebar-1">
                    <a href="/" className='linkTo'>
                        <i className="fa-solid fa-shield-halved"></i>
                        <p>Armor</p>
                    </a>
                </div>
                <div className="sidebar-1">
                    <a href="/weapons" className='linkTo'>
                        <i className="fa-solid fa-gun"></i>
                        <p>Weapon</p>
                    </a>
                </div>
                <h3>Monster List</h3>
                <div className="sidebar-1">
                    <a className='linkTo' href='/monster'>
                        <i className="fa-solid fa-ghost"></i>
                        <p>Monster</p>
                    </a>
                </div>
                <div className="sidebar-1">
                    <a className='linkTo' href='/events'>
                        <i className="fa-solid fa-map"></i>
                        <p>Events</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar