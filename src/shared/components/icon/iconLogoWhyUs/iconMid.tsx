import React, { SVGProps } from "react";

interface IconMidProps extends SVGProps<SVGSVGElement> {
  gradientColor?: string;
}

export default function IconMid({ gradientColor = "", ...rest }: IconMidProps) {
  return (
    <svg
      width="210"
      height="188"
      viewBox="0 0 211 189" 
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...rest}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.83 45.6748C199.94 28.8337 191.118 13.2205 179.392 0.282715C183.693 7.42047 186.617 15.6164 187.815 25.0003C191.148 51.1754 172.935 84.2487 148.346 103.925C92.6913 148.469 11.4492 133.804 1.91893 103.296C1.29023 101.269 0.821198 99.243 0.501858 97.2164C-2.34226 134.742 19.8818 170.551 56.2367 184.008C60.4879 185.585 64.9187 186.803 69.4394 187.691C101.034 189.468 132.689 183.249 161.14 171.229C179.741 157.992 193.822 139.753 201.926 118.32C210.797 94.8305 211.795 69.7036 204.81 45.6649L204.83 45.6748Z"
          fill={`url(#paint0_linear_1181_2506_${gradientColor})`}
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
