function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-stick">
                <h3>Equipment Lists</h3>
                <div className="sidebar-1">
                    <a href="/" className='linkTo'>
                        <img src="/img/armor.webp" alt=""/>
                        <p>Armors</p>
                    </a>
                </div>
                <div className="sidebar-1">
                    <a href="/weapons" className='linkTo'>
                        <img src="/img/weapon.webp" alt=""/>
                        <p>Weapons</p>
                    </a>
                </div>
                <div className="sidebar-1">
                    <a className='linkTo' href='/events'>
                        <img src="/img/event.webp" alt="" />
                        <p>Events</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar