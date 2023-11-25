import { TypographyStylesProvider } from "@mantine/core";

// eslint-disable-next-line
export default async function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TypographyStylesProvider className=" text-lg">
      {children}
    </TypographyStylesProvider>
  );
}
