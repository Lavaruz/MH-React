import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

import Armor from '../components/armor'
import EquipmentSearch from '../components/equipment-search'
import Loading from '../components/loading'
import Sidebar from '../components/sidebar'

function Armors(){

    const url = 'https://mhw-db.com/armor/'
    let content = null
    let loading = false

    const [armors, setArmor] = useState([])
    const [lt, setLt] = useState(16)
    const [queryByName, setQueryByName] = useState('')
    const [queryByRank, setQueryByRank] = useState('')
    const [queryByType, setQueryByType] = useState('')
    const [queryByRarity, setQueryByRarity] = useState('')

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

    let armorSearch = EquipmentSearch('armor', queryByName, queryByRank, queryByType, queryByRarity)
    if (queryByName.length !== 0 || queryByRank.length !== 0 || queryByType.length !== 0 || queryByRarity.length !== 0){
        if (armorSearch.load){
            content = (
                <>
                    <div></div>
                    <Loading/>
                </>
            )
        }else{
            content = armorSearch.armor.map((armor, index) => {
                return(
                    <Armor name={armor.name} img={armor.assets ? armor.assets.imageMale : ''} rank={armor.rank} id={armor.id} key={index}/>
                )
            })
        }
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
                        <option value="9">9</option>
                    </select>

                    <select name="" id="" className='search-select' onChange={(e) => {
                        setQueryByRank(e.target.value)
                    }}>
                        <option value="">Rank</option>
                        <option value="low">low</option>
                        <option value="high">high</option>
                        <option value="master">master</option>
                    </select>

                    <select name="" id="" className='search-select' onChange={(e)=> {
                        setQueryByType(e.target.value)
                    }}>
                        <option value="">Type</option>
                        <option value="chest">chest</option>
                        <option value="gloves">gloves</option>
                        <option value="waist">waist</option>
                        <option value="legs">legs</option>
                    </select>

                </div>
                <div className='armors-main'>{content}</div>
                {loading}
            </div>
        </div>
        )
}

export default Armors