import styles from "./MenuJugar.css";

const MenuJugar = () => {
  return (
    <>
      <div className="menuJugar">
        <h1>JUGAR</h1>
        <div className="menuJugarOpciones">
          <div className="menuJugarNormal"></div>
          <div className="menuJugarDiario"></div>
        </div>
        <button>Atras</button>
      </div>
    </>
  );
};

export default MenuJugar;
