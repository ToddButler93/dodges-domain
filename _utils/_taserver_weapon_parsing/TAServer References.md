local item_propsToPrint = {
    "SpareAmmo",
    "AmmoPerShot",
    "LowAmmoCutoff",
    "Damage",
    "DirectHitMultiplier",
    "EnergyDrain",
    "DamageAgainstArmorMultiplier",
    "DamageAgainstGeneratorMultiplier",
    "DamageAgainstBaseTurretMultiplier",
    "DamageAgainstBaseSensorMultiplier",
    "DamageAgainstGravCycleMultiplier",
    "DamageAgainstBeowulfMultiplier",
    "DamageAgainstShrikeMultiplier",
    "ReloadTime",
    "FireInterval",
    "HoldToFire",
    "CanZoom",
    "ReloadSingle",
    "ReloadApplicationProportion",
    "BurstShotCount",
    "BurstShotRefireTime",
    "SpinupTime",
    "ShotgunShotCount",
    "ShotEnergyCost",
    "ImpactMomentum",
    "SelfImpactMomentumMultiplier",
    "SelfImpactExtraZMomentum",
    "ExplosiveRadius",
    "BulletDamageRange",
    "MaxDamageRangeProportion",
    "MinDamageRangeProportion",
    "MinDamageProportion",
    "DoesImpulseFlag",
    "DoesGibOnKill",
    "GibImpulseRadius",
    "GibStrength",
    "ProjectileSpeed",
    "ProjectileMaxSpeed",
    "CollisionSize",
    "ProjectileInheritance",
    "ProjectileLifespan",
    "ProjectileGravity",
    "ProjectileTerminalVelocity",
    "ProjectileBounceDamping",
    "HitscanRange",
    "FireOffsetX",
    "FireOffsetY",
    "FireOffsetZ",
    "FractalDuration",
    "FractalShardInterval",
    "FractalAscentTime",
    "FractalAscentHeight",
    "FractalShardDistance",
    "FractalShardHeight",
    "FractalShardDamage",
    "FractalShardDamageRadius",
    "MeleeDamageRadius",
    "MeleeConeAngle",
    "Accuracy",
    "AccuracyLossOnShot",
    "AccuracyLossOnJump",
    "AccuracyLossMax",
    "AccuracyCorrectionRate",
    "ShotgunUseGOTYSpread",
    "ThrowDelay",
    "ThrowPullPinTime",
    "StuckDamageMultiplier",
    "StuckMomentumMultiplier",
    "FuseTimer",
    "ExplodeOnContact",
    "ExplodeOnFuse",
    "MustBounceBeforeExplode",
    "PackSustainedEnergyCost",
    "ThrustPackEnergyCost",
    "ThrustPackImpulse",
    "ThrustPackSidewaysImpulse",
    "ThrustPackMinVerticalImpulse",
    "ThrustPackCooldownTime",
    "ThrustPackSpeedRangeStart",
    "ThrustPackSpeedRangeEnd",
    "ThrustPackSpeedCapReduction",
    "ShieldPackEnergyCostPerDamagePoint",
    "JammerPackRange",
    "PackBuffAmount",
    "StealthPackMaxSpeed",
    "DeployableRange",
    "DeployableMaxAllowed",
    "DeployableMinProximity",
    "TurretTimeToAcquireTarget",
    --"TurretCanTargetVehicle",
    "ForcefieldMinDamage",
    "ForcefieldMaxDamage",
    "ForcefieldMinDamageSpeed",
    "ForcefieldMaxDamageSpeed",
    "MineDeployTime",
    "MineMaxAllowed",
    "MineCollisionCylinderRadius",
    "MineCollisionCylinderHeight",
    "ClaymoreDetonationAngle",
    "PrismMineTripDistance",
}

function utils:printItemProps(class, item, propNames)
    for idx, prop in pairs(propNames) do
        local propVal = Items.getProperty(class, item, Items.Properties[prop])
        if (propVal == nil) then
            Logger.debug("||| " .. item .. " | " .. prop .. " = nil")
        else
            Logger.debug("||| " .. item .. " | " .. prop .. " = " .. tostring(propVal))
        end
        
    end
end

utils:printItemProps("Light", "Light Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Dueling Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Stealth Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Light Twinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Blinksfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Bolt Launcher", chicken_item_propsToPrint)
utils:printItemProps("Light", "Light Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Dueling Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Stealth Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Light Twinfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Blinksfusor", chicken_item_propsToPrint)
utils:printItemProps("Light", "Rhino SMG", chicken_item_propsToPrint)
utils:printItemProps("Light", "Arctic Rhino SMG", chicken_item_propsToPrint)
utils:printItemProps("Light", "Light Assault Rifle", chicken_item_propsToPrint)
utils:printItemProps("Light", "SN7 Pistol", chicken_item_propsToPrint)
utils:printItemProps("Light", "Arctic SN7 Pistol", chicken_item_propsToPrint)
utils:printItemProps("Light", "Falcon", chicken_item_propsToPrint)
utils:printItemProps("Light", "Sparrow", chicken_item_propsToPrint)
utils:printItemProps("Light", "Shotgun", chicken_item_propsToPrint)
utils:printItemProps("Light", "Holdout Shotgun", chicken_item_propsToPrint)
utils:printItemProps("Light", "Accurized Shotgun", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Twinfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Spare Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Honorfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Thumper", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Thumper D", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Thumper DX", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Twinfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Spare Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Honorfusor", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Assault Rifle", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Gast Rifle", chicken_item_propsToPrint)
utils:printItemProps("Medium", "TCN4", chicken_item_propsToPrint)
utils:printItemProps("Medium", "TCN4 Rockwind", chicken_item_propsToPrint)
utils:printItemProps("Medium", "NJ4 SMG", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Desert NJ4 SMG", chicken_item_propsToPrint)
utils:printItemProps("Medium", "NJ5 SMG", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Eagle", chicken_item_propsToPrint)
utils:printItemProps("Medium", "Sawed Off Shotgun", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MKD", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MK-X", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Devastator Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Twinfusor", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Bolt Launcher", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor Disk", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Chain Gun", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Chain Cannon", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "X1 LMG", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MKD", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MK-X", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Devastator Spinfusor", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Twinfusor", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor Disk", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "Auto Shotgun", chicken_item_propsToPrint)
utils:printItemProps("Heavy", "The Hammer", chicken_item_propsToPrint)