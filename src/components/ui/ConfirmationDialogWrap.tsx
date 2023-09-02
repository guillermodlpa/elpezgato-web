import { EventHandler, useCallback, useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";

/**
 * A component to wrap any button with a confirmation dialog.
 * @see https://gist.github.com/guillermodlpa/987fc504ee8db7475c106933c5ebfa2c
 */
export default function ConfirmationDialogWrap({
  children,
  onConfirm,
  ...props
}: {
  children: (handleClick: EventHandler<any>) => React.ReactNode;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isSubmitting?: boolean;
  onConfirm: () => Promise<unknown> | void;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = useCallback((event: React.UIEvent) => {
    event.stopPropagation();
    setDialogOpen(true);
  }, []);

  return (
    <>
      <ConfirmationDialog
        {...props}
        isOpen={dialogOpen}
        onConfirm={(event) => {
          const result = onConfirm();
          if (result instanceof Promise) {
            result.then(() => {
              setDialogOpen(false);
            });
          } else {
            setDialogOpen(false);
          }
        }}
        onCancel={() => {
          setDialogOpen(false);
        }}
        onClose={() => {
          setDialogOpen(false);
        }}
      />

      {children(handleClick)}
    </>
  );
}
