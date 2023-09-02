import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef } from "react";
import Button from "./Button";
import Spinner from "./Spinner";

/**
 * This is a preconfigured confirmation dialog component
 * For brand and UX consistency
 */
export default function ConfirmationDialog({
  isOpen,
  onClose,
  title,
  description,
  confirmLabel = "Confirmar",
  confirmDisabled = false,
  cancelLabel = "Cancelar",
  onConfirm = onClose,
  onCancel = onClose,
  isSubmitting = false,
  dialogPanelTag = "form",
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string | JSX.Element;
  confirmLabel?: string;
  confirmDisabled?: boolean;
  cancelLabel?: string;
  onConfirm: (event: React.FormEvent) => void;
  onCancel?: ((event: React.MouseEvent) => void) | null;
  isSubmitting?: boolean;
  dialogPanelTag?: "div" | "form";
}) {
  let leastDestructiveActionRef = useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="relative z-dialog"
        initialFocus={leastDestructiveActionRef}
      >
        <div className="fixed inset-0 bg-black/30 z-10" aria-hidden="true" />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                as={dialogPanelTag}
                {...(dialogPanelTag === "form" && {
                  onSubmit: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onConfirm(event);
                  },
                })}
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg py-4 px-6"
              >
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> */}
                  <div className="text-center sm:text-left w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-4 mb-2">
                      {typeof description === "string" ? (
                        <p className="text-sm text-gray-500">{description}</p>
                      ) : (
                        description
                      )}
                    </div>
                  </div>
                </div>

                <div className="py-3 flex justify-center sm:justify-end gap-2">
                  {onCancel && (
                    <Button
                      onClick={onCancel}
                      ref={leastDestructiveActionRef}
                      colorScheme="secondary"
                      disabled={isSubmitting}
                    >
                      {cancelLabel}
                    </Button>
                  )}
                  <Button
                    {...(dialogPanelTag === "form"
                      ? {
                          type: "submit",
                        }
                      : {
                          onClick: onConfirm,
                        })}
                    colorScheme="primary"
                    disabled={isSubmitting || confirmDisabled}
                  >
                    {isSubmitting ? <Spinner size="sm" /> : confirmLabel}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
