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
  return (
    <CotizadorContext.Provider
      value={{ handleChangeData, dataForm, error, setError }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
