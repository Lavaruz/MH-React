import { useEffect, useState } from "react";

function WeaponElements(props) {
  const [elementColor, setElementColor] = useState("#eaeaea");

  const elementType =
    props.elements[0] !== undefined ? props.elements[0].type : "";

  useEffect(() => {
    switch (elementType) {
      case "fire":
        setElementColor("red");
        break;
      case "water":
        setElementColor("lightblue");
        break;
      case "thunder":
        setElementColor("yellow");
        break;
      case "ice":
        setElementColor("#80a3d7");
        break;
      case "dragon":
        setElementColor("#7271ac");
        break;
      case "blast":
        setElementColor("#eb3416");
        break;
      case "poison":
        setElementColor("purple");
        break;
      case "sleep":
        setElementColor("#cfe9f4");
        break;
      case "paralysis":
        setElementColor("yellow");
        break;
      case "stun":
        setElementColor("brown");
        break;

      default:
        break;
    }
  }, [elementType]);

  let content = null;

  if (props.elements.length !== 0) {
    content = props.elements.map((element, index) => {
      return (
        <ul key={index}>
          <li key={index}>
            <div className="weapon-element">
              <h4 style={{ color: elementColor }}>{element.type}</h4>
              <p>damage: {element.damage}</p>
            </div>
          </li>
        </ul>
      );
    });
  } else {
    content = <p>this weapon have no element attack</p>;
  }
  return (
    <div className="weapon-elements">
      <h3>Elements</h3>
      <div className="weapon-elements-each">{content}</div>
    </div>
  );
}

export default WeaponElements;
