import React from "react"

const Quest = React.forwardRef((props, ref)=>{
    // let star = <i class="fa-solid fa-star"></i>
    return(
        <a href="/#">
            <div className="event-each" ref={ref}>
                <p>{props.event.id}.</p>
                <p><b>{props.event.name}</b></p>
                <p title="dificult level">{'*'.repeat(props.event.questRank)}</p>
            </div>
        </a>
    )
})

export default Quest