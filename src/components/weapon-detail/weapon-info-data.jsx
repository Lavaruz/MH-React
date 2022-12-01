function WeaponData(props){
    return (
        <div className="weapon-detail-main">
                <div className="weapon-detail-core">
                    <div className="wepaon-detail-info-sword">
                        <div className="weapon-detail-info">
                            <h3>{props.name} </h3>
                            <p>Id: {props.id} </p>
                        </div>
                        <img src={props.assets.icon} alt="" width={40} title={`${props.type} ${props.rarity}`}/>
                    </div>
                    <div className="weapon-detail-galery">
                        <div className="weapon-detail-img">
                            <img src={props.assets.image} alt="" title={props.name}/>
                        </div>
                        <div className="weapon-detail-type-rank">
                            <div className="weapon-detail-rank">
                                <h3>{props.damageType} </h3>
                                <p>damage</p>
                            </div>
                            <hr/>
                            <div className="weapon-detail-type">
                                <h3>{props.type} </h3>
                                <p>type</p>
                            </div>
                            <hr/>
                            <div className="weapon-detail-rarity">
                                <h3>{props.rarity} </h3>
                                <p>rarity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WeaponData