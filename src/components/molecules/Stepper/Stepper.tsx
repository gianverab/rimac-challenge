import React from "react";
import "./Stepper.scss";
import LineIcon from "../../svg/line";

type StepperProps = {
  steps: string[];
  activeStep: number;
};

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`stepper__step ${
            i === activeStep ? "stepper__step--active" : ""
          }`}
        >
          <div className="stepper__circle">{i + 1}</div>
          <span className="stepper__label">{step}</span>
          <div className="stepper__dots">
            {i < steps.length - 1 && <LineIcon />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
