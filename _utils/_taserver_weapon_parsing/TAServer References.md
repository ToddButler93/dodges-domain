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

utils:printItemProps("Light", "Light Spinfusor", item_propsToPrint)
utils:printItemProps("Light", "Dueling Spinfusor", item_propsToPrint)
utils:printItemProps("Light", "Stealth Spinfusor", item_propsToPrint)
utils:printItemProps("Light", "Light Twinfusor", item_propsToPrint)
utils:printItemProps("Light", "Blinksfusor", item_propsToPrint)
utils:printItemProps("Light", "Bolt Launcher", item_propsToPrint)
utils:printItemProps("Light", "Light Spinfusor", item_propsToPrint)
utils:printItemProps("Light", "Dueling Spinfusor", item_propsToPrint)
utils:printItemProps("Light", "Stealth Spinfusor", item_propsToPrint)
utils:printItemProps("Light", "Light Twinfusor", item_propsToPrint)
utils:printItemProps("Light", "Blinksfusor", item_propsToPrint)
utils:printItemProps("Light", "Rhino SMG", item_propsToPrint)
utils:printItemProps("Light", "Arctic Rhino SMG", item_propsToPrint)
utils:printItemProps("Light", "Light Assault Rifle", item_propsToPrint)
utils:printItemProps("Light", "SN7 Pistol", item_propsToPrint)
utils:printItemProps("Light", "Arctic SN7 Pistol", item_propsToPrint)
utils:printItemProps("Light", "Falcon", item_propsToPrint)
utils:printItemProps("Light", "Sparrow", item_propsToPrint)
utils:printItemProps("Light", "Shotgun", item_propsToPrint)
utils:printItemProps("Light", "Holdout Shotgun", item_propsToPrint)
utils:printItemProps("Light", "Accurized Shotgun", item_propsToPrint)
utils:printItemProps("Medium", "Spinfusor", item_propsToPrint)
utils:printItemProps("Medium", "Twinfusor", item_propsToPrint)
utils:printItemProps("Medium", "Spare Spinfusor", item_propsToPrint)
utils:printItemProps("Medium", "Honorfusor", item_propsToPrint)
utils:printItemProps("Medium", "Thumper", item_propsToPrint)
utils:printItemProps("Medium", "Thumper D", item_propsToPrint)
utils:printItemProps("Medium", "Thumper DX", item_propsToPrint)
utils:printItemProps("Medium", "Spinfusor", item_propsToPrint)
utils:printItemProps("Medium", "Twinfusor", item_propsToPrint)
utils:printItemProps("Medium", "Spare Spinfusor", item_propsToPrint)
utils:printItemProps("Medium", "Honorfusor", item_propsToPrint)
utils:printItemProps("Medium", "Assault Rifle", item_propsToPrint)
utils:printItemProps("Medium", "Gast Rifle", item_propsToPrint)
utils:printItemProps("Medium", "TCN4", item_propsToPrint)
utils:printItemProps("Medium", "TCN4 Rockwind", item_propsToPrint)
utils:printItemProps("Medium", "NJ4 SMG", item_propsToPrint)
utils:printItemProps("Medium", "Desert NJ4 SMG", item_propsToPrint)
utils:printItemProps("Medium", "NJ5 SMG", item_propsToPrint)
utils:printItemProps("Medium", "Eagle", item_propsToPrint)
utils:printItemProps("Medium", "Sawed Off Shotgun", item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MKD", item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MK-X", item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Spinfusor", item_propsToPrint)
utils:printItemProps("Heavy", "Devastator Spinfusor", item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Twinfusor", item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Bolt Launcher", item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor Disk", item_propsToPrint)
utils:printItemProps("Heavy", "Chain Gun", item_propsToPrint)
utils:printItemProps("Heavy", "Chain Cannon", item_propsToPrint)
utils:printItemProps("Heavy", "X1 LMG", item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MKD", item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor MK-X", item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Spinfusor", item_propsToPrint)
utils:printItemProps("Heavy", "Devastator Spinfusor", item_propsToPrint)
utils:printItemProps("Heavy", "Heavy Twinfusor", item_propsToPrint)
utils:printItemProps("Heavy", "Spinfusor Disk", item_propsToPrint)
utils:printItemProps("Heavy", "Auto Shotgun", item_propsToPrint)
utils:printItemProps("Heavy", "The Hammer", item_propsToPrint)