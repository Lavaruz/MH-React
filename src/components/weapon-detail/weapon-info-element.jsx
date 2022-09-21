function WeaponElements(props){
    let content = null

    if (props.elements.length !== 0){
        content = props.elements.map((element, index) => {
            return (
                <li key={index}>
                    <div className="weapon-element">
                        <h4>{element.type}</h4>
                        <p>damage: {element.damage}</p>
                    </div>
                </li>
            )
        })
    }else{
        content = <p>this weapon have no element attack</p>
    }
    return (
        <div className="weapon-elements">
            <h3>Elements</h3>
            <div className="weapon-elements-each">
                <ul>
                    {content}
                </ul>
            </div>
        </div>
    )
}

export default WeaponElements