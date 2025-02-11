const SvgDiskCorruption = () => {
  return (
    <svg
      width="1953"
      viewBox="0 0 1953 1163"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
    >
      <g transform="translate(-976 -770)">
        <rect
          x="980.5"
          y="773.5"
          width="1945"
          height="995"
          stroke="#042433"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="#00B050"
        />
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1710.49 1396)">
          Good Sectors
        </text>
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1025.99 1496)">
          [Actual file data is here {"→"} Not lost, but inaccessible]
        </text>
        <rect
          x="980.5"
          y="773.5"
          width="989"
          height="379"
          stroke="#042433"
          strokeWidth="6.875"
          strokeMiterlimit="8"
          fill="#FF0000"
        />
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1259.59 939)">
          Bad Sectors
        </text>
        <text fill="#FFFFFF" fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1032.4 1038)">
          [File System data is here]
        </text>
        <text fontFamily="GoogleSans" fontSize="80" transform="matrix(1 0 0 1 1672.33 1860)">
          Physical Disk
        </text>
      </g>
    </svg>
  );
};

export default SvgDiskCorruption;
