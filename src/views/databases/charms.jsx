import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

export default function Charms(){

const url = 'https://mhw-db.com/charms'
const [charms, setCharms] = useState()

let content = null

useEffect(()=> {
    axios.get(url)
    .then(res=>{
        console.log(res.data);
        setCharms(res.data)
    })
},[url])

if (charms){
    content = (
        charms.map((charm, index) => {
            return (
                    <div className="charm-main-item" key={index}>
                        <h2>{charm.name}</h2>
                        <div className="charm-ranks">
                            <div className="charm-level">
                                {charm.ranks.map((rank, index)=>{
                                    return(
                                        <div className="charm-level-item">
                                            <p><b>Charm Level: {rank.level}</b></p>
                                            <p>name: {rank.name}</p>
                                            <p>rarity: {rank.rarity}</p>
                                            {rank.skills.map((skill, index)=>{
                                                return <p>skill: {skill.skillName} {'*'.repeat(skill.level)}</p>
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            {charm.ranks.map((rank, index)=>{
                                return(
                                    rank.crafting.craftable ? <div className="charm-craft">
                                    <p><b>Crafting Material: </b></p>
                                    {rank.crafting.materials.map((material, index)=>{
                                        return <p><b>{material.quantity} pcs</b> {material.item.name}</p>
                                    })}
                                </div> : console.log('false')
                                )
                            })}
                        </div>
                    </div>
                
            )
        })
    )
}

    return (
        <div className="main-content">
            <div className="main-left">
                <Sidebar/>
            </div>
            
            <div className="vline"></div>
            
            <div className="main-right">
                <div className="charms-main">
                    {content}
                </div>
                <Footer/>
            </div>
        </div>
    )
}