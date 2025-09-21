import React from "react";
import "./Input.scss";

export const Input = ({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label?: string }) => (
  <label className="c-input">
    {label && <span className="c-input__label">{label}</span>}
    <input className="c-input__field" {...props} />
  </label>
);
