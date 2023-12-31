export default function Container({
  children,
  Component = "div",
  className = "",
  maxWidth = "max-w-5xl",
}: {
  children: React.ReactNode;
  Component?: React.ElementType;
  className?: string;
  maxWidth?:
    | "max-w-xs"
    | "max-w-sm"
    | "max-w-md"
    | "max-w-lg"
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl";
}) {
  return (
    <Component className={`mx-auto ${maxWidth} px-6 md:px-8 py-4 ${className}`}>
      {children}
    </Component>
  );
}
