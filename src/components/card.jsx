export default function Card(props){
    return (
        <div className="home-tip-card">
            <a href="/#">
                <img src="/img/hero.jpg" alt=""/>
                <div className="home-tip-card-info">
                    <h3>{props.title}</h3>
                    <p>How to start hunting as a beginer, and how to get good in early game</p>
                </div>
            </a>
        </div>
    )
}