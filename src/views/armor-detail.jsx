import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ArmorCraft from "../components/armor-info-craft"

import ArmorData from "../components/armor-info-data"
import ArmorSets from "../components/armor-info-skills"
import Sidebar from '../components/sidebar'

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
        <div>
            <ArmorData 
            name={armor.name}
            id={armor.id}
            type={armor.type}
            rank={armor.rank}
            rarity={armor.rarity}
            defense={armor.defense}
            resistances={armor.resistances}
            assets={armor.assets ? armor.assets :[]}
            />
            <div className="armor-skills-craft">
                <ArmorSets skills={armor.skills}/>
                <ArmorCraft materials={armor.crafting.materials} />
            </div>
        </div>
    }

    return (
        <>
        <div className='main-content'>
            <Sidebar/>
            <div>{content}</div>
        </div>
        </>
    )
}

export default ArmorDetail