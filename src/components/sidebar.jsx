function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-stick">
                <h3>Equipment Lists</h3>
                <div className="sidebar-1">
                    <a href="/armors" className='linkTo'>
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
                <h3>Others</h3>
                {/* <div className="sidebar-1">
                    <a className='linkTo' href='/monsters' title="not ready yet">
                        <img src="/img/monster.webp" alt="" />
                        <p>Monsters</p>
                    </a>
                </div>
                <div className="sidebar-1">
                    <a className='linkTo' href='/items' title="not ready yet">
                        <img src="/img/item.webp" alt="" />
                        <p>Items</p>
                    </a>
                </div> */}
                <div className="sidebar-1">
                    <a className='linkTo' href='/events' title="not ready yet">
                        <img src="/img/event.webp" alt="" />
                        <p>Events</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar