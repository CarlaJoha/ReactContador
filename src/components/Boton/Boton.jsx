import React from "react";
import "./Boton.css"

const Boton = ({ texto, buttonClick, handleClick }) => {
  return (
    <button
      className={buttonClick ? "boton-aumentar" : "boton-reiniciar"}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
};

export default Boton;
