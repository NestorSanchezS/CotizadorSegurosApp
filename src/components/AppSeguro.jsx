import React from "react";
import { Formulary } from "./Formulary";

export const AppSseguro = () => {
  return (
    <>
      <hader className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          {" "}
          Cotizador de seguros de Autos
        </h1>
      </hader>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <p>Contenido principal</p>
        <Formulary />
      </main>
    </>
  );
};
