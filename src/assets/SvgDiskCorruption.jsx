const SvgDiskCorruption = () => {
  return (
    <svg
      width="1839"
      viewBox="0 0 1839 1186"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
    >
      <g transform="translate(-1276 -645)">
        <rect
          x="1289.5"
          y="648.5"
          width="1822"
          height="1179"
          stroke="#1C440D"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="#4EA72E"
        />
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1957.98 1264)">
          Good Sectors
        </text>
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1783.72 1363)">
          [Actual file data is here]
        </text>
        <rect
          x="1289.5"
          y="648.5"
          width="950"
          height="412"
          stroke="#000000"
          strokeWidth="3.4375"
          strokeMiterlimit="8"
          fill="#FF0000"
        />
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1549.14 831)">
          Bad Sectors
        </text>
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1325.71 930)">
          [File system data is here]
        </text>
      </g>
    </svg>
  );
};

export default SvgDiskCorruption;
