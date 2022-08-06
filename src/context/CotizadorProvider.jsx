import React, { useState } from "react";
import { createContext } from "react";
import { getYearDifference } from "../helpers";

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
    let result = 2000;
    //obtener diferencias de años
    const difference = getYearDifference(dataForm.year);
    //resta el 3% de cada año
    result -= (difference * 3 * result) / 100;
  };
  return (
    <CotizadorContext.Provider
      value={{ handleChangeData, dataForm, error, setError, QuoteInsurance }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
