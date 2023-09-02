/**
 * bed icon from https://atlasicons.vectopus.com/
 */
export default function BedIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width="24"
      height="24"
      color="currentColor"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        d="M1.5,9.14H19.64A2.86,2.86,0,0,1,22.5,12v1.91a0,0,0,0,1,0,0H1.5a0,0,0,0,1,0,0V9.14A0,0,0,0,1,1.5,9.14Z"
      ></path>
      <rect
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        x="1.5"
        y="13.91"
        width="21"
        height="3.82"
      ></rect>
      <line
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        x1="1.5"
        y1="21.55"
        x2="1.5"
        y2="2.45"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        x1="22.5"
        y1="21.55"
        x2="22.5"
        y2="17.73"
      ></line>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        d="M3.56,5.32H6.12A2.06,2.06,0,0,1,8.18,7.38v0A1.76,1.76,0,0,1,6.43,9.14H3.26A1.76,1.76,0,0,1,1.5,7.38v0A2.06,2.06,0,0,1,3.56,5.32Z"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        x1="12"
        y1="9.14"
        x2="12"
        y2="13.91"
      ></line>
    </svg>
  );
}
