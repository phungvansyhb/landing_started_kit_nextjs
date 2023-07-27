import React, { SVGProps } from "react";

interface IconFirstProps extends SVGProps<SVGSVGElement> {
  gradientColor?: string;
}
export default function IconFirst({ gradientColor = "", ...rest }: IconFirstProps) {
  return (
    <svg
      width="102"
      height="161"
      viewBox="0 0 102 161"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g fill="currentColor">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.9703 145.237C53.1789 152.185 68.9762 156.678 84.9332 159.024C43.6585 142.472 21.3546 98.138 31.6833 55.6808C35.5154 32.1212 54.8255 11.0374 65.3337 0.804932C21.2249 33.8183 -41.246 109.069 37.9703 145.237Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.338 160.681C100.799 160.581 100.25 160.461 99.7109 160.361C100.25 160.481 100.799 160.581 101.338 160.681Z"
      />
      </g>
      <defs>
        <linearGradient
          id={`paint0_linear_1181_2506_${gradientColor}`}
          x1="-4.22339e-06"
          y1="118.5"
          x2="195.5"
          y2="-0.000491289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradientColor} />
          <stop offset="1" stopColor={gradientColor} />
        </linearGradient>
      </defs>
    </svg>
  );
}
