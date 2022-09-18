import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

import Armor from '../components/armor'

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
                setArmor(res.data)
                // setHasMore(res.data.length > 0)
            })
    },[gt,lt])
    
    if(armors){
        content = armors.map((armor, index) => {
            if(armors.length === index + 1){
                return <Armor ref={lastArmorCallback} name={armor.name} img={armor.assets.imageMale} rank={armor.rank} key={index}/>
            }else{
                return <Armor name={armor.name} img={armor.assets.imageMale} rank={armor.rank} key={index}/>
            }
        })
    }
    return <div className='armors-main'>{content}</div>
}

export default Armors