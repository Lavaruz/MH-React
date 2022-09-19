function ArmorData(props){
    return (
        <div className="armor-detail-main">
                <div className="armor-detail-core">
                    <div className="armor-detail-info">
                        <h3>{props.name} </h3>
                        <p>Id: {props.id} </p>
                    </div>
                    <div className="armor-detail-galery">
                        <div className="armor-detail-img">
                            <img src={props.assets.imageMale} alt="" title="Male"/>
                            <img src={props.assets.imageFemale} alt="" title="Female"/>
                        </div>
                        <div className="armor-detail-type-rank">
                            <div className="armor-detail-type">
                                <h3>{props.type} </h3>
                                <p>type</p>
                            </div>
                            <hr/>
                            <div className="armor-detail-rank">
                                <h3>{props.rank} </h3>
                                <p>rank</p>
                            </div>
                            <hr/>
                            <div className="armor-detail-rarity">
                                <h3>{props.rarity} </h3>
                                <p>rarity</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="armor-detail-stat">
                    <h3>Defense Stats</h3>
                    <div className="defense-stat">
                        <div className="defense-title">
                            <p>Base: </p>
                            <div className="defense-bar">
                                <div className="defense-value">
                                    <span>{props.defense.base}</span>
                                </div>
                            </div>
                        </div>
                        <div className="defense-title">
                            <p>Max: </p>
                            <div className="defense-bar">
                                <div className="defense-value">
                                    <span>{props.defense.max}</span>
                                </div>
                            </div>
                        </div>
                        <div className="defense-title">
                            <p>Augmented: </p>
                            <div className="defense-bar">
                                <div className="defense-value">
                                    <span>{props.defense.augmented}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resistances">
                        <h3>Resistantces</h3>
                        <div className="resistances-element">
                            <div className="resis-element">
                                <p><i className="fa-solid fa-fire" title="fire"></i>: {props.resistances.fire} </p>
                            </div>
                            <div className="resis-element">
                                <p><i className="fa-solid fa-water" title="water"></i>: {props.resistances.water} </p>
                            </div>
                            <div className="resis-element">
                                <p><i className="fa-solid fa-icicles" title="ice"></i>: {props.resistances.ice} </p>
                            </div>
                            <div className="resis-element">
                                <p><i className="fa-solid fa-bolt-lightning" title="thunder"></i>: {props.resistances.thunder} </p>
                            </div>
                            <div className="resis-element">
                                <p><i className="fa-solid fa-dragon" title="dragon"></i>: {props.resistances.dragon} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ArmorData