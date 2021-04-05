---
id: how-to-udk
title: How to use UDK to make Tribes Maps
sidebar_label: Use UDK to make Tribes Maps
---

## Starting from Scratch

This guide is aimed at people who are new to using UDK 2011. 

<span className="red-text">X</span> and <span className="green-text">Y</span> are your horizontal axis and <span className="blue-text">Z</span> axis vertical.

## Controls

Left Mouse button <kbd>LMB</kbd>
Right Mouse button <kbd>RMB</kbd>
Middle Mouse button <kbd>MMB</kbd>

 	| Action | Default Binding |
| ----------- | ----------- |
| Change Camera Angle | <kbd>RMB</kbd> |
| Camera Location | <kbd>RMB</kbd>+<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> | 
| Open Content Browser | <kbd>Ctrl</kbd>+<kbd>⇧ Shift</kbd>+<kbd>F</kbd> |
| Select Actor | <kbd>LMB</kbd> |
| Actor Properties | <kbd>F4</kbd> |
| Use Terrain Tool | <kbd>Ctrl</kbd>+<kbd>RMB</kbd> |
| Adjust Camera Move Speed | <kbd>RMB</kbd>+<kbd>Scroll</kbd> |
| Swap Between Move, Rotate and Scale | <kbd>SpaceBar</kbd> |

