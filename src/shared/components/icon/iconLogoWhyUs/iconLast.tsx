import React, { SVGProps } from "react";
interface IconLastProps extends SVGProps<SVGSVGElement> {
  gradientColor?: string;
}
export default function IconLast({
  gradientColor = "",
  ...rest
}: IconLastProps) {
  return (
    <svg
      width="299"
      height="252"
      viewBox="0 0 401 339"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M264.797 94.6126C318.517 136.23 341.33 209.525 316.061 276.439C306.654 301.359 291.623 322.49 272.997 339C349.462 301.238 404.953 231.919 400.779 157.268C393.908 34.5098 271.601 -19.4671 151.549 6.28545C75.7274 22.5403 13.9296 65.4344 0 79.9966C36.8908 66.9524 86.396 57.9786 134.278 57.9786C185.393 57.9786 234.67 68.2018 264.797 94.6126Z"
        fill="currentColor"
      />
    </svg>
  );
}
