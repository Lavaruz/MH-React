import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ArmorSets(props){
    const url = `https://mhw-db.com/armor`
    let content = null

    const armorSet = props.armorSets.pieces

    const [armors, setArmors] = useState(null)
    useEffect(() => {
        const fetchMH = () => axios.get(url, {
            params: {
              q:{
                id: {
                    '$lte': armorSet[armorSet.length-1],
                    '$gte': armorSet[0]
                }
              }
            }
        });
        fetchMH()
            .then(req => {
                setArmors(req.data)
            })
    },[url, armorSet])

    if(armors){
        content = (
            armors.map(armor => {
                let armorUrl = `/armors/${armor.id}`
                return(
                    <Link to={armorUrl} key={armor.name}>
                        <div className="armor-set">
                            <img src={armor.assets ? armor.assets.imageMale : ''} alt="" width={80} title={armor.name}/>
                            <hr />
                            <p><b>{armor.type}</b></p>
                        </div>
                    </Link>
                )
            })
        )
    }

    if(armorSet){
        return(
            <div className="armor-sets">
                <h3>Armor Sets</h3>
                <div className="armor-sets-display">
                    {content}
                </div>
            </div>
        )
    }
    return <></>
}

export default ArmorSets