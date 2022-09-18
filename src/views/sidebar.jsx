import {Link} from 'react-router-dom'

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-stick">
                <h3>List Of Items</h3>
                <div className="sidebar-1">
                    <Link className='linkTo' to='/'>
                        <i class="fa-solid fa-shield-halved"></i>
                        <p>Armor</p>
                    </Link>
                </div>
                <div className="sidebar-1">
                    <Link className='linkTo' to='/weapon'>
                        <i class="fa-solid fa-gun"></i>
                        <p>Weapon</p>
                    </Link>
                </div>
                <h3>Monster List</h3>
                <div className="sidebar-1">
                    <Link className='linkTo' to='/monster'>
                        <i class="fa-solid fa-ghost"></i>
                        <p>Monster</p>
                    </Link>
                </div>
                <h3>Map Route</h3>
                <div className="sidebar-1">
                    <Link className='linkTo' to='/map'>
                        <i class="fa-solid fa-map"></i>
                        <p>Map</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar