import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

import Weapon from '../components/weapon'

function Weapons(){
    const url = 'https://mhw-db.com/weapons/'
    let content = null

    const [weapons, setWeapons] = useState([])
    const [lt, setLt] = useState(16)
    let gt = 0
    // const [hasMore, setHasMore] = useState(false)

    const observer = useRef()
    const lastWeaponCallback = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entires => {
            if(entires[0].isIntersecting){
                setLt(prev => prev+18)
            }
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
                return <Weapon ref={lastWeaponCallback} name={weapon.name} img={weapon.assets.image} type={weapon.type} key={index}/>
            }else{
                return <Weapon name={weapon.name} img={weapon.assets.image} type={weapon.type} key={index}/>
            }
        })
    }
    return <div className='armors-main'>{content}</div>
}

export default Weapons