function ArmorSets(props){
    let content = null

    if(props.skills.length !== 0){
        content = props.skills.map(skill => {
            return(
                <div className="armor-skill" key={skill.skillName}>
                    <h4>{skill.skillName}</h4>
                    <p>{skill.description}</p>
                </div>
            )
        })
    }else{
        content = <div className="armor-skill"><p>this armor have no skill</p></div>
    }
    return(
        <>
        <div className="armor-skills">
            <h3>Skills</h3>
            {content}
        </div>
        </>
    )
}

export default ArmorSets