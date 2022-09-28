import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ArmorData from "../components/armor-detail/armor-info-data";
import Card from "../components/card";

export default function Home() {

    const [armor,  setArmor] = useState()
    let url = 'https://mhw-db.com/armor/89'
    let content = null


    useEffect(()=> {
        axios.get(url)
            .then(req => {
                setArmor(req.data);
            })
    },[url])

    if(armor){
        content = (
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
        )
    }

    return(
        <div className="main-home">
            <div className="home-hero">
                <h1>Monster Hunter Wiki</h1>
                <p>everything about monster hunter</p>
            </div>
            <div className="home-tips">
                <div className="home-tip-title">
                    <img src="/img/ticket.webp" alt="" />
                    <h2>Hunter Tip</h2>
                </div>
                <div className="home-tip-cards">
                    <Card title='Beginner Tips'/>
                    <Card title='Killing boss in easy way' />
                    <Card title='3 Tips to Defeat Astalos in Monster Hunter Rise: Sunbreak' />
                    <div className="home-tip-card">
                        <a href="/#">
                            <img src="/img/hero.jpg" alt=""/>
                            <div className="home-tip-card-info">
                                <h3>Advance</h3>
                                <p>How to start hunting as a beginer, and how to get good in early game</p>
                            </div>
                        </a>
                        <a href="/#">
                            <div className="home-tip-layer">
                                    <img src="/img/drink.webp" alt="" />
                                    <p>"create your own news"</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-equipments">
                <div className="home-equipments-title">
                    <img src="/img/armor.webp" alt="" />
                    <h2>Equipments</h2>
                </div>
                <div className="home-equipment">
                    {content}
                    <div className="home-equipment-more">
                        <a href="/armors">
                            <img src="img/item.webp" alt="" />
                            <p>find more</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}