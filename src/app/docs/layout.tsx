import { NavBar } from "~/components/navbar";

// eslint-disable-next-line
export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="flex w-full flex-row justify-center px-3">
        <div className="flex max-w-6xl flex-col justify-center p-6">
          {children}
        </div>
      </div>
    </>
  );
}
