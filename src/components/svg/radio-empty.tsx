import * as React from "react";
import type { SVGProps } from "react";

const RadioEmptyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#A9AFD9"
      strokeLinecap="square"
      d="M12 .5C18.324.5 23.5 5.676 23.5 12S18.324 23.5 12 23.5.5 18.324.5 12 5.676.5 12 .5Z"
    />
  </svg>
);
export default RadioEmptyIcon;
