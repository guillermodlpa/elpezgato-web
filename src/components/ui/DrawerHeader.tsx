import CloseIcon from "@/components/icons/CloseIcon";
import IconButton from "./IconButton";

export default function DrawerHeader({
  onClose,
  heading,
  children,
  ...rest
}: {
  onClose: () => void;
  heading?: string;
} & JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...rest}
      className={`w-full sticky top-0 z-10 bg-backgroundDefault p-4 border-b border-divider flex flex-shrink-0 items-center justify-end shadow-sm ${rest.className}`}
    >
      {heading && (
        <h3
          id="drawer-label"
          className="inline-flex items-center text-xl font-medium text-textPrimary flex-grow"
        >
          {heading}
        </h3>
      )}

      {children}

      <IconButton
        aria-label="Cerrar pestaña"
        variant="ghost"
        colorScheme="secondary"
        onClick={onClose}
        icon={<CloseIcon />}
      />
    </div>
  );
}
