export default function SearchIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      {...props}
    >
      <title>Buscar</title>
      <circle cx="9.14" cy="9.14" r="7.64"></circle>
      <line x1="22.5" y1="22.5" x2="14.39" y2="14.39"></line>
    </svg>
  );
}
