import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// import ArmorCraft from "../components/armor-detail/armor-info-craft"
import WeaponData from "../components/weapon-detail/weapon-info-data"
// import ArmorSkills from "../components/armor-detail/armor-info-skills"
import Sidebar from '../components/sidebar'
import WeaponEvolution from "../components/weapon-detail/weapon-info-evolution"
import WeaponDurability from "../components/weapon-detail/weapon-info-durability"
import WeaponUpgrade from "../components/weapon-detail/weapon-info-upgrade"
import WeaponAttack from "../components/weapon-detail/weapon-info-attack"
import ArmorCraft from "../components/armor-detail/armor-info-craft"
import WeaponElements from "../components/weapon-detail/weapon-info-element"
import Footer from "../components/footer"

function WeaponDetail(){
    const {id} = useParams()
    const url = `https://mhw-db.com/weapons/${id}`
    let content = null

    const [weapon, setWeapon] = useState(null)
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setWeapon(res.data)
            })
    },[url])
    
    if(weapon){
        content = 
        <div>
            <WeaponData 
            name={weapon.name}
            id={weapon.id}
            type={weapon.type}
            damageType={weapon.damageType}
            rarity={weapon.rarity}
            assets={weapon.assets}
            />
            <WeaponEvolution crafting={weapon.crafting} />
            <div className="weapon-stats">
                <div className="weapon-stats-left">
                    <WeaponAttack attack={weapon.attack} />
                    <WeaponDurability durability={weapon.durability} />
                </div>
                <div className="weapon-stats-right">
                    <WeaponElements elements={weapon.elements} />
                    <ArmorCraft materials={weapon.crafting.craftingMaterials} />
                    <WeaponUpgrade materials={weapon.crafting.upgradeMaterials} />
                </div>
            </div>
        </div>
    }

    return (
        <>
        <div className='main-content'>
            <Sidebar/>
            <div className="vline"></div>
            <div className="detail-right">{content}</div>
            <Footer />
        </div>
        </>
    )
}

export default WeaponDetail