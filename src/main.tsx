import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";
import { UserProvider } from "./context/UserContext";
import { PlansProvider } from "./context/PlansContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PlansProvider>
          <App />
        </PlansProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
