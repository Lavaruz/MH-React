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
    const [queryByName, setQueryByName] = useState('')
    const [queryByDamageType, setQueryByDamageType] = useState('')
    const [queryByType, setQueryByType] = useState('')
    const [queryByRarity, setQueryByRarity] = useState('')
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

    let weaponSearch = ArmorSearch('weapons', queryByName, queryByDamageType, queryByType, queryByRarity)
    if (queryByName.length !== 0 || queryByDamageType.length !== 0 || queryByType.length !== 0 || queryByRarity.length !== 0){
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
            <div className="main-search">
                    <input type="text" className='search-item' placeholder='Search armor by name' onChange={(e)=> {
                        setQueryByName(e.target.value)
                    }}/>
                    <select name="" id="" className='search-select' onChange={(e)=> {
                        setQueryByRarity(e.target.value)
                    }}>
                        <option value="">Rarity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>

                    <select name="" id="" className='search-select' onChange={(e) => {
                        setQueryByDamageType(e.target.value)
                    }}>
                        <option value="">Damage Type</option>
                        <option value="saver">saver</option>
                        <option value="blunt">blunt</option>
                        <option value="projectile">projectile</option>
                    </select>

                    <select name="" id="" className='search-select' onChange={(e)=> {
                        setQueryByType(e.target.value)
                    }}>
                        <option value="">Type</option>
                        <option value="great-sword">great-sword</option>
                        <option value="long-sword">long-sword</option>
                        <option value="sword-and-shield">sword-and-shield</option>
                        <option value="dual-blades">dual-blades</option>
                        <option value="hammer">hammer</option>
                        <option value="hunting-horn">hunting-horn</option>
                        <option value="lance">lance</option>
                        <option value="gunlance">gunlance</option>
                        <option value="switch-axe">switch-axe</option>
                        <option value="charge-blade">charge-blade</option>
                        <option value="insect-glaive">insect-glaive</option>
                        <option value="light-bowgun">light-bowgun</option>
                        <option value="heavy-bowgun">heavy-bowgun</option>
                        <option value="bow">bow</option>
                    </select>

                </div>
                <div className='armors-main'>{content}</div>
                {loading}
            </div>
        </div>
        )
}

export default Weapons