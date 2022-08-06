import React from "react";
import { MARCAS, YEARS, PLANS } from "../constants";
import { useCotizador } from "../hook/useCotizador";
import { Error } from "./Error";

export const Formulary = () => {
  const { handleChangeData, dataForm, error, setError, QuoteInsurance } =
    useCotizador();

  const handleSubmitData = (e) => {
    e.preventDefault();

    if (Object.values(dataForm).includes("")) {
      setError(true);
      return;
    }
    setError(false);
    QuoteInsurance();
  };
  return (
    <>
      {error && <Error>Todos los campos son requeridos</Error>}
      <form onSubmit={handleSubmitData}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            value={dataForm.marca}
            className="w-full p-3 bg-white border border-gray-200"
            onChange={({ target }) => handleChangeData({ target })}
          >
            <option value="">-- Selecciona Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.name}>
                {marca.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            value={dataForm.year}
            className="w-full p-3 bg-white border border-gray-200"
            onChange={({ target }) => handleChangeData({ target })}
          >
            <option value="">-- Selecciona Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <span key={plan.id}>
                <label>{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={({ target }) => handleChangeData({ target })}
                />
              </span>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};
