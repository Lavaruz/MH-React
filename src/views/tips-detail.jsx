import { useParams } from "react-router-dom"

export default function TipsDetail(){
    const {title} = useParams()
    return (
        <div className="main-tips">
            <div className="tips-title">
                <div className="tips-title-autor">
                    <img src="/img/noimg.png" alt=""/>
                    <p>Assami Muzaki</p>
                </div>
                <h1>{title}</h1>
                <div className="tips-title-image">
                    <img src="/img/hero.jpg" alt="" width={`80%`}/>
                </div>
            </div>
            <div className="tips-content">
                <p>Depending on who you talk to, the Monster Hunter series has a very mixed reputation. On the one hand, it has a ravenous fanbase that won’t hesitate to import the newest games. On the other, there’s a slew of confounded gamers who quit immediately after being locked in the lengthy potion-drinking animation. In an attempt to bridge the two extremes, Capcom rebooted the series with Monster Hunter: World, which addresses a lot of the complaints while maintaining the core thrill of the hunt.

But whichever side of the fence you’re on, there’s a lot to learn before going toe-to-much-bigger-toe with the game’s titular monsters. This guide will get you up to speed.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sit repellendus necessitatibus consequatur sequi eius ipsam aliquid, molestias reprehenderit autem! Quos eligendi optio ex qui repudiandae placeat fugit eius quidem, reprehenderit, vel harum odio voluptatum dolores eveniet animi accusamus deserunt!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia maiores dolor suscipit soluta debitis perspiciatis ad voluptatum, eum, animi commodi eaque dolorum quae harum. In sequi, dignissimos quasi eligendi officiis nisi animi. Praesentium, repudiandae quibusdam magnam nostrum saepe porro perferendis officia voluptatibus ratione vitae reiciendis ullam fugit ipsum quis id non architecto ad ipsa illum dicta. Consequuntur, ducimus! Odit dolorem, amet quaerat iste adipisci error iure eveniet ducimus velit minus nisi sed aspernatur expedita ipsum atque quo alias suscipit sint. Iusto molestiae veniam voluptate asperiores, </p>
            </div>
        </div>
    )
}