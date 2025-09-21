import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Plans = lazy(() => import("./pages/Plans/Plans"));
const Summary = lazy(() => import("./pages/Summary/Summary"));

export default function App() {
  return (
    <div>
      <header className="app-header container">
        <Link to="/">
          {" "}
          <img src="/logo192.png" alt="RIMAC" style={{ height: 40 }} />{" "}
        </Link>
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
