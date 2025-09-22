import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import Button from "../../components/atoms/Button/Button";
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
      <main className="home__main row">
        <aside className="home__left col">
          <div className="home__hero">
            <img
              src="/src/assets/hero.png"
              alt="Familia"
              className="home__hero-img"
            />
          </div>
        </aside>
        <section className="home__right col">
          <h1 className="home__title">
            <span>Seguro Salud Flexible</span>
          </h1>
          <h2 className="home__tagline">Creado para ti y tu familia</h2>
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

            <div className="terms">Aplican T&eacute;rminos y Condiciones</div>

            <div className="home__cta">
              <Button type="submit">Cotiza aquí</Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Home;
