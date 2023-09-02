/**
 * https://github.com/chakra-ui/chakra-ui/blob/3a87f68474221ed402fe5d169f7067763c8436d5/packages/components/icons/src/ChevronUp.tsx
 */
export default function ChevronUpIcon(
  props: JSX.IntrinsicElements["svg"] & { title?: string }
) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
    </svg>
  );
}
