import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ArmorData from "../components/armor-info-data"
import ArmorSets from "../components/armor-info-sets"

function ArmorDetail(){
    const {id} = useParams()
    const url = `https://mhw-db.com/armor/${id}`
    let content = null

    const [armor, setArmor] = useState(null)
    useEffect(() => {
        axios.get(url)
            .then(req => {
                setArmor(req.data)
            })
    },[url])
    
    if(armor){
        content = 
        <div className="armor-detail-page">
            <ArmorData 
            name={armor.name}
            id={armor.id}
            type={armor.type}
            rank={armor.rank}
            rarity={armor.rarity}
            defense={armor.defense}
            resistances={armor.resistances}
            assets={armor.assets}
            />
            <div className="armor-skills-craft">
                <ArmorSets skills={armor.skills}/>

            </div>
        </div>
    }

    return (
        <>
            {content}
        </>
    )
}

export default ArmorDetail