import React, { useCallback, useRef } from "react";
import { MARCAS, PLANS } from "../constants";
import { useCotizador } from "../hook/useCotizador";

export const Result = () => {
  const { result, dataForm } = useCotizador();
  const { marca, year, plan } = dataForm;

  const [mark] = useCallback(
    MARCAS.filter((m) => m.id === Number(marca)),
    [result]
  );
  const [plane] = useCallback(
    PLANS.filter((P) => P.id === Number(plan)),
    [result]
  );
  console.log(plane);
  if (result === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumens</h2>
      <p className="my-2">
        <span className="font-bold">Marca:</span>
        {mark.id}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan:</span>
        {plane.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del Auto:</span>
        {year}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total cotizacions:</span>
        {result}
      </p>
    </div>
  );
};
