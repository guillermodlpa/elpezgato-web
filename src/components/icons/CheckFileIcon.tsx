export default function CheckFileIcon(
  props: JSX.IntrinsicElements["svg"] & { title?: string }
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
      <title>{props.title || "Documento con un tick"}</title>
      <polygon
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        points="20.59 6.27 20.59 22.5 3.41 22.5 3.41 1.5 15.82 1.5 20.59 6.27"
      ></polygon>
      <polygon
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        points="20.59 6.27 20.59 7.23 14.86 7.23 14.86 1.5 15.82 1.5 20.59 6.27"
      ></polygon>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        points="15.82 11.04 11.04 15.82 8.66 13.43"
      ></polyline>
    </svg>
  );
}
