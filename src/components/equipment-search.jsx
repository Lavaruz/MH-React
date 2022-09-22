import axios from 'axios'
import { useEffect, useState } from 'react'

function EquipmentSearch(url, queryByName,queryByRank, queryByType, queryByRarity){

    const [armor, setArmor] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        let qParams = {}
        let cancle

        if (queryByName){
            qParams.name = {
                $like : `%${queryByName}%`
            }
        }if (queryByRank){
            if (['projectile','saver','blunt'].includes(queryByRank)){
                qParams.damageType = queryByRank
            }else{
                qParams.rank = queryByRank
            }
        }if (queryByType){
            qParams.type = queryByType
        }if (queryByRarity){
            qParams.rarity = queryByRarity
        }
        setLoad(true)
        axios({
            url: `https://mhw-db.com/${url}/`,
            method: 'GET',
            params: {q: qParams},
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setArmor(res.data)
            setLoad(false)
        }).catch(e => {
            console.log(e);
            if(axios.isCancel(e)) return
        })
        return () => cancle()
    },[url, queryByName, queryByRank, queryByType, queryByRarity])

    return {armor, load}
}

export default EquipmentSearch