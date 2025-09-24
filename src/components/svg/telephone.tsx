import * as React from "react";
import type { SVGProps } from "react";

const TelephoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#03050F"
      d="m16.875 13.381-2.5-1.456a1.25 1.25 0 0 0-1.65.337l-1.362 1.813a9.998 9.998 0 0 1-3.382-2.031A10 10 0 0 1 5.95 8.656L7.762 7.3A1.25 1.25 0 0 0 8.1 5.65L6.619 3.125a1.25 1.25 0 0 0-1.838-.412l-.856.625A3.238 3.238 0 0 0 2.544 6a10.444 10.444 0 0 0 3.381 8.125 10.444 10.444 0 0 0 8.125 3.381 3.238 3.238 0 0 0 2.662-1.381l.625-.856a1.251 1.251 0 0 0-.462-1.888Z"
    />
  </svg>
);
export default TelephoneIcon;
