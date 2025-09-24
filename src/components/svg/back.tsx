import * as React from "react";
import type { SVGProps } from "react";

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle
      cx={10}
      cy={10}
      r={9}
      stroke="#4F4FFF"
      strokeWidth={2}
      transform="rotate(90 10 10)"
    />
    <path
      fill="#4F4FFF"
      d="m7.553 10 3.256-3.253.882.881L9.32 10l2.37 2.372-.882.881L7.553 10Z"
    />
  </svg>
);
export default BackIcon;
