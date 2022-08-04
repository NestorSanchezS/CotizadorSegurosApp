import React from "react";
import { AppSseguro } from "./components/AppSeguro";
import { CotizadorProvider } from "./context/CotizadorProvider";

export const App = () => {
  return (
    <CotizadorProvider>
      <AppSseguro />
    </CotizadorProvider>
  );
};
