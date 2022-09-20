import React from "react"

const Weapon = React.forwardRef((props, ref)=>{
    const destinationLink = `/weapons/${props.id}`
    return (
        <a href={destinationLink}>
            <div ref={ref} className="armor">
                <div className="armor-info">
                    <h3>{props.name}</h3>
                    <div className="weapon-type">
                        <b>type</b>
                        <img src={props.icon} alt="" width={'20px'} title={`${props.type} ${props.rarity}`}/>
                    </div>
                </div>
                <img className="armor-image" src={props.img} alt="" width={100}/>
            </div>
        </a>
    )
})

export default Weapon