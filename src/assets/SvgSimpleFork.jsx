const SvgSimpleFork = () => {
  return (
    <svg
      width="2612"
      viewBox="0 0 2612 1456"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
    >
      <g transform="translate(-414 -360)">
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 464.288 462)">
          int{" "}
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 572.57 462)">
          val
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 691.461 462)">
          = fork();
        </text>
        <text fill="#00B050" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 982.865 462)">
          // val will be 0 if this is the child process
        </text>
        <text fill="#00B050" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 464.288 561)">
          // but it if it is the parent process, val will be the PID of the child process
        </text>
        <path
          d="M1041.5 965C1041.5 837.146 1155 733.5 1295 733.5 1435 733.5 1548.5 837.146 1548.5 965 1548.5 1092.85 1435 1196.5 1295 1196.5 1155 1196.5 1041.5 1092.85 1041.5 965Z"
          stroke="#000000"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1179.15 941)">
          Parent
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1167.74 1040)">
          PID: 30
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 464.288 825)">
          Process Tree:
        </text>
        <text fill="#FF0000" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1581.25 990)">
          val
        </text>
        <text fill="#FF0000" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1700.14 990)">
          = 41
        </text>
        <path
          d="M1808.5 1581C1808.5 1453.15 1922.22 1349.5 2062.5 1349.5 2202.78 1349.5 2316.5 1453.15 2316.5 1581 2316.5 1708.85 2202.78 1812.5 2062.5 1812.5 1922.22 1812.5 1808.5 1708.85 1808.5 1581Z"
          stroke="#000000"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1967.07 1557)">
          Child
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1934.99 1656)">
          PID: 41
        </text>
        <text fill="#FF0000" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 2348.5 1606)">
          val
        </text>
        <text fill="#FF0000" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 2467.39 1606)">
          = 0
        </text>
        <path
          d="M1474.5 1128.5 1883.09 1416.65"
          stroke="#000000"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="none"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default SvgSimpleFork;
