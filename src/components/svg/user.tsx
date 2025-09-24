import * as React from "react";
import type { SVGProps } from "react";

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M44.938 14.321a3.217 3.217 0 0 0-1.71-3.497L25.434 1.927a3.23 3.23 0 0 0-2.868 0L4.772 10.824a3.217 3.217 0 0 0-1.71 3.497l2.492 12.456a20.987 20.987 0 0 0 8.133 12.785l.771.563c.046-1.132.229-2.255.544-3.343a17.989 17.989 0 0 1-6.499-10.603L6 13.733a.21.21 0 0 1 .11-.226l17.794-8.896a.215.215 0 0 1 .188 0L41.886 13.5a.21.21 0 0 1 .11.225l-2.492 12.458a18.035 18.035 0 0 1-1.413 4.235c.793.74 1.499 1.57 2.102 2.471a21.003 21.003 0 0 0 2.25-6.12l2.495-12.448Z"
    />
    <path
      fill="url(#b)"
      d="m34.3 30.203-2.931-1.619a6 6 0 0 0 3.131-5.272v-2.374a6 6 0 1 0-12 0v2.374a6 6 0 0 0 3.131 5.272l-2.93 1.619a12 12 0 0 0-6.201 10.5V43.5A1.5 1.5 0 0 0 18 45h21a1.5 1.5 0 0 0 1.5-1.5v-2.792a12 12 0 0 0-6.2-10.505Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.001}
        x2={22.462}
        y1={1.591}
        y2={49.315}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.272} stopColor="#34263B" />
        <stop offset={0.658} stopColor="#13172C" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={17.128}
        x2={41.282}
        y1={17.297}
        y2={36.581}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.35} stopColor="#F7052D" />
        <stop offset={0.85} stopColor="#CA5AFA" />
      </linearGradient>
    </defs>
  </svg>
);
export default UserIcon;
