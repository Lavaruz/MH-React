import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function WeaponEvolution(props){
    const url = `https://mhw-db.com/weapons`
    let content = null

    const weaponEvo = props.crafting.branches

    const [weapons, setWeapon] = useState(null)
    useEffect(() => {
        const fetchMH = () => axios.get(url, {
            params: {
              q:{
                id: {
                    '$in': weaponEvo
                }
              }
            }
        });
        fetchMH()
            .then(res => {
                setWeapon(res.data)
            })
    },[url, weaponEvo])

    if(weapons){
        if(weaponEvo.length !== 0){
            content = (
                weapons.map(weapon => {
                    let weaponUrl = `/weapons/${weapon.id}`
                    return(
                        <Link to={weaponUrl} key={weapon.name}>
                            <div className="weapon-set">
                                <img src={weapon.assets ? weapon.assets.image : ''} alt="" width={80} title={weapon.name}/>
                                <div className="weapon-set-info">
                                    <p><b>{weapon.name}</b></p>   
                                    <p>rarity: {weapon.rarity}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            )
        }else{
            content = <p>this weapon can't be upgrade</p>
        }
    }

    if(weaponEvo){
        return(
            <div className="weapon-sets">
                <h3>Weapon Upgrade</h3>
                <div className="weapon-sets-display">
                    {content}
                </div>
            </div>
        )
    }
    return <></>
}

export default WeaponEvolution