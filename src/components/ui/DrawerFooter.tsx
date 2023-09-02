export default function DrawerFooter(props: JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={`w-full sticky bottom-0 flex-shrink-0 z-10 bg-white p-4 border-t shadow-2xl ${
        props.className ?? ""
      }}`}
    />
  );
}
