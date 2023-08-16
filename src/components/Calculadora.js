import React, { useState } from 'react';
import Boton from "../components/Boton"; 
import PanelDeBotones from "../components/PanelDeBotones"; 


const Calculadora = () => {
  // Estados para el input y el resultado
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  // Maneja el evento de presionar un botón
  const handleButtonPress = (value) => {
    if (value === "AC") {
      setInput(""); // Borra el input si el valor es "AC"
      setResult(0);
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  // Realiza el cálculo cuando se presiona el botón de igual (=)
  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Evalúa la expresión ingresada y actualiza el resultado
    } catch (error) {
      setResult("Error");
    }
  };

  // Maneja el evento de presionar un botón (incluyendo los casos especiales)
  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        handleCalculate(); 
        break;
      case "%":
        setInput(prevInput => String(eval(prevInput) / 100)); // Calcula el porcentaje
        break;
      default:
        handleButtonPress(value); 
        break;
    }
  };

  return (
    <div className="calculator mt-4 container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Muestra el input */}
          <input className="form-control mb-3" type="text" value={input} readOnly />
          {/* Renderiza el componente PanelDeBotones y pasa la función handleButtonClick como prop */}
          <PanelDeBotones clickHandle={handleButtonClick} />
          {/* Muestra el resultado */}
          <div className="result text-center mt-3">
            <p>Resultado: {result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;