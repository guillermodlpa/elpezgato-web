import { forwardRef } from "react";

export type ButtonVariant = "solid" | "ghost";
export type ButtonColorScheme =
  | "primary"
  | "secondary"
  | "tertiary"
  | "whiteAlpha"
  | "blackAlpha";

export const buttonStyles: {
  [key in ButtonVariant]: Record<ButtonColorScheme, string>;
} = {
  solid: {
    primary:
      "text-white hover:text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700 focus-visible:ring-primary-700",
    secondary:
      "text-white hover:text-white bg-secondary-900 hover:bg-secondary-800 active:bg-secondary-700 focus-visible:ring-secondary-700",
    tertiary:
      "text-white hover:text-white bg-tertiary-900 hover:bg-tertiary-800 active:bg-tertiary-700 focus-visible:ring-tertiary-700",
    whiteAlpha:
      "text-white hover:text-white bg-transparent bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-75 focus-visible:ring-primary-300",
    blackAlpha:
      "text-black hover:text-black bg-white bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-75 focus-visible:ring-primary-300",
  },
  ghost: {
    primary:
      "text-primary-500 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-100",
    secondary:
      "text-secondary-900 hover:bg-secondary-50 active:bg-secondary-100 focus-visible:ring-secondary-100",
    tertiary:
      "text-tertiary-900 hover:bg-tertiary-50 active:bg-tertiary-100 focus-visible:ring-tertiary-100",
    whiteAlpha:
      "text-white bg-transparent hover:bg-white hover:bg-opacity-50 focus-visible:ring-primary",
    blackAlpha:
      "text-black bg-transparent hover:bg-black hover:bg-opacity-50 focus-visible:ring-primary",
  },
};

export const baseClassNames =
  "relative inline-flex items-center px-4 py-2 text-sm text-center rounded-lg focus:outline-none transition-colors font-medium";

const badgeClassName =
  "after:content_[''] after:absolute after:top-0 after:right-0 after:w-2 after:h-2 after:bg-primary-500 after:rounded-full";
const badgeColorClassName: Record<ButtonColorScheme, string> = {
  primary: "after:bg-secondary-500",
  secondary: "after:bg-primary-500",
  tertiary: "after:bg-primary-500",
  whiteAlpha: "after:bg-primary-500",
  blackAlpha: "after:bg-primary-500",
};

const Button = forwardRef<
  any,
  JSX.IntrinsicElements["button"] & {
    variant?: ButtonVariant;
    colorScheme?: ButtonColorScheme;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    hasBadge?: boolean;
  }
>(function ButtonInner(
  {
    variant = "solid",
    colorScheme = "primary",
    children,
    iconLeft,
    iconRight,
    hasBadge,
    ...buttonProps
  },
  ref
) {
  return (
    <button
      {...buttonProps}
      ref={ref}
      type={buttonProps.type ?? "button"}
      className={`${baseClassNames} ${
        buttonStyles[variant][colorScheme] ?? ""
      } ${buttonProps.className} ${
        hasBadge ? `${badgeClassName} ${badgeColorClassName[colorScheme]}` : ""
      }`}
    >
      {iconLeft}
      <span className={`${iconLeft ? "ml-2" : ""} ${iconRight ? "mr-2" : ""}`}>
        {children}
      </span>
      {iconRight}
    </button>
  );
});

export default Button;
