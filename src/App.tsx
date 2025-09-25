import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import TelephoneIcon from "./components/svg/telephone";

const Home = lazy(() => import("./pages/Home/Home"));
const Plans = lazy(() => import("./pages/Plans/Plans"));
const Summary = lazy(() => import("./pages/Summary/Summary"));

export default function App() {
  return (
    <div className="app container">
      <header className="app__header row">
        <Link to="/">
          {" "}
          <img src="/logo.png" alt="RIMAC" className="app__logo" />{" "}
        </Link>
        <div className="app__contact">
          <span>¡Compra por este medio!</span>
          <button className="app__contact-button">
            <TelephoneIcon className="app__contact-icon" /> (01) 411 6001
          </button>
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
      <footer className="app__footer">
        <img src="/logo-white.png" alt="Logo" className="app__footer-logo" />
        <p>© 2025 RIMAC Seguros y Reaseguros.</p>
      </footer>
      <footer className="app__footer-mobile mobile">
        <img
          src="/logo-white-horizontal.png"
          alt="Logo"
          className="app__footer-logo"
        />
        <div className="app__footer-text">
          <p>© 2025 RIMAC Seguros y Reaseguros.</p>
        </div>
      </footer>
    </div>
  );
}
