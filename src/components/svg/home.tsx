import * as React from "react";
import type { SVGProps } from "react";

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M54.25 35a7 7 0 1 0-8.75 6.781V52.5H49V41.781A7 7 0 0 0 54.25 35Z"
    />
    <path
      fill="url(#b)"
      d="M42.875 49H35v-7a7 7 0 1 0-14 0v7H9.625V20.344h-.12l16.977-12a2.625 2.625 0 0 1 3.027 0l16.866 11.901v5.172a9.552 9.552 0 0 1 3.5.326v-3.028l4.375 3.098v-4.294L31.528 5.482a6.14 6.14 0 0 0-7.067 0L1.75 21.538v4.288l4.375-3.093V49a3.5 3.5 0 0 0 3.5 3.5h33.25V49ZM31.5 49h-7v-7a3.5 3.5 0 1 1 7 0v7Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={40.616}
        x2={58.006}
        y1={29.926}
        y2={39.865}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.35} stopColor="#F7052D" />
        <stop offset={0.85} stopColor="#CA5AFA" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={1.75}
        x2={26.049}
        y1={4.363}
        y2={63.992}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.272} stopColor="#34263B" />
        <stop offset={0.658} stopColor="#13172C" />
      </linearGradient>
    </defs>
  </svg>
);
export default HomeIcon;
