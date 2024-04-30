import { Card } from "~/components/ui/card";

export default function T3GuideConfig() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="grow p-6 text-center">
          <h1>Tribes 3 Configuration</h1>
        </Card>
        <div className="flex flex-col gap-6">
          <p>For the competitive edge, the following is recommended:</p>
          <ul>
            <li>Disable Motion Blur</li>
            <li>Disable Adaptive FOV</li>
            <li>Set the Screen Shake slider to the lowest value</li>
            <li>Set View Distance to EPIC</li>
          </ul>
          <p>
            If you want a custom crosshair, it is recommended you disable the in
            game crosshair and use an external application like CrosshairX -TODO
            add link
          </p>
        </div>
      </div>
    </>
  );
}
