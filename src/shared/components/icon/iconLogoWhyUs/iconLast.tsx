import React, { SVGProps } from "react";
interface IconLastProps extends SVGProps<SVGSVGElement> {
  open?: boolean;
}
export default function IconLast({ open, ...rest }: IconLastProps) {
  return (
    <svg
      width="299"
      height="252"
      viewBox="0 0 401 339"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_d_2236_611)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M257.002 90.8385C308.668 130.795 330.609 201.164 306.306 265.407C297.258 289.332 282.803 309.62 264.888 325.471C338.43 289.216 391.799 222.665 387.786 150.993C381.177 33.1347 263.546 -18.6878 148.083 6.03689C75.1604 21.643 15.7252 62.825 2.32812 76.8059C37.8085 64.2824 85.4212 55.6668 131.472 55.6668C180.634 55.6668 228.027 65.4819 257.002 90.8385Z"
          fill="currentColor"
        />
      </g>
      <defs>
        {open && (
          <filter
            id="filter0_d_2236_611"
            x="-20.6719"
            y="-1.99768"
            width="431.672"
            height="371.469"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="21" />
            <feGaussianBlur stdDeviation="11.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.879375 0 0 0 0 0.3813 0 0 0 0 0.020625 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2236_611"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2236_611"
              result="shape"
            />
          </filter>
        )}
      </defs>
    </svg>
  );
}
