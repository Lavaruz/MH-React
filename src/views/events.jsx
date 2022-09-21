import Sidebar from "../components/sidebar"
import axios from "axios"
import { useEffect, useState, useRef, useCallback } from "react"

import Quest from "../components/event"
import ArmorSearch from "../components/armor-search"
import Loading from "../components/loading"

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


    let eventSearch = ArmorSearch(query, 'events')
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
            <div className="main-right">
                <h1>Event</h1>
                <input type="text" className='search-item' placeholder='Search Armor' onChange={(e)=> {
                    setQuery(e.target.value)
                }}/>
                <div className="main-event">
                    {content}
                </div>
                {loading}
            </div>
        </div>
    )
}