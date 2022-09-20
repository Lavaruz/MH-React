import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

import Armor from '../components/armor'
import ArmorSearch from '../components/armor-search'
import Loading from '../components/loading'
import Sidebar from '../components/sidebar'

function Armors(){
    const url = 'https://mhw-db.com/armor/'
    let content = null
    let loading = false

    const [armors, setArmor] = useState([])
    const [lt, setLt] = useState(16)
    const [query, setQuery] = useState('')

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

    let armorSearch = ArmorSearch(query, 'armor')
    if (query.length !== 0){
        content = armorSearch.armor.map((armor, index) => {
            return(
                <Armor name={armor.name} img={armor.assets ? armor.assets.imageMale : ''} rank={armor.rank} id={armor.id} key={index}/>
            )
        })
        loading = ''
    }else{
        loading = <Loading />
    }

    return (
        
        <div className='main-content'>
            <div className="main-left">
                <Sidebar/>
            </div>
            <div className="main-right">
                <input type="text" className='search-item' placeholder='Search Armor' onChange={(e)=> {
                    setQuery(e.target.value)
                }}/>
                <div className='armors-main'>{content}</div>
                {loading}
            </div>
        </div>
        )
}

export default Armors