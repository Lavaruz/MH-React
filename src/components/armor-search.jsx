import axios from 'axios'
import { useEffect, useState } from 'react'

function ArmorSearch(query, url){

    const [armor, setArmor] = useState([])

    useEffect(()=>{
        let cancle
        axios({
            url: `https://mhw-db.com/${url}/`,
            method: 'GET',
            params: {
                q: {
                    name: {
                        $like: `%${query}%`
                    }
                }
            },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setArmor(res.data)
        }).catch(e => {
            if(axios.isCancel(e)) return
        })
        return () => cancle()
    },[query, url])

    return {armor}
}

export default ArmorSearch