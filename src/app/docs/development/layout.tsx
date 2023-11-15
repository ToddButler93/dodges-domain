import { TypographyStylesProvider } from "@mantine/core";

// eslint-disable-next-line
export default async function DevelopmentGuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TypographyStylesProvider className="max-w-3xl pe-10">
      {children}
    </TypographyStylesProvider>
  );
}
