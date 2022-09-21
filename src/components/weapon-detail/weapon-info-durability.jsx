function WeaponDurability(props){
    let content = null

    if (props.durability){
                content = props.durability.map((durability,index) => {
                    return (
                        <tr key={index}>
                        <td>+{index+1}</td>
                        <td>{durability.red}</td>
                        <td>{durability.orange}</td>
                        <td>{durability.yellow}</td>
                        <td>{durability.green}</td>
                        <td>{durability.blue}</td>
                        <td>{durability.white}</td>
                        <td>{durability.purple}</td>
                    </tr>
                    )
                }) 
    }
    return (
        <div className="weapon-durability">
            <h3>Durability</h3>
            <p>example: </p>
            <a href="https://twitter.com/zulliethewitch/status/1557824593250902018?lang=ar">
                <img src="/img/durability.png" alt=""/>
            </a>
            <div className="weapon-durability-table">
                <table>
                    <thead>
                        <tr>
                            <th>level</th>
                            <th><div className="red"></div></th>
                            <th><div className="orange"></div></th>
                            <th><div className="yellow"></div></th>
                            <th><div className="green"></div></th>
                            <th><div className="blue"></div></th>
                            <th><div className="white"></div></th>
                            <th><div className="purple"></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WeaponDurability