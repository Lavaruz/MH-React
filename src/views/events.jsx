import Sidebar from "../components/sidebar"
import axios from "axios"
import { useEffect, useState, useRef, useCallback } from "react"

import Quest from "../components/event"
import Loading from "../components/loading"
import EquipmentSearch from "../components/equipment-search"
import Footer from "../components/footer"

export default function Events(){
    const url = 'https://mhw-db.com/events/'

    let loading = ''
    let content = null

    const [events, setEvents] = useState('')
    const [lt, setLt] = useState(3321)
    const [query, setQuery] = useState('')

    let gt = 3301

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
                setEvents(res.data)
            })
    },[gt,lt])


    if(events){
        content = events.map((event,index) => {
            if(events.length === index + 1){
                return <Quest ref={lastArmorCallback} event={event} key={index} />
            }else{
                return <Quest event={event} key={index} />
            }
        })
    }


    let eventSearch = EquipmentSearch(query, 'events')
    if (query.length !== 0){
        content = eventSearch.armor.map((event, index) => {
            return(
                <Quest event={event} key={index} />
            )
        })
        loading = ''
    }else{
        loading = <Loading />
    }

    return (
        <div className="main-content">
            <div className="main-left">
                <Sidebar/>
            </div>
            
            <div className="vline"></div>
            
            <div className="main-right">
                <h1>Monster Hunter: World - Events</h1>
                <input type="text" className='search-event' placeholder='Search event' onChange={(e)=> {
                    setQuery(e.target.value)
                }}/>
                <div className="main-event">
                    {content}
                </div>
                {loading}
                <Footer />
            </div>
        </div>
    )
}