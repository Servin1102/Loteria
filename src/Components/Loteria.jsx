import React from "react";
import { useState } from "react";
import loteriacard from "../loteriacard.json";

const Loteria = () => {
  const random = () => Math.floor(Math.random() * loteriacard.length);

  const [card, setcard] = useState(0);

  const clic = () => {
    setcard(random());
    console.log(card);
  };
  const reiniciar = () => {
    alert("Bienvenido a Loteria by Servin");
    document.location.reload();
  };

  return (
    <div className="App-header">
      <div className="cardlote">
        <img src={loteriacard[card].image} className="imglote" alt="" />
        <h3 style={{ textTransform: "uppercase" }}>{loteriacard[card].name}</h3>
        <h6>"{loteriacard[card].phrase}"</h6>
      </div>
      <div>
        <button onClick={clic}>
          <i className="fa-solid fa-circle-right"></i>
        </button>
        <button onClick={reiniciar}>
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    </div>
  );
};

export default Loteria;
