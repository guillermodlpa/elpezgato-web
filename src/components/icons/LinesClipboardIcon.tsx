/**
 * lines-clipboard icon from https://atlasicons.vectopus.com/
 */
export default function LinesClipboardIcon(
  props: JSX.IntrinsicElements["svg"]
) {
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
      <line
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        x1="7.23"
        y1="10.09"
        x2="16.77"
        y2="10.09"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        x1="7.23"
        y1="13.91"
        x2="16.77"
        y2="13.91"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        x1="7.23"
        y1="17.73"
        x2="16.77"
        y2="17.73"
      ></line>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        points="15.82 2.46 15.82 2.46 20.59 2.46 20.59 22.5 3.41 22.5 3.41 2.46 8.18 2.46 8.18 2.46"
      ></polyline>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        d="M15.82,1.5V3.41a1.92,1.92,0,0,1-1.91,1.91H10.09A1.92,1.92,0,0,1,8.18,3.41V1.5Z"
      ></path>
    </svg>
  );
}
