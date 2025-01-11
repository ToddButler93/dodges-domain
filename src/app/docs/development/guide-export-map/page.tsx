import Link from "next/link";
import { Alert } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function GuideExportMap() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Exporting UE3 terrain into an UE5 Landscape</h1>
        </Card>
        <div className="flex flex-col gap-3">
          <h2>Export heightmap from UE3</h2>
          <ul className="list-disc p-3">
            <li>Load map into UDK 2011</li>
            <li>Open Terrain editor</li>
            <li>Select the terrain on the top right you wish to export</li>
            <li>Check “Height Map Only?”</li>
            <li>Set the Class as “G16BMPT3D”</li>
            <li>Select the HeightMap in the bottom list</li>
            <li>Hit Export</li>
            <li>Load exported heightmap (.bmp) into G16ed</li>
            <li>
              Select File, Export, Raw Data, leave settings by default and hit
              Export
            </li>
            <li>Save File, change extension from “.raw” to “.r16”</li>
          </ul>{" "}
          <Alert title="Note" className="bg-teal-800 text-zinc-100">
            <p className="text-start"></p>
            <p className="text-start">T3 Raindance Map reference:</p>
            <ul className="list-disc p-3">
              <li>Raindance Team A Flag Pos: +39346 -10552 +3947</li>
              <li>Raindance Team B Flag Pos: -25755 +10791 +4405</li>
              <li>Raindance Boundary Corner 1: 103676 -70225.52</li>
              <li>Raindance Boundary Corner 2: -88333.97 +76507.84</li>
            </ul>
          </Alert>
        </div>
      </div>
    </>
  );
}
