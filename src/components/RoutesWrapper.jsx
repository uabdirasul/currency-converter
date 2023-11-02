import React from "react";
import { Routes, Route } from "react-router-dom";

import Converter from "./Converter";
import CurrencyData from "./CurrencyData";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Converter />} />
      <Route path="/currencies" element={<CurrencyData />} />
    </Routes>
  );
};

export default RoutesWrapper;
