import {
  baseClassNames,
  ButtonColorScheme,
  buttonStyles,
  ButtonVariant,
} from "./Button";

export default function ButtonLink({
  variant = "solid",
  colorScheme = "primary",
  href,
  isExternal,
  ...linkProps
}: JSX.IntrinsicElements["a"] & {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  href: string;
  isExternal?: boolean;
}) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...linkProps}
      className={`${baseClassNames} ${
        buttonStyles[variant][colorScheme] ?? ""
      } ${linkProps.className ?? ""}`}
    />
  );
}
