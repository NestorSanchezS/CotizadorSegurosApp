import React, { useState } from "react";
import { createContext } from "react";
import {
  calculateMark,
  calculatePlan,
  formatMoney,
  getYearDifference,
} from "../helpers";

export const CotizadorContext = createContext();

export const CotizadorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [dataForm, setDataForm] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [result, setResult] = useState(0);

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
    //Europeo 30%, Americano 15% Asiatico 5%
    result *= calculateMark(dataForm.marca);
    result *= calculatePlan(dataForm.plan);
    result = formatMoney(result);
    setResult(result);
  };
  return (
    <CotizadorContext.Provider
      value={{
        handleChangeData,
        dataForm,
        error,
        setError,
        QuoteInsurance,
        result,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
