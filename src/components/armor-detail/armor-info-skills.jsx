function ArmorSkills(props){
    let content = null

    if(props.skills.length !== 0){
        content = props.skills.map(skill => {
            return(
                <li key={skill.skillName}>
                    <div className="armor-skill">
                        <h4>{skill.skillName}</h4>
                        <p>{skill.description}</p>
                    </div>
                </li>
            )
        })
    }else{
        content = <div className="armor-skill"><p>this armor have no skill</p></div>
    }
    return(
        <>
        <div className="armor-skills">
            <h3>Skills</h3>
            <ul>
                {content}
            </ul>
        </div>
        </>
    )
}

export default ArmorSkills