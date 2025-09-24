import * as React from "react";
import type { SVGProps } from "react";

const RadioCheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#C5CBE0"
      strokeLinecap="square"
      d="M12 .5C18.324.5 23.5 5.676 23.5 12S18.324 23.5 12 23.5.5 18.324.5 12 5.676.5 12 .5Z"
    />
    <path
      fill="#389E0D"
      fillRule="evenodd"
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.181 7.113a.9.9 0 0 1 .106 1.268l-6.6 7.8a.9.9 0 0 1-1.341.037l-3.4-3.6a.9.9 0 1 1 1.308-1.236l2.71 2.868 5.949-7.031a.9.9 0 0 1 1.268-.106Z"
      clipRule="evenodd"
    />
  </svg>
);
export default RadioCheckedIcon;
