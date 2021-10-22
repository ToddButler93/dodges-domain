---
id: game-sensitivity
title: Game Sensitivity
sidebar_label: Sensitivity
sidebar_position: 3
---

# Sensivity Calculation

## Global
- DPI: 400
- CM/360: 34.679382
- Inches/360: 13.6533

## Game Specific Settings
### Semi-competitive Multiplayer Games
- Tribes: MouseSensitivity = 12, bEnableFOVScaling = false
- Payday 2: "camera_sensitivity_x", 0.439454
- Splitgate: Horizontal Sensitivity 7.032, Vertical Sensitivity 7.032
- Midair: Mouse Sens=13.183626
- CS GO: sensitivity "2.996279"
- War Thunder: mouseSens:r=0.53
- Halo MCC: Mouse Sensitivity 3.0
- Halo Infinite: Horizontal Sensitivity Scale 1, Mouse Sensitivity 3.2
- GTA V: (3rd Person) Mouse Look Sensitivity: 6
- Quake Live: set sensitivity "2.996279"
- Battlefield 2042: GstInput.MouseSensitivity 0.042608

### Single Player Games
- Overwatch: Sensitivity 9.99
- Just Cause 3: Camera Sensitivity 4.4
- Cyberpunk 2077: "name": "FPP_MouseX", "value": 6.591813,
- Red Dead Redemption 2: Mouse Look Sensitivity: 6
- Far Cry 6: MouseLookSensitivity="2.99628"
- Mass Effect Legendary

## Tribes Ascend
### Game Engine
$$
Distance (inches) = 65536 / int(DPI * Sensitivity * FOVScale)
$$

:::note
As this game uses an `int` cast, making sure it is a whole number and disabling `FOV scaling,` and using integer sensitivity values assists with minimizing rounding errors.
:::

:::note
Inconsistent/low FPS makes any rounding errors worse.
:::
### FOVScale
if ( bEnableFOVScaling )
{
    FOVScale = GetFOVAngle() * 0.01111; // 0.01111 = 1 / 90.0
}
else
{
    FOVScale = 1.0;
}

### Calculation
### bEnableFOVScaling = false
$$
Distance (inches) = 65536 / int(DPI * Sensitivity * FOVScale)
$$
$$
13.6533 = 65536 / \mathbb{Z}(400 * x * 1) 
$$
$$
Sensitivity = 12
$$

Not 100% accurate to inches per 360 value.
#### Zoomed Sensitivity

#### TribesInput.ini
MouseSensitivity = 12
bEnableFOVScaling = false

### bEnableFOVScaling = true
:::note
Zoom with weapons lowers the FOV to 40, zoom further can lower the FOV towards 20.
:::
:::danger
A sensitivity of approximately 4.501 at 20 will cause severe issues with mouse input. Moving the mouse a count per frame will result in 0 movement due to the integer cast.
:::
#### 120 FOV
$$
Distance (inches) = 65536 / int(DPI * Sensitivity * 120 * 0.01111)
$$
$$
13.6533 = 65536 / \mathbb{Z}(400 * Sensitivity * 120 * 0.01111)
$$
$$
Sensitivity = 9
$$
:::note
Not 100% accurate to inches per 360 value.
:::
#### 40 FOV
$$
Distance (inches) = 65536 / \mathbb{Z}(400 * 9 * 40 * 0.01111)
$$
$$
Distance = 40.98561601
$$
:::caution
Slight integer cast rounding error. (1599.84 gets rounded to 1599)
:::
:::note
Not 100% accurate to inches per 360 value. 
:::
#### 20 FOV
$$
Distance (inches) = 65536 / \mathbb{Z}(400 * 9 * 20 * 0.01111)
$$
$$
Distance = 82.0225281602
$$
:::caution
Slight integer cast rounding error (799.92).
:::
:::note
Not 100% accurate to inches per 360 value.
:::
#### TribesInput.ini
MouseSensitivity = 9
bEnableFOVScaling = true

## Payday 2
SuperBLT is required to load the following mods.

"camera_sensitivity_x", 0.439454

[PD2 Set FOV Sensitivity](https://github.com/Skwuruhl/pd2-set-fov-sensitivity)

This mod lets you set your sensitivity to an exact decimal within the .lua file.

[PD2 ADS Normalization](https://github.com/Skwuruhl/pd2-ads-normalization)

## Mass Effect
Unfortunately no fix for ME2 and ME3.

[ME3Tweaks Mod Manager](https://www.nexusmods.com/masseffectlegendaryedition/mods/2) required to install the mod.

[No Mouse Acceleration for ME1 LE](https://www.nexusmods.com/masseffectlegendaryedition/mods/319?tab=description)
