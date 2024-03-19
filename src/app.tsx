import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OrderJs from "./interface";

const root = createRoot(document.getElementById("OrderJsApp"));
root.render(
  <StrictMode>
    <OrderJs />
  </StrictMode>
);
