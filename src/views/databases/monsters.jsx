import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

export default function Monsters() {
  const url = "https://mhw-db.com/monsters";
  const [monsters, setMonsters] = useState();

  let content = null;

  useEffect(() => {
    axios.get(url).then((res) => {
      setMonsters(res.data);
    });
  }, [url]);

  if (monsters) {
    content = monsters.map((monster, index) => {
      let img_url = `https://raw.githubusercontent.com/Lavaruz/mhw-expanded/master/public/img/${monster.name.toLowerCase()}.webp`;
      let url_monster = `https://www.google.com/search?q=Monster Hunter ${monster.name}`;
      return (
        <div className="monster-main-item" key={index}>
          <a href={url_monster} rel="noopener noreferrer" target={"_blank"}>
            <img src={img_url} alt="" />
            <h2>{monster.name}</h2>
            <p>{monster.description}</p>
            <div className="monster-main-data">
              <div className="monster-main-info">
                <p>
                  <b>type:</b> {monster.type}
                </p>
                <p>
                  <b>species:</b> {monster.species}
                </p>
                <p>
                  <b>element:</b>{" "}
                  {monster.elements.length !== 0
                    ? monster.elements.join(", ")
                    : "Neutral"}
                </p>
              </div>
              <div className="monster-main-more">
                <div className="monster-weakness">
                  <h4>Weakness: </h4>
                  {monster.weaknesses.map((weakness, index) => {
                    return <p key={index}>{weakness.element} Element</p>;
                  })}
                </div>
                {monster.rewards.length !== 0 ? (
                  <div className="monster-drop">
                    <h4>Drop Materials: </h4>
                    {monster.rewards.map((rewards, index) => {
                      return (
                        <p key={index}>
                          *{rewards.item.rarity} {rewards.item.name}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="main-content">
      <div className="main-left">
        <Sidebar />
      </div>

      <div className="vline"></div>

      <div className="main-right">
        <div className="monster-main">{content}</div>
        <Footer />
      </div>
    </div>
  );
}
