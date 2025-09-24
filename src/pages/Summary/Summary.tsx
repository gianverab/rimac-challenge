import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { usePlansContext } from "../../context/PlansContext";
import "./Summary.scss";
import Stepper from "../../components/molecules/Stepper/Stepper";
import BackIcon from "../../components/svg/back";
import UserGroupIcon from "../../components/svg/user-group";

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
        <Stepper steps={["Planes y coberturas", "Resumen"]} activeStep={1} />
      </header>

      <main className="summary__main">
        <button className="plans__back" onClick={() => navigate(-1)}>
          <BackIcon /> Volver
        </button>
        <h2 className="summary__title">Resumen del seguro</h2>

        <section className="summary__card">
          <header className="summary__card-header">
            <h4 className="summary__card-title">Precios calculados para:</h4>
            <p className="summary__card-name">
              <UserGroupIcon />
              {personName}
            </p>
          </header>

          <div className="summary__card-block">
            <p className="summary__card-text--bold">
              <strong>Responsable de pago</strong>
            </p>
            <p className="summary__card-text">DNI: {responsibleDNI}</p>
            <p className="summary__card-text">Celular: {phone}</p>
          </div>

          <div className="summary__card-block" style={{ marginTop: 12 }}>
            <p className="summary__card-text--bold">
              <strong>Plan elegido</strong>
            </p>
            <p className="summary__card-text">{plan.name}</p>
            <p className="summary__card-text">
              Costo del Plan: ${finalPrice} al mes
            </p>
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
