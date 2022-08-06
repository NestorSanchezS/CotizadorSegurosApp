import React, { useState } from "react";
import { createContext } from "react";

export const CotizadorContext = createContext();

export const CotizadorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [dataForm, setDataForm] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const handleChangeData = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const QuoteInsurance = () => {
    console.log("Cotizando...");
  };
  return (
    <CotizadorContext.Provider
      value={{ handleChangeData, dataForm, error, setError, QuoteInsurance }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
