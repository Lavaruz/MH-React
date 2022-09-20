import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ArmorCraft from "../components/armor-detail/armor-info-craft"
import ArmorData from "../components/armor-detail/armor-info-data"
import ArmorSkills from "../components/armor-detail/armor-info-skills"
import Sidebar from '../components/sidebar'
import ArmorSets from '../components/armor-detail/armor-info-sets'

function ArmorDetail(){
    const {id} = useParams()
    const url = `https://mhw-db.com/armor/${id}`
    let content = null

    const [armor, setArmor] = useState(null)
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setArmor(res.data)
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
            assets={armor.assets ? armor.assets : []}
            />
            <ArmorSets armorSets={armor.armorSet} />
            <div className="armor-skills-craft">
                <ArmorSkills skills={armor.skills}/>
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