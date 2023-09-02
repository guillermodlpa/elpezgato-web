export default function FlexCenter(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div
      {...props}
      className={`flex items-center justify-center ${props.className ?? ""}`}
    />
  );
}
