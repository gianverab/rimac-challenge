import React from "react";
import "./SelectableCard.scss";

type SelectableCardProps = {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};

export const SelectableCard: React.FC<SelectableCardProps> = ({
  title,
  icon,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`selectable-card ${selected ? "selectable-card--active" : ""}`}
      onClick={onClick}
    >
      <div className="selectable-card__icon">{icon}</div>
      <div className="selectable-card__title">{title}</div>
      <input type="checkbox" checked={selected} readOnly />
    </div>
  );
};
