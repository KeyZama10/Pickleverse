import React from 'react';

const ZigZagDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full z-40 overflow-hidden leading-[0] transform translate-y-1/2">
      <svg
        className="relative block w-[200%] h-[40px] md:h-[60px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L15,30 L30,0 L45,30 L60,0 L75,30 L90,0 L105,30 L120,0 L135,30 L150,0 L165,30 L180,0 L195,30 L210,0 L225,30 L240,0 L255,30 L270,0 L285,30 L300,0 L315,30 L330,0 L345,30 L360,0 L375,30 L390,0 L405,30 L420,0 L435,30 L450,0 L465,30 L480,0 L495,30 L510,0 L525,30 L540,0 L555,30 L570,0 L585,30 L600,0 L615,30 L630,0 L645,30 L660,0 L675,30 L690,0 L705,30 L720,0 L735,30 L750,0 L765,30 L780,0 L795,30 L810,0 L825,30 L840,0 L855,30 L870,0 L885,30 L900,0 L915,30 L930,0 L945,30 L960,0 L975,30 L990,0 L1005,30 L1020,0 L1035,30 L1050,0 L1065,30 L1080,0 L1095,30 L1110,0 L1125,30 L1140,0 L1155,30 L1170,0 L1185,30 L1200,0 L1200,120 L0,120 Z"
          fill="#FFFDD0" /* Matching the brand cream color */
          stroke="black"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default ZigZagDivider;
