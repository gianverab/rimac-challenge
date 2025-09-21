import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { usePlansContext } from "../../context/PlansContext";
import "./Summary.scss";

const Resumen: React.FC = () => {
  const navigate = useNavigate();
  const { state: userState } = useUserContext();
  const { state: plansState } = usePlansContext();

  const plan = plansState.selectedPlan;
  const personName = userState.user
    ? `${userState.user.name} ${userState.user.lastName}`
    : "N/D";
  const responsibleDNI = userState.form?.documentNumber ?? "N/D";
  const phone = userState.form?.phone ?? "N/D";
  const isForOther = plansState.forSomeoneElse;
  const otherAge = plansState.otherAge ?? null;

  if (!plan) {
    return (
      <div className="summary container">
        <p>No has seleccionado un plan aún.</p>
        <button onClick={() => navigate("/plans")}>Volver a planes</button>
      </div>
    );
  }

  const finalPrice = isForOther ? +(plan.price * 0.95).toFixed(2) : plan.price;

  return (
    <div className="summary container">
      <header className="summary__header">
        <img
          src="/src/assets/logo-rimac.png"
          alt="RIMAC"
          className="summary__logo"
        />
      </header>

      <main className="summary__main">
        <h2 className="summary__title">Resumen del seguro</h2>

        <section className="summary__card">
          <h4>Precios calculados para:</h4>
          <p className="summary__name">{personName}</p>

          <div className="summary__block">
            <div>
              <strong>Responsable de pago</strong>
            </div>
            <div>DNI: {responsibleDNI}</div>
            <div>Celular: {phone}</div>
          </div>

          <div className="summary__block" style={{ marginTop: 12 }}>
            <div>
              <strong>Plan elegido</strong>
            </div>
            <div>{plan.name}</div>
            <div>Costo del Plan: ${finalPrice} al mes</div>
            {isForOther && otherAge !== null && (
              <div>(Se aplicó 5% de descuento — edad: {otherAge})</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resumen;
