import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import OptionCard from "../../components/molecules/OptionCard/OptionCard";
import { useUserContext } from "../../context/UserContext";
import { usePlansContext } from "../../context/PlansContext";
import type { Plan } from "../../services/types";
import { PlanCard } from "../../components/molecules/PlanCard/PlanCard";
import "./Plans.scss";
import Stepper from "../../components/molecules/Stepper/Stepper";
import BackIcon from "../../components/svg/back";
import UserIcon from "../../components/svg/user";
import OtherUserIcon from "../../components/svg/other";

const Plans: React.FC = () => {
  const navigate = useNavigate();
  const { state: userState, dispatch: userDispatch } = useUserContext();
  const { state: plansState, dispatch: plansDispatch } = usePlansContext();

  // UI selection
  const [option, setOption] = useState<"forMe" | "forOther" | null>(null);
  const [otherAgeLocal, setOtherAgeLocal] = useState<number | "">("");

  // When option changes, update PlansContext flags
  const handleOptionChange = (o: "forMe" | "forOther") => {
    setOption(o);
    plansDispatch({ type: "SET_FOR_SOMEONE_ELSE", payload: o === "forOther" });
    // reset otherAge in context if switched to forMe
    if (o === "forMe") plansDispatch({ type: "SET_OTHER_AGE", payload: null });
  };

  // derive effective age: use context's computed age if available, else undefined
  const computedAge = userState.age ?? null; // computed in UserContext
  const effectiveAge = (() => {
    if (option === "forOther") {
      // try plansState.otherAge (if set) else use the local input
      return (
        plansState.otherAge ??
        (otherAgeLocal === "" ? null : Number(otherAgeLocal))
      );
    }
    return computedAge;
  })();

  // filter plans: plan.age >= effectiveAge (show all if effectiveAge null)
  const visiblePlans = useMemo(() => {
    if (!plansState.plans || plansState.plans.length === 0) return [];
    if (!effectiveAge) return plansState.plans;
    return plansState.plans.filter((p) => p.age >= effectiveAge);
  }, [plansState.plans, effectiveAge]);

  const onSelectPlan = (plan: Plan) => {
    plansDispatch({ type: "SELECT_PLAN", payload: plan });
    // store otherAge if present
    if (option === "forOther") {
      plansDispatch({
        type: "SET_OTHER_AGE",
        payload: otherAgeLocal === "" ? null : Number(otherAgeLocal),
      });
    }
    navigate("/summary");
  };

  return (
    <div className="plans container">
      <header className="plans__header">
        <Stepper steps={["Planes y coberturas", "Resumen"]} activeStep={0} />
      </header>
      <main className="plans__main">
        <button className="plans__back" onClick={() => navigate(-1)}>
          <BackIcon /> Volver
        </button>
        <div className="plans__container">
          <h2 className="plans__title">Rocío ¿Para quién deseas cotizar?</h2>
          <p className="plans__subtitle">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>

          <section className="plans__container-options">
            <OptionCard
              id="opt-me"
              title="Para mí"
              description="Cotiza tu seguro de salud y agrega familiares si lo deseas."
              checked={option === "forMe"}
              onChange={() => handleOptionChange("forMe")}
              icon={<UserIcon />}
            />

            <OptionCard
              id="opt-other"
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o a otra persona."
              checked={option === "forOther"}
              onChange={() => handleOptionChange("forOther")}
              icon={<OtherUserIcon />}
            />
          </section>
        </div>

        {option === "forOther" && (
          <div className="plans__other">
            <label>Edad de la persona (opcional para filtrar)</label>
            <input
              type="number"
              min={0}
              value={otherAgeLocal}
              onChange={(e) =>
                setOtherAgeLocal(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              className="plans__other-input"
              placeholder="Ej. 34"
            />
          </div>
        )}

        {option && (
          <section className="plans__list grid grid--3">
            {visiblePlans.map((p) => (
              <div key={p.name} className="plans__list-item">
                <PlanCard
                  plan={p}
                  onSelect={() => onSelectPlan(p)}
                  discounted={option === "forOther"}
                  discountPercent={option === "forOther" ? 5 : 0}
                />
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Plans;
