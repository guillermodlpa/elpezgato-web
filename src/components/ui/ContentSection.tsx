/**
 * Wrapper of each section of a content page
 */
export default function ContentSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="border-b w-full border-divider py-16">
      {children}
    </section>
  );
}
