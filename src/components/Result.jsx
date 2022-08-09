import React from "react";
import { useCotizador } from "../hook/useCotizador";

export const Result = () => {
  const { result } = useCotizador();
  return <div>{result}</div>;
};
