import * as React from "react";
import type { SVGProps } from "react";

const HospitalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M28 16.017h-7.267V8.75h-5.591v7.267H7.875v5.591h7.267v7.267h5.591v-7.267H28v-5.591Z"
    />
    <path
      fill="url(#b)"
      d="M48.983 18.025 38.5 12.055v-4.18a6.132 6.132 0 0 0-6.125-6.125h-21A6.132 6.132 0 0 0 5.25 7.875v5.517h3.5V7.875a2.627 2.627 0 0 1 2.625-2.625h21A2.627 2.627 0 0 1 35 7.875V50.75h-7v-10.5H15.75v10.5h-7V24.233h-3.5V50.75c0 1.93 1.57 3.5 3.5 3.5h38.5c1.934 0 3.5-1.566 3.5-3.5V21.066a3.5 3.5 0 0 0-1.767-3.041ZM24.5 50.75h-5.25v-7h5.25v7Zm22.75 0H38.5v-14h5.25v-3.5H38.5v-3.5h5.25v-3.5H38.5V16.082l8.75 4.984V50.75Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={8.401}
        x2={24.983}
        y1={10.329}
        y2={26.911}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.35} stopColor="#F7052D" />
        <stop offset={0.85} stopColor="#CA5AFA" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={5.25}
        x2={36.041}
        y1={1.75}
        y2={61.793}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.272} stopColor="#34263B" />
        <stop offset={0.658} stopColor="#13172C" />
      </linearGradient>
    </defs>
  </svg>
);
export default HospitalIcon;
