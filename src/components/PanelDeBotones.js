
import React from "react";
import Boton from "../components/Boton";

const PanelDeBotones = ({ clickHandle }) => {
  const handleClick = (nombreDeBoton) => {
    clickHandle(nombreDeBoton);
  };

  return (
    <div className="row">
      {/* Fila de botones */}
      <Boton name="AC" clickHandle={handleClick} gray />
      <Boton name="+/-" clickHandle={handleClick} gray />
      <Boton name="%" clickHandle={handleClick} gray />
      <Boton name="/" clickHandle={handleClick}  success/>
      
      {/* Fila de botones */}
      <Boton name="7" clickHandle={handleClick} primary/>
      <Boton name="8" clickHandle={handleClick} primary/>
      <Boton name="9" clickHandle={handleClick} primary/>
      <Boton name="*" clickHandle={handleClick} success />
      
      {/* Fila de botones */}
      <Boton name="4" clickHandle={handleClick} primary/>
      <Boton name="5" clickHandle={handleClick} primary/>
      <Boton name="6" clickHandle={handleClick} primary/>
      <Boton name="-" clickHandle={handleClick} success />
      
      {/* Fila de botones */}
      <Boton name="1" clickHandle={handleClick} primary/>
      <Boton name="2" clickHandle={handleClick} primary/>
      <Boton name="3" clickHandle={handleClick} primary/>
      <Boton name="+" clickHandle={handleClick} success />
      
      {/* Fila de botones */}
      <Boton name="0" clickHandle={handleClick} primary />
      <Boton name="." clickHandle={handleClick} primary/>
      <Boton name="=" clickHandle={handleClick} danger />
    </div>
  );
};

export default PanelDeBotones;