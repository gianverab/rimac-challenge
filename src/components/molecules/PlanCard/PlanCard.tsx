import React from "react";
import "./PlanCard.scss";
import type { Plan } from "../../../services/types";
import { Button } from "../../atoms/Button/Button";
import HomeIcon from "../../svg/home";
import HospitalIcon from "../../svg/hospital";

type Props = {
  plan: Plan;
  onSelect: (p: Plan) => void;
  discounted?: boolean;
  discountPercent?: number;
};

export const PlanCard: React.FC<Props> = ({
  plan,
  onSelect,
  discounted = false,
  discountPercent = 0,
}) => {
  const finalPrice = discounted
    ? +(plan.price * (1 - discountPercent / 100)).toFixed(2)
    : plan.price;
  return (
    <article className="m-plancard" aria-label={plan.name}>
      <div className="m-plancard__inner">
        {plan.name === "Plan en Casa y Clínica" && (
          <span className="m-plancard__inner-tag">Plan recomendado</span>
        )}
        <div className="m-plancard__content">
          <div className="m-plancard__content-text">
            <h4 className="m-plancard__title">{plan.name}</h4>
            <div className="m-plancard__price">
              <h5 className="m-plancard__price-title">Costo del plan</h5>
              <p className="m-plancard__price-text">
                ${finalPrice}{" "}
                <span className="m-plancard__price-small">al mes</span>
              </p>
            </div>
          </div>
          {plan.name === "Plan en Casa y Clínica" ? (
            <HospitalIcon />
          ) : (
            <HomeIcon />
          )}
        </div>
        <ul className="m-plancard__list">
          {Array.isArray(plan.description) ? (
            plan.description.map((d, i) => (
              <li key={i} className="m-plancard__item">
                • {d}
              </li>
            ))
          ) : (
            <li className="m-plancard__item">• {plan.description}</li>
          )}
        </ul>
      </div>
      <div className="m-plancard__cta">
        <Button variant="secondary" size="md" onClick={() => onSelect(plan)}>
          Seleccionar Plan
        </Button>
      </div>
    </article>
  );
};
