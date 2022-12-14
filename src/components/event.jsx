import React from "react";

const Quest = React.forwardRef((props, ref) => {
  let url_event = `https://www.google.com/search?q=Monster Hunter ${props.event.name}`;
  return (
    <a href={url_event} rel="noopener noreferrer" target={"_blank"}>
      <div className="event-each" ref={ref}>
        <div className="event-header">
          <p>Id.{props.event.id}</p>
          <p>{props.event.type}</p>
        </div>
        <div className="event-title">
          <h2>{props.event.name}</h2>
        </div>
        <div className="event-description">
          <p>{props.event.description}</p>
          <p title="dificult level">Rank: {props.event.questRank}</p>
          <p>Platform: {props.event.platform}</p>
          <br />
          <p>
            Objective: <b>{props.event.successConditions}</b>
          </p>
        </div>
      </div>
    </a>
  );
});

export default Quest;
