// eslint-disable-next-line
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full flex-row justify-center">
        <div className="flex max-w-6xl flex-col justify-center p-6">
          {children}
        </div>
      </div>
    </>
  );
}
