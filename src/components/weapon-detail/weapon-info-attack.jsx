function WeaponAttack(props){
    return(
        <div className="armor-detail-stat">
        <h3>Attack Stats</h3>
        <div className="defense-stat">
            <div className="defense-title">
                <p>Display: </p>
                <div className="defense-bar">
                    <div className="defense-value" style={{"--w":`${props.attack.display/15}%`}}>
                        <span>{props.attack.display}</span>
                    </div>
                </div>
            </div>
            <div className="defense-title">
                <p>Raw: </p>
                <div className="defense-bar">
                    <div className="defense-value" style={{"--w":`${props.attack.raw/15}%`}}>
                        <span>{props.attack.raw}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WeaponAttack