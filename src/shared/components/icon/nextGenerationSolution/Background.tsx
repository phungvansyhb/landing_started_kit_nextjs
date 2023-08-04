import React, { SVGProps } from 'react';

export default function Background({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='310' height='420' viewBox='0 0 310 420' fill='none' xmlns='http://www.w3.org/2000/svg' { ...rest }>
      <g clipPath='url(#clip0_2487_3095)'>
        <mask id='path-1-inside-1_2487_3095' fill='white'>
          <path d='M0 0H310V420H0V0Z' />
        </mask>
        <path d='M0 0H310V420H0V0Z' fill='#222442' />
        <path d='M0 0H310V420H0V0Z' fill='black' fillOpacity='0.2' />
        <path d='M0 0H310V420H0V0Z' fill='url(#paint0_linear_2487_3095)' fillOpacity='0.2' />
        <g filter='url(#filter0_d_2487_3095)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M-22.0094 -73.565C-59.858 23.7738 -153.331 87.4421 -255.884 76.3782C-294.075 72.263 -329.095 58.1872 -359.027 36.8579C-277.917 136.469 -160.729 191.928 -58.4058 155.693C109.853 96.0955 139.281 -109.153 58.6024 -279.008C7.66176 -386.287 -75.1108 -461.822 -100.578 -476.883C-68.6468 -426.749 -37.6679 -356.046 -19.7831 -284.178C-0.690285 -207.455 3.48971 -129.388 -22.0094 -73.565Z'
            stroke='#A2CCFD'
            strokeOpacity='0.8'
            strokeWidth='1.15231'
            shapeRendering='crispEdges'
          />
        </g>
        <g opacity='0.3' filter='url(#filter1_d_2487_3095)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M275.042 285.102C254.528 353.136 277.939 426.438 337.541 463.494C359.734 477.296 384.403 484.43 409.386 485.544C324.163 504.935 238.109 485.539 198.456 423.23C133.257 320.763 203.514 198.424 317.949 141.205C390.216 105.06 466.239 99.2706 486.201 101.873C448.074 115.359 401.835 140.268 362.127 171.29C319.736 204.407 284.774 244.496 275.042 285.102Z'
            stroke='#A2CCFD'
            strokeWidth='1.15231'
            shapeRendering='crispEdges'
          />
        </g>
        <g opacity='0.3' filter='url(#filter2_f_2487_3095)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M240.597 306.102C220.083 374.136 243.494 447.438 303.095 484.494C325.289 498.296 349.958 505.43 374.94 506.544C289.717 525.935 203.664 506.539 164.011 444.23C98.8113 341.763 169.069 219.424 283.503 162.205C355.771 126.06 431.794 120.271 451.756 122.873C413.628 136.359 367.39 161.268 327.681 192.29C285.29 225.407 250.328 265.496 240.597 306.102Z'
            fill='#854DFF'
          />
        </g>
      </g>
      <path d='M309 0V420H311V0H309Z' fill='url(#paint1_linear_2487_3095)' mask='url(#path-1-inside-1_2487_3095)' />
      <defs>
        <filter
          id='filter0_d_2487_3095'
          x='-382.469'
          y='-479.388'
          width='507.656'
          height='690.802'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='21' />
          <feGaussianBlur stdDeviation='11.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.879375 0 0 0 0 0.3813 0 0 0 0 0.020625 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2487_3095' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2487_3095' result='shape' />
        </filter>
        <filter
          id='filter1_d_2487_3095'
          x='149.898'
          y='98.7454'
          width='359.484'
          height='438.591'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='21' />
          <feGaussianBlur stdDeviation='11.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.879375 0 0 0 0 0.3813 0 0 0 0 0.020625 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2487_3095' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2487_3095' result='shape' />
        </filter>
        <filter
          id='filter2_f_2487_3095'
          x='87.0156'
          y='70.3315'
          width='416.742'
          height='495.42'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='26' result='effect1_foregroundBlur_2487_3095' />
        </filter>
        <linearGradient
          id='paint0_linear_2487_3095'
          x1='310'
          y1='0'
          x2='23.9914'
          y2='428.766'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopOpacity='0' />
          <stop offset='0.621674' stopColor='#B595FB' />
        </linearGradient>
        <linearGradient id='paint1_linear_2487_3095' x1='155' y1='0' x2='155' y2='420' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#D4DBF1' stopOpacity='0.2' />
          <stop offset='0.476727' stopColor='#E7F0FD' />
          <stop offset='1' stopColor='#95B8F4' stopOpacity='0.583333' />
        </linearGradient>
        <clipPath id='clip0_2487_3095'>
          <path d='M0 0H310V420H0V0Z' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
