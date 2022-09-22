import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import ArmorSearch from '../components/armor-search'
import Loading from '../components/loading'

import Sidebar from '../components/sidebar'
import Weapon from '../components/weapon'

function Weapons(){
    const url = 'https://mhw-db.com/weapons/'
    let content = null
    let loading = ''

    const [weapons, setWeapons] = useState([])
    const [lt, setLt] = useState(16)
    const [query, setQuery] = useState('')
    let gt = 0
    // const [hasMore, setHasMore] = useState(false)

    const observer = useRef()
    const lastWeaponCallback = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entires => {
            if(entires[0].isIntersecting){
                setLt(prev => prev+24)
            }
        },{
            rootMargin: '400px'
        })
        if (node) observer.current.observe(node)
    },[])

    useEffect(() => {
        const fetchMH = () => axios.get(url, {
            params: {
              q:{
                id: {
                    '$lt': lt,
                    '$gte': gt
                }
              }
            }
        });
        fetchMH()
            .then(res => {
                setWeapons(res.data)
                // setHasMore(res.data.length > 0)
            })
    },[gt,lt])
    
    if(weapons){
        content = weapons.map((weapon, index) => {
            if(weapons.length === index + 1){
                return <Weapon ref={lastWeaponCallback} id={weapon.id} name={weapon.name} img={weapon.assets ? weapon.assets.image : ''} type={weapon.type} icon={weapon.assets ? weapon.assets.icon : ''} rarity={weapon.rarity} key={index}/>
            }else{
                return <Weapon id={weapon.id} name={weapon.name} img={weapon.assets ? weapon.assets.image : ''} type={weapon.type} icon={weapon.assets ? weapon.assets.icon : ''} rarity={weapon.rarity} key={index}/>
            }
        })
    }

    let weaponSearch = ArmorSearch('weapons', query)
    if (query.length !== 0){
        content = weaponSearch.armor.map((weapon, index) => {
            return(
                <Weapon id={weapon.id} name={weapon.name} img={weapon.assets ? weapon.assets.image : ''} type={weapon.type} icon={weapon.assets ? weapon.assets.icon : ''} rarity={weapon.rarity} key={index}/>
            )
        })
        loading = ''
    }else{
        loading = <Loading />
    }

    return(
        <div className='main-content'>
            <div className="main-left">
                <Sidebar/>
            </div>
            <div className="main-right">
                <input type="text" className='search-item' placeholder='Search Weapon' onChange={(e)=> {
                    setQuery(e.target.value)
                }}/>
                <div className='armors-main'>{content}</div>
                {loading}
            </div>
        </div>
        )
}

export default Weapons