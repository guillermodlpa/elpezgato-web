export default function DrawerBody(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div {...props} className={`w-full p-4 grow ${props.className ?? ""}`} />
  );
}
