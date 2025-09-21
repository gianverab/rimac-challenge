// src/components/OptionCard/OptionCard.tsx
import React from "react";
import "./OptionCard.scss";

interface OptionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  checked: boolean;
  onChange: () => void;
  id?: string;
}

const OptionCard: React.FC<OptionCardProps> = ({
  title,
  description,
  icon,
  checked,
  onChange,
  id,
}) => {
  return (
    <label
      className={`o-option-card ${checked ? "o-option-card--active" : ""}`}
      htmlFor={id}
    >
      <input
        id={id}
        className="o-option-card__input"
        type="radio"
        name="cotizacion-for"
        checked={checked}
        onChange={onChange}
        aria-checked={checked}
      />
      <div className="o-option-card__body">
        <div className="o-option-card__left">
          <div className="o-option-card__icon">
            {icon ?? <span className="placeholder-icon">🏥</span>}
          </div>
          <div className="o-option-card__text">
            <div className="o-option-card__title">{title}</div>
            <div className="o-option-card__desc">{description}</div>
          </div>
        </div>
        <div className="o-option-card__check">
          {checked ? (
            <span className="dot">✔</span>
          ) : (
            <span className="dot--empty">○</span>
          )}
        </div>
      </div>
    </label>
  );
};

export default React.memo(OptionCard);
