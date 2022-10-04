import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ArmorData from "../components/armor-detail/armor-info-data";
import Card from "../components/card";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {

    const [armor,  setArmor] = useState()
    let url = 'https://mhw-db.com/armor/89'
    let content = null

    let notResponsive = (
        <>
            <Card title='Beginner Tips'/>
                {/* <Card title='Killing boss in easy way' />
                <Card title='3 Tips to Defeat Astalos in Monster Hunter Rise: Sunbreak' /> */}
                <div className="home-tip-card">
                    <a href="/#">
                        <img src="/img/gorila.jfif" alt=""/>
                        <div className="home-tip-card-info">
                            <h3>Create your Article</h3>
                            <p>Description</p>
                        </div>
                    </a>
                    <a href="/#">
                        <div className="home-tip-layer">
                                <p>"create your own article"</p>
                        </div>
                    </a>
                </div>
        </>
    )
    let responsiveCarousel = (
        <Carousel showArrows={false} showIndicators={false} autoPlay={true} showThumbs={false} showStatus={false}>
            <div>
                <Card title='Beginner Tips'/>
            </div>
            <div>
                <Card title='Killing boss in easy way' />
            </div>
            <div>
                <Card title='3 Tips to Defeat Astalos in Monster Hunter Rise: Sunbreak' />
            </div>
            <div>
            <div className="home-tip-card">
                    <a href="/#">
                        <img src="/img/gorila.jfif" alt=""/>
                        <div className="home-tip-card-info">
                            <h3>Create your Article</h3>
                            <p>Description</p>
                        </div>
                    </a>
                    <a href="/#">
                        <div className="home-tip-layer">
                                <p>"create your own article"</p>
                        </div>
                    </a>
                </div>
            </div>
        </Carousel>
    )


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
                <h1>Buddy, if we run into trouble, Plan A is to run away.</h1>
                <p>"everything about monster hunter"</p>
            </div>
            <div className="home-content">
            <div className="home-tips">
                <div className="home-tip-title">
                    <img src="/img/ticket.webp" alt="" />
                    <h2>Hunter Tip</h2>
                </div>
                <div className="home-tip-cards">
                    {window.innerWidth <= 760 ? responsiveCarousel : notResponsive}
                </div>
            </div>
            <div className="home-equipments">
                <div className="home-equipments-title">
                    <img src="/img/armor.webp" alt="" />
                    <h2>Iconic Armor</h2>
                </div>
                <div className="home-equipment">
                    {content}
                </div>
            </div>
            </div>
        </div>
    )
}