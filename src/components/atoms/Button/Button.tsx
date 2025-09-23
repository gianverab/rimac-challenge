import React from "react";
import clsx from "clsx";
import "./Button.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
};

export const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  size = "lg",
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "c-button",
        `c-button--${variant}`,
        `c-button--${size}`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
