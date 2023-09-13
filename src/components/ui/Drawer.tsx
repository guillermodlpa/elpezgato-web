import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Drawer({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-[100vw]",
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: "max-w-md" | "max-w-[100vw]";
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

  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined" && window.document) {
        window.document.body.style.overflow = "hidden";
      }
    } else {
      window.document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return createPortal(
    <Transition
      appear
      show={isOpen}
      enter="duration-75"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="duration-150"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
      className={`fixed flex flex-col top-0 right-0 z-drawer h-screen overflow-y-auto shadow-2xl border border-divider bg-backgroundDefault w-full ${maxWidth} h-full transition-transform`}
      role="dialog"
    >
      {children}
    </Transition>,
    document.body
  );
}
