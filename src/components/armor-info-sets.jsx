function ArmorSets(props){
    let content = null
    content = props.skills.map(skill => {
        return(
            <div className="armor-skill" key={skill.skillName}>
                <h4>{skill.skillName}</h4>
                <p>{skill.description}</p>
            </div>
        )
    })
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