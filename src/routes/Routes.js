import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "../components/Calculadora";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calculadora" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
