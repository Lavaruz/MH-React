function WeaponDurability(props){
    let content = null

    if (props.durability){
                content = props.durability.map((durability,index) => {
                    return (
                        <tr key={durability}>
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
            <table>
                <thead>
                    <tr>
                        <th>level</th>
                        <th>red</th>
                        <th>orange</th>
                        <th>yellow</th>
                        <th>green</th>
                        <th>blue</th>
                        <th>white</th>
                        <th>purple</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}

export default WeaponDurability