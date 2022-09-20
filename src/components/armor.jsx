import React from "react"

const Armor = React.forwardRef((props, ref)=>{
    const destinationLink = `/armors/${props.id}`
    return (
        <a href={destinationLink}>
            <div ref={ref} className="armor">
                <div className="armor-info">
                    <h3>{props.name}</h3>
                    <b>Rank</b>
                    <p className="armor-rank">{props.rank}</p>
                </div>
                <img className="armor-image" src={props.img} alt="" width={100}/>
            </div>
        </a>
    )
})

export default Armor