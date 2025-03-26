const SvgExecProcessTree = () => {
  return (
    <svg
      width="2114"
      viewBox="0 0 2114 1039"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
    >
      <g transform="translate(-634 -201)">
        <path
          d="M635.5 405C635.5 293.162 731.759 202.5 850.5 202.5 969.241 202.5 1065.5 293.162 1065.5 405 1065.5 516.838 969.241 607.5 850.5 607.5 731.759 607.5 635.5 516.838 635.5 405Z"
          stroke="#000000"
          strokeWidth="3.4375"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          fill="none"
          fillRule="evenodd"
        />
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 734.338 431)">
          Parent
        </text>
        <path
          d="M1236.5 1036C1236.5 924.162 1332.53 833.5 1451 833.5 1569.47 833.5 1665.5 924.162 1665.5 1036 1665.5 1147.84 1569.47 1238.5 1451 1238.5 1332.53 1238.5 1236.5 1147.84 1236.5 1036Z"
          stroke="#000000"
          strokeWidth="3.4375"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          fill="none"
          fillRule="evenodd"
        />
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1355.48 1062)">
          Child
        </text>
        <path
          d="M1002.5 548.5 1299.36 893.191"
          stroke="#000000"
          strokeWidth="3.4375"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          fill="none"
          fillRule="evenodd"
        />
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1183.07 348)">
          num &gt; 0
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1183.07 447)">
          This process will not call exec()
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1738.39 1011)">
          num = 0
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1738.39 1110)">
          This process will call exec()
        </text>
      </g>
    </svg>
  );
};

export default SvgExecProcessTree;
