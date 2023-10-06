import React from "react";
import styles from "./MenuPrincipal.css";

const Menu = () => {
  return (
    <>
      <div className="menuPrincipal">
        <h1>NOMBRE DEL JUEGO</h1>
        <div className="botonesMenuPrincipal">
          <button>Jugar</button>
          <button>Niveles</button>
        </div>
      </div>
    </>
  );
};

export default Menu;
