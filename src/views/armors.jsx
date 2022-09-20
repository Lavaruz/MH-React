import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

import Armor from '../components/armor'
import Loading from '../components/loading'
import Sidebar from '../components/sidebar'

function Armors(){
    const url = 'https://mhw-db.com/armor/'
    let content = null

    const [armors, setArmor] = useState([])
    const [lt, setLt] = useState(16)
    let gt = 0
    // const [hasMore, setHasMore] = useState(false)

    const observer = useRef()
    const lastArmorCallback = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entires => {
            if(entires[0].isIntersecting){
                setLt(prev => prev+24)
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
                setArmor(res.data)
                // setHasMore(res.data.length > 0)
            })
    },[gt,lt])
    
    if(armors){
        content = armors.map((armor, index) => {
            if(armors.length === index + 1){
                return <Armor ref={lastArmorCallback} name={armor.name} img={armor.assets ? armor.assets.imageMale : ''} rank={armor.rank} id={armor.id} key={index}/>
            }else{
                return <Armor name={armor.name} img={armor.assets ? armor.assets.imageMale : ''} rank={armor.rank} id={armor.id} key={index}/>
            }
        })
    }
    return (
        
        <div className='main-content'>
            <Sidebar/>
            <div className='armors-main'>{content}</div>
            <div></div>
            <Loading/>
        </div>
        )
}

export default Armors