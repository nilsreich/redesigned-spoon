export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="grow">{children}</div>
    </section>
  );
}
