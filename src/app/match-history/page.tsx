import { Suspense } from "react";
import MatchHistoryComponent from "~/components/match-history";
import { Card } from "~/components/ui/card";

export default function MatchHistory() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Card className="grow p-6 text-center">
            <h1>Match History</h1>
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
            <MatchHistoryComponent />
          </Suspense>
        </div>
      </div>
    </>
  );
}
