import React from "react";
import "./PlanCard.scss";
import type { Plan } from "../../../services/types";
import { Button } from "../../atoms/Button/Button";

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
      <header className="m-plancard__header">
        <h4 className="m-plancard__title">{plan.name}</h4>
        <div className="m-plancard__price">
          ${finalPrice} <span className="m-plancard__price-small">al mes</span>
        </div>
      </header>
      <ul className="m-plancard__list">
        {plan.description.map((d, i) => (
          <li key={i} className="m-plancard__item">
            • {d}
          </li>
        ))}
      </ul>
      <div className="m-plancard__cta">
        <Button variant="primary" onClick={() => onSelect(plan)}>
          Seleccionar Plan
        </Button>
      </div>
    </article>
  );
};