[Want controls used outside of this guide?](https://docs.unrealengine.com/udk/Three/EditorButtons.html)


## Step 1 - Create Terrain

Click Tools, click new Terrain... 

![](\img\development\new-terrain.png)

Location is the location of the terrain. For this guide we will leave it default.

Patches is the size of the terrain. For this guide we will put 1024 for both values.

![](\img\development\new-terrain-patches.png)

Hit finish.

Right click the terrain and select Actor Properties <kbd>F4</kbd>. This can be found under View then Actor Properties. 

[What is an actor in UDK?](how-to-udk#glossary)

To confirm a setting, make sure you hit enter after typing/pasting in the value.

- Set Max Tesselation Level to 8
- Set Max Component Size to 14
- Set Draw Scale 3D <span className="red-text">X</span> = 128, <span className="green-text">Y</span> = 128 and <span className="blue-text">Z</span> = 29.01
- Set Location <span className="red-text">X</span> = -65536 and <span className="green-text">Y</span> = -65536
- Set Static Lighting Resolution to 1
- Set Group to "Terrain"

![](\img\development\new-terrain-properties.png)

Note: Setting a group to all added actors will make your life a lot easier later down the track. I group them under Blood Eagle Base, Boundaries, Buildings, Rocks, ect.

## Step 2 - Save Level

Hit File then Save Current Level. Call your map TrCTF-Basic.

The naming convention matters. Tr is always required, CTF refers to the map game Mode and -Basic can be replaced with -WhateverMapNameYouDesire.

## Step 3 - Add Lighting

### Skylight

Now lets add an actor that will light the entire field and not draw shadows.

Open The Content Browser <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>

Under the Actor Classes Tab use the search to find Skylight.

Click <kbd>LMB</kbd> on the Skylight text and drag it into the viewport.

What is a viewport? TODO Add Link

![](\img\development\lighting-actor-skylight.png)

Lost where it went? TODO Add Link

Open Actor Properties <kbd>F4</kbd> for the Skylight you just added. 

- Set Draw Scale to 32
- Set Brightness to 0.5
- Set Group to "World"

![](\img\development\lighting-skylight-properties.png)

If you wish to add an overall tint to your world you can mess around with the Light Color R G B properties.

### Dominant Directional Light

Now lets add an actor that will act as your Sun to light the entire field and generate shadows.

Open The Content Browser <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>

Under the Actor Classes Tab use the search to find DominantDirectionalLight.

Simply drag DominantDirectionalLight to your scene.

[Lost where it went?](how-to-udk#my-things-have-disapeared)

Open Actor Properties <kbd>F4</kbd> for the DominantDirectionalLight you just added. 

- Set Draw Scale to 32
- Set Brightness to 0.5
- Set Group to "World"

![](\img\development\lighting-dominant-direct-properties.png)

To set the direction of the light source you need to adjust the rotation. Use the Rotation Wheel <kbd>Space</kbd> to set the direction of your lightsource. 

If you aren't sure on how to do this you can Set Rotation Pitch to -42.60° in the Actor Properties <kbd>F4</kbd>.

Now that our map is lit we can start adding some TribesAscend Base Assets.

[Save your level](how-to-udk#step-2---save-level).

## Step 4 - Add Base Assets

### Blood Eagle

Under the Actor Classes Tab use the search "BloodEagle" to find Blood Eagle specific Actor Classes.

![](\img\development\actor-class-search.png)

#### Blood Eagle Flag

First lets drag in TrCTFBase_BloodEagle and open our frequent friend Actor Properties <kbd>F4</kbd>.

[Lost where it went?](how-to-udk#my-things-have-disapeared)

- Set Location <span className="red-text">X</span> = 17750, <span className="green-text">Y</span> = 0 and <span className="blue-text">Z</span> = 59 for now. 
- Set Group to "BloodEagle".

#### Blood Eagle Generator

Next lets drag in TrPowerGenerator_BloodEagle.

- Set Location <span className="red-text">X</span> = 18500, <span className="green-text">Y</span> = -300 and <span className="blue-text">Z</span> = 49 for now. 
- Set Group to "BloodEagle".

#### Blood Eagle Radar Station

Next lets drag in TrRadarStation_BloodEagle.

- Set Location <span className="red-text">X</span> = 19000, <span className="green-text">Y</span> = -300 and <span className="blue-text">Z</span> = 0 for now. 
- Set Group to "BloodEagle".

#### Blood Eagle Inventory Station

Next lets drag in TrInventoryStation_BloodEagle.

- Set Location <span className="red-text">X</span> = 18500, <span className="green-text">Y</span> = 300 and <span className="blue-text">Z</span> = 46 for now. 
- Set Group to "BloodEagle".

#### Blood Eagle Repair Station

Next lets drag in TrRepairStation_BloodEagle

- Set Location <span className="red-text">X</span> = 19000, <span className="green-text">Y</span> = 300 and <span className="blue-text">Z</span> = 60 for now. 
- Set Group to "BloodEagle".

#### Blood Eagle Turrets

Next lets drag in TrBaSeturret_BloodEagle

- Set Location <span className="red-text">X</span> = -17000, <span className="green-text">Y</span> = 300 and <span className="blue-text">Z</span> = 0 for now. 
- Set Group to "BloodEagle".

Turret facing the wrong way? Set Yaw to 180.

#### Blood Eagle Vehicle Station

Next lets drag in TrVehicleStation_BloodEagle

- Set Location <span className="red-text">X</span> = 18500, <span className="green-text">Y</span> = -600 and <span className="blue-text">Z</span> = 50 for now. 
- Set Group to "BloodEagle".

We need a vehicle pad for this station. This needs to be linked up.

Next lets drag in TrVehiclePad. You will have to change your ActorClasses search for this as it wont be under BloodEagle.

- Set Location <span className="red-text">X</span> = 19000, <span className="green-text">Y</span> = -1200 and <span className="blue-text">Z</span> = 0 for now. 
- Set Group to "BloodEagle".

We need the name of the vehicle pad actor we just added. This is in the Actor Properties <kbd>F4</kbd> under Object then the value for Name. It should be similar to "TrVehiclePad_0".

![](\img\development\vehiclepad-name.png)

Now that we know this, we need to set our TrVehicleStation_BloodEagle m_Vehicle property to the name of our TrVehiclePad actor.

Select our TrVehicleStation_BloodEagle actor and open Actor Properties <kbd>F4</kbd>.

[Lost where it went?](how-to-udk#my-things-have-disapeared)

- Set m_Vehicle Pad to our TrVehiclePad actors name.

![](\img\development\vehiclestation-set-name.png)

Once you hit enter the value will altar, this is normal.

Now you have setup the assets for Blood Eagle. Now for Diamond Sword!

[Save your level](how-to-udk#step-2---save-level).

![](\img\development\blood-eagle-base.png)

### Diamond Sword

Under the Actor Classes Tab use the search "DiamondSword" to find Diamond Sword specific Actor Classes.

This time we will do grouping a little differently. **Don't** set the group property until you're told!

#### Diamond Sword Flag

First lets drag in TrCTFBase_DiamondSword and open our frequent friend Actor Properties <kbd>F4</kbd>.

[Lost where it went?](how-to-udk#my-things-have-disapeared)

- Set Location <span className="red-text">X</span> = -17750, <span className="green-text">Y</span> = 0 and <span className="blue-text">Z</span> = 59 for now. 

#### Diamond Sword Generator

Next lets drag in TrPowerGenerator_DiamondSword.

- Set Location <span className="red-text">X</span> = -18500, <span className="green-text">Y</span> = 300 and <span className="blue-text">Z</span> = 49 for now. 

#### Diamond Sword Radar Station

Next lets drag in TrRadarStation_DiamondSword.

- Set Location <span className="red-text">X</span> = -19000, <span className="green-text">Y</span> = 300 and <span className="blue-text">Z</span> = 0 for now. 

#### Diamond Sword Inventory Station

Next lets drag in TrInventoryStation_DiamondSword.

- Set Location <span className="red-text">X</span> = -18500, <span className="green-text">Y</span> = -300 and <span className="blue-text">Z</span> = 46 for now. 

#### Diamond Sword Repair Station

Next lets drag in TrRepairStation_DiamondSword

- Set Location <span className="red-text">X</span> = -19000, <span className="green-text">Y</span> = -300 and <span className="blue-text">Z</span> = 160 for now. 

#### Diamond Sword Turrets

Next lets drag in TrBaseTurret_DiamondSword

- Set Location <span className="red-text">X</span> = -17000, <span className="green-text">Y</span> = -300 and <span className="blue-text">Z</span> = 0 for now. 

Turret facing the wrong way? Set Yaw to 180.

#### Diamond Sword Vehicle Station

Next lets drag in TrVehicleStation_DiamondSword

- Set Location <span className="red-text">X</span> = -18500, <span className="green-text">Y</span> = 600 and <span className="blue-text">Z</span> = 50 for now. 

We need a vehicle pad for this station. This needs to be linked up.

Next lets drag in TrVehiclePad. You will have to change your ActorClasses search for this as it wont be under DiamondSword.

- Set Location <span className="red-text">X</span> = -19000, <span className="green-text">Y</span> = 1200 and <span className="blue-text">Z</span> = 0 for now. 
**Set** Group to "DiamondSword".

We need the name of the vehicle pad actor we just added. This is in the Actor Properties <kbd>F4</kbd> under Object then the value for Name. It should be similar to "TrVehiclePad_1".

Now that we know this, we need to set our TrVehicleStation_DiamondSword m_Vehicle property to the name of our TrVehiclePad actor.

Select our TrVehicleStation_DiamondSword actor and open Actor Properties <kbd>F4</kbd>.

[Lost where it went?](how-to-udk#my-things-have-disapeared)

- Set m_Vehicle Pad to our TrVehiclePad actors name.

Once you hit enter to confirm it should look like this.

#### Diamond Sword Grouping

Now we will add the group tag a little differently.

In your Content Browser, go to the Scene Tab. Hit the R Button to refresh the actors in this tab.

![](\img\development\scene-refresh-button.png)

Under Filter Text type DiamondSword.

Underneath you should now see a list of all actors with DiamondSword in their details.

Select the first actor, hold shift and click the last actor.

On the right hand side you should be able to see an actor properties area.

- Set the Group value under Object to DiamondSword.

![](\img\development\properties-multiple-actors.png)

Hit the R button again to refresh the actors and you should see they are all set to DiamondSword. Clear your Filter Text and hit the R Button to refresh before leaving.

[Save your level](how-to-udk#step-2---save-level).

## Step 5 - Add Player Spawns

Back to our Actor Classes search for UTTeamPlayerStart. Drag two of these into your map.

To set the team for your spawn you need to set the TeamNumber property of the UTTeamPlayerStart Actors to 0 or 1.

Blood Eagle is Team 0

The location for this spawn for now will be

- <span className="red-text">X</span> = 19500
- <span className="green-text">Y</span> = 110
- <span className="blue-text">Z</span> = 150

Diamond Sword is Team 1

The location for this spawn for now will be

- <span className="red-text">X</span> = -19500
- <span className="green-text">Y</span> = 110
- <span className="blue-text">Z</span> = 150

Remember to group these to their respective teams.

[Save your level](how-to-udk#step-2---save-level).

## Step 6 - Modify Terrain



[Save your level](how-to-udk#step-2---save-level).

## Step 7 - Add Terrain Texture

[Save your level](how-to-udk#step-2---save-level).

## Step 8 - Add Static Mesh



## Step 9 - Fix Mesh Material(Textures)

[Save your level](how-to-udk#step-2---save-level).

## Step 10 - Add Fog

[Save your level](how-to-udk#step-2---save-level).
## Step 11 - Add Boundaries

<!--TODO Explain how to set WorldInfo KillZ-->

[Save your level](how-to-udk#step-2---save-level).
## FAQ

### Where can I find my actors?

Click View, Browser Windows, Scene. This shows a list of where all your placed actors are in the map. You can sort by Group and use the filter text to find certain items. 

To select the actor in the Viewport simply double click the one you are after.

## Troubleshooting

### My things have disapeared!

You may have just hit <key>W</key>, try hitting W in the Unreal Editor Viewport.

If that doesn't work

Click View, Browser Windows, Groups. On the left column make sure everything is ticked.

## Glossary

Actor

Viewport





