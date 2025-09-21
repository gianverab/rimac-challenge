// src/pages/Home/Home.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import Button from "../../components/atoms/Button/Button"; // si tu Button está en otra ruta, ajusta
import "../../styles/main.scss";
import "./Home.scss";

const Home: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const { form } = state;
  const navigate = useNavigate();

  const updateField = (payload: Partial<typeof form>) => {
    dispatch({ type: "UPDATE_FORM", payload });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación simple
    if (!form.documentNumber.trim() || !form.phone.trim()) {
      alert("Por favor ingresa Nro. de documento y celular.");
      return;
    }
    if (!form.acceptedPolicies) {
      alert("Debes aceptar la Política de Privacidad.");
      return;
    }
    navigate("/plans");
  };

  return (
    <div className="home container">
      <header className="home__header row">
        <img
          src="/src/assets/logo-rimac.png"
          alt="RIMAC"
          className="home__logo"
        />
        <div className="home__contact">(01) 411 6001</div>
      </header>

      <main className="home__main row">
        <section className="home__left col">
          <h1 className="home__title">Creado para ti y tu familia</h1>
          <p className="home__subtitle">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>

          <form className="home__form" onSubmit={handleSubmit} noValidate>
            <label className="field">
              <span className="field__label">Tipo de documento</span>
              <select
                value={form.documentType}
                onChange={(e) => updateField({ documentType: e.target.value })}
                className="field__select"
              >
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
                <option value="PAS">Pasaporte</option>
              </select>
            </label>

            <label className="field">
              <span className="field__label">Nro. de documento</span>
              <input
                className="field__input"
                value={form.documentNumber}
                onChange={(e) =>
                  updateField({ documentNumber: e.target.value })
                }
                placeholder="30216147"
                required
              />
            </label>

            <label className="field">
              <span className="field__label">Celular</span>
              <input
                className="field__input"
                value={form.phone}
                onChange={(e) => updateField({ phone: e.target.value })}
                placeholder="951234567"
                required
              />
            </label>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={form.acceptedPolicies}
                onChange={(e) =>
                  updateField({ acceptedPolicies: e.target.checked })
                }
              />
              <span>Acepto la Política de Privacidad</span>
            </label>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={form.acceptedComms}
                onChange={(e) =>
                  updateField({ acceptedComms: e.target.checked })
                }
              />
              <span>Acepto recibir comunicaciones comerciales</span>
            </label>

            <div className="home__cta">
              <Button type="submit">Cotiza aquí</Button>
            </div>
          </form>
        </section>

        <aside className="home__right col">
          <div className="home__hero">
            <img
              src="/src/assets/hero-family.jpg"
              alt="Familia"
              className="home__hero-img"
            />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
