const SvgSimpleProcessRamSpace = () => {
  return (
    <svg
      width="1649"
      viewBox="0 0 1649 706"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
    >
      <g transform="translate(-656 -128)">
        <rect
          x="901.5"
          y="270.5"
          width="330"
          height="506"
          stroke="#000000"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="#FFFFFF"
        />
        <text fontFamily="GoogleSans" fontSize="70" transform="matrix(1 0 0 1 706.284 229)">
          RAM Address Space
        </text>
        <text fontFamily="GoogleSans" fontSize="70" transform="matrix(1 0 0 1 909.666 335)">
          0xFFFF…
        </text>
        <text fontFamily="GoogleSans" fontSize="70" transform="matrix(1 0 0 1 903.868 761)">
          0x0000…
        </text>
        <rect
          x="901.5"
          y="394.5"
          width="330"
          height="96.9999"
          stroke="#042433"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="#156082"
        />
        <path
          d="M1231.5 394.5C1259.39 394.5 1282 398.119 1282 402.583L1282 434.917C1282 439.381 1304.61 443 1332.5 443 1304.61 443 1282 446.619 1282 451.083L1282 483.417C1282 487.881 1259.39 491.5 1231.5 491.5"
          stroke="#156082"
          strokeWidth="4.58333"
          strokeMiterlimit="8"
          fill="none"
          fillRule="evenodd"
        />
        <text fill="#156082" fontFamily="GoogleSans" fontSize="60" transform="matrix(1 0 0 1 1365.38 337)">
          Chunk of memory allocated{" "}
        </text>
        <text fill="#156082" fontFamily="GoogleSans" fontSize="60" transform="matrix(1 0 0 1 1365.38 425)">
          to a process
        </text>
        <text fill="#156082" fontFamily="GoogleSans" fontSize="60" transform="matrix(1 0 0 1 1365.38 513)">
          The process cannot access{" "}
        </text>
        <text fill="#156082" fontFamily="GoogleSans" fontSize="60" transform="matrix(1 0 0 1 1365.38 601)">
          any memory locations{" "}
        </text>
        <text fill="#156082" fontFamily="GoogleSans" fontSize="60" transform="matrix(1 0 0 1 1365.38 689)">
          outside of this chunk
        </text>
      </g>
    </svg>
  );
};

export default SvgSimpleProcessRamSpace;
