import axios from 'axios'
import { useEffect, useState } from 'react'

function ArmorSearch(url, queryByName,queryByRank, queryByType, queryByRarity){

    const [armor, setArmor] = useState([])

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

        console.log(qParams);

        axios({
            url: `https://mhw-db.com/${url}/`,
            method: 'GET',
            params: {q: qParams},
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setArmor(res.data)
        }).catch(e => {
            console.log(e);
            if(axios.isCancel(e)) return
        })
        return () => cancle()
    },[url, queryByName, queryByRank, queryByType, queryByRarity])

    return {armor}
}

export default ArmorSearch