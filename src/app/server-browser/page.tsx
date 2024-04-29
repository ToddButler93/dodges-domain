import { Suspense } from "react";
import ServerBrowserPUG, {
  ServerBrowserCommunity,
} from "~/components/server-browser";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function ServerBrowser() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Card className="grow p-6 pb-3 text-center">
            <h1>PUG Login Server</h1>
          </Card>
          <Suspense
            fallback={
              <div className="mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="shadow-md">
                  <div className="w-[500px] grow rounded-md p-3" />
                </Card>
                <Card className="shadow-md">
                  <div className="w-[500px] grow rounded-md p-3" />
                </Card>
                <Card className="shadow-md">
                  <div className="w-[500px] grow rounded-md p-3" />
                </Card>
              </div>
            }
          >
            <ServerBrowserPUG />
          </Suspense>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <Card className="grow p-6 pb-3 text-center">
            <h1>Community Login Server</h1>
          </Card>

          <Suspense
            fallback={
              <div className="mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="shadow-md">
                  <div className="w-[500px] grow rounded-md p-3" />
                </Card>
                <Card className="shadow-md">
                  <div className="w-[500px] grow rounded-md p-3" />
                </Card>
                <Card className="shadow-md">
                  <div className="w-[500px] grow rounded-md p-3" />
                </Card>
              </div>
            }
          >
            <ServerBrowserCommunity />
          </Suspense>
        </div>
      </div>
    </>
  );
}
