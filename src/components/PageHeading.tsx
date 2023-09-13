export default function PageHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="text-4xl sm:text-5xl text-center mb-6">{children}</h1>;
}
