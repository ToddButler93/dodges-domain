
import { Alert } from "~/components/ui/alert";

export default async function Code({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Alert className="bg-zinc-950 text-zinc-100">
        <div className="flex flex-col">{children}</div>
      </Alert>
    </>
  );
}
