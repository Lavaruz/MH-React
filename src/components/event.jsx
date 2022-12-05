import React from "react"

const Quest = React.forwardRef((props, ref)=>{
    return(
        <a href="/#">
            <div className="event-each" ref={ref}>
                <div className="event-header">
                    <p>{props.event.id}.</p>
                    <p><b>{props.event.name}</b></p>
                </div>
                <div className="event-description">
                    <p>{props.event.description}</p>
                    <p title="dificult level">Rank: {props.event.questRank}</p>
                    <p>Platform: {props.event.platform}</p>
                </div>
            </div>
        </a>
    )
})

export default Quest