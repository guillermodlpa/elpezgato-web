import { forwardRef } from "react";
import Button, { ButtonColorScheme, ButtonVariant } from "./Button";

const IconButton = forwardRef<
  any,
  JSX.IntrinsicElements["button"] & {
    icon: React.ReactNode;
    "aria-label": string;
    variant?: ButtonVariant;
    colorScheme?: ButtonColorScheme;
    isRound?: boolean;
    hasBadge?: boolean;
    size?: "sm" | "md";
  }
>(function IconButtonInner(
  {
    "aria-label": ariaLabel,
    icon,
    variant = "solid",
    colorScheme = "primary",
    isRound = false,
    size = "md",
    ...buttonProps
  },
  ref
) {
  const dimensionClasses = size === "md" ? "h-7 w-7" : "h-5 w-5";

  return (
    <Button
      {...buttonProps}
      aria-label={ariaLabel}
      colorScheme={colorScheme}
      variant={variant}
      ref={ref}
      className={`${isRound ? "!rounded-full" : ""} ${
        buttonProps.className
      } ${dimensionClasses} flex items-center justify-center !px-0 !py-0`}
    >
      {icon}
    </Button>
  );
});

export default IconButton;
