
import React from "react";

const Boton = ({ clickHandle, name, gray, primary, success, danger }) => {
  const handleClick = () => clickHandle(name);

  // Define las clases de los botones basadas en las propiedades recibidas
  const classNames = [
    "btn",
    gray ? "btn-secondary" : "",
    primary ? "btn-primary" : "",
    success ? "btn-success" : "",
    danger ? "btn-danger" : "",
  ];

  return (
    <div className="col-md-3 mb-1">
      {/* Renderiza un botón con las clases y el manejador de clic adecuados */}
      <button className={classNames.join(" ").trim()} onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export default Boton;