export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="text-3xl sm:text-4xl text-center mb-6">{children}</h1>;
}
