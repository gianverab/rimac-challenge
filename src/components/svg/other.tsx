import * as React from "react";
import type { SVGProps } from "react";

const OtherUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M43.228 10.824 25.434 1.928a3.23 3.23 0 0 0-2.868 0L4.772 10.824a3.218 3.218 0 0 0-1.71 3.497l2.492 12.456a20.987 20.987 0 0 0 8.133 12.785l8.415 6.216a3.188 3.188 0 0 0 3.81 0l1.064-.785c-.708-.71-1.329-1.5-1.851-2.355l-.994.733a.203.203 0 0 1-.244 0l-8.415-6.216a18.362 18.362 0 0 1-1.914-1.63 10.6 10.6 0 0 1 5.33-7.539L21 26.812a7.5 7.5 0 0 0 10.5-6.875v-2.374a7.5 7.5 0 1 0-15 0v2.374c0 1.809.655 3.556 1.845 4.918l-.907.504a13.6 13.6 0 0 0-6.231 7.33 18 18 0 0 1-2.704-6.499L6 13.732a.21.21 0 0 1 .11-.224L23.905 4.61a.215.215 0 0 1 .188 0L41.886 13.5a.21.21 0 0 1 .11.225l-2.03 10.147c.982.322 1.922.762 2.797 1.313l2.175-10.875a3.218 3.218 0 0 0-1.71-3.486ZM19.5 17.564a4.5 4.5 0 1 1 9 0v2.373a4.5 4.5 0 1 1-9 0v-2.374Z"
    />
    <path
      fill="url(#b)"
      d="M43.425 28.575a10.5 10.5 0 1 0-14.848 14.85 10.5 10.5 0 0 0 14.848-14.85ZM42 37.5h-4.5V42h-3v-4.5H30v-3h4.5V30h3v4.5H42v3Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.001}
        x2={28.068}
        y1={1.591}
        y2={54.44}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.272} stopColor="#34263B" />
        <stop offset={0.658} stopColor="#13172C" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={26.05}
        x2={43.353}
        y1={27.148}
        y2={44.451}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.35} stopColor="#F7052D" />
        <stop offset={0.85} stopColor="#CA5AFA" />
      </linearGradient>
    </defs>
  </svg>
);
export default OtherUserIcon;
