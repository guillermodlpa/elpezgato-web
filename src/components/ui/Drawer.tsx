import { Transition } from "@headlessui/react";
import { useEffect } from "react";

export default function Drawer({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (isOpen) {
      const onEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", onEscape);
      return () => window.removeEventListener("keydown", onEscape);
    }
  }, [isOpen]);

  return (
    <Transition
      appear
      show={isOpen}
      enter="duration-75"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="duration-150"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
      className="fixed flex flex-col top-0 right-0 z-drawer h-screen overflow-y-auto shadow-2xl border bg-white w-full max-w-md transition-transform"
      role="dialog"
    >
      {children}
    </Transition>
  );
}
