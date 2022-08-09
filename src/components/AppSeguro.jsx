import React from "react";
import { useCotizador } from "../hook/useCotizador";
import { Formulary } from "./Formulary";

export const AppSseguro = () => {
  const { result } = useCotizador();
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          {" "}
          Cotizador de seguros de Autos
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulary />
      </main>
      {result}
    </>
  );
};
