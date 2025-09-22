import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const Plans = lazy(() => import("./pages/Plans/Plans"));
const Summary = lazy(() => import("./pages/Summary/Summary"));

export default function App() {
  return (
    <div className="app container">
      <header className="app__header row">
        <Link to="/">
          {" "}
          <img
            src="/src/assets/logo.png"
            alt="RIMAC"
            className="app__logo"
          />{" "}
        </Link>
        <div className="app__contact">
          ¡Compra por este medio! (01) 411 6001
        </div>
      </header>
      <main>
        <Suspense fallback={<div className="container">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
