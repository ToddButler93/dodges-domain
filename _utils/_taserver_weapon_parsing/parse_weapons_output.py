import json
from collections import defaultdict

data = '''||| Light Spinfusor | SpareAmmo = 20
||| Light Spinfusor | AmmoPerShot = 1
||| Light Spinfusor | LowAmmoCutoff = 4
||| Light Spinfusor | Damage = 600.0
||| Light Spinfusor | DirectHitMultiplier = 1.25
||| Light Spinfusor | EnergyDrain = 0.0
||| Light Spinfusor | DamageAgainstArmorMultiplier = 1.0
||| Light Spinfusor | DamageAgainstGeneratorMultiplier = 1.0
||| Light Spinfusor | DamageAgainstBaseTurretMultiplier = 1.0
||| Light Spinfusor | DamageAgainstBaseSensorMultiplier = 1.0
||| Light Spinfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Light Spinfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Light Spinfusor | DamageAgainstShrikeMultiplier = 1.0
||| Light Spinfusor | ReloadTime = 1.25
||| Light Spinfusor | FireInterval = 0.46000000834465
||| Light Spinfusor | HoldToFire = true
||| Light Spinfusor | CanZoom = true
||| Light Spinfusor | ReloadSingle = true
||| Light Spinfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Light Spinfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Light Spinfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Light Spinfusor | SpinupTime = nil
Failed to get property with id 2009
||| Light Spinfusor | ShotgunShotCount = nil
||| Light Spinfusor | ShotEnergyCost = 0
||| Light Spinfusor | ImpactMomentum = 85000.0
||| Light Spinfusor | SelfImpactMomentumMultiplier = 1.5
||| Light Spinfusor | SelfImpactExtraZMomentum = 0.0
||| Light Spinfusor | ExplosiveRadius = 360.0
||| Light Spinfusor | BulletDamageRange = 6000.0
||| Light Spinfusor | MaxDamageRangeProportion = 0.0
||| Light Spinfusor | MinDamageRangeProportion = 1.0
||| Light Spinfusor | MinDamageProportion = 0.20000000298023
||| Light Spinfusor | DoesImpulseFlag = true
||| Light Spinfusor | DoesGibOnKill = false
||| Light Spinfusor | GibImpulseRadius = 100.0
||| Light Spinfusor | GibStrength = 40.0
||| Light Spinfusor | ProjectileSpeed = 3920.0
||| Light Spinfusor | ProjectileMaxSpeed = 8000.0
||| Light Spinfusor | CollisionSize = 15.0
||| Light Spinfusor | ProjectileInheritance = 0.5
||| Light Spinfusor | ProjectileLifespan = 6.0
||| Light Spinfusor | ProjectileGravity = 1.0
||| Light Spinfusor | ProjectileTerminalVelocity = 3500.0
||| Light Spinfusor | ProjectileBounceDamping = 0.55000001192093
||| Light Spinfusor | HitscanRange = 2000.0
||| Light Spinfusor | FireOffsetX = 3.0
||| Light Spinfusor | FireOffsetY = 10.0
||| Light Spinfusor | FireOffsetZ = -7.0
||| Light Spinfusor | FractalDuration = 1.6107225198182e-40
||| Light Spinfusor | FractalShardInterval = 1.4930442773811e-39
||| Light Spinfusor | FractalAscentTime = 6.428540782998e-40
||| Light Spinfusor | FractalAscentHeight = 9.6227934113342e-29
||| Light Spinfusor | FractalShardDistance = 7.0653468571257e-41
||| Light Spinfusor | FractalShardHeight = 9.396314093298e-35
||| Light Spinfusor | FractalShardDamage = 3
||| Light Spinfusor | FractalShardDamageRadius = 0.0
||| Light Spinfusor | MeleeDamageRadius = 0.0
||| Light Spinfusor | MeleeConeAngle = 0.0
||| Light Spinfusor | Accuracy = 1.0
||| Light Spinfusor | AccuracyLossOnShot = 0.0
||| Light Spinfusor | AccuracyLossOnJump = 0.30000001192093
||| Light Spinfusor | AccuracyLossMax = 0.0
||| Light Spinfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Light Spinfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Light Spinfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Light Spinfusor | ThrowPullPinTime = nil
||| Light Spinfusor | StuckDamageMultiplier = 0.0
||| Light Spinfusor | StuckMomentumMultiplier = 0.0
||| Light Spinfusor | FuseTimer = 0.0
||| Light Spinfusor | ExplodeOnContact = false
||| Light Spinfusor | ExplodeOnFuse = false
||| Light Spinfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Light Spinfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Light Spinfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Light Spinfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Light Spinfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Light Spinfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Light Spinfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Light Spinfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Light Spinfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Light Spinfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Light Spinfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Light Spinfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Light Spinfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Light Spinfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Light Spinfusor | DeployableRange = nil
Failed to get property with id 8001
||| Light Spinfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Light Spinfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Light Spinfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Light Spinfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Light Spinfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Light Spinfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Light Spinfusor | ForcefieldMaxDamageSpeed = nil
||| Light Spinfusor | MineDeployTime = 0.0
||| Light Spinfusor | MineMaxAllowed = 0
||| Light Spinfusor | MineCollisionCylinderRadius = 0.0
||| Light Spinfusor | MineCollisionCylinderHeight = 0.0
||| Light Spinfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Light Spinfusor | PrismMineTripDistance = 9.6227934113342e-29
||| Bolt Launcher | SpareAmmo = 22
||| Bolt Launcher | AmmoPerShot = 1
||| Bolt Launcher | LowAmmoCutoff = 5
||| Bolt Launcher | Damage = 580.0
||| Bolt Launcher | DirectHitMultiplier = 1.25
||| Bolt Launcher | EnergyDrain = 0.0
||| Bolt Launcher | DamageAgainstArmorMultiplier = 1.0
||| Bolt Launcher | DamageAgainstGeneratorMultiplier = 1.0
||| Bolt Launcher | DamageAgainstBaseTurretMultiplier = 1.0
||| Bolt Launcher | DamageAgainstBaseSensorMultiplier = 1.0
||| Bolt Launcher | DamageAgainstGravCycleMultiplier = 1.0
||| Bolt Launcher | DamageAgainstBeowulfMultiplier = 1.0
||| Bolt Launcher | DamageAgainstShrikeMultiplier = 1.0
||| Bolt Launcher | ReloadTime = 1.5
||| Bolt Launcher | FireInterval = 0.46000000834465
||| Bolt Launcher | HoldToFire = true
||| Bolt Launcher | CanZoom = true
||| Bolt Launcher | ReloadSingle = false
||| Bolt Launcher | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Bolt Launcher | BurstShotCount = nil
Failed to get property with id 2007
||| Bolt Launcher | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Bolt Launcher | SpinupTime = nil
Failed to get property with id 2009
||| Bolt Launcher | ShotgunShotCount = nil
||| Bolt Launcher | ShotEnergyCost = 0
||| Bolt Launcher | ImpactMomentum = 85000.0
||| Bolt Launcher | SelfImpactMomentumMultiplier = 1.5
||| Bolt Launcher | SelfImpactExtraZMomentum = 0.0
||| Bolt Launcher | ExplosiveRadius = 400.0
||| Bolt Launcher | BulletDamageRange = 6000.0
||| Bolt Launcher | MaxDamageRangeProportion = 0.0
||| Bolt Launcher | MinDamageRangeProportion = 1.0
||| Bolt Launcher | MinDamageProportion = 0.20000000298023
||| Bolt Launcher | DoesImpulseFlag = true
||| Bolt Launcher | DoesGibOnKill = false
||| Bolt Launcher | GibImpulseRadius = 100.0
||| Bolt Launcher | GibStrength = 40.0
||| Bolt Launcher | ProjectileSpeed = 3820.0
||| Bolt Launcher | ProjectileMaxSpeed = 8000.0
||| Bolt Launcher | CollisionSize = 15.0
||| Bolt Launcher | ProjectileInheritance = 0.5
||| Bolt Launcher | ProjectileLifespan = 6.0
||| Bolt Launcher | ProjectileGravity = 0.40000000596046
||| Bolt Launcher | ProjectileTerminalVelocity = 7000.0
||| Bolt Launcher | ProjectileBounceDamping = 0.55000001192093
||| Bolt Launcher | HitscanRange = 2000.0
||| Bolt Launcher | FireOffsetX = 3.0
||| Bolt Launcher | FireOffsetY = 10.0
||| Bolt Launcher | FireOffsetZ = -7.0
||| Bolt Launcher | FractalDuration = 1.603814118389e-40
||| Bolt Launcher | FractalShardInterval = 1.4930442773811e-39
||| Bolt Launcher | FractalAscentTime = 6.428540782998e-40
||| Bolt Launcher | FractalAscentHeight = 5.370378612726e-29
||| Bolt Launcher | FractalShardDistance = 7.0265308896639e-41
||| Bolt Launcher | FractalShardHeight = 9.396314093298e-35
||| Bolt Launcher | FractalShardDamage = 3
||| Bolt Launcher | FractalShardDamageRadius = 0.0
||| Bolt Launcher | MeleeDamageRadius = 0.0
||| Bolt Launcher | MeleeConeAngle = 0.0
||| Bolt Launcher | Accuracy = 1.0
||| Bolt Launcher | AccuracyLossOnShot = 0.0
||| Bolt Launcher | AccuracyLossOnJump = 0.30000001192093
||| Bolt Launcher | AccuracyLossMax = 0.30000001192093
||| Bolt Launcher | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Bolt Launcher | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Bolt Launcher | ThrowDelay = nil
Failed to get property with id 6001
||| Bolt Launcher | ThrowPullPinTime = nil
||| Bolt Launcher | StuckDamageMultiplier = 0.0
||| Bolt Launcher | StuckMomentumMultiplier = 0.0
||| Bolt Launcher | FuseTimer = 0.0
||| Bolt Launcher | ExplodeOnContact = false
||| Bolt Launcher | ExplodeOnFuse = false
||| Bolt Launcher | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Bolt Launcher | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Bolt Launcher | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Bolt Launcher | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Bolt Launcher | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Bolt Launcher | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Bolt Launcher | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Bolt Launcher | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Bolt Launcher | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Bolt Launcher | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Bolt Launcher | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Bolt Launcher | JammerPackRange = nil
Failed to get property with id 7011
||| Bolt Launcher | PackBuffAmount = nil
Failed to get property with id 7012
||| Bolt Launcher | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Bolt Launcher | DeployableRange = nil
Failed to get property with id 8001
||| Bolt Launcher | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Bolt Launcher | DeployableMinProximity = nil
Failed to get property with id 8003
||| Bolt Launcher | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Bolt Launcher | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Bolt Launcher | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Bolt Launcher | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Bolt Launcher | ForcefieldMaxDamageSpeed = nil
||| Bolt Launcher | MineDeployTime = 0.0
||| Bolt Launcher | MineMaxAllowed = 0
||| Bolt Launcher | MineCollisionCylinderRadius = 0.0
||| Bolt Launcher | MineCollisionCylinderHeight = 0.0
||| Bolt Launcher | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Bolt Launcher | PrismMineTripDistance = 5.370378612726e-29
||| Light Twinfusor | SpareAmmo = 40
||| Light Twinfusor | AmmoPerShot = 1
||| Light Twinfusor | LowAmmoCutoff = 1
||| Light Twinfusor | Damage = 275.0
||| Light Twinfusor | DirectHitMultiplier = 1.5
||| Light Twinfusor | EnergyDrain = 0.0
||| Light Twinfusor | DamageAgainstArmorMultiplier = 1.0
||| Light Twinfusor | DamageAgainstGeneratorMultiplier = 1.0
||| Light Twinfusor | DamageAgainstBaseTurretMultiplier = 1.0
||| Light Twinfusor | DamageAgainstBaseSensorMultiplier = 1.0
||| Light Twinfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Light Twinfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Light Twinfusor | DamageAgainstShrikeMultiplier = 1.0
||| Light Twinfusor | ReloadTime = 1.3999999761581
||| Light Twinfusor | FireInterval = 0.34999999403954
||| Light Twinfusor | HoldToFire = true
||| Light Twinfusor | CanZoom = true
||| Light Twinfusor | ReloadSingle = false
||| Light Twinfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Light Twinfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Light Twinfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Light Twinfusor | SpinupTime = nil
Failed to get property with id 2009
||| Light Twinfusor | ShotgunShotCount = nil
||| Light Twinfusor | ShotEnergyCost = 0
||| Light Twinfusor | ImpactMomentum = 42500.0
||| Light Twinfusor | SelfImpactMomentumMultiplier = 1.5
||| Light Twinfusor | SelfImpactExtraZMomentum = 22500.0
||| Light Twinfusor | ExplosiveRadius = 300.0
||| Light Twinfusor | BulletDamageRange = 6000.0
||| Light Twinfusor | MaxDamageRangeProportion = 0.0
||| Light Twinfusor | MinDamageRangeProportion = 1.0
||| Light Twinfusor | MinDamageProportion = 0.20000000298023
||| Light Twinfusor | DoesImpulseFlag = true
||| Light Twinfusor | DoesGibOnKill = false
||| Light Twinfusor | GibImpulseRadius = 100.0
||| Light Twinfusor | GibStrength = 40.0
||| Light Twinfusor | ProjectileSpeed = 3920.0
||| Light Twinfusor | ProjectileMaxSpeed = 8000.0
||| Light Twinfusor | CollisionSize = 15.0
||| Light Twinfusor | ProjectileInheritance = 0.5
||| Light Twinfusor | ProjectileLifespan = 6.0
||| Light Twinfusor | ProjectileGravity = 1.0
||| Light Twinfusor | ProjectileTerminalVelocity = 3500.0
||| Light Twinfusor | ProjectileBounceDamping = 0.55000001192093
||| Light Twinfusor | HitscanRange = 2000.0
||| Light Twinfusor | FireOffsetX = 3.0
||| Light Twinfusor | FireOffsetY = 10.0
||| Light Twinfusor | FireOffsetZ = -7.0
||| Light Twinfusor | FractalDuration = 1.611437182035e-40
||| Light Twinfusor | FractalShardInterval = 1.4930442773811e-39
||| Light Twinfusor | FractalAscentTime = 6.428540782998e-40
||| Light Twinfusor | FractalAscentHeight = 9.8696591116057e-29
||| Light Twinfusor | FractalShardDistance = 7.0688501032865e-41
||| Light Twinfusor | FractalShardHeight = 9.396314093298e-35
||| Light Twinfusor | FractalShardDamage = 3
||| Light Twinfusor | FractalShardDamageRadius = 0.0
||| Light Twinfusor | MeleeDamageRadius = 0.0
||| Light Twinfusor | MeleeConeAngle = 0.0
||| Light Twinfusor | Accuracy = 1.0
||| Light Twinfusor | AccuracyLossOnShot = 0.0
||| Light Twinfusor | AccuracyLossOnJump = 0.30000001192093
||| Light Twinfusor | AccuracyLossMax = 0.0
||| Light Twinfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Light Twinfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Light Twinfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Light Twinfusor | ThrowPullPinTime = nil
||| Light Twinfusor | StuckDamageMultiplier = 0.0
||| Light Twinfusor | StuckMomentumMultiplier = 0.0
||| Light Twinfusor | FuseTimer = 0.0
||| Light Twinfusor | ExplodeOnContact = false
||| Light Twinfusor | ExplodeOnFuse = false
||| Light Twinfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Light Twinfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Light Twinfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Light Twinfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Light Twinfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Light Twinfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Light Twinfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Light Twinfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Light Twinfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Light Twinfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Light Twinfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Light Twinfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Light Twinfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Light Twinfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Light Twinfusor | DeployableRange = nil
Failed to get property with id 8001
||| Light Twinfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Light Twinfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Light Twinfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Light Twinfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Light Twinfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Light Twinfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Light Twinfusor | ForcefieldMaxDamageSpeed = nil
||| Light Twinfusor | MineDeployTime = 0.0
||| Light Twinfusor | MineMaxAllowed = 0
||| Light Twinfusor | MineCollisionCylinderRadius = 0.0
||| Light Twinfusor | MineCollisionCylinderHeight = 0.0
||| Light Twinfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Light Twinfusor | PrismMineTripDistance = 9.8696591116057e-29
||| Blinksfusor | SpareAmmo = 20
||| Blinksfusor | AmmoPerShot = 1
||| Blinksfusor | LowAmmoCutoff = 4
||| Blinksfusor | Damage = 600.0
||| Blinksfusor | DirectHitMultiplier = 1.25
||| Blinksfusor | EnergyDrain = 0.0
||| Blinksfusor | DamageAgainstArmorMultiplier = 1.0
||| Blinksfusor | DamageAgainstGeneratorMultiplier = 1.0
||| Blinksfusor | DamageAgainstBaseTurretMultiplier = 1.0
||| Blinksfusor | DamageAgainstBaseSensorMultiplier = 1.0
||| Blinksfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Blinksfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Blinksfusor | DamageAgainstShrikeMultiplier = 1.0
||| Blinksfusor | ReloadTime = 1.25
||| Blinksfusor | FireInterval = 0.46000000834465
||| Blinksfusor | HoldToFire = true
||| Blinksfusor | CanZoom = true
||| Blinksfusor | ReloadSingle = true
||| Blinksfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Blinksfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Blinksfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Blinksfusor | SpinupTime = nil
Failed to get property with id 2009
||| Blinksfusor | ShotgunShotCount = nil
||| Blinksfusor | ShotEnergyCost = 0
||| Blinksfusor | ImpactMomentum = 85000.0
||| Blinksfusor | SelfImpactMomentumMultiplier = 1.5
||| Blinksfusor | SelfImpactExtraZMomentum = 0.0
||| Blinksfusor | ExplosiveRadius = 360.0
||| Blinksfusor | BulletDamageRange = 6000.0
||| Blinksfusor | MaxDamageRangeProportion = 0.0
||| Blinksfusor | MinDamageRangeProportion = 1.0
||| Blinksfusor | MinDamageProportion = 0.20000000298023
||| Blinksfusor | DoesImpulseFlag = true
||| Blinksfusor | DoesGibOnKill = false
||| Blinksfusor | GibImpulseRadius = 100.0
||| Blinksfusor | GibStrength = 40.0
||| Blinksfusor | ProjectileSpeed = 3920.0
||| Blinksfusor | ProjectileMaxSpeed = 10000.0
||| Blinksfusor | CollisionSize = 15.0
||| Blinksfusor | ProjectileInheritance = 1.0
||| Blinksfusor | ProjectileLifespan = 6.0
||| Blinksfusor | ProjectileGravity = 1.0
||| Blinksfusor | ProjectileTerminalVelocity = 3500.0
||| Blinksfusor | ProjectileBounceDamping = 0.55000001192093
||| Blinksfusor | HitscanRange = 2000.0
||| Blinksfusor | FireOffsetX = 3.0
||| Blinksfusor | FireOffsetY = 10.0
||| Blinksfusor | FireOffsetZ = -7.0
||| Blinksfusor | FractalDuration = 1.610806597726e-40
||| Blinksfusor | FractalShardInterval = 1.4930442773811e-39
||| Blinksfusor | FractalAscentTime = 6.428540782998e-40
||| Blinksfusor | FractalAscentHeight = 1.4276168020385e-21
||| Blinksfusor | FractalShardDistance = 7.065767246665e-41
||| Blinksfusor | FractalShardHeight = 9.396314093298e-35
||| Blinksfusor | FractalShardDamage = 3
||| Blinksfusor | FractalShardDamageRadius = 0.0
||| Blinksfusor | MeleeDamageRadius = 0.0
||| Blinksfusor | MeleeConeAngle = 0.0
||| Blinksfusor | Accuracy = 1.0
||| Blinksfusor | AccuracyLossOnShot = 0.0
||| Blinksfusor | AccuracyLossOnJump = 0.30000001192093
||| Blinksfusor | AccuracyLossMax = 0.0
||| Blinksfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Blinksfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Blinksfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Blinksfusor | ThrowPullPinTime = nil
||| Blinksfusor | StuckDamageMultiplier = 0.0
||| Blinksfusor | StuckMomentumMultiplier = 0.0
||| Blinksfusor | FuseTimer = 0.0
||| Blinksfusor | ExplodeOnContact = false
||| Blinksfusor | ExplodeOnFuse = false
||| Blinksfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Blinksfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Blinksfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Blinksfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Blinksfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Blinksfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Blinksfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Blinksfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Blinksfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Blinksfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Blinksfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Blinksfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Blinksfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Blinksfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Blinksfusor | DeployableRange = nil
Failed to get property with id 8001
||| Blinksfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Blinksfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Blinksfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Blinksfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Blinksfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Blinksfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Blinksfusor | ForcefieldMaxDamageSpeed = nil
||| Blinksfusor | MineDeployTime = 0.0
||| Blinksfusor | MineMaxAllowed = 0
||| Blinksfusor | MineCollisionCylinderRadius = 0.0
||| Blinksfusor | MineCollisionCylinderHeight = 0.0
||| Blinksfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Blinksfusor | PrismMineTripDistance = 1.4276168020385e-21
||| Jackal | SpareAmmo = 30
||| Jackal | AmmoPerShot = 1
||| Jackal | LowAmmoCutoff = 2
||| Jackal | Damage = 350.0
||| Jackal | DirectHitMultiplier = 1.0
||| Jackal | EnergyDrain = 0.0
||| Jackal | DamageAgainstArmorMultiplier = 1.0
||| Jackal | DamageAgainstGeneratorMultiplier = 2.0
||| Jackal | DamageAgainstBaseTurretMultiplier = 2.0
||| Jackal | DamageAgainstBaseSensorMultiplier = 2.0
||| Jackal | DamageAgainstGravCycleMultiplier = 1.5
||| Jackal | DamageAgainstBeowulfMultiplier = 1.5
||| Jackal | DamageAgainstShrikeMultiplier = 1.5
||| Jackal | ReloadTime = 1.7999999523163
||| Jackal | FireInterval = 0.25
||| Jackal | HoldToFire = true
||| Jackal | CanZoom = true
||| Jackal | ReloadSingle = false
||| Jackal | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Jackal | BurstShotCount = nil
Failed to get property with id 2007
||| Jackal | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Jackal | SpinupTime = nil
Failed to get property with id 2009
||| Jackal | ShotgunShotCount = nil
||| Jackal | ShotEnergyCost = 0
||| Jackal | ImpactMomentum = 20000.0
||| Jackal | SelfImpactMomentumMultiplier = 1.5
||| Jackal | SelfImpactExtraZMomentum = 0.0
||| Jackal | ExplosiveRadius = 400.0
||| Jackal | BulletDamageRange = 6000.0
||| Jackal | MaxDamageRangeProportion = 0.0
||| Jackal | MinDamageRangeProportion = 1.0
||| Jackal | MinDamageProportion = 0.40000000596046
||| Jackal | DoesImpulseFlag = true
||| Jackal | DoesGibOnKill = false
||| Jackal | GibImpulseRadius = 100.0
||| Jackal | GibStrength = 40.0
||| Jackal | ProjectileSpeed = 3820.0
||| Jackal | ProjectileMaxSpeed = 8000.0
||| Jackal | CollisionSize = 20.0
||| Jackal | ProjectileInheritance = 0.20000000298023
||| Jackal | ProjectileLifespan = 0.0
||| Jackal | ProjectileGravity = 0.40000000596046
||| Jackal | ProjectileTerminalVelocity = 8000.0
||| Jackal | ProjectileBounceDamping = 0.55000001192093
||| Jackal | HitscanRange = 2000.0
||| Jackal | FireOffsetX = 3.0
||| Jackal | FireOffsetY = 10.0
||| Jackal | FireOffsetZ = -7.0
||| Jackal | FractalDuration = 0.0
||| Jackal | FractalShardInterval = 1.8727241313331e-34
||| Jackal | FractalAscentTime = 3.6001716599222e-28
||| Jackal | FractalAscentHeight = 0.0
||| Jackal | FractalShardDistance = 0.0
||| Jackal | FractalShardHeight = 0.0
||| Jackal | FractalShardDamage = 0
||| Jackal | FractalShardDamageRadius = 0.0
||| Jackal | MeleeDamageRadius = 0.0
||| Jackal | MeleeConeAngle = 0.0
||| Jackal | Accuracy = 1.0
||| Jackal | AccuracyLossOnShot = 0.0
||| Jackal | AccuracyLossOnJump = 0.30000001192093
||| Jackal | AccuracyLossMax = 0.30000001192093
||| Jackal | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Jackal | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Jackal | ThrowDelay = nil
Failed to get property with id 6001
||| Jackal | ThrowPullPinTime = nil
||| Jackal | StuckDamageMultiplier = 1.25
||| Jackal | StuckMomentumMultiplier = 1.0
||| Jackal | FuseTimer = 0.0
||| Jackal | ExplodeOnContact = false
||| Jackal | ExplodeOnFuse = false
||| Jackal | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Jackal | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Jackal | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Jackal | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Jackal | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Jackal | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Jackal | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Jackal | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Jackal | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Jackal | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Jackal | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Jackal | JammerPackRange = nil
Failed to get property with id 7011
||| Jackal | PackBuffAmount = nil
Failed to get property with id 7012
||| Jackal | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Jackal | DeployableRange = nil
Failed to get property with id 8001
||| Jackal | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Jackal | DeployableMinProximity = nil
Failed to get property with id 8003
||| Jackal | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Jackal | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Jackal | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Jackal | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Jackal | ForcefieldMaxDamageSpeed = nil
||| Jackal | MineDeployTime = 0.0
||| Jackal | MineMaxAllowed = 0
||| Jackal | MineCollisionCylinderRadius = 0.0
||| Jackal | MineCollisionCylinderHeight = 0.0
||| Jackal | ClaymoreDetonationAngle = 1.8727241313331e-34
||| Jackal | PrismMineTripDistance = 0.0
||| Light Grenade Launcher | SpareAmmo = 32
||| Light Grenade Launcher | AmmoPerShot = 1
||| Light Grenade Launcher | LowAmmoCutoff = 1
||| Light Grenade Launcher | Damage = 450.0
||| Light Grenade Launcher | DirectHitMultiplier = 1.0
||| Light Grenade Launcher | EnergyDrain = 0.0
||| Light Grenade Launcher | DamageAgainstArmorMultiplier = 1.0
||| Light Grenade Launcher | DamageAgainstGeneratorMultiplier = 2.0
||| Light Grenade Launcher | DamageAgainstBaseTurretMultiplier = 2.0
||| Light Grenade Launcher | DamageAgainstBaseSensorMultiplier = 2.0
||| Light Grenade Launcher | DamageAgainstGravCycleMultiplier = 1.25
||| Light Grenade Launcher | DamageAgainstBeowulfMultiplier = 1.25
||| Light Grenade Launcher | DamageAgainstShrikeMultiplier = 1.25
||| Light Grenade Launcher | ReloadTime = 1.7999999523163
||| Light Grenade Launcher | FireInterval = 0.60000002384186
||| Light Grenade Launcher | HoldToFire = true
||| Light Grenade Launcher | CanZoom = true
||| Light Grenade Launcher | ReloadSingle = false
||| Light Grenade Launcher | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Light Grenade Launcher | BurstShotCount = nil
Failed to get property with id 2007
||| Light Grenade Launcher | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Light Grenade Launcher | SpinupTime = nil
Failed to get property with id 2009
||| Light Grenade Launcher | ShotgunShotCount = nil
||| Light Grenade Launcher | ShotEnergyCost = 0
||| Light Grenade Launcher | ImpactMomentum = 68000.0
||| Light Grenade Launcher | SelfImpactMomentumMultiplier = 1.5
||| Light Grenade Launcher | SelfImpactExtraZMomentum = 0.0
||| Light Grenade Launcher | ExplosiveRadius = 500.0
||| Light Grenade Launcher | BulletDamageRange = 6000.0
||| Light Grenade Launcher | MaxDamageRangeProportion = 0.0
||| Light Grenade Launcher | MinDamageRangeProportion = 1.0
||| Light Grenade Launcher | MinDamageProportion = 0.40000000596046
||| Light Grenade Launcher | DoesImpulseFlag = true
||| Light Grenade Launcher | DoesGibOnKill = false
||| Light Grenade Launcher | GibImpulseRadius = 100.0
||| Light Grenade Launcher | GibStrength = 40.0
||| Light Grenade Launcher | ProjectileSpeed = 2700.0
||| Light Grenade Launcher | ProjectileMaxSpeed = 7000.0
||| Light Grenade Launcher | CollisionSize = 20.0
||| Light Grenade Launcher | ProjectileInheritance = 1.0
||| Light Grenade Launcher | ProjectileLifespan = 8.0
||| Light Grenade Launcher | ProjectileGravity = 0.80000001192093
||| Light Grenade Launcher | ProjectileTerminalVelocity = 7000.0
||| Light Grenade Launcher | ProjectileBounceDamping = 0.75
||| Light Grenade Launcher | HitscanRange = 2000.0
||| Light Grenade Launcher | FireOffsetX = 3.0
||| Light Grenade Launcher | FireOffsetY = 10.0
||| Light Grenade Launcher | FireOffsetZ = -7.0
||| Light Grenade Launcher | FractalDuration = 1.6079339358742e-40
||| Light Grenade Launcher | FractalShardInterval = 1.4930442773811e-39
||| Light Grenade Launcher | FractalAscentTime = 6.428540782998e-40
||| Light Grenade Launcher | FractalAscentHeight = 1.6706592681128e-21
||| Light Grenade Launcher | FractalShardDistance = 7.0504930934039e-41
||| Light Grenade Launcher | FractalShardHeight = 9.396314093298e-35
||| Light Grenade Launcher | FractalShardDamage = 3
||| Light Grenade Launcher | FractalShardDamageRadius = 0.0
||| Light Grenade Launcher | MeleeDamageRadius = 0.0
||| Light Grenade Launcher | MeleeConeAngle = 0.0
||| Light Grenade Launcher | Accuracy = 1.0
||| Light Grenade Launcher | AccuracyLossOnShot = 0.0
||| Light Grenade Launcher | AccuracyLossOnJump = 0.30000001192093
||| Light Grenade Launcher | AccuracyLossMax = 0.0
||| Light Grenade Launcher | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Light Grenade Launcher | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Light Grenade Launcher | ThrowDelay = nil
Failed to get property with id 6001
||| Light Grenade Launcher | ThrowPullPinTime = nil
||| Light Grenade Launcher | StuckDamageMultiplier = 1.0
||| Light Grenade Launcher | StuckMomentumMultiplier = 1.0
||| Light Grenade Launcher | FuseTimer = 1.0
||| Light Grenade Launcher | ExplodeOnContact = true
||| Light Grenade Launcher | ExplodeOnFuse = true
||| Light Grenade Launcher | MustBounceBeforeExplode = true
Failed to get property with id 7000
||| Light Grenade Launcher | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Light Grenade Launcher | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Light Grenade Launcher | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Light Grenade Launcher | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Light Grenade Launcher | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Light Grenade Launcher | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Light Grenade Launcher | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Light Grenade Launcher | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Light Grenade Launcher | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Light Grenade Launcher | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Light Grenade Launcher | JammerPackRange = nil
Failed to get property with id 7011
||| Light Grenade Launcher | PackBuffAmount = nil
Failed to get property with id 7012
||| Light Grenade Launcher | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Light Grenade Launcher | DeployableRange = nil
Failed to get property with id 8001
||| Light Grenade Launcher | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Light Grenade Launcher | DeployableMinProximity = nil
Failed to get property with id 8003
||| Light Grenade Launcher | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Light Grenade Launcher | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Light Grenade Launcher | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Light Grenade Launcher | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Light Grenade Launcher | ForcefieldMaxDamageSpeed = nil
||| Light Grenade Launcher | MineDeployTime = 0.0
||| Light Grenade Launcher | MineMaxAllowed = 0
||| Light Grenade Launcher | MineCollisionCylinderRadius = 0.0
||| Light Grenade Launcher | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Light Grenade Launcher | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Light Grenade Launcher | PrismMineTripDistance = 1.6706592681128e-21
||| Phase Rifle | SpareAmmo = 24
||| Phase Rifle | AmmoPerShot = 1
||| Phase Rifle | LowAmmoCutoff = 1
||| Phase Rifle | Damage = 0.0
Failed to get property with id 3002
||| Phase Rifle | DirectHitMultiplier = nil
||| Phase Rifle | EnergyDrain = 0.0
||| Phase Rifle | DamageAgainstArmorMultiplier = 1.0
||| Phase Rifle | DamageAgainstGeneratorMultiplier = 0.5
||| Phase Rifle | DamageAgainstBaseTurretMultiplier = 0.5
||| Phase Rifle | DamageAgainstBaseSensorMultiplier = 0.5
||| Phase Rifle | DamageAgainstGravCycleMultiplier = 0.5
||| Phase Rifle | DamageAgainstBeowulfMultiplier = 0.5
||| Phase Rifle | DamageAgainstShrikeMultiplier = 0.5
||| Phase Rifle | ReloadTime = 2.0
||| Phase Rifle | FireInterval = 1.5
||| Phase Rifle | HoldToFire = false
||| Phase Rifle | CanZoom = true
||| Phase Rifle | ReloadSingle = false
||| Phase Rifle | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Phase Rifle | BurstShotCount = nil
Failed to get property with id 2007
||| Phase Rifle | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Phase Rifle | SpinupTime = nil
Failed to get property with id 2009
||| Phase Rifle | ShotgunShotCount = nil
||| Phase Rifle | ShotEnergyCost = 0
||| Phase Rifle | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Phase Rifle | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Phase Rifle | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Phase Rifle | ExplosiveRadius = nil
||| Phase Rifle | BulletDamageRange = 6000.0
||| Phase Rifle | MaxDamageRangeProportion = 0.0
||| Phase Rifle | MinDamageRangeProportion = 1.0
||| Phase Rifle | MinDamageProportion = 1.0
||| Phase Rifle | DoesImpulseFlag = false
||| Phase Rifle | DoesGibOnKill = false
||| Phase Rifle | GibImpulseRadius = 100.0
||| Phase Rifle | GibStrength = 40.0
Failed to get property with id 4000
||| Phase Rifle | ProjectileSpeed = nil
Failed to get property with id 4001
||| Phase Rifle | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Phase Rifle | CollisionSize = nil
Failed to get property with id 4003
||| Phase Rifle | ProjectileInheritance = nil
Failed to get property with id 4004
||| Phase Rifle | ProjectileLifespan = nil
Failed to get property with id 4005
||| Phase Rifle | ProjectileGravity = nil
Failed to get property with id 4006
||| Phase Rifle | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Phase Rifle | ProjectileBounceDamping = nil
||| Phase Rifle | HitscanRange = 100000000.0
||| Phase Rifle | FireOffsetX = 3.0
||| Phase Rifle | FireOffsetY = 10.0
||| Phase Rifle | FireOffsetZ = -7.0
Failed to get property with id 3030
||| Phase Rifle | FractalDuration = nil
Failed to get property with id 3031
||| Phase Rifle | FractalShardInterval = nil
Failed to get property with id 3032
||| Phase Rifle | FractalAscentTime = nil
Failed to get property with id 3033
||| Phase Rifle | FractalAscentHeight = nil
Failed to get property with id 3034
||| Phase Rifle | FractalShardDistance = nil
Failed to get property with id 3035
||| Phase Rifle | FractalShardHeight = nil
Failed to get property with id 3036
||| Phase Rifle | FractalShardDamage = nil
Failed to get property with id 3037
||| Phase Rifle | FractalShardDamageRadius = nil
||| Phase Rifle | MeleeDamageRadius = 0.0
||| Phase Rifle | MeleeConeAngle = 0.0
||| Phase Rifle | Accuracy = 1.0
||| Phase Rifle | AccuracyLossOnShot = 0.050000000745058
||| Phase Rifle | AccuracyLossOnJump = 0.30000001192093
||| Phase Rifle | AccuracyLossMax = 0.30000001192093
||| Phase Rifle | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Phase Rifle | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Phase Rifle | ThrowDelay = nil
Failed to get property with id 6001
||| Phase Rifle | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Phase Rifle | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Phase Rifle | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Phase Rifle | FuseTimer = nil
Failed to get property with id 6005
||| Phase Rifle | ExplodeOnContact = nil
Failed to get property with id 6006
||| Phase Rifle | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Phase Rifle | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Phase Rifle | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Phase Rifle | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Phase Rifle | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Phase Rifle | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Phase Rifle | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Phase Rifle | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Phase Rifle | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Phase Rifle | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Phase Rifle | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Phase Rifle | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Phase Rifle | JammerPackRange = nil
Failed to get property with id 7011
||| Phase Rifle | PackBuffAmount = nil
Failed to get property with id 7012
||| Phase Rifle | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Phase Rifle | DeployableRange = nil
Failed to get property with id 8001
||| Phase Rifle | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Phase Rifle | DeployableMinProximity = nil
Failed to get property with id 8003
||| Phase Rifle | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Phase Rifle | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Phase Rifle | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Phase Rifle | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Phase Rifle | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Phase Rifle | MineDeployTime = nil
Failed to get property with id 9001
||| Phase Rifle | MineMaxAllowed = nil
Failed to get property with id 9002
||| Phase Rifle | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Phase Rifle | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Phase Rifle | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Phase Rifle | PrismMineTripDistance = nil
||| BXT1 Rifle | SpareAmmo = 24
||| BXT1 Rifle | AmmoPerShot = 1
||| BXT1 Rifle | LowAmmoCutoff = 1
||| BXT1 Rifle | Damage = 250.0
Failed to get property with id 3002
||| BXT1 Rifle | DirectHitMultiplier = nil
||| BXT1 Rifle | EnergyDrain = 0.0
||| BXT1 Rifle | DamageAgainstArmorMultiplier = 1.0
||| BXT1 Rifle | DamageAgainstGeneratorMultiplier = 0.5
||| BXT1 Rifle | DamageAgainstBaseTurretMultiplier = 0.5
||| BXT1 Rifle | DamageAgainstBaseSensorMultiplier = 0.5
||| BXT1 Rifle | DamageAgainstGravCycleMultiplier = 0.5
||| BXT1 Rifle | DamageAgainstBeowulfMultiplier = 0.5
||| BXT1 Rifle | DamageAgainstShrikeMultiplier = 0.5
||| BXT1 Rifle | ReloadTime = 2.0
||| BXT1 Rifle | FireInterval = 1.25
||| BXT1 Rifle | HoldToFire = false
||| BXT1 Rifle | CanZoom = true
||| BXT1 Rifle | ReloadSingle = false
||| BXT1 Rifle | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| BXT1 Rifle | BurstShotCount = nil
Failed to get property with id 2007
||| BXT1 Rifle | BurstShotRefireTime = nil
Failed to get property with id 2008
||| BXT1 Rifle | SpinupTime = nil
Failed to get property with id 2009
||| BXT1 Rifle | ShotgunShotCount = nil
||| BXT1 Rifle | ShotEnergyCost = 0
||| BXT1 Rifle | ImpactMomentum = 0.0
Failed to get property with id 3004
||| BXT1 Rifle | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| BXT1 Rifle | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| BXT1 Rifle | ExplosiveRadius = nil
||| BXT1 Rifle | BulletDamageRange = 20000.0
||| BXT1 Rifle | MaxDamageRangeProportion = 0.10000000149012
||| BXT1 Rifle | MinDamageRangeProportion = 1.0
||| BXT1 Rifle | MinDamageProportion = 0.40000000596046
||| BXT1 Rifle | DoesImpulseFlag = false
||| BXT1 Rifle | DoesGibOnKill = false
||| BXT1 Rifle | GibImpulseRadius = 100.0
||| BXT1 Rifle | GibStrength = 40.0
Failed to get property with id 4000
||| BXT1 Rifle | ProjectileSpeed = nil
Failed to get property with id 4001
||| BXT1 Rifle | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| BXT1 Rifle | CollisionSize = nil
Failed to get property with id 4003
||| BXT1 Rifle | ProjectileInheritance = nil
Failed to get property with id 4004
||| BXT1 Rifle | ProjectileLifespan = nil
Failed to get property with id 4005
||| BXT1 Rifle | ProjectileGravity = nil
Failed to get property with id 4006
||| BXT1 Rifle | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| BXT1 Rifle | ProjectileBounceDamping = nil
||| BXT1 Rifle | HitscanRange = 20000.0
||| BXT1 Rifle | FireOffsetX = 3.0
||| BXT1 Rifle | FireOffsetY = 10.0
||| BXT1 Rifle | FireOffsetZ = -7.0
Failed to get property with id 3030
||| BXT1 Rifle | FractalDuration = nil
Failed to get property with id 3031
||| BXT1 Rifle | FractalShardInterval = nil
Failed to get property with id 3032
||| BXT1 Rifle | FractalAscentTime = nil
Failed to get property with id 3033
||| BXT1 Rifle | FractalAscentHeight = nil
Failed to get property with id 3034
||| BXT1 Rifle | FractalShardDistance = nil
Failed to get property with id 3035
||| BXT1 Rifle | FractalShardHeight = nil
Failed to get property with id 3036
||| BXT1 Rifle | FractalShardDamage = nil
Failed to get property with id 3037
||| BXT1 Rifle | FractalShardDamageRadius = nil
||| BXT1 Rifle | MeleeDamageRadius = 0.0
||| BXT1 Rifle | MeleeConeAngle = 0.0
||| BXT1 Rifle | Accuracy = 1.0
||| BXT1 Rifle | AccuracyLossOnShot = 0.050000000745058
||| BXT1 Rifle | AccuracyLossOnJump = 0.30000001192093
||| BXT1 Rifle | AccuracyLossMax = 0.30000001192093
||| BXT1 Rifle | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| BXT1 Rifle | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| BXT1 Rifle | ThrowDelay = nil
Failed to get property with id 6001
||| BXT1 Rifle | ThrowPullPinTime = nil
Failed to get property with id 6002
||| BXT1 Rifle | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| BXT1 Rifle | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| BXT1 Rifle | FuseTimer = nil
Failed to get property with id 6005
||| BXT1 Rifle | ExplodeOnContact = nil
Failed to get property with id 6006
||| BXT1 Rifle | ExplodeOnFuse = nil
Failed to get property with id 6007
||| BXT1 Rifle | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| BXT1 Rifle | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| BXT1 Rifle | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| BXT1 Rifle | ThrustPackImpulse = nil
Failed to get property with id 7003
||| BXT1 Rifle | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| BXT1 Rifle | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| BXT1 Rifle | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| BXT1 Rifle | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| BXT1 Rifle | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| BXT1 Rifle | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| BXT1 Rifle | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| BXT1 Rifle | JammerPackRange = nil
Failed to get property with id 7011
||| BXT1 Rifle | PackBuffAmount = nil
Failed to get property with id 7012
||| BXT1 Rifle | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| BXT1 Rifle | DeployableRange = nil
Failed to get property with id 8001
||| BXT1 Rifle | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| BXT1 Rifle | DeployableMinProximity = nil
Failed to get property with id 8003
||| BXT1 Rifle | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| BXT1 Rifle | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| BXT1 Rifle | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| BXT1 Rifle | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| BXT1 Rifle | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| BXT1 Rifle | MineDeployTime = nil
Failed to get property with id 9001
||| BXT1 Rifle | MineMaxAllowed = nil
Failed to get property with id 9002
||| BXT1 Rifle | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| BXT1 Rifle | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| BXT1 Rifle | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| BXT1 Rifle | PrismMineTripDistance = nil
||| Falcon | SpareAmmo = 240
||| Falcon | AmmoPerShot = 1
||| Falcon | LowAmmoCutoff = 0
||| Falcon | Damage = 60.0
||| Falcon | DirectHitMultiplier = 1.0
||| Falcon | EnergyDrain = 0.0
||| Falcon | DamageAgainstArmorMultiplier = 0.5
||| Falcon | DamageAgainstGeneratorMultiplier = 1.0
||| Falcon | DamageAgainstBaseTurretMultiplier = 1.0
||| Falcon | DamageAgainstBaseSensorMultiplier = 1.0
||| Falcon | DamageAgainstGravCycleMultiplier = 0.5
||| Falcon | DamageAgainstBeowulfMultiplier = 0.5
||| Falcon | DamageAgainstShrikeMultiplier = 0.5
||| Falcon | ReloadTime = 1.7999999523163
||| Falcon | FireInterval = 0.079999998211861
||| Falcon | HoldToFire = true
||| Falcon | CanZoom = true
||| Falcon | ReloadSingle = false
||| Falcon | ReloadApplicationProportion = 0.58799999952316
Failed to get property with id 2006
||| Falcon | BurstShotCount = nil
Failed to get property with id 2007
||| Falcon | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Falcon | SpinupTime = nil
Failed to get property with id 2009
||| Falcon | ShotgunShotCount = nil
||| Falcon | ShotEnergyCost = 0
||| Falcon | ImpactMomentum = 0.0
||| Falcon | SelfImpactMomentumMultiplier = 1.5
||| Falcon | SelfImpactExtraZMomentum = 0.0
||| Falcon | ExplosiveRadius = 0.0
||| Falcon | BulletDamageRange = 6000.0
||| Falcon | MaxDamageRangeProportion = 0.5
||| Falcon | MinDamageRangeProportion = 1.0
||| Falcon | MinDamageProportion = 0.80000001192093
||| Falcon | DoesImpulseFlag = false
||| Falcon | DoesGibOnKill = false
||| Falcon | GibImpulseRadius = 100.0
||| Falcon | GibStrength = 40.0
||| Falcon | ProjectileSpeed = 21000.0
||| Falcon | ProjectileMaxSpeed = 21000.0
||| Falcon | CollisionSize = 25.0
||| Falcon | ProjectileInheritance = 0.0
||| Falcon | ProjectileLifespan = 1.0
||| Falcon | ProjectileGravity = 0.0
||| Falcon | ProjectileTerminalVelocity = 3500.0
||| Falcon | ProjectileBounceDamping = 0.0
||| Falcon | HitscanRange = 2000.0
||| Falcon | FireOffsetX = 3.0
||| Falcon | FireOffsetY = 0.0
||| Falcon | FireOffsetZ = -0.0
||| Falcon | FractalDuration = 1.6072613126113e-40
||| Falcon | FractalShardInterval = 1.4930442773811e-39
||| Falcon | FractalAscentTime = 6.428540782998e-40
||| Falcon | FractalAscentHeight = 4.6751154059166e-09
||| Falcon | FractalShardDistance = 7.0474102367824e-41
||| Falcon | FractalShardHeight = 9.396314093298e-35
||| Falcon | FractalShardDamage = 3
||| Falcon | FractalShardDamageRadius = 0.0
||| Falcon | MeleeDamageRadius = 0.0
||| Falcon | MeleeConeAngle = 0.0
||| Falcon | Accuracy = 1.0
||| Falcon | AccuracyLossOnShot = 0.0
||| Falcon | AccuracyLossOnJump = 0.30000001192093
||| Falcon | AccuracyLossMax = 0.0
||| Falcon | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Falcon | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Falcon | ThrowDelay = nil
Failed to get property with id 6001
||| Falcon | ThrowPullPinTime = nil
||| Falcon | StuckDamageMultiplier = 0.0
||| Falcon | StuckMomentumMultiplier = 0.0
||| Falcon | FuseTimer = 0.0
||| Falcon | ExplodeOnContact = false
||| Falcon | ExplodeOnFuse = false
||| Falcon | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Falcon | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Falcon | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Falcon | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Falcon | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Falcon | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Falcon | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Falcon | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Falcon | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Falcon | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Falcon | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Falcon | JammerPackRange = nil
Failed to get property with id 7011
||| Falcon | PackBuffAmount = nil
Failed to get property with id 7012
||| Falcon | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Falcon | DeployableRange = nil
Failed to get property with id 8001
||| Falcon | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Falcon | DeployableMinProximity = nil
Failed to get property with id 8003
||| Falcon | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Falcon | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Falcon | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Falcon | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Falcon | ForcefieldMaxDamageSpeed = nil
||| Falcon | MineDeployTime = 0.0
||| Falcon | MineMaxAllowed = 0
||| Falcon | MineCollisionCylinderRadius = 0.0
||| Falcon | MineCollisionCylinderHeight = 0.0
||| Falcon | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Falcon | PrismMineTripDistance = 4.6751154059166e-09
||| Sparrow | SpareAmmo = 120
||| Sparrow | AmmoPerShot = 1
||| Sparrow | LowAmmoCutoff = 8
||| Sparrow | Damage = 80.0
Failed to get property with id 3002
||| Sparrow | DirectHitMultiplier = nil
||| Sparrow | EnergyDrain = 0.0
||| Sparrow | DamageAgainstArmorMultiplier = 0.5
||| Sparrow | DamageAgainstGeneratorMultiplier = 1.0
||| Sparrow | DamageAgainstBaseTurretMultiplier = 1.0
||| Sparrow | DamageAgainstBaseSensorMultiplier = 1.0
||| Sparrow | DamageAgainstGravCycleMultiplier = 0.5
||| Sparrow | DamageAgainstBeowulfMultiplier = 0.5
||| Sparrow | DamageAgainstShrikeMultiplier = 0.5
||| Sparrow | ReloadTime = 1.7999999523163
||| Sparrow | FireInterval = 0.15999999642372
||| Sparrow | HoldToFire = false
||| Sparrow | CanZoom = true
||| Sparrow | ReloadSingle = false
||| Sparrow | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Sparrow | BurstShotCount = nil
Failed to get property with id 2007
||| Sparrow | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Sparrow | SpinupTime = nil
Failed to get property with id 2009
||| Sparrow | ShotgunShotCount = nil
||| Sparrow | ShotEnergyCost = 0
||| Sparrow | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Sparrow | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Sparrow | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Sparrow | ExplosiveRadius = nil
||| Sparrow | BulletDamageRange = 6000.0
||| Sparrow | MaxDamageRangeProportion = 0.5
||| Sparrow | MinDamageRangeProportion = 1.0
||| Sparrow | MinDamageProportion = 0.5
||| Sparrow | DoesImpulseFlag = false
||| Sparrow | DoesGibOnKill = false
||| Sparrow | GibImpulseRadius = 100.0
||| Sparrow | GibStrength = 40.0
Failed to get property with id 4000
||| Sparrow | ProjectileSpeed = nil
Failed to get property with id 4001
||| Sparrow | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Sparrow | CollisionSize = nil
Failed to get property with id 4003
||| Sparrow | ProjectileInheritance = nil
Failed to get property with id 4004
||| Sparrow | ProjectileLifespan = nil
Failed to get property with id 4005
||| Sparrow | ProjectileGravity = nil
Failed to get property with id 4006
||| Sparrow | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Sparrow | ProjectileBounceDamping = nil
||| Sparrow | HitscanRange = 6000.0
||| Sparrow | FireOffsetX = 20.0
||| Sparrow | FireOffsetY = 0.0
||| Sparrow | FireOffsetZ = -0.0
Failed to get property with id 3030
||| Sparrow | FractalDuration = nil
Failed to get property with id 3031
||| Sparrow | FractalShardInterval = nil
Failed to get property with id 3032
||| Sparrow | FractalAscentTime = nil
Failed to get property with id 3033
||| Sparrow | FractalAscentHeight = nil
Failed to get property with id 3034
||| Sparrow | FractalShardDistance = nil
Failed to get property with id 3035
||| Sparrow | FractalShardHeight = nil
Failed to get property with id 3036
||| Sparrow | FractalShardDamage = nil
Failed to get property with id 3037
||| Sparrow | FractalShardDamageRadius = nil
||| Sparrow | MeleeDamageRadius = 0.0
||| Sparrow | MeleeConeAngle = 0.0
||| Sparrow | Accuracy = 1.0
||| Sparrow | AccuracyLossOnShot = 0.0
||| Sparrow | AccuracyLossOnJump = 0.30000001192093
||| Sparrow | AccuracyLossMax = 0.0
||| Sparrow | AccuracyCorrectionRate = 0.37999999523163
Failed to get property with id 5007
||| Sparrow | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Sparrow | ThrowDelay = nil
Failed to get property with id 6001
||| Sparrow | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Sparrow | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Sparrow | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Sparrow | FuseTimer = nil
Failed to get property with id 6005
||| Sparrow | ExplodeOnContact = nil
Failed to get property with id 6006
||| Sparrow | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Sparrow | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Sparrow | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Sparrow | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Sparrow | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Sparrow | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Sparrow | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Sparrow | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Sparrow | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Sparrow | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Sparrow | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Sparrow | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Sparrow | JammerPackRange = nil
Failed to get property with id 7011
||| Sparrow | PackBuffAmount = nil
Failed to get property with id 7012
||| Sparrow | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Sparrow | DeployableRange = nil
Failed to get property with id 8001
||| Sparrow | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Sparrow | DeployableMinProximity = nil
Failed to get property with id 8003
||| Sparrow | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Sparrow | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Sparrow | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Sparrow | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Sparrow | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Sparrow | MineDeployTime = nil
Failed to get property with id 9001
||| Sparrow | MineMaxAllowed = nil
Failed to get property with id 9002
||| Sparrow | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Sparrow | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Sparrow | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Sparrow | PrismMineTripDistance = nil
||| Light Assault Rifle | SpareAmmo = 192
||| Light Assault Rifle | AmmoPerShot = 1
||| Light Assault Rifle | LowAmmoCutoff = 8
||| Light Assault Rifle | Damage = 75.0
||| Light Assault Rifle | DirectHitMultiplier = 1.0
||| Light Assault Rifle | EnergyDrain = 0.0
||| Light Assault Rifle | DamageAgainstArmorMultiplier = 0.5
||| Light Assault Rifle | DamageAgainstGeneratorMultiplier = 1.0
||| Light Assault Rifle | DamageAgainstBaseTurretMultiplier = 1.0
||| Light Assault Rifle | DamageAgainstBaseSensorMultiplier = 1.0
||| Light Assault Rifle | DamageAgainstGravCycleMultiplier = 0.5
||| Light Assault Rifle | DamageAgainstBeowulfMultiplier = 0.5
||| Light Assault Rifle | DamageAgainstShrikeMultiplier = 0.5
||| Light Assault Rifle | ReloadTime = 1.7999999523163
||| Light Assault Rifle | FireInterval = 0.10000000149012
||| Light Assault Rifle | HoldToFire = true
||| Light Assault Rifle | CanZoom = true
||| Light Assault Rifle | ReloadSingle = false
||| Light Assault Rifle | ReloadApplicationProportion = 0.58799999952316
||| Light Assault Rifle | BurstShotCount = 3
||| Light Assault Rifle | BurstShotRefireTime = 0.071999996900558
Failed to get property with id 2008
||| Light Assault Rifle | SpinupTime = nil
Failed to get property with id 2009
||| Light Assault Rifle | ShotgunShotCount = nil
||| Light Assault Rifle | ShotEnergyCost = 0
||| Light Assault Rifle | ImpactMomentum = 0.0
||| Light Assault Rifle | SelfImpactMomentumMultiplier = 1.5
||| Light Assault Rifle | SelfImpactExtraZMomentum = 0.0
||| Light Assault Rifle | ExplosiveRadius = 0.0
||| Light Assault Rifle | BulletDamageRange = 6000.0
||| Light Assault Rifle | MaxDamageRangeProportion = 0.5
||| Light Assault Rifle | MinDamageRangeProportion = 1.0
||| Light Assault Rifle | MinDamageProportion = 0.80000001192093
||| Light Assault Rifle | DoesImpulseFlag = false
||| Light Assault Rifle | DoesGibOnKill = false
||| Light Assault Rifle | GibImpulseRadius = 100.0
||| Light Assault Rifle | GibStrength = 40.0
||| Light Assault Rifle | ProjectileSpeed = 21000.0
||| Light Assault Rifle | ProjectileMaxSpeed = 21000.0
||| Light Assault Rifle | CollisionSize = 25.0
||| Light Assault Rifle | ProjectileInheritance = 0.0
||| Light Assault Rifle | ProjectileLifespan = 1.0
||| Light Assault Rifle | ProjectileGravity = 0.0
||| Light Assault Rifle | ProjectileTerminalVelocity = 3500.0
||| Light Assault Rifle | ProjectileBounceDamping = 0.0
||| Light Assault Rifle | HitscanRange = 2000.0
||| Light Assault Rifle | FireOffsetX = 3.0
||| Light Assault Rifle | FireOffsetY = 0.0
||| Light Assault Rifle | FireOffsetZ = -0.0
||| Light Assault Rifle | FractalDuration = 2.6604155812654e-39
||| Light Assault Rifle | FractalShardInterval = 1.7763568394003e-15
||| Light Assault Rifle | FractalAscentTime = -3.6944241604157e+19
||| Light Assault Rifle | FractalAscentHeight = 1.6438744388872e-39
||| Light Assault Rifle | FractalShardDistance = 2.2420775429197e-44
||| Light Assault Rifle | FractalShardHeight = 4.4367771007988e+30
||| Light Assault Rifle | FractalShardDamage = -607649792
||| Light Assault Rifle | FractalShardDamageRadius = 2.2420775429197e-44
||| Light Assault Rifle | MeleeDamageRadius = 0.0
||| Light Assault Rifle | MeleeConeAngle = 0.0
||| Light Assault Rifle | Accuracy = 1.0
||| Light Assault Rifle | AccuracyLossOnShot = 0.0
||| Light Assault Rifle | AccuracyLossOnJump = 0.30000001192093
||| Light Assault Rifle | AccuracyLossMax = 0.0
||| Light Assault Rifle | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Light Assault Rifle | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Light Assault Rifle | ThrowDelay = nil
Failed to get property with id 6001
||| Light Assault Rifle | ThrowPullPinTime = nil
||| Light Assault Rifle | StuckDamageMultiplier = 0.0
||| Light Assault Rifle | StuckMomentumMultiplier = 0.0
||| Light Assault Rifle | FuseTimer = 0.0
||| Light Assault Rifle | ExplodeOnContact = false
||| Light Assault Rifle | ExplodeOnFuse = false
||| Light Assault Rifle | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Light Assault Rifle | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Light Assault Rifle | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Light Assault Rifle | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Light Assault Rifle | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Light Assault Rifle | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Light Assault Rifle | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Light Assault Rifle | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Light Assault Rifle | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Light Assault Rifle | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Light Assault Rifle | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Light Assault Rifle | JammerPackRange = nil
Failed to get property with id 7011
||| Light Assault Rifle | PackBuffAmount = nil
Failed to get property with id 7012
||| Light Assault Rifle | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Light Assault Rifle | DeployableRange = nil
Failed to get property with id 8001
||| Light Assault Rifle | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Light Assault Rifle | DeployableMinProximity = nil
Failed to get property with id 8003
||| Light Assault Rifle | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Light Assault Rifle | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Light Assault Rifle | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Light Assault Rifle | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Light Assault Rifle | ForcefieldMaxDamageSpeed = nil
||| Light Assault Rifle | MineDeployTime = 0.0
||| Light Assault Rifle | MineMaxAllowed = 0
||| Light Assault Rifle | MineCollisionCylinderRadius = 0.0
||| Light Assault Rifle | MineCollisionCylinderHeight = 0.0
||| Light Assault Rifle | ClaymoreDetonationAngle = 1.7763568394003e-15
||| Light Assault Rifle | PrismMineTripDistance = 1.6438744388872e-39
||| Throwing Knives | SpareAmmo = 48
||| Throwing Knives | AmmoPerShot = 1
||| Throwing Knives | LowAmmoCutoff = 2
||| Throwing Knives | Damage = 250.0
||| Throwing Knives | DirectHitMultiplier = 1.0
||| Throwing Knives | EnergyDrain = 0.0
||| Throwing Knives | DamageAgainstArmorMultiplier = 0.5
||| Throwing Knives | DamageAgainstGeneratorMultiplier = 1.0
||| Throwing Knives | DamageAgainstBaseTurretMultiplier = 1.0
||| Throwing Knives | DamageAgainstBaseSensorMultiplier = 1.0
||| Throwing Knives | DamageAgainstGravCycleMultiplier = 0.5
||| Throwing Knives | DamageAgainstBeowulfMultiplier = 0.5
||| Throwing Knives | DamageAgainstShrikeMultiplier = 0.5
||| Throwing Knives | ReloadTime = 1.7999999523163
||| Throwing Knives | FireInterval = 0.40000000596046
||| Throwing Knives | HoldToFire = true
||| Throwing Knives | CanZoom = true
||| Throwing Knives | ReloadSingle = false
||| Throwing Knives | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Throwing Knives | BurstShotCount = nil
Failed to get property with id 2007
||| Throwing Knives | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Throwing Knives | SpinupTime = nil
Failed to get property with id 2009
||| Throwing Knives | ShotgunShotCount = nil
||| Throwing Knives | ShotEnergyCost = 0
||| Throwing Knives | ImpactMomentum = 0.0
||| Throwing Knives | SelfImpactMomentumMultiplier = 1.5
||| Throwing Knives | SelfImpactExtraZMomentum = 0.0
||| Throwing Knives | ExplosiveRadius = 0.0
||| Throwing Knives | BulletDamageRange = 6000.0
||| Throwing Knives | MaxDamageRangeProportion = 0.5
||| Throwing Knives | MinDamageRangeProportion = 1.0
||| Throwing Knives | MinDamageProportion = 0.5
||| Throwing Knives | DoesImpulseFlag = false
||| Throwing Knives | DoesGibOnKill = false
||| Throwing Knives | GibImpulseRadius = 100.0
||| Throwing Knives | GibStrength = 40.0
||| Throwing Knives | ProjectileSpeed = 18000.0
||| Throwing Knives | ProjectileMaxSpeed = 18000.0
||| Throwing Knives | CollisionSize = 25.0
||| Throwing Knives | ProjectileInheritance = 0.0
||| Throwing Knives | ProjectileLifespan = 0.5
||| Throwing Knives | ProjectileGravity = 0.0
||| Throwing Knives | ProjectileTerminalVelocity = 3500.0
||| Throwing Knives | ProjectileBounceDamping = 0.0
||| Throwing Knives | HitscanRange = 2000.0
||| Throwing Knives | FireOffsetX = 3.0
||| Throwing Knives | FireOffsetY = 0.0
||| Throwing Knives | FireOffsetZ = -0.0
||| Throwing Knives | FractalDuration = 1.6206717389149e-40
||| Throwing Knives | FractalShardInterval = 1.4930442773811e-39
||| Throwing Knives | FractalAscentTime = 6.428540782998e-40
||| Throwing Knives | FractalAscentHeight = 9.7683166779321e-29
||| Throwing Knives | FractalShardDistance = 7.1230803538559e-41
||| Throwing Knives | FractalShardHeight = 9.396314093298e-35
||| Throwing Knives | FractalShardDamage = 3
||| Throwing Knives | FractalShardDamageRadius = 0.0
||| Throwing Knives | MeleeDamageRadius = 0.0
||| Throwing Knives | MeleeConeAngle = 0.0
||| Throwing Knives | Accuracy = 1.0
||| Throwing Knives | AccuracyLossOnShot = 0.0
||| Throwing Knives | AccuracyLossOnJump = 0.30000001192093
||| Throwing Knives | AccuracyLossMax = 0.0
||| Throwing Knives | AccuracyCorrectionRate = 0.28000000119209
Failed to get property with id 5007
||| Throwing Knives | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Throwing Knives | ThrowDelay = nil
Failed to get property with id 6001
||| Throwing Knives | ThrowPullPinTime = nil
||| Throwing Knives | StuckDamageMultiplier = 0.0
||| Throwing Knives | StuckMomentumMultiplier = 0.0
||| Throwing Knives | FuseTimer = 0.0
||| Throwing Knives | ExplodeOnContact = false
||| Throwing Knives | ExplodeOnFuse = false
||| Throwing Knives | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Throwing Knives | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Throwing Knives | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Throwing Knives | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Throwing Knives | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Throwing Knives | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Throwing Knives | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Throwing Knives | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Throwing Knives | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Throwing Knives | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Throwing Knives | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Throwing Knives | JammerPackRange = nil
Failed to get property with id 7011
||| Throwing Knives | PackBuffAmount = nil
Failed to get property with id 7012
||| Throwing Knives | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Throwing Knives | DeployableRange = nil
Failed to get property with id 8001
||| Throwing Knives | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Throwing Knives | DeployableMinProximity = nil
Failed to get property with id 8003
||| Throwing Knives | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Throwing Knives | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Throwing Knives | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Throwing Knives | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Throwing Knives | ForcefieldMaxDamageSpeed = nil
||| Throwing Knives | MineDeployTime = 0.0
||| Throwing Knives | MineMaxAllowed = 0
||| Throwing Knives | MineCollisionCylinderRadius = 0.0
||| Throwing Knives | MineCollisionCylinderHeight = 0.0
||| Throwing Knives | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Throwing Knives | PrismMineTripDistance = 9.7683166779321e-29
||| Shotgun | SpareAmmo = 32
||| Shotgun | AmmoPerShot = 1
||| Shotgun | LowAmmoCutoff = 2
||| Shotgun | Damage = 65.0
Failed to get property with id 3002
||| Shotgun | DirectHitMultiplier = nil
||| Shotgun | EnergyDrain = 0.0
||| Shotgun | DamageAgainstArmorMultiplier = 0.5
||| Shotgun | DamageAgainstGeneratorMultiplier = 1.0
||| Shotgun | DamageAgainstBaseTurretMultiplier = 1.0
||| Shotgun | DamageAgainstBaseSensorMultiplier = 1.0
||| Shotgun | DamageAgainstGravCycleMultiplier = 0.5
||| Shotgun | DamageAgainstBeowulfMultiplier = 0.5
||| Shotgun | DamageAgainstShrikeMultiplier = 0.5
||| Shotgun | ReloadTime = 0.60000002384186
||| Shotgun | FireInterval = 1.0
||| Shotgun | HoldToFire = true
||| Shotgun | CanZoom = true
||| Shotgun | ReloadSingle = true
||| Shotgun | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Shotgun | BurstShotCount = nil
Failed to get property with id 2007
||| Shotgun | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Shotgun | SpinupTime = nil
||| Shotgun | ShotgunShotCount = 9
||| Shotgun | ShotEnergyCost = 0
||| Shotgun | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Shotgun | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Shotgun | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Shotgun | ExplosiveRadius = nil
||| Shotgun | BulletDamageRange = 6000.0
||| Shotgun | MaxDamageRangeProportion = 0.5
||| Shotgun | MinDamageRangeProportion = 1.0
||| Shotgun | MinDamageProportion = 0.5
||| Shotgun | DoesImpulseFlag = false
||| Shotgun | DoesGibOnKill = false
||| Shotgun | GibImpulseRadius = 100.0
||| Shotgun | GibStrength = 40.0
Failed to get property with id 4000
||| Shotgun | ProjectileSpeed = nil
Failed to get property with id 4001
||| Shotgun | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Shotgun | CollisionSize = nil
Failed to get property with id 4003
||| Shotgun | ProjectileInheritance = nil
Failed to get property with id 4004
||| Shotgun | ProjectileLifespan = nil
Failed to get property with id 4005
||| Shotgun | ProjectileGravity = nil
Failed to get property with id 4006
||| Shotgun | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Shotgun | ProjectileBounceDamping = nil
||| Shotgun | HitscanRange = 2500.0
||| Shotgun | FireOffsetX = 0.0
||| Shotgun | FireOffsetY = 0.0
||| Shotgun | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Shotgun | FractalDuration = nil
Failed to get property with id 3031
||| Shotgun | FractalShardInterval = nil
Failed to get property with id 3032
||| Shotgun | FractalAscentTime = nil
Failed to get property with id 3033
||| Shotgun | FractalAscentHeight = nil
Failed to get property with id 3034
||| Shotgun | FractalShardDistance = nil
Failed to get property with id 3035
||| Shotgun | FractalShardHeight = nil
Failed to get property with id 3036
||| Shotgun | FractalShardDamage = nil
Failed to get property with id 3037
||| Shotgun | FractalShardDamageRadius = nil
||| Shotgun | MeleeDamageRadius = 0.0
||| Shotgun | MeleeConeAngle = 0.0
||| Shotgun | Accuracy = 0.85000002384186
||| Shotgun | AccuracyLossOnShot = 0.0
||| Shotgun | AccuracyLossOnJump = 0.30000001192093
||| Shotgun | AccuracyLossMax = 0.30000001192093
||| Shotgun | AccuracyCorrectionRate = 0.18999999761581
||| Shotgun | ShotgunUseGOTYSpread = 0
Failed to get property with id 6000
||| Shotgun | ThrowDelay = nil
Failed to get property with id 6001
||| Shotgun | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Shotgun | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Shotgun | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Shotgun | FuseTimer = nil
Failed to get property with id 6005
||| Shotgun | ExplodeOnContact = nil
Failed to get property with id 6006
||| Shotgun | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Shotgun | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Shotgun | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Shotgun | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Shotgun | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Shotgun | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Shotgun | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Shotgun | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Shotgun | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Shotgun | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Shotgun | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Shotgun | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Shotgun | JammerPackRange = nil
Failed to get property with id 7011
||| Shotgun | PackBuffAmount = nil
Failed to get property with id 7012
||| Shotgun | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Shotgun | DeployableRange = nil
Failed to get property with id 8001
||| Shotgun | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Shotgun | DeployableMinProximity = nil
Failed to get property with id 8003
||| Shotgun | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Shotgun | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Shotgun | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Shotgun | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Shotgun | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Shotgun | MineDeployTime = nil
Failed to get property with id 9001
||| Shotgun | MineMaxAllowed = nil
Failed to get property with id 9002
||| Shotgun | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Shotgun | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Shotgun | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Shotgun | PrismMineTripDistance = nil
||| Shocklance | SpareAmmo = 100000
||| Shocklance | AmmoPerShot = 1
||| Shocklance | LowAmmoCutoff = 0
||| Shocklance | Damage = 600.0
Failed to get property with id 3002
||| Shocklance | DirectHitMultiplier = nil
||| Shocklance | EnergyDrain = 0.0
||| Shocklance | DamageAgainstArmorMultiplier = 1.0
||| Shocklance | DamageAgainstGeneratorMultiplier = 0.5
||| Shocklance | DamageAgainstBaseTurretMultiplier = 0.5
||| Shocklance | DamageAgainstBaseSensorMultiplier = 0.5
||| Shocklance | DamageAgainstGravCycleMultiplier = 3.0
||| Shocklance | DamageAgainstBeowulfMultiplier = 3.0
||| Shocklance | DamageAgainstShrikeMultiplier = 3.0
||| Shocklance | ReloadTime = 1.5
||| Shocklance | FireInterval = 0.5
||| Shocklance | HoldToFire = false
||| Shocklance | CanZoom = true
||| Shocklance | ReloadSingle = false
||| Shocklance | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Shocklance | BurstShotCount = nil
Failed to get property with id 2007
||| Shocklance | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Shocklance | SpinupTime = nil
Failed to get property with id 2009
||| Shocklance | ShotgunShotCount = nil
||| Shocklance | ShotEnergyCost = 0
||| Shocklance | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Shocklance | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Shocklance | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Shocklance | ExplosiveRadius = nil
||| Shocklance | BulletDamageRange = 6000.0
||| Shocklance | MaxDamageRangeProportion = 0.5
||| Shocklance | MinDamageRangeProportion = 1.0
||| Shocklance | MinDamageProportion = 1.0
||| Shocklance | DoesImpulseFlag = false
||| Shocklance | DoesGibOnKill = false
||| Shocklance | GibImpulseRadius = 100.0
||| Shocklance | GibStrength = 40.0
Failed to get property with id 4000
||| Shocklance | ProjectileSpeed = nil
Failed to get property with id 4001
||| Shocklance | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Shocklance | CollisionSize = nil
Failed to get property with id 4003
||| Shocklance | ProjectileInheritance = nil
Failed to get property with id 4004
||| Shocklance | ProjectileLifespan = nil
Failed to get property with id 4005
||| Shocklance | ProjectileGravity = nil
Failed to get property with id 4006
||| Shocklance | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Shocklance | ProjectileBounceDamping = nil
||| Shocklance | HitscanRange = 768.0
||| Shocklance | FireOffsetX = 20.0
||| Shocklance | FireOffsetY = 5.0
||| Shocklance | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Shocklance | FractalDuration = nil
Failed to get property with id 3031
||| Shocklance | FractalShardInterval = nil
Failed to get property with id 3032
||| Shocklance | FractalAscentTime = nil
Failed to get property with id 3033
||| Shocklance | FractalAscentHeight = nil
Failed to get property with id 3034
||| Shocklance | FractalShardDistance = nil
Failed to get property with id 3035
||| Shocklance | FractalShardHeight = nil
Failed to get property with id 3036
||| Shocklance | FractalShardDamage = nil
Failed to get property with id 3037
||| Shocklance | FractalShardDamageRadius = nil
||| Shocklance | MeleeDamageRadius = 0.0
||| Shocklance | MeleeConeAngle = 0.0
||| Shocklance | Accuracy = 1.0
||| Shocklance | AccuracyLossOnShot = 0.0
||| Shocklance | AccuracyLossOnJump = 0.30000001192093
||| Shocklance | AccuracyLossMax = 0.0
||| Shocklance | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Shocklance | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Shocklance | ThrowDelay = nil
Failed to get property with id 6001
||| Shocklance | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Shocklance | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Shocklance | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Shocklance | FuseTimer = nil
Failed to get property with id 6005
||| Shocklance | ExplodeOnContact = nil
Failed to get property with id 6006
||| Shocklance | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Shocklance | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Shocklance | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Shocklance | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Shocklance | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Shocklance | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Shocklance | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Shocklance | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Shocklance | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Shocklance | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Shocklance | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Shocklance | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Shocklance | JammerPackRange = nil
Failed to get property with id 7011
||| Shocklance | PackBuffAmount = nil
Failed to get property with id 7012
||| Shocklance | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Shocklance | DeployableRange = nil
Failed to get property with id 8001
||| Shocklance | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Shocklance | DeployableMinProximity = nil
Failed to get property with id 8003
||| Shocklance | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Shocklance | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Shocklance | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Shocklance | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Shocklance | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Shocklance | MineDeployTime = nil
Failed to get property with id 9001
||| Shocklance | MineMaxAllowed = nil
Failed to get property with id 9002
||| Shocklance | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Shocklance | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Shocklance | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Shocklance | PrismMineTripDistance = nil
||| Impact Nitron | SpareAmmo = 2
||| Impact Nitron | AmmoPerShot = 1
||| Impact Nitron | LowAmmoCutoff = 0
||| Impact Nitron | Damage = 200.0
||| Impact Nitron | DirectHitMultiplier = 1.25
||| Impact Nitron | EnergyDrain = 0.0
||| Impact Nitron | DamageAgainstArmorMultiplier = 1.0
||| Impact Nitron | DamageAgainstGeneratorMultiplier = 1.0
||| Impact Nitron | DamageAgainstBaseTurretMultiplier = 1.0
||| Impact Nitron | DamageAgainstBaseSensorMultiplier = 1.0
||| Impact Nitron | DamageAgainstGravCycleMultiplier = 1.0
||| Impact Nitron | DamageAgainstBeowulfMultiplier = 1.0
||| Impact Nitron | DamageAgainstShrikeMultiplier = 1.0
||| Impact Nitron | ReloadTime = 0.0
||| Impact Nitron | FireInterval = 0.20000000298023
||| Impact Nitron | HoldToFire = true
||| Impact Nitron | CanZoom = true
||| Impact Nitron | ReloadSingle = false
||| Impact Nitron | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Impact Nitron | BurstShotCount = nil
Failed to get property with id 2007
||| Impact Nitron | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Impact Nitron | SpinupTime = nil
Failed to get property with id 2009
||| Impact Nitron | ShotgunShotCount = nil
||| Impact Nitron | ShotEnergyCost = 0
||| Impact Nitron | ImpactMomentum = 64800.0
||| Impact Nitron | SelfImpactMomentumMultiplier = 1.5
||| Impact Nitron | SelfImpactExtraZMomentum = 0.0
||| Impact Nitron | ExplosiveRadius = 400.0
||| Impact Nitron | BulletDamageRange = 6000.0
||| Impact Nitron | MaxDamageRangeProportion = 0.0
||| Impact Nitron | MinDamageRangeProportion = 1.0
||| Impact Nitron | MinDamageProportion = 0.20000000298023
||| Impact Nitron | DoesImpulseFlag = true
||| Impact Nitron | DoesGibOnKill = false
||| Impact Nitron | GibImpulseRadius = 100.0
||| Impact Nitron | GibStrength = 40.0
||| Impact Nitron | ProjectileSpeed = 2500.0
||| Impact Nitron | ProjectileMaxSpeed = 2500.0
||| Impact Nitron | CollisionSize = 20.0
||| Impact Nitron | ProjectileInheritance = 0.20000000298023
||| Impact Nitron | ProjectileLifespan = 8.0
||| Impact Nitron | ProjectileGravity = 0.5
||| Impact Nitron | ProjectileTerminalVelocity = 7000.0
||| Impact Nitron | ProjectileBounceDamping = 0.55000001192093
||| Impact Nitron | HitscanRange = 2000.0
||| Impact Nitron | FireOffsetX = 0.0
||| Impact Nitron | FireOffsetY = 0.0
||| Impact Nitron | FireOffsetZ = 0.0
||| Impact Nitron | FractalDuration = 1.6061122478705e-40
||| Impact Nitron | FractalShardInterval = 1.4930442773811e-39
||| Impact Nitron | FractalAscentTime = 6.428540782998e-40
||| Impact Nitron | FractalAscentHeight = 1.4228475888192e-21
||| Impact Nitron | FractalShardDistance = 7.0418050429251e-41
||| Impact Nitron | FractalShardHeight = 9.396314093298e-35
||| Impact Nitron | FractalShardDamage = 3
||| Impact Nitron | FractalShardDamageRadius = 0.0
||| Impact Nitron | MeleeDamageRadius = 0.0
||| Impact Nitron | MeleeConeAngle = 0.0
||| Impact Nitron | Accuracy = 1.0
||| Impact Nitron | AccuracyLossOnShot = 0.0
||| Impact Nitron | AccuracyLossOnJump = 0.0
||| Impact Nitron | AccuracyLossMax = 0.0
||| Impact Nitron | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Impact Nitron | ShotgunUseGOTYSpread = nil
||| Impact Nitron | ThrowDelay = 0.69999998807907
||| Impact Nitron | ThrowPullPinTime = 0.15000000596046
||| Impact Nitron | StuckDamageMultiplier = 0.0
||| Impact Nitron | StuckMomentumMultiplier = 0.0
||| Impact Nitron | FuseTimer = 0.0
||| Impact Nitron | ExplodeOnContact = false
||| Impact Nitron | ExplodeOnFuse = false
||| Impact Nitron | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Impact Nitron | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Impact Nitron | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Impact Nitron | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Impact Nitron | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Impact Nitron | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Impact Nitron | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Impact Nitron | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Impact Nitron | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Impact Nitron | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Impact Nitron | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Impact Nitron | JammerPackRange = nil
Failed to get property with id 7011
||| Impact Nitron | PackBuffAmount = nil
Failed to get property with id 7012
||| Impact Nitron | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Impact Nitron | DeployableRange = nil
Failed to get property with id 8001
||| Impact Nitron | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Impact Nitron | DeployableMinProximity = nil
Failed to get property with id 8003
||| Impact Nitron | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Impact Nitron | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Impact Nitron | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Impact Nitron | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Impact Nitron | ForcefieldMaxDamageSpeed = nil
||| Impact Nitron | MineDeployTime = 0.0
||| Impact Nitron | MineMaxAllowed = 0
||| Impact Nitron | MineCollisionCylinderRadius = 0.0
||| Impact Nitron | MineCollisionCylinderHeight = 0.0
||| Impact Nitron | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Impact Nitron | PrismMineTripDistance = 1.4228475888192e-21
||| Sticky Grenades | SpareAmmo = 2
||| Sticky Grenades | AmmoPerShot = 1
||| Sticky Grenades | LowAmmoCutoff = 0
||| Sticky Grenades | Damage = 650.0
||| Sticky Grenades | DirectHitMultiplier = 1.0
||| Sticky Grenades | EnergyDrain = 0.0
||| Sticky Grenades | DamageAgainstArmorMultiplier = 1.0
||| Sticky Grenades | DamageAgainstGeneratorMultiplier = 3.0
||| Sticky Grenades | DamageAgainstBaseTurretMultiplier = 3.0
||| Sticky Grenades | DamageAgainstBaseSensorMultiplier = 3.0
||| Sticky Grenades | DamageAgainstGravCycleMultiplier = 2.0
||| Sticky Grenades | DamageAgainstBeowulfMultiplier = 2.0
||| Sticky Grenades | DamageAgainstShrikeMultiplier = 2.0
||| Sticky Grenades | ReloadTime = 0.0
||| Sticky Grenades | FireInterval = 0.20000000298023
||| Sticky Grenades | HoldToFire = true
||| Sticky Grenades | CanZoom = true
||| Sticky Grenades | ReloadSingle = false
||| Sticky Grenades | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Sticky Grenades | BurstShotCount = nil
Failed to get property with id 2007
||| Sticky Grenades | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Sticky Grenades | SpinupTime = nil
Failed to get property with id 2009
||| Sticky Grenades | ShotgunShotCount = nil
||| Sticky Grenades | ShotEnergyCost = 0
||| Sticky Grenades | ImpactMomentum = 85000.0
||| Sticky Grenades | SelfImpactMomentumMultiplier = 1.5
||| Sticky Grenades | SelfImpactExtraZMomentum = 0.0
||| Sticky Grenades | ExplosiveRadius = 600.0
||| Sticky Grenades | BulletDamageRange = 6000.0
||| Sticky Grenades | MaxDamageRangeProportion = 0.0
||| Sticky Grenades | MinDamageRangeProportion = 1.0
||| Sticky Grenades | MinDamageProportion = 0.5
||| Sticky Grenades | DoesImpulseFlag = true
||| Sticky Grenades | DoesGibOnKill = true
||| Sticky Grenades | GibImpulseRadius = 100.0
||| Sticky Grenades | GibStrength = 40.0
||| Sticky Grenades | ProjectileSpeed = 1200.0
||| Sticky Grenades | ProjectileMaxSpeed = 1600.0
||| Sticky Grenades | CollisionSize = 20.0
||| Sticky Grenades | ProjectileInheritance = 0.20000000298023
||| Sticky Grenades | ProjectileLifespan = 8.0
||| Sticky Grenades | ProjectileGravity = 0.5
||| Sticky Grenades | ProjectileTerminalVelocity = 7000.0
||| Sticky Grenades | ProjectileBounceDamping = 0.55000001192093
||| Sticky Grenades | HitscanRange = 2000.0
||| Sticky Grenades | FireOffsetX = 0.0
||| Sticky Grenades | FireOffsetY = 0.0
||| Sticky Grenades | FireOffsetZ = 0.0
||| Sticky Grenades | FractalDuration = 1.019383816443e-38
||| Sticky Grenades | FractalShardInterval = 1.0653071697158e-38
||| Sticky Grenades | FractalAscentTime = 7.3469041523687e-39
||| Sticky Grenades | FractalAscentHeight = 4.6837266118301e-39
||| Sticky Grenades | FractalShardDistance = 7.3469041523687e-39
||| Sticky Grenades | FractalShardHeight = 4.6837266118301e-39
||| Sticky Grenades | FractalShardDamage = 2687010
||| Sticky Grenades | FractalShardDamageRadius = 5.7453237037317e-44
||| Sticky Grenades | MeleeDamageRadius = 0.0
||| Sticky Grenades | MeleeConeAngle = 0.0
||| Sticky Grenades | Accuracy = 1.0
||| Sticky Grenades | AccuracyLossOnShot = 0.0
||| Sticky Grenades | AccuracyLossOnJump = 0.0
||| Sticky Grenades | AccuracyLossMax = 0.0
||| Sticky Grenades | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Sticky Grenades | ShotgunUseGOTYSpread = nil
||| Sticky Grenades | ThrowDelay = 0.69999998807907
||| Sticky Grenades | ThrowPullPinTime = 0.15000000596046
||| Sticky Grenades | StuckDamageMultiplier = 1.5
||| Sticky Grenades | StuckMomentumMultiplier = 1.0
||| Sticky Grenades | FuseTimer = 2.0
||| Sticky Grenades | ExplodeOnContact = false
||| Sticky Grenades | ExplodeOnFuse = true
||| Sticky Grenades | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Sticky Grenades | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Sticky Grenades | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Sticky Grenades | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Sticky Grenades | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Sticky Grenades | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Sticky Grenades | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Sticky Grenades | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Sticky Grenades | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Sticky Grenades | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Sticky Grenades | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Sticky Grenades | JammerPackRange = nil
Failed to get property with id 7011
||| Sticky Grenades | PackBuffAmount = nil
Failed to get property with id 7012
||| Sticky Grenades | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Sticky Grenades | DeployableRange = nil
Failed to get property with id 8001
||| Sticky Grenades | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Sticky Grenades | DeployableMinProximity = nil
Failed to get property with id 8003
||| Sticky Grenades | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Sticky Grenades | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Sticky Grenades | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Sticky Grenades | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Sticky Grenades | ForcefieldMaxDamageSpeed = nil
||| Sticky Grenades | MineDeployTime = 0.0
||| Sticky Grenades | MineMaxAllowed = 0
||| Sticky Grenades | MineCollisionCylinderRadius = 0.0
||| Sticky Grenades | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Sticky Grenades | ClaymoreDetonationAngle = 1.0653071697158e-38
||| Sticky Grenades | PrismMineTripDistance = 4.6837266118301e-39
||| Claymore Mine | SpareAmmo = 1
||| Claymore Mine | AmmoPerShot = 1
||| Claymore Mine | LowAmmoCutoff = 0
||| Claymore Mine | Damage = 300.0
||| Claymore Mine | DirectHitMultiplier = 1.0
||| Claymore Mine | EnergyDrain = 0.0
||| Claymore Mine | DamageAgainstArmorMultiplier = 1.0
||| Claymore Mine | DamageAgainstGeneratorMultiplier = 1.0
||| Claymore Mine | DamageAgainstBaseTurretMultiplier = 1.0
||| Claymore Mine | DamageAgainstBaseSensorMultiplier = 1.0
||| Claymore Mine | DamageAgainstGravCycleMultiplier = 2.0
||| Claymore Mine | DamageAgainstBeowulfMultiplier = 2.0
||| Claymore Mine | DamageAgainstShrikeMultiplier = 2.0
||| Claymore Mine | ReloadTime = 0.0
||| Claymore Mine | FireInterval = 0.20000000298023
||| Claymore Mine | HoldToFire = true
||| Claymore Mine | CanZoom = true
||| Claymore Mine | ReloadSingle = false
||| Claymore Mine | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Claymore Mine | BurstShotCount = nil
Failed to get property with id 2007
||| Claymore Mine | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Claymore Mine | SpinupTime = nil
Failed to get property with id 2009
||| Claymore Mine | ShotgunShotCount = nil
||| Claymore Mine | ShotEnergyCost = 0
||| Claymore Mine | ImpactMomentum = 110000.0
||| Claymore Mine | SelfImpactMomentumMultiplier = 1.5
||| Claymore Mine | SelfImpactExtraZMomentum = 0.0
||| Claymore Mine | ExplosiveRadius = 250.0
||| Claymore Mine | BulletDamageRange = 6000.0
||| Claymore Mine | MaxDamageRangeProportion = 0.80000001192093
||| Claymore Mine | MinDamageRangeProportion = 0.89999997615814
||| Claymore Mine | MinDamageProportion = 1.0
||| Claymore Mine | DoesImpulseFlag = true
||| Claymore Mine | DoesGibOnKill = true
||| Claymore Mine | GibImpulseRadius = 100.0
||| Claymore Mine | GibStrength = 40.0
||| Claymore Mine | ProjectileSpeed = 20.0
||| Claymore Mine | ProjectileMaxSpeed = 20.0
||| Claymore Mine | CollisionSize = 20.0
||| Claymore Mine | ProjectileInheritance = 0.20000000298023
||| Claymore Mine | ProjectileLifespan = 0.0
||| Claymore Mine | ProjectileGravity = 10.0
||| Claymore Mine | ProjectileTerminalVelocity = 3500.0
||| Claymore Mine | ProjectileBounceDamping = 0.20000000298023
||| Claymore Mine | HitscanRange = 2000.0
||| Claymore Mine | FireOffsetX = 0.0
||| Claymore Mine | FireOffsetY = 0.0
||| Claymore Mine | FireOffsetZ = 0.0
||| Claymore Mine | FractalDuration = 4.9045446251369e-44
||| Claymore Mine | FractalShardInterval = 95.0
||| Claymore Mine | FractalAscentTime = 0.0
||| Claymore Mine | FractalAscentHeight = -nan
||| Claymore Mine | FractalShardDistance = -nan
||| Claymore Mine | FractalShardHeight = -nan
||| Claymore Mine | FractalShardDamage = -1
||| Claymore Mine | FractalShardDamageRadius = -nan
||| Claymore Mine | MeleeDamageRadius = 0.0
||| Claymore Mine | MeleeConeAngle = 0.0
||| Claymore Mine | Accuracy = 1.0
||| Claymore Mine | AccuracyLossOnShot = 0.0
||| Claymore Mine | AccuracyLossOnJump = 0.0
||| Claymore Mine | AccuracyLossMax = 0.0
||| Claymore Mine | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Claymore Mine | ShotgunUseGOTYSpread = nil
||| Claymore Mine | ThrowDelay = 0.69999998807907
||| Claymore Mine | ThrowPullPinTime = 0.20000000298023
||| Claymore Mine | StuckDamageMultiplier = 0.20000000298023
||| Claymore Mine | StuckMomentumMultiplier = 0.0
||| Claymore Mine | FuseTimer = 3.0828566215146e-44
||| Claymore Mine | ExplodeOnContact = false
||| Claymore Mine | ExplodeOnFuse = false
||| Claymore Mine | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Claymore Mine | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Claymore Mine | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Claymore Mine | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Claymore Mine | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Claymore Mine | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Claymore Mine | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Claymore Mine | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Claymore Mine | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Claymore Mine | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Claymore Mine | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Claymore Mine | JammerPackRange = nil
Failed to get property with id 7011
||| Claymore Mine | PackBuffAmount = nil
Failed to get property with id 7012
||| Claymore Mine | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Claymore Mine | DeployableRange = nil
Failed to get property with id 8001
||| Claymore Mine | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Claymore Mine | DeployableMinProximity = nil
Failed to get property with id 8003
||| Claymore Mine | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Claymore Mine | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Claymore Mine | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Claymore Mine | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Claymore Mine | ForcefieldMaxDamageSpeed = nil
||| Claymore Mine | MineDeployTime = 4.0
||| Claymore Mine | MineMaxAllowed = 2
||| Claymore Mine | MineCollisionCylinderRadius = 150.0
||| Claymore Mine | MineCollisionCylinderHeight = 50.0
||| Claymore Mine | ClaymoreDetonationAngle = 95.0
||| Claymore Mine | PrismMineTripDistance = -nan
||| Explosive Nitron | SpareAmmo = 2
||| Explosive Nitron | AmmoPerShot = 1
||| Explosive Nitron | LowAmmoCutoff = 0
||| Explosive Nitron | Damage = 560.0
||| Explosive Nitron | DirectHitMultiplier = 1.25
||| Explosive Nitron | EnergyDrain = 0.0
||| Explosive Nitron | DamageAgainstArmorMultiplier = 1.0
||| Explosive Nitron | DamageAgainstGeneratorMultiplier = 1.0
||| Explosive Nitron | DamageAgainstBaseTurretMultiplier = 1.0
||| Explosive Nitron | DamageAgainstBaseSensorMultiplier = 1.0
||| Explosive Nitron | DamageAgainstGravCycleMultiplier = 1.5
||| Explosive Nitron | DamageAgainstBeowulfMultiplier = 1.5
||| Explosive Nitron | DamageAgainstShrikeMultiplier = 1.5
||| Explosive Nitron | ReloadTime = 0.0
||| Explosive Nitron | FireInterval = 0.20000000298023
||| Explosive Nitron | HoldToFire = true
||| Explosive Nitron | CanZoom = true
||| Explosive Nitron | ReloadSingle = false
||| Explosive Nitron | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Explosive Nitron | BurstShotCount = nil
Failed to get property with id 2007
||| Explosive Nitron | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Explosive Nitron | SpinupTime = nil
Failed to get property with id 2009
||| Explosive Nitron | ShotgunShotCount = nil
||| Explosive Nitron | ShotEnergyCost = 0
||| Explosive Nitron | ImpactMomentum = 110000.0
||| Explosive Nitron | SelfImpactMomentumMultiplier = 1.5
||| Explosive Nitron | SelfImpactExtraZMomentum = 0.0
||| Explosive Nitron | ExplosiveRadius = 400.0
||| Explosive Nitron | BulletDamageRange = 6000.0
||| Explosive Nitron | MaxDamageRangeProportion = 0.0
||| Explosive Nitron | MinDamageRangeProportion = 1.0
||| Explosive Nitron | MinDamageProportion = 0.20000000298023
||| Explosive Nitron | DoesImpulseFlag = true
||| Explosive Nitron | DoesGibOnKill = false
||| Explosive Nitron | GibImpulseRadius = 100.0
||| Explosive Nitron | GibStrength = 40.0
||| Explosive Nitron | ProjectileSpeed = 2500.0
||| Explosive Nitron | ProjectileMaxSpeed = 2500.0
||| Explosive Nitron | CollisionSize = 20.0
||| Explosive Nitron | ProjectileInheritance = 0.20000000298023
||| Explosive Nitron | ProjectileLifespan = 8.0
||| Explosive Nitron | ProjectileGravity = 0.5
||| Explosive Nitron | ProjectileTerminalVelocity = 7000.0
||| Explosive Nitron | ProjectileBounceDamping = 0.55000001192093
||| Explosive Nitron | HitscanRange = 2000.0
||| Explosive Nitron | FireOffsetX = 0.0
||| Explosive Nitron | FireOffsetY = 0.0
||| Explosive Nitron | FireOffsetZ = 0.0
||| Explosive Nitron | FractalDuration = 1.6195226741741e-40
||| Explosive Nitron | FractalShardInterval = 1.4930442773811e-39
||| Explosive Nitron | FractalAscentTime = 6.428540782998e-40
||| Explosive Nitron | FractalAscentHeight = 1.0054240237476e-28
||| Explosive Nitron | FractalShardDistance = 7.11663438092e-41
||| Explosive Nitron | FractalShardHeight = 9.396314093298e-35
||| Explosive Nitron | FractalShardDamage = 3
||| Explosive Nitron | FractalShardDamageRadius = 0.0
||| Explosive Nitron | MeleeDamageRadius = 0.0
||| Explosive Nitron | MeleeConeAngle = 0.0
||| Explosive Nitron | Accuracy = 1.0
||| Explosive Nitron | AccuracyLossOnShot = 0.0
||| Explosive Nitron | AccuracyLossOnJump = 0.0
||| Explosive Nitron | AccuracyLossMax = 0.0
||| Explosive Nitron | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Explosive Nitron | ShotgunUseGOTYSpread = nil
||| Explosive Nitron | ThrowDelay = 0.69999998807907
||| Explosive Nitron | ThrowPullPinTime = 0.15000000596046
||| Explosive Nitron | StuckDamageMultiplier = 0.0
||| Explosive Nitron | StuckMomentumMultiplier = 0.0
||| Explosive Nitron | FuseTimer = 0.0
||| Explosive Nitron | ExplodeOnContact = false
||| Explosive Nitron | ExplodeOnFuse = false
||| Explosive Nitron | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Explosive Nitron | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Explosive Nitron | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Explosive Nitron | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Explosive Nitron | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Explosive Nitron | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Explosive Nitron | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Explosive Nitron | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Explosive Nitron | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Explosive Nitron | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Explosive Nitron | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Explosive Nitron | JammerPackRange = nil
Failed to get property with id 7011
||| Explosive Nitron | PackBuffAmount = nil
Failed to get property with id 7012
||| Explosive Nitron | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Explosive Nitron | DeployableRange = nil
Failed to get property with id 8001
||| Explosive Nitron | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Explosive Nitron | DeployableMinProximity = nil
Failed to get property with id 8003
||| Explosive Nitron | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Explosive Nitron | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Explosive Nitron | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Explosive Nitron | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Explosive Nitron | ForcefieldMaxDamageSpeed = nil
||| Explosive Nitron | MineDeployTime = 0.0
||| Explosive Nitron | MineMaxAllowed = 0
||| Explosive Nitron | MineCollisionCylinderRadius = 0.0
||| Explosive Nitron | MineCollisionCylinderHeight = 0.0
||| Explosive Nitron | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Explosive Nitron | PrismMineTripDistance = 1.0054240237476e-28
||| Prism Mine | SpareAmmo = 1
||| Prism Mine | AmmoPerShot = 1
||| Prism Mine | LowAmmoCutoff = 0
||| Prism Mine | Damage = 250.0
||| Prism Mine | DirectHitMultiplier = 1.0
||| Prism Mine | EnergyDrain = 0.0
||| Prism Mine | DamageAgainstArmorMultiplier = 1.0
||| Prism Mine | DamageAgainstGeneratorMultiplier = 1.0
||| Prism Mine | DamageAgainstBaseTurretMultiplier = 1.0
||| Prism Mine | DamageAgainstBaseSensorMultiplier = 1.0
||| Prism Mine | DamageAgainstGravCycleMultiplier = 2.0
||| Prism Mine | DamageAgainstBeowulfMultiplier = 2.0
||| Prism Mine | DamageAgainstShrikeMultiplier = 2.0
||| Prism Mine | ReloadTime = 0.0
||| Prism Mine | FireInterval = 0.20000000298023
||| Prism Mine | HoldToFire = true
||| Prism Mine | CanZoom = true
||| Prism Mine | ReloadSingle = false
||| Prism Mine | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Prism Mine | BurstShotCount = nil
Failed to get property with id 2007
||| Prism Mine | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Prism Mine | SpinupTime = nil
Failed to get property with id 2009
||| Prism Mine | ShotgunShotCount = nil
||| Prism Mine | ShotEnergyCost = 0
||| Prism Mine | ImpactMomentum = 85000.0
||| Prism Mine | SelfImpactMomentumMultiplier = 1.5
||| Prism Mine | SelfImpactExtraZMomentum = 0.0
||| Prism Mine | ExplosiveRadius = 500.0
||| Prism Mine | BulletDamageRange = 6000.0
||| Prism Mine | MaxDamageRangeProportion = 0.80000001192093
||| Prism Mine | MinDamageRangeProportion = 0.89999997615814
||| Prism Mine | MinDamageProportion = 1.0
||| Prism Mine | DoesImpulseFlag = true
||| Prism Mine | DoesGibOnKill = true
||| Prism Mine | GibImpulseRadius = 100.0
||| Prism Mine | GibStrength = 40.0
||| Prism Mine | ProjectileSpeed = 20.0
||| Prism Mine | ProjectileMaxSpeed = 20.0
||| Prism Mine | CollisionSize = 20.0
||| Prism Mine | ProjectileInheritance = 0.20000000298023
||| Prism Mine | ProjectileLifespan = 0.0
||| Prism Mine | ProjectileGravity = 10.0
||| Prism Mine | ProjectileTerminalVelocity = 3500.0
||| Prism Mine | ProjectileBounceDamping = 0.20000000298023
||| Prism Mine | HitscanRange = 2000.0
||| Prism Mine | FireOffsetX = 0.0
||| Prism Mine | FireOffsetY = 0.0
||| Prism Mine | FireOffsetZ = 0.0
||| Prism Mine | FractalDuration = 5.0446744715693e-44
||| Prism Mine | FractalShardInterval = 3.0070654322537e-38
||| Prism Mine | FractalAscentTime = 0.0
||| Prism Mine | FractalAscentHeight = 512.0
||| Prism Mine | FractalShardDistance = 0.0
||| Prism Mine | FractalShardHeight = 0.0
||| Prism Mine | FractalShardDamage = 7602286
||| Prism Mine | FractalShardDamageRadius = 7.3469041523687e-39
||| Prism Mine | MeleeDamageRadius = 0.0
||| Prism Mine | MeleeConeAngle = 0.0
||| Prism Mine | Accuracy = 1.0
||| Prism Mine | AccuracyLossOnShot = 0.0
||| Prism Mine | AccuracyLossOnJump = 0.0
||| Prism Mine | AccuracyLossMax = 0.0
||| Prism Mine | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Prism Mine | ShotgunUseGOTYSpread = nil
||| Prism Mine | ThrowDelay = 0.69999998807907
||| Prism Mine | ThrowPullPinTime = 0.20000000298023
||| Prism Mine | StuckDamageMultiplier = 0.20000000298023
||| Prism Mine | StuckMomentumMultiplier = 0.0
||| Prism Mine | FuseTimer = 2.8025969286496e-44
||| Prism Mine | ExplodeOnContact = false
||| Prism Mine | ExplodeOnFuse = false
||| Prism Mine | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Prism Mine | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Prism Mine | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Prism Mine | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Prism Mine | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Prism Mine | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Prism Mine | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Prism Mine | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Prism Mine | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Prism Mine | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Prism Mine | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Prism Mine | JammerPackRange = nil
Failed to get property with id 7011
||| Prism Mine | PackBuffAmount = nil
Failed to get property with id 7012
||| Prism Mine | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Prism Mine | DeployableRange = nil
Failed to get property with id 8001
||| Prism Mine | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Prism Mine | DeployableMinProximity = nil
Failed to get property with id 8003
||| Prism Mine | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Prism Mine | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Prism Mine | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Prism Mine | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Prism Mine | ForcefieldMaxDamageSpeed = nil
||| Prism Mine | MineDeployTime = 4.0
||| Prism Mine | MineMaxAllowed = 2
||| Prism Mine | MineCollisionCylinderRadius = 300.0
||| Prism Mine | MineCollisionCylinderHeight = 100.0
||| Prism Mine | ClaymoreDetonationAngle = 3.0070654322537e-38
||| Prism Mine | PrismMineTripDistance = 512.0
||| T5 Grenade | SpareAmmo = 2
||| T5 Grenade | AmmoPerShot = 1
||| T5 Grenade | LowAmmoCutoff = 0
||| T5 Grenade | Damage = 800.0
||| T5 Grenade | DirectHitMultiplier = 1.0
||| T5 Grenade | EnergyDrain = 0.0
||| T5 Grenade | DamageAgainstArmorMultiplier = 2.0
||| T5 Grenade | DamageAgainstGeneratorMultiplier = 2.0
||| T5 Grenade | DamageAgainstBaseTurretMultiplier = 1.5
||| T5 Grenade | DamageAgainstBaseSensorMultiplier = 1.5
||| T5 Grenade | DamageAgainstGravCycleMultiplier = 2.0
||| T5 Grenade | DamageAgainstBeowulfMultiplier = 2.0
||| T5 Grenade | DamageAgainstShrikeMultiplier = 2.0
||| T5 Grenade | ReloadTime = 0.0
||| T5 Grenade | FireInterval = 0.20000000298023
||| T5 Grenade | HoldToFire = true
||| T5 Grenade | CanZoom = true
||| T5 Grenade | ReloadSingle = false
||| T5 Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| T5 Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| T5 Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| T5 Grenade | SpinupTime = nil
Failed to get property with id 2009
||| T5 Grenade | ShotgunShotCount = nil
||| T5 Grenade | ShotEnergyCost = 0
||| T5 Grenade | ImpactMomentum = 85000.0
||| T5 Grenade | SelfImpactMomentumMultiplier = 1.5
||| T5 Grenade | SelfImpactExtraZMomentum = 0.0
||| T5 Grenade | ExplosiveRadius = 600.0
||| T5 Grenade | BulletDamageRange = 6000.0
||| T5 Grenade | MaxDamageRangeProportion = 0.0
||| T5 Grenade | MinDamageRangeProportion = 0.89999997615814
||| T5 Grenade | MinDamageProportion = 0.0
||| T5 Grenade | DoesImpulseFlag = true
||| T5 Grenade | DoesGibOnKill = true
||| T5 Grenade | GibImpulseRadius = 100.0
||| T5 Grenade | GibStrength = 40.0
||| T5 Grenade | ProjectileSpeed = 1200.0
||| T5 Grenade | ProjectileMaxSpeed = 1600.0
||| T5 Grenade | CollisionSize = 42.0
||| T5 Grenade | ProjectileInheritance = 0.20000000298023
||| T5 Grenade | ProjectileLifespan = 8.0
||| T5 Grenade | ProjectileGravity = 0.5
||| T5 Grenade | ProjectileTerminalVelocity = 7000.0
||| T5 Grenade | ProjectileBounceDamping = 0.55000001192093
||| T5 Grenade | HitscanRange = 2000.0
||| T5 Grenade | FireOffsetX = 0.0
||| T5 Grenade | FireOffsetY = 0.0
||| T5 Grenade | FireOffsetZ = 0.0
||| T5 Grenade | FractalDuration = 1.6080880787052e-40
||| T5 Grenade | FractalShardInterval = 1.4930442773811e-39
||| T5 Grenade | FractalAscentTime = 6.428540782998e-40
||| T5 Grenade | FractalAscentHeight = 4.9418247272115e-09
||| T5 Grenade | FractalShardDistance = 7.0507733530967e-41
||| T5 Grenade | FractalShardHeight = 9.396314093298e-35
||| T5 Grenade | FractalShardDamage = 3
||| T5 Grenade | FractalShardDamageRadius = 0.0
||| T5 Grenade | MeleeDamageRadius = 0.0
||| T5 Grenade | MeleeConeAngle = 0.0
||| T5 Grenade | Accuracy = 1.0
||| T5 Grenade | AccuracyLossOnShot = 0.0
||| T5 Grenade | AccuracyLossOnJump = 0.0
||| T5 Grenade | AccuracyLossMax = 0.0
||| T5 Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| T5 Grenade | ShotgunUseGOTYSpread = nil
||| T5 Grenade | ThrowDelay = 0.69999998807907
||| T5 Grenade | ThrowPullPinTime = 0.15000000596046
||| T5 Grenade | StuckDamageMultiplier = 1.0
||| T5 Grenade | StuckMomentumMultiplier = 1.0
||| T5 Grenade | FuseTimer = 2.0
||| T5 Grenade | ExplodeOnContact = false
||| T5 Grenade | ExplodeOnFuse = true
||| T5 Grenade | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| T5 Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| T5 Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| T5 Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| T5 Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| T5 Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| T5 Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| T5 Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| T5 Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| T5 Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| T5 Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| T5 Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| T5 Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| T5 Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| T5 Grenade | DeployableRange = nil
Failed to get property with id 8001
||| T5 Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| T5 Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| T5 Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| T5 Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| T5 Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| T5 Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| T5 Grenade | ForcefieldMaxDamageSpeed = nil
||| T5 Grenade | MineDeployTime = 0.0
||| T5 Grenade | MineMaxAllowed = 0
||| T5 Grenade | MineCollisionCylinderRadius = 0.0
||| T5 Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| T5 Grenade | ClaymoreDetonationAngle = 1.4930442773811e-39
||| T5 Grenade | PrismMineTripDistance = 4.9418247272115e-09
||| Chaff Grenade | SpareAmmo = 2
||| Chaff Grenade | AmmoPerShot = 1
||| Chaff Grenade | LowAmmoCutoff = 0
||| Chaff Grenade | Damage = 1.0
||| Chaff Grenade | DirectHitMultiplier = 1.0
||| Chaff Grenade | EnergyDrain = 0.0
||| Chaff Grenade | DamageAgainstArmorMultiplier = 0.5
||| Chaff Grenade | DamageAgainstGeneratorMultiplier = 1.25
||| Chaff Grenade | DamageAgainstBaseTurretMultiplier = 1.2000000476837
||| Chaff Grenade | DamageAgainstBaseSensorMultiplier = 1.2000000476837
||| Chaff Grenade | DamageAgainstGravCycleMultiplier = 1.2000000476837
||| Chaff Grenade | DamageAgainstBeowulfMultiplier = 1.2000000476837
||| Chaff Grenade | DamageAgainstShrikeMultiplier = 2.5
||| Chaff Grenade | ReloadTime = 0.0
||| Chaff Grenade | FireInterval = 0.20000000298023
||| Chaff Grenade | HoldToFire = true
||| Chaff Grenade | CanZoom = true
||| Chaff Grenade | ReloadSingle = false
||| Chaff Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Chaff Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| Chaff Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Chaff Grenade | SpinupTime = nil
Failed to get property with id 2009
||| Chaff Grenade | ShotgunShotCount = nil
||| Chaff Grenade | ShotEnergyCost = 0
||| Chaff Grenade | ImpactMomentum = 0.0
||| Chaff Grenade | SelfImpactMomentumMultiplier = 1.5
||| Chaff Grenade | SelfImpactExtraZMomentum = 0.0
||| Chaff Grenade | ExplosiveRadius = 200.0
||| Chaff Grenade | BulletDamageRange = 6000.0
||| Chaff Grenade | MaxDamageRangeProportion = 0.5
||| Chaff Grenade | MinDamageRangeProportion = 0.89999997615814
||| Chaff Grenade | MinDamageProportion = 0.30000001192093
||| Chaff Grenade | DoesImpulseFlag = true
||| Chaff Grenade | DoesGibOnKill = true
||| Chaff Grenade | GibImpulseRadius = 100.0
||| Chaff Grenade | GibStrength = 40.0
||| Chaff Grenade | ProjectileSpeed = 20.0
||| Chaff Grenade | ProjectileMaxSpeed = 7000.0
||| Chaff Grenade | CollisionSize = 42.0
||| Chaff Grenade | ProjectileInheritance = 1.0
||| Chaff Grenade | ProjectileLifespan = 8.0
||| Chaff Grenade | ProjectileGravity = 10.0
||| Chaff Grenade | ProjectileTerminalVelocity = 7000.0
||| Chaff Grenade | ProjectileBounceDamping = 0.55000001192093
||| Chaff Grenade | HitscanRange = 2000.0
||| Chaff Grenade | FireOffsetX = 0.0
||| Chaff Grenade | FireOffsetY = 0.0
||| Chaff Grenade | FireOffsetZ = 0.0
||| Chaff Grenade | FractalDuration = 1.6129645973611e-40
||| Chaff Grenade | FractalShardInterval = 1.4930442773811e-39
||| Chaff Grenade | FractalAscentTime = 6.428540782998e-40
||| Chaff Grenade | FractalAscentHeight = 9.7497121946693e-29
||| Chaff Grenade | FractalShardDistance = 7.0755763359153e-41
||| Chaff Grenade | FractalShardHeight = 9.396314093298e-35
||| Chaff Grenade | FractalShardDamage = 3
||| Chaff Grenade | FractalShardDamageRadius = 0.0
||| Chaff Grenade | MeleeDamageRadius = 0.0
||| Chaff Grenade | MeleeConeAngle = 0.0
||| Chaff Grenade | Accuracy = 1.0
||| Chaff Grenade | AccuracyLossOnShot = 0.0
||| Chaff Grenade | AccuracyLossOnJump = 0.0
||| Chaff Grenade | AccuracyLossMax = 0.0
||| Chaff Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Chaff Grenade | ShotgunUseGOTYSpread = nil
||| Chaff Grenade | ThrowDelay = 0.69999998807907
||| Chaff Grenade | ThrowPullPinTime = 0.15000000596046
||| Chaff Grenade | StuckDamageMultiplier = 1.0
||| Chaff Grenade | StuckMomentumMultiplier = 1.0
||| Chaff Grenade | FuseTimer = 0.0099999997764826
||| Chaff Grenade | ExplodeOnContact = false
||| Chaff Grenade | ExplodeOnFuse = true
||| Chaff Grenade | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Chaff Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Chaff Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Chaff Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Chaff Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Chaff Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Chaff Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Chaff Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Chaff Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Chaff Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Chaff Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Chaff Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| Chaff Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| Chaff Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Chaff Grenade | DeployableRange = nil
Failed to get property with id 8001
||| Chaff Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Chaff Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| Chaff Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Chaff Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Chaff Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Chaff Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Chaff Grenade | ForcefieldMaxDamageSpeed = nil
||| Chaff Grenade | MineDeployTime = 0.0
||| Chaff Grenade | MineMaxAllowed = 0
||| Chaff Grenade | MineCollisionCylinderRadius = 0.0
||| Chaff Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Chaff Grenade | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Chaff Grenade | PrismMineTripDistance = 9.7497121946693e-29
||| Thrust Pack | SpareAmmo = 0
||| Thrust Pack | AmmoPerShot = 0
||| Thrust Pack | LowAmmoCutoff = 0
||| Thrust Pack | Damage = 0.0
Failed to get property with id 3002
||| Thrust Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Thrust Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Thrust Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Thrust Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Thrust Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Thrust Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Thrust Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Thrust Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Thrust Pack | DamageAgainstShrikeMultiplier = nil
||| Thrust Pack | ReloadTime = 1.7999999523163
||| Thrust Pack | FireInterval = 1.0
||| Thrust Pack | HoldToFire = true
||| Thrust Pack | CanZoom = true
||| Thrust Pack | ReloadSingle = false
||| Thrust Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Thrust Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Thrust Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Thrust Pack | SpinupTime = nil
Failed to get property with id 2009
||| Thrust Pack | ShotgunShotCount = nil
||| Thrust Pack | ShotEnergyCost = 0
||| Thrust Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Thrust Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Thrust Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Thrust Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Thrust Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Thrust Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Thrust Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Thrust Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Thrust Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Thrust Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Thrust Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Thrust Pack | GibStrength = nil
Failed to get property with id 4000
||| Thrust Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Thrust Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Thrust Pack | CollisionSize = nil
Failed to get property with id 4003
||| Thrust Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Thrust Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Thrust Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Thrust Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Thrust Pack | ProjectileBounceDamping = nil
||| Thrust Pack | HitscanRange = 2000.0
||| Thrust Pack | FireOffsetX = 0.0
||| Thrust Pack | FireOffsetY = 0.0
||| Thrust Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Thrust Pack | FractalDuration = nil
Failed to get property with id 3031
||| Thrust Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Thrust Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Thrust Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Thrust Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Thrust Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Thrust Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Thrust Pack | FractalShardDamageRadius = nil
||| Thrust Pack | MeleeDamageRadius = 0.0
||| Thrust Pack | MeleeConeAngle = 0.0
||| Thrust Pack | Accuracy = 1.0
||| Thrust Pack | AccuracyLossOnShot = 0.10000000149012
||| Thrust Pack | AccuracyLossOnJump = 0.30000001192093
||| Thrust Pack | AccuracyLossMax = 0.30000001192093
||| Thrust Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Thrust Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Thrust Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Thrust Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Thrust Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Thrust Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Thrust Pack | FuseTimer = nil
Failed to get property with id 6005
||| Thrust Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Thrust Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Thrust Pack | MustBounceBeforeExplode = nil
||| Thrust Pack | PackSustainedEnergyCost = 0.0
||| Thrust Pack | ThrustPackEnergyCost = 80.0
||| Thrust Pack | ThrustPackImpulse = 1150.0
||| Thrust Pack | ThrustPackSidewaysImpulse = 0.0
||| Thrust Pack | ThrustPackMinVerticalImpulse = 250.0
||| Thrust Pack | ThrustPackCooldownTime = 0.80000001192093
||| Thrust Pack | ThrustPackSpeedRangeStart = 1100.0
||| Thrust Pack | ThrustPackSpeedRangeEnd = 1800.0
||| Thrust Pack | ThrustPackSpeedCapReduction = 0.20000000298023
Failed to get property with id 7009
||| Thrust Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Thrust Pack | JammerPackRange = nil
Failed to get property with id 7011
||| Thrust Pack | PackBuffAmount = nil
Failed to get property with id 7012
||| Thrust Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Thrust Pack | DeployableRange = nil
Failed to get property with id 8001
||| Thrust Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Thrust Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Thrust Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Thrust Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Thrust Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Thrust Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Thrust Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Thrust Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Thrust Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Thrust Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Thrust Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Thrust Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Thrust Pack | PrismMineTripDistance = nil
||| Light Energy Pack | SpareAmmo = 0
||| Light Energy Pack | AmmoPerShot = 0
||| Light Energy Pack | LowAmmoCutoff = 0
||| Light Energy Pack | Damage = 0.0
Failed to get property with id 3002
||| Light Energy Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Light Energy Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Light Energy Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Light Energy Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Light Energy Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Light Energy Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Light Energy Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Light Energy Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Light Energy Pack | DamageAgainstShrikeMultiplier = nil
||| Light Energy Pack | ReloadTime = 1.7999999523163
||| Light Energy Pack | FireInterval = 1.0
||| Light Energy Pack | HoldToFire = true
||| Light Energy Pack | CanZoom = true
||| Light Energy Pack | ReloadSingle = false
||| Light Energy Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Light Energy Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Light Energy Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Light Energy Pack | SpinupTime = nil
Failed to get property with id 2009
||| Light Energy Pack | ShotgunShotCount = nil
||| Light Energy Pack | ShotEnergyCost = 0
||| Light Energy Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Light Energy Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Light Energy Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Light Energy Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Light Energy Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Light Energy Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Light Energy Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Light Energy Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Light Energy Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Light Energy Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Light Energy Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Light Energy Pack | GibStrength = nil
Failed to get property with id 4000
||| Light Energy Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Light Energy Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Light Energy Pack | CollisionSize = nil
Failed to get property with id 4003
||| Light Energy Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Light Energy Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Light Energy Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Light Energy Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Light Energy Pack | ProjectileBounceDamping = nil
||| Light Energy Pack | HitscanRange = 2000.0
||| Light Energy Pack | FireOffsetX = 0.0
||| Light Energy Pack | FireOffsetY = 0.0
||| Light Energy Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Light Energy Pack | FractalDuration = nil
Failed to get property with id 3031
||| Light Energy Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Light Energy Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Light Energy Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Light Energy Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Light Energy Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Light Energy Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Light Energy Pack | FractalShardDamageRadius = nil
||| Light Energy Pack | MeleeDamageRadius = 0.0
||| Light Energy Pack | MeleeConeAngle = 0.0
||| Light Energy Pack | Accuracy = 1.0
||| Light Energy Pack | AccuracyLossOnShot = 0.10000000149012
||| Light Energy Pack | AccuracyLossOnJump = 0.30000001192093
||| Light Energy Pack | AccuracyLossMax = 0.30000001192093
||| Light Energy Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Light Energy Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Light Energy Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Light Energy Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Light Energy Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Light Energy Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Light Energy Pack | FuseTimer = nil
Failed to get property with id 6005
||| Light Energy Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Light Energy Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Light Energy Pack | MustBounceBeforeExplode = nil
||| Light Energy Pack | PackSustainedEnergyCost = 0.0
Failed to get property with id 7001
||| Light Energy Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Light Energy Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Light Energy Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Light Energy Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Light Energy Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Light Energy Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Light Energy Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Light Energy Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Light Energy Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Light Energy Pack | JammerPackRange = nil
||| Light Energy Pack | PackBuffAmount = 0.0
Failed to get property with id 7012
||| Light Energy Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Light Energy Pack | DeployableRange = nil
Failed to get property with id 8001
||| Light Energy Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Light Energy Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Light Energy Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Light Energy Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Light Energy Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Light Energy Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Light Energy Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Light Energy Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Light Energy Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Light Energy Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Light Energy Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Light Energy Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Light Energy Pack | PrismMineTripDistance = nil
||| Stealth Pack | SpareAmmo = 0
||| Stealth Pack | AmmoPerShot = 0
||| Stealth Pack | LowAmmoCutoff = 0
||| Stealth Pack | Damage = 0.0
Failed to get property with id 3002
||| Stealth Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Stealth Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Stealth Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Stealth Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Stealth Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Stealth Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Stealth Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Stealth Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Stealth Pack | DamageAgainstShrikeMultiplier = nil
||| Stealth Pack | ReloadTime = 1.7999999523163
||| Stealth Pack | FireInterval = 0.30000001192093
||| Stealth Pack | HoldToFire = true
||| Stealth Pack | CanZoom = true
||| Stealth Pack | ReloadSingle = false
||| Stealth Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Stealth Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Stealth Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Stealth Pack | SpinupTime = nil
Failed to get property with id 2009
||| Stealth Pack | ShotgunShotCount = nil
||| Stealth Pack | ShotEnergyCost = 0
||| Stealth Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Stealth Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Stealth Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Stealth Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Stealth Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Stealth Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Stealth Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Stealth Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Stealth Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Stealth Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Stealth Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Stealth Pack | GibStrength = nil
Failed to get property with id 4000
||| Stealth Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Stealth Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Stealth Pack | CollisionSize = nil
Failed to get property with id 4003
||| Stealth Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Stealth Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Stealth Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Stealth Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Stealth Pack | ProjectileBounceDamping = nil
||| Stealth Pack | HitscanRange = 2000.0
||| Stealth Pack | FireOffsetX = 0.0
||| Stealth Pack | FireOffsetY = 0.0
||| Stealth Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Stealth Pack | FractalDuration = nil
Failed to get property with id 3031
||| Stealth Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Stealth Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Stealth Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Stealth Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Stealth Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Stealth Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Stealth Pack | FractalShardDamageRadius = nil
||| Stealth Pack | MeleeDamageRadius = 0.0
||| Stealth Pack | MeleeConeAngle = 0.0
||| Stealth Pack | Accuracy = 1.0
||| Stealth Pack | AccuracyLossOnShot = 0.10000000149012
||| Stealth Pack | AccuracyLossOnJump = 0.30000001192093
||| Stealth Pack | AccuracyLossMax = 0.30000001192093
||| Stealth Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Stealth Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Stealth Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Stealth Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Stealth Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Stealth Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Stealth Pack | FuseTimer = nil
Failed to get property with id 6005
||| Stealth Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Stealth Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Stealth Pack | MustBounceBeforeExplode = nil
||| Stealth Pack | PackSustainedEnergyCost = 6.25
Failed to get property with id 7001
||| Stealth Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Stealth Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Stealth Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Stealth Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Stealth Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Stealth Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Stealth Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Stealth Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Stealth Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Stealth Pack | JammerPackRange = nil
||| Stealth Pack | PackBuffAmount = 1.0
Failed to get property with id 7012
||| Stealth Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Stealth Pack | DeployableRange = nil
Failed to get property with id 8001
||| Stealth Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Stealth Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Stealth Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Stealth Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Stealth Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Stealth Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Stealth Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Stealth Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Stealth Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Stealth Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Stealth Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Stealth Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Stealth Pack | PrismMineTripDistance = nil
||| Light Utility Pack | SpareAmmo = 0
||| Light Utility Pack | AmmoPerShot = 0
||| Light Utility Pack | LowAmmoCutoff = 0
||| Light Utility Pack | Damage = 0.0
Failed to get property with id 3002
||| Light Utility Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Light Utility Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Light Utility Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Light Utility Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Light Utility Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Light Utility Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Light Utility Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Light Utility Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Light Utility Pack | DamageAgainstShrikeMultiplier = nil
||| Light Utility Pack | ReloadTime = 1.7999999523163
||| Light Utility Pack | FireInterval = 1.0
||| Light Utility Pack | HoldToFire = true
||| Light Utility Pack | CanZoom = true
||| Light Utility Pack | ReloadSingle = false
||| Light Utility Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Light Utility Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Light Utility Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Light Utility Pack | SpinupTime = nil
Failed to get property with id 2009
||| Light Utility Pack | ShotgunShotCount = nil
||| Light Utility Pack | ShotEnergyCost = 0
||| Light Utility Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Light Utility Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Light Utility Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Light Utility Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Light Utility Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Light Utility Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Light Utility Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Light Utility Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Light Utility Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Light Utility Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Light Utility Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Light Utility Pack | GibStrength = nil
Failed to get property with id 4000
||| Light Utility Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Light Utility Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Light Utility Pack | CollisionSize = nil
Failed to get property with id 4003
||| Light Utility Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Light Utility Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Light Utility Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Light Utility Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Light Utility Pack | ProjectileBounceDamping = nil
||| Light Utility Pack | HitscanRange = 2000.0
||| Light Utility Pack | FireOffsetX = 0.0
||| Light Utility Pack | FireOffsetY = 0.0
||| Light Utility Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Light Utility Pack | FractalDuration = nil
Failed to get property with id 3031
||| Light Utility Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Light Utility Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Light Utility Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Light Utility Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Light Utility Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Light Utility Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Light Utility Pack | FractalShardDamageRadius = nil
||| Light Utility Pack | MeleeDamageRadius = 0.0
||| Light Utility Pack | MeleeConeAngle = 0.0
||| Light Utility Pack | Accuracy = 1.0
||| Light Utility Pack | AccuracyLossOnShot = 0.10000000149012
||| Light Utility Pack | AccuracyLossOnJump = 0.30000001192093
||| Light Utility Pack | AccuracyLossMax = 0.30000001192093
||| Light Utility Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Light Utility Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Light Utility Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Light Utility Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Light Utility Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Light Utility Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Light Utility Pack | FuseTimer = nil
Failed to get property with id 6005
||| Light Utility Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Light Utility Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Light Utility Pack | MustBounceBeforeExplode = nil
||| Light Utility Pack | PackSustainedEnergyCost = 0.0
Failed to get property with id 7001
||| Light Utility Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Light Utility Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Light Utility Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Light Utility Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Light Utility Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Light Utility Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Light Utility Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Light Utility Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Light Utility Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Light Utility Pack | JammerPackRange = nil
||| Light Utility Pack | PackBuffAmount = 0.0
Failed to get property with id 7012
||| Light Utility Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Light Utility Pack | DeployableRange = nil
Failed to get property with id 8001
||| Light Utility Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Light Utility Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Light Utility Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Light Utility Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Light Utility Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Light Utility Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Light Utility Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Light Utility Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Light Utility Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Light Utility Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Light Utility Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Light Utility Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Light Utility Pack | PrismMineTripDistance = nil
||| Spinfusor | SpareAmmo = 24
||| Spinfusor | AmmoPerShot = 1
||| Spinfusor | LowAmmoCutoff = 5
||| Spinfusor | Damage = 700.0
||| Spinfusor | DirectHitMultiplier = 1.25
||| Spinfusor | EnergyDrain = 0.0
||| Spinfusor | DamageAgainstArmorMultiplier = 1.0
||| Spinfusor | DamageAgainstGeneratorMultiplier = 1.0
||| Spinfusor | DamageAgainstBaseTurretMultiplier = 1.0
||| Spinfusor | DamageAgainstBaseSensorMultiplier = 1.0
||| Spinfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Spinfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Spinfusor | DamageAgainstShrikeMultiplier = 1.0
||| Spinfusor | ReloadTime = 1.25
||| Spinfusor | FireInterval = 0.46000000834465
||| Spinfusor | HoldToFire = true
||| Spinfusor | CanZoom = true
||| Spinfusor | ReloadSingle = true
||| Spinfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Spinfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Spinfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Spinfusor | SpinupTime = nil
Failed to get property with id 2009
||| Spinfusor | ShotgunShotCount = nil
||| Spinfusor | ShotEnergyCost = 0
||| Spinfusor | ImpactMomentum = 85000.0
||| Spinfusor | SelfImpactMomentumMultiplier = 1.5
||| Spinfusor | SelfImpactExtraZMomentum = 0.0
||| Spinfusor | ExplosiveRadius = 360.0
||| Spinfusor | BulletDamageRange = 6000.0
||| Spinfusor | MaxDamageRangeProportion = 0.0
||| Spinfusor | MinDamageRangeProportion = 1.0
||| Spinfusor | MinDamageProportion = 0.30000001192093
||| Spinfusor | DoesImpulseFlag = true
||| Spinfusor | DoesGibOnKill = false
||| Spinfusor | GibImpulseRadius = 100.0
||| Spinfusor | GibStrength = 40.0
||| Spinfusor | ProjectileSpeed = 3920.0
||| Spinfusor | ProjectileMaxSpeed = 8000.0
||| Spinfusor | CollisionSize = 15.0
||| Spinfusor | ProjectileInheritance = 0.5
||| Spinfusor | ProjectileLifespan = 6.0
||| Spinfusor | ProjectileGravity = 1.0
||| Spinfusor | ProjectileTerminalVelocity = 3500.0
||| Spinfusor | ProjectileBounceDamping = 0.55000001192093
||| Spinfusor | HitscanRange = 2000.0
||| Spinfusor | FireOffsetX = 3.0
||| Spinfusor | FireOffsetY = 10.0
||| Spinfusor | FireOffsetZ = -7.0
||| Spinfusor | FractalDuration = 1.6063644815941e-40
||| Spinfusor | FractalShardInterval = 1.4930442773811e-39
||| Spinfusor | FractalAscentTime = 6.428540782998e-40
||| Spinfusor | FractalAscentHeight = 1.3709549300786e-21
||| Spinfusor | FractalShardDistance = 7.0429260816965e-41
||| Spinfusor | FractalShardHeight = 9.396314093298e-35
||| Spinfusor | FractalShardDamage = 3
||| Spinfusor | FractalShardDamageRadius = 0.0
||| Spinfusor | MeleeDamageRadius = 0.0
||| Spinfusor | MeleeConeAngle = 0.0
||| Spinfusor | Accuracy = 1.0
||| Spinfusor | AccuracyLossOnShot = 0.0
||| Spinfusor | AccuracyLossOnJump = 0.30000001192093
||| Spinfusor | AccuracyLossMax = 0.0
||| Spinfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Spinfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Spinfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Spinfusor | ThrowPullPinTime = nil
||| Spinfusor | StuckDamageMultiplier = 0.0
||| Spinfusor | StuckMomentumMultiplier = 0.0
||| Spinfusor | FuseTimer = 0.0
||| Spinfusor | ExplodeOnContact = false
||| Spinfusor | ExplodeOnFuse = false
||| Spinfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Spinfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Spinfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Spinfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Spinfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Spinfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Spinfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Spinfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Spinfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Spinfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Spinfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Spinfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Spinfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Spinfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Spinfusor | DeployableRange = nil
Failed to get property with id 8001
||| Spinfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Spinfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Spinfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Spinfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Spinfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Spinfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Spinfusor | ForcefieldMaxDamageSpeed = nil
||| Spinfusor | MineDeployTime = 0.0
||| Spinfusor | MineMaxAllowed = 0
||| Spinfusor | MineCollisionCylinderRadius = 0.0
||| Spinfusor | MineCollisionCylinderHeight = 0.0
||| Spinfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Spinfusor | PrismMineTripDistance = 1.3709549300786e-21
||| Thumper | SpareAmmo = 26
||| Thumper | AmmoPerShot = 1
||| Thumper | LowAmmoCutoff = 5
||| Thumper | Damage = 700.0
||| Thumper | DirectHitMultiplier = 1.25
||| Thumper | EnergyDrain = 0.0
||| Thumper | DamageAgainstArmorMultiplier = 1.0
||| Thumper | DamageAgainstGeneratorMultiplier = 1.0
||| Thumper | DamageAgainstBaseTurretMultiplier = 1.0
||| Thumper | DamageAgainstBaseSensorMultiplier = 1.0
||| Thumper | DamageAgainstGravCycleMultiplier = 1.0
||| Thumper | DamageAgainstBeowulfMultiplier = 1.0
||| Thumper | DamageAgainstShrikeMultiplier = 1.0
||| Thumper | ReloadTime = 1.5
||| Thumper | FireInterval = 0.46000000834465
||| Thumper | HoldToFire = true
||| Thumper | CanZoom = true
||| Thumper | ReloadSingle = false
||| Thumper | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Thumper | BurstShotCount = nil
Failed to get property with id 2007
||| Thumper | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Thumper | SpinupTime = nil
Failed to get property with id 2009
||| Thumper | ShotgunShotCount = nil
||| Thumper | ShotEnergyCost = 0
||| Thumper | ImpactMomentum = 85000.0
||| Thumper | SelfImpactMomentumMultiplier = 1.5
||| Thumper | SelfImpactExtraZMomentum = 0.0
||| Thumper | ExplosiveRadius = 400.0
||| Thumper | BulletDamageRange = 6000.0
||| Thumper | MaxDamageRangeProportion = 0.0
||| Thumper | MinDamageRangeProportion = 1.0
||| Thumper | MinDamageProportion = 0.30000001192093
||| Thumper | DoesImpulseFlag = true
||| Thumper | DoesGibOnKill = false
||| Thumper | GibImpulseRadius = 100.0
||| Thumper | GibStrength = 40.0
||| Thumper | ProjectileSpeed = 3520.0
||| Thumper | ProjectileMaxSpeed = 8000.0
||| Thumper | CollisionSize = 15.0
||| Thumper | ProjectileInheritance = 0.5
||| Thumper | ProjectileLifespan = 2.0
||| Thumper | ProjectileGravity = 0.69999998807907
||| Thumper | ProjectileTerminalVelocity = 7000.0
||| Thumper | ProjectileBounceDamping = 0.55000001192093
||| Thumper | HitscanRange = 2000.0
||| Thumper | FireOffsetX = 3.0
||| Thumper | FireOffsetY = 10.0
||| Thumper | FireOffsetZ = -7.0
||| Thumper | FractalDuration = 1.6207418038381e-40
||| Thumper | FractalShardInterval = 1.4930442773811e-39
||| Thumper | FractalAscentTime = 6.428540782998e-40
||| Thumper | FractalAscentHeight = 1.2592726226869e-21
||| Thumper | FractalShardDistance = 7.1233606135488e-41
||| Thumper | FractalShardHeight = 9.396314093298e-35
||| Thumper | FractalShardDamage = 3
||| Thumper | FractalShardDamageRadius = 0.0
||| Thumper | MeleeDamageRadius = 0.0
||| Thumper | MeleeConeAngle = 0.0
||| Thumper | Accuracy = 1.0
||| Thumper | AccuracyLossOnShot = 0.0
||| Thumper | AccuracyLossOnJump = 0.30000001192093
||| Thumper | AccuracyLossMax = 0.30000001192093
||| Thumper | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Thumper | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Thumper | ThrowDelay = nil
Failed to get property with id 6001
||| Thumper | ThrowPullPinTime = nil
||| Thumper | StuckDamageMultiplier = 0.0
||| Thumper | StuckMomentumMultiplier = 0.0
||| Thumper | FuseTimer = 0.0
||| Thumper | ExplodeOnContact = false
||| Thumper | ExplodeOnFuse = false
||| Thumper | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Thumper | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Thumper | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Thumper | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Thumper | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Thumper | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Thumper | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Thumper | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Thumper | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Thumper | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Thumper | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Thumper | JammerPackRange = nil
Failed to get property with id 7011
||| Thumper | PackBuffAmount = nil
Failed to get property with id 7012
||| Thumper | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Thumper | DeployableRange = nil
Failed to get property with id 8001
||| Thumper | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Thumper | DeployableMinProximity = nil
Failed to get property with id 8003
||| Thumper | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Thumper | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Thumper | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Thumper | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Thumper | ForcefieldMaxDamageSpeed = nil
||| Thumper | MineDeployTime = 0.0
||| Thumper | MineMaxAllowed = 0
||| Thumper | MineCollisionCylinderRadius = 0.0
||| Thumper | MineCollisionCylinderHeight = 0.0
||| Thumper | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Thumper | PrismMineTripDistance = 1.2592726226869e-21
||| Twinfusor | SpareAmmo = 48
||| Twinfusor | AmmoPerShot = 1
||| Twinfusor | LowAmmoCutoff = 1
||| Twinfusor | Damage = 325.0
||| Twinfusor | DirectHitMultiplier = 1.5
||| Twinfusor | EnergyDrain = 0.0
||| Twinfusor | DamageAgainstArmorMultiplier = 1.0
||| Twinfusor | DamageAgainstGeneratorMultiplier = 1.0
||| Twinfusor | DamageAgainstBaseTurretMultiplier = 1.0
||| Twinfusor | DamageAgainstBaseSensorMultiplier = 1.0
||| Twinfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Twinfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Twinfusor | DamageAgainstShrikeMultiplier = 1.0
||| Twinfusor | ReloadTime = 1.3999999761581
||| Twinfusor | FireInterval = 0.34999999403954
||| Twinfusor | HoldToFire = true
||| Twinfusor | CanZoom = true
||| Twinfusor | ReloadSingle = false
||| Twinfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Twinfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Twinfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Twinfusor | SpinupTime = nil
Failed to get property with id 2009
||| Twinfusor | ShotgunShotCount = nil
||| Twinfusor | ShotEnergyCost = 0
||| Twinfusor | ImpactMomentum = 42500.0
||| Twinfusor | SelfImpactMomentumMultiplier = 1.5
||| Twinfusor | SelfImpactExtraZMomentum = 22500.0
||| Twinfusor | ExplosiveRadius = 300.0
||| Twinfusor | BulletDamageRange = 6000.0
||| Twinfusor | MaxDamageRangeProportion = 0.0
||| Twinfusor | MinDamageRangeProportion = 1.0
||| Twinfusor | MinDamageProportion = 0.30000001192093
||| Twinfusor | DoesImpulseFlag = true
||| Twinfusor | DoesGibOnKill = false
||| Twinfusor | GibImpulseRadius = 100.0
||| Twinfusor | GibStrength = 40.0
||| Twinfusor | ProjectileSpeed = 3920.0
||| Twinfusor | ProjectileMaxSpeed = 8000.0
||| Twinfusor | CollisionSize = 15.0
||| Twinfusor | ProjectileInheritance = 0.5
||| Twinfusor | ProjectileLifespan = 6.0
||| Twinfusor | ProjectileGravity = 1.0
||| Twinfusor | ProjectileTerminalVelocity = 3500.0
||| Twinfusor | ProjectileBounceDamping = 0.55000001192093
||| Twinfusor | HitscanRange = 2000.0
||| Twinfusor | FireOffsetX = 3.0
||| Twinfusor | FireOffsetY = 10.0
||| Twinfusor | FireOffsetZ = -7.0
||| Twinfusor | FractalDuration = 1.6224934269185e-40
||| Twinfusor | FractalShardInterval = 1.4930442773811e-39
||| Twinfusor | FractalAscentTime = 6.428540782998e-40
||| Twinfusor | FractalAscentHeight = 9.7682011221354e-29
||| Twinfusor | FractalShardDistance = 7.136392689267e-41
||| Twinfusor | FractalShardHeight = 9.396314093298e-35
||| Twinfusor | FractalShardDamage = 3
||| Twinfusor | FractalShardDamageRadius = 0.0
||| Twinfusor | MeleeDamageRadius = 0.0
||| Twinfusor | MeleeConeAngle = 0.0
||| Twinfusor | Accuracy = 1.0
||| Twinfusor | AccuracyLossOnShot = 0.0
||| Twinfusor | AccuracyLossOnJump = 0.30000001192093
||| Twinfusor | AccuracyLossMax = 0.0
||| Twinfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Twinfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Twinfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Twinfusor | ThrowPullPinTime = nil
||| Twinfusor | StuckDamageMultiplier = 0.0
||| Twinfusor | StuckMomentumMultiplier = 0.0
||| Twinfusor | FuseTimer = 0.0
||| Twinfusor | ExplodeOnContact = false
||| Twinfusor | ExplodeOnFuse = false
||| Twinfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Twinfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Twinfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Twinfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Twinfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Twinfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Twinfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Twinfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Twinfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Twinfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Twinfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Twinfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Twinfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Twinfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Twinfusor | DeployableRange = nil
Failed to get property with id 8001
||| Twinfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Twinfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Twinfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Twinfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Twinfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Twinfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Twinfusor | ForcefieldMaxDamageSpeed = nil
||| Twinfusor | MineDeployTime = 0.0
||| Twinfusor | MineMaxAllowed = 0
||| Twinfusor | MineCollisionCylinderRadius = 0.0
||| Twinfusor | MineCollisionCylinderHeight = 0.0
||| Twinfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Twinfusor | PrismMineTripDistance = 9.7682011221354e-29
||| Thumper DX | SpareAmmo = 26
||| Thumper DX | AmmoPerShot = 1
||| Thumper DX | LowAmmoCutoff = 1
||| Thumper DX | Damage = 700.0
||| Thumper DX | DirectHitMultiplier = 1.25
||| Thumper DX | EnergyDrain = 0.0
||| Thumper DX | DamageAgainstArmorMultiplier = 1.2000000476837
||| Thumper DX | DamageAgainstGeneratorMultiplier = 1.25
||| Thumper DX | DamageAgainstBaseTurretMultiplier = 1.2000000476837
||| Thumper DX | DamageAgainstBaseSensorMultiplier = 1.2000000476837
||| Thumper DX | DamageAgainstGravCycleMultiplier = 1.2000000476837
||| Thumper DX | DamageAgainstBeowulfMultiplier = 1.2000000476837
||| Thumper DX | DamageAgainstShrikeMultiplier = 2.5
||| Thumper DX | ReloadTime = 1.5
||| Thumper DX | FireInterval = 0.46000000834465
||| Thumper DX | HoldToFire = true
||| Thumper DX | CanZoom = true
||| Thumper DX | ReloadSingle = false
||| Thumper DX | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Thumper DX | BurstShotCount = nil
Failed to get property with id 2007
||| Thumper DX | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Thumper DX | SpinupTime = nil
Failed to get property with id 2009
||| Thumper DX | ShotgunShotCount = nil
||| Thumper DX | ShotEnergyCost = 0
||| Thumper DX | ImpactMomentum = 70000.0
||| Thumper DX | SelfImpactMomentumMultiplier = 1.5
||| Thumper DX | SelfImpactExtraZMomentum = 70000.0
||| Thumper DX | ExplosiveRadius = 350.0
||| Thumper DX | BulletDamageRange = 6000.0
||| Thumper DX | MaxDamageRangeProportion = 0.0
||| Thumper DX | MinDamageRangeProportion = 0.89999997615814
||| Thumper DX | MinDamageProportion = 0.20000000298023
||| Thumper DX | DoesImpulseFlag = true
||| Thumper DX | DoesGibOnKill = false
||| Thumper DX | GibImpulseRadius = 100.0
||| Thumper DX | GibStrength = 40.0
||| Thumper DX | ProjectileSpeed = 3520.0
||| Thumper DX | ProjectileMaxSpeed = 8000.0
||| Thumper DX | CollisionSize = 10.0
||| Thumper DX | ProjectileInheritance = 0.5
||| Thumper DX | ProjectileLifespan = 1.2000000476837
||| Thumper DX | ProjectileGravity = 0.69999998807907
||| Thumper DX | ProjectileTerminalVelocity = 7000.0
||| Thumper DX | ProjectileBounceDamping = 0.55000001192093
||| Thumper DX | HitscanRange = 2000.0
||| Thumper DX | FireOffsetX = 3.0
||| Thumper DX | FireOffsetY = 10.0
||| Thumper DX | FireOffsetZ = -7.0
||| Thumper DX | FractalDuration = 1.6210500895002e-40
||| Thumper DX | FractalShardInterval = 1.4930442773811e-39
||| Thumper DX | FractalAscentTime = 6.428540782998e-40
||| Thumper DX | FractalAscentHeight = 1.3630902519108e-21
||| Thumper DX | FractalShardDistance = 7.1246217821667e-41
||| Thumper DX | FractalShardHeight = 9.396314093298e-35
||| Thumper DX | FractalShardDamage = 3
||| Thumper DX | FractalShardDamageRadius = 0.0
||| Thumper DX | MeleeDamageRadius = 0.0
||| Thumper DX | MeleeConeAngle = 0.0
||| Thumper DX | Accuracy = 1.0
||| Thumper DX | AccuracyLossOnShot = 0.0
||| Thumper DX | AccuracyLossOnJump = 0.30000001192093
||| Thumper DX | AccuracyLossMax = 0.30000001192093
||| Thumper DX | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Thumper DX | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Thumper DX | ThrowDelay = nil
Failed to get property with id 6001
||| Thumper DX | ThrowPullPinTime = nil
||| Thumper DX | StuckDamageMultiplier = 0.0
||| Thumper DX | StuckMomentumMultiplier = 0.0
||| Thumper DX | FuseTimer = 0.0
||| Thumper DX | ExplodeOnContact = false
||| Thumper DX | ExplodeOnFuse = false
||| Thumper DX | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Thumper DX | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Thumper DX | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Thumper DX | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Thumper DX | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Thumper DX | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Thumper DX | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Thumper DX | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Thumper DX | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Thumper DX | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Thumper DX | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Thumper DX | JammerPackRange = nil
Failed to get property with id 7011
||| Thumper DX | PackBuffAmount = nil
Failed to get property with id 7012
||| Thumper DX | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Thumper DX | DeployableRange = nil
Failed to get property with id 8001
||| Thumper DX | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Thumper DX | DeployableMinProximity = nil
Failed to get property with id 8003
||| Thumper DX | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Thumper DX | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Thumper DX | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Thumper DX | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Thumper DX | ForcefieldMaxDamageSpeed = nil
||| Thumper DX | MineDeployTime = 0.0
||| Thumper DX | MineMaxAllowed = 0
||| Thumper DX | MineCollisionCylinderRadius = 0.0
||| Thumper DX | MineCollisionCylinderHeight = 0.0
||| Thumper DX | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Thumper DX | PrismMineTripDistance = 1.3630902519108e-21
||| Spare Spinfusor | SpareAmmo = 24
||| Spare Spinfusor | AmmoPerShot = 1
||| Spare Spinfusor | LowAmmoCutoff = 5
||| Spare Spinfusor | Damage = 700.0
||| Spare Spinfusor | DirectHitMultiplier = 1.25
||| Spare Spinfusor | EnergyDrain = 0.0
||| Spare Spinfusor | DamageAgainstArmorMultiplier = 1.0
||| Spare Spinfusor | DamageAgainstGeneratorMultiplier = 1.0
||| Spare Spinfusor | DamageAgainstBaseTurretMultiplier = 1.0
||| Spare Spinfusor | DamageAgainstBaseSensorMultiplier = 1.0
||| Spare Spinfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Spare Spinfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Spare Spinfusor | DamageAgainstShrikeMultiplier = 1.0
||| Spare Spinfusor | ReloadTime = 1.5
||| Spare Spinfusor | FireInterval = 0.46000000834465
||| Spare Spinfusor | HoldToFire = true
||| Spare Spinfusor | CanZoom = true
||| Spare Spinfusor | ReloadSingle = true
||| Spare Spinfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Spare Spinfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Spare Spinfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Spare Spinfusor | SpinupTime = nil
Failed to get property with id 2009
||| Spare Spinfusor | ShotgunShotCount = nil
||| Spare Spinfusor | ShotEnergyCost = 0
||| Spare Spinfusor | ImpactMomentum = 85000.0
||| Spare Spinfusor | SelfImpactMomentumMultiplier = 1.5
||| Spare Spinfusor | SelfImpactExtraZMomentum = 0.0
||| Spare Spinfusor | ExplosiveRadius = 360.0
||| Spare Spinfusor | BulletDamageRange = 6000.0
||| Spare Spinfusor | MaxDamageRangeProportion = 0.0
||| Spare Spinfusor | MinDamageRangeProportion = 1.0
||| Spare Spinfusor | MinDamageProportion = 0.30000001192093
||| Spare Spinfusor | DoesImpulseFlag = true
||| Spare Spinfusor | DoesGibOnKill = false
||| Spare Spinfusor | GibImpulseRadius = 100.0
||| Spare Spinfusor | GibStrength = 40.0
||| Spare Spinfusor | ProjectileSpeed = 3920.0
||| Spare Spinfusor | ProjectileMaxSpeed = 8000.0
||| Spare Spinfusor | CollisionSize = 10.0
||| Spare Spinfusor | ProjectileInheritance = 1.0
||| Spare Spinfusor | ProjectileLifespan = 6.0
||| Spare Spinfusor | ProjectileGravity = 1.0
||| Spare Spinfusor | ProjectileTerminalVelocity = 3500.0
||| Spare Spinfusor | ProjectileBounceDamping = 0.55000001192093
||| Spare Spinfusor | HitscanRange = 2000.0
||| Spare Spinfusor | FireOffsetX = 3.0
||| Spare Spinfusor | FireOffsetY = 10.0
||| Spare Spinfusor | FireOffsetZ = -7.0
||| Spare Spinfusor | FractalDuration = 1.6191863625427e-40
||| Spare Spinfusor | FractalShardInterval = 1.4930442773811e-39
||| Spare Spinfusor | FractalAscentTime = 6.428540782998e-40
||| Spare Spinfusor | FractalAscentHeight = 1.1002794616662e-21
||| Spare Spinfusor | FractalShardDistance = 7.1145324332235e-41
||| Spare Spinfusor | FractalShardHeight = 9.396314093298e-35
||| Spare Spinfusor | FractalShardDamage = 3
||| Spare Spinfusor | FractalShardDamageRadius = 0.0
||| Spare Spinfusor | MeleeDamageRadius = 0.0
||| Spare Spinfusor | MeleeConeAngle = 0.0
||| Spare Spinfusor | Accuracy = 1.0
||| Spare Spinfusor | AccuracyLossOnShot = 0.0
||| Spare Spinfusor | AccuracyLossOnJump = 0.30000001192093
||| Spare Spinfusor | AccuracyLossMax = 0.0
||| Spare Spinfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Spare Spinfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Spare Spinfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Spare Spinfusor | ThrowPullPinTime = nil
||| Spare Spinfusor | StuckDamageMultiplier = 0.0
||| Spare Spinfusor | StuckMomentumMultiplier = 0.0
||| Spare Spinfusor | FuseTimer = 0.0
||| Spare Spinfusor | ExplodeOnContact = false
||| Spare Spinfusor | ExplodeOnFuse = false
||| Spare Spinfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Spare Spinfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Spare Spinfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Spare Spinfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Spare Spinfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Spare Spinfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Spare Spinfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Spare Spinfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Spare Spinfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Spare Spinfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Spare Spinfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Spare Spinfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Spare Spinfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Spare Spinfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Spare Spinfusor | DeployableRange = nil
Failed to get property with id 8001
||| Spare Spinfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Spare Spinfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Spare Spinfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Spare Spinfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Spare Spinfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Spare Spinfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Spare Spinfusor | ForcefieldMaxDamageSpeed = nil
||| Spare Spinfusor | MineDeployTime = 0.0
||| Spare Spinfusor | MineMaxAllowed = 0
||| Spare Spinfusor | MineCollisionCylinderRadius = 0.0
||| Spare Spinfusor | MineCollisionCylinderHeight = 0.0
||| Spare Spinfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Spare Spinfusor | PrismMineTripDistance = 1.1002794616662e-21
||| Arx Buster | SpareAmmo = 27
||| Arx Buster | AmmoPerShot = 1
||| Arx Buster | LowAmmoCutoff = 1
||| Arx Buster | Damage = 450.0
||| Arx Buster | DirectHitMultiplier = 1.0
||| Arx Buster | EnergyDrain = 0.0
||| Arx Buster | DamageAgainstArmorMultiplier = 1.5
||| Arx Buster | DamageAgainstGeneratorMultiplier = 2.0
||| Arx Buster | DamageAgainstBaseTurretMultiplier = 2.0
||| Arx Buster | DamageAgainstBaseSensorMultiplier = 2.0
||| Arx Buster | DamageAgainstGravCycleMultiplier = 1.5
||| Arx Buster | DamageAgainstBeowulfMultiplier = 1.5
||| Arx Buster | DamageAgainstShrikeMultiplier = 1.5
||| Arx Buster | ReloadTime = 1.7999999523163
||| Arx Buster | FireInterval = 0.25
||| Arx Buster | HoldToFire = true
||| Arx Buster | CanZoom = true
||| Arx Buster | ReloadSingle = false
||| Arx Buster | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Arx Buster | BurstShotCount = nil
Failed to get property with id 2007
||| Arx Buster | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Arx Buster | SpinupTime = nil
Failed to get property with id 2009
||| Arx Buster | ShotgunShotCount = nil
||| Arx Buster | ShotEnergyCost = 0
||| Arx Buster | ImpactMomentum = 68000.0
||| Arx Buster | SelfImpactMomentumMultiplier = 1.5
||| Arx Buster | SelfImpactExtraZMomentum = 0.0
||| Arx Buster | ExplosiveRadius = 350.0
||| Arx Buster | BulletDamageRange = 6000.0
||| Arx Buster | MaxDamageRangeProportion = 0.0
||| Arx Buster | MinDamageRangeProportion = 1.0
||| Arx Buster | MinDamageProportion = 0.5
||| Arx Buster | DoesImpulseFlag = true
||| Arx Buster | DoesGibOnKill = false
||| Arx Buster | GibImpulseRadius = 100.0
||| Arx Buster | GibStrength = 40.0
||| Arx Buster | ProjectileSpeed = 3820.0
||| Arx Buster | ProjectileMaxSpeed = 8000.0
||| Arx Buster | CollisionSize = 20.0
||| Arx Buster | ProjectileInheritance = 0.20000000298023
||| Arx Buster | ProjectileLifespan = 8.0
||| Arx Buster | ProjectileGravity = 0.30000001192093
||| Arx Buster | ProjectileTerminalVelocity = 8000.0
||| Arx Buster | ProjectileBounceDamping = 0.55000001192093
||| Arx Buster | HitscanRange = 2000.0
||| Arx Buster | FireOffsetX = 3.0
||| Arx Buster | FireOffsetY = 10.0
||| Arx Buster | FireOffsetZ = -7.0
||| Arx Buster | FractalDuration = 0.0
||| Arx Buster | FractalShardInterval = 0.0
||| Arx Buster | FractalAscentTime = 0.0
||| Arx Buster | FractalAscentHeight = 0.0
||| Arx Buster | FractalShardDistance = 0.0
||| Arx Buster | FractalShardHeight = 0.0
||| Arx Buster | FractalShardDamage = 0
||| Arx Buster | FractalShardDamageRadius = 0.0
||| Arx Buster | MeleeDamageRadius = 0.0
||| Arx Buster | MeleeConeAngle = 0.0
||| Arx Buster | Accuracy = 1.0
||| Arx Buster | AccuracyLossOnShot = 0.0
||| Arx Buster | AccuracyLossOnJump = 0.30000001192093
||| Arx Buster | AccuracyLossMax = 0.30000001192093
||| Arx Buster | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Arx Buster | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Arx Buster | ThrowDelay = nil
Failed to get property with id 6001
||| Arx Buster | ThrowPullPinTime = nil
||| Arx Buster | StuckDamageMultiplier = 1.5
||| Arx Buster | StuckMomentumMultiplier = 1.0
||| Arx Buster | FuseTimer = 0.69999998807907
||| Arx Buster | ExplodeOnContact = false
||| Arx Buster | ExplodeOnFuse = true
||| Arx Buster | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Arx Buster | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Arx Buster | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Arx Buster | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Arx Buster | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Arx Buster | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Arx Buster | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Arx Buster | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Arx Buster | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Arx Buster | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Arx Buster | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Arx Buster | JammerPackRange = nil
Failed to get property with id 7011
||| Arx Buster | PackBuffAmount = nil
Failed to get property with id 7012
||| Arx Buster | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Arx Buster | DeployableRange = nil
Failed to get property with id 8001
||| Arx Buster | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Arx Buster | DeployableMinProximity = nil
Failed to get property with id 8003
||| Arx Buster | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Arx Buster | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Arx Buster | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Arx Buster | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Arx Buster | ForcefieldMaxDamageSpeed = nil
||| Arx Buster | MineDeployTime = 0.0
||| Arx Buster | MineMaxAllowed = 0
||| Arx Buster | MineCollisionCylinderRadius = 0.0
||| Arx Buster | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Arx Buster | ClaymoreDetonationAngle = 0.0
||| Arx Buster | PrismMineTripDistance = 0.0
||| Grenade Launcher | SpareAmmo = 36
||| Grenade Launcher | AmmoPerShot = 1
||| Grenade Launcher | LowAmmoCutoff = 1
||| Grenade Launcher | Damage = 500.0
||| Grenade Launcher | DirectHitMultiplier = 1.0
||| Grenade Launcher | EnergyDrain = 0.0
||| Grenade Launcher | DamageAgainstArmorMultiplier = 1.0
||| Grenade Launcher | DamageAgainstGeneratorMultiplier = 2.0
||| Grenade Launcher | DamageAgainstBaseTurretMultiplier = 2.0
||| Grenade Launcher | DamageAgainstBaseSensorMultiplier = 2.0
||| Grenade Launcher | DamageAgainstGravCycleMultiplier = 1.25
||| Grenade Launcher | DamageAgainstBeowulfMultiplier = 1.25
||| Grenade Launcher | DamageAgainstShrikeMultiplier = 1.25
||| Grenade Launcher | ReloadTime = 1.7999999523163
||| Grenade Launcher | FireInterval = 0.60000002384186
||| Grenade Launcher | HoldToFire = true
||| Grenade Launcher | CanZoom = true
||| Grenade Launcher | ReloadSingle = false
||| Grenade Launcher | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Grenade Launcher | BurstShotCount = nil
Failed to get property with id 2007
||| Grenade Launcher | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Grenade Launcher | SpinupTime = nil
Failed to get property with id 2009
||| Grenade Launcher | ShotgunShotCount = nil
||| Grenade Launcher | ShotEnergyCost = 0
||| Grenade Launcher | ImpactMomentum = 68000.0
||| Grenade Launcher | SelfImpactMomentumMultiplier = 1.5
||| Grenade Launcher | SelfImpactExtraZMomentum = 0.0
||| Grenade Launcher | ExplosiveRadius = 500.0
||| Grenade Launcher | BulletDamageRange = 6000.0
||| Grenade Launcher | MaxDamageRangeProportion = 0.0
||| Grenade Launcher | MinDamageRangeProportion = 1.0
||| Grenade Launcher | MinDamageProportion = 0.5
||| Grenade Launcher | DoesImpulseFlag = true
||| Grenade Launcher | DoesGibOnKill = false
||| Grenade Launcher | GibImpulseRadius = 100.0
||| Grenade Launcher | GibStrength = 40.0
||| Grenade Launcher | ProjectileSpeed = 2700.0
||| Grenade Launcher | ProjectileMaxSpeed = 7000.0
||| Grenade Launcher | CollisionSize = 20.0
||| Grenade Launcher | ProjectileInheritance = 0.5
||| Grenade Launcher | ProjectileLifespan = 8.0
||| Grenade Launcher | ProjectileGravity = 0.80000001192093
||| Grenade Launcher | ProjectileTerminalVelocity = 7000.0
||| Grenade Launcher | ProjectileBounceDamping = 0.75
||| Grenade Launcher | HitscanRange = 2000.0
||| Grenade Launcher | FireOffsetX = 3.0
||| Grenade Launcher | FireOffsetY = 10.0
||| Grenade Launcher | FireOffsetZ = -7.0
||| Grenade Launcher | FractalDuration = 1.6078638709509e-40
||| Grenade Launcher | FractalShardInterval = 1.4930442773811e-39
||| Grenade Launcher | FractalAscentTime = 6.428540782998e-40
||| Grenade Launcher | FractalAscentHeight = 3.6272656423798e-28
||| Grenade Launcher | FractalShardDistance = 7.050212833711e-41
||| Grenade Launcher | FractalShardHeight = 9.396314093298e-35
||| Grenade Launcher | FractalShardDamage = 3
||| Grenade Launcher | FractalShardDamageRadius = 0.0
||| Grenade Launcher | MeleeDamageRadius = 0.0
||| Grenade Launcher | MeleeConeAngle = 0.0
||| Grenade Launcher | Accuracy = 1.0
||| Grenade Launcher | AccuracyLossOnShot = 0.0
||| Grenade Launcher | AccuracyLossOnJump = 0.30000001192093
||| Grenade Launcher | AccuracyLossMax = 0.0
||| Grenade Launcher | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Grenade Launcher | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Grenade Launcher | ThrowDelay = nil
Failed to get property with id 6001
||| Grenade Launcher | ThrowPullPinTime = nil
||| Grenade Launcher | StuckDamageMultiplier = 1.0
||| Grenade Launcher | StuckMomentumMultiplier = 1.0
||| Grenade Launcher | FuseTimer = 1.5
||| Grenade Launcher | ExplodeOnContact = true
||| Grenade Launcher | ExplodeOnFuse = true
||| Grenade Launcher | MustBounceBeforeExplode = true
Failed to get property with id 7000
||| Grenade Launcher | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Grenade Launcher | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Grenade Launcher | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Grenade Launcher | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Grenade Launcher | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Grenade Launcher | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Grenade Launcher | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Grenade Launcher | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Grenade Launcher | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Grenade Launcher | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Grenade Launcher | JammerPackRange = nil
Failed to get property with id 7011
||| Grenade Launcher | PackBuffAmount = nil
Failed to get property with id 7012
||| Grenade Launcher | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Grenade Launcher | DeployableRange = nil
Failed to get property with id 8001
||| Grenade Launcher | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Grenade Launcher | DeployableMinProximity = nil
Failed to get property with id 8003
||| Grenade Launcher | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Grenade Launcher | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Grenade Launcher | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Grenade Launcher | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Grenade Launcher | ForcefieldMaxDamageSpeed = nil
||| Grenade Launcher | MineDeployTime = 0.0
||| Grenade Launcher | MineMaxAllowed = 0
||| Grenade Launcher | MineCollisionCylinderRadius = 0.0
||| Grenade Launcher | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Grenade Launcher | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Grenade Launcher | PrismMineTripDistance = 3.6272656423798e-28
||| ELF Projector | SpareAmmo = 1
||| ELF Projector | AmmoPerShot = 0
||| ELF Projector | LowAmmoCutoff = 0
||| ELF Projector | Damage = -22.0
Failed to get property with id 3002
||| ELF Projector | DirectHitMultiplier = nil
||| ELF Projector | EnergyDrain = 0.0
||| ELF Projector | DamageAgainstArmorMultiplier = 1.0
||| ELF Projector | DamageAgainstGeneratorMultiplier = 2.0
||| ELF Projector | DamageAgainstBaseTurretMultiplier = 3.0
||| ELF Projector | DamageAgainstBaseSensorMultiplier = 3.0
||| ELF Projector | DamageAgainstGravCycleMultiplier = 2.0
||| ELF Projector | DamageAgainstBeowulfMultiplier = 2.0
||| ELF Projector | DamageAgainstShrikeMultiplier = 2.0
||| ELF Projector | ReloadTime = 1.7999999523163
||| ELF Projector | FireInterval = 0.10000000149012
||| ELF Projector | HoldToFire = true
||| ELF Projector | CanZoom = true
||| ELF Projector | ReloadSingle = false
||| ELF Projector | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| ELF Projector | BurstShotCount = nil
Failed to get property with id 2007
||| ELF Projector | BurstShotRefireTime = nil
Failed to get property with id 2008
||| ELF Projector | SpinupTime = nil
Failed to get property with id 2009
||| ELF Projector | ShotgunShotCount = nil
||| ELF Projector | ShotEnergyCost = 0
||| ELF Projector | ImpactMomentum = 0.0
Failed to get property with id 3004
||| ELF Projector | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| ELF Projector | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| ELF Projector | ExplosiveRadius = nil
||| ELF Projector | BulletDamageRange = 6000.0
||| ELF Projector | MaxDamageRangeProportion = 0.30000001192093
||| ELF Projector | MinDamageRangeProportion = 0.69999998807907
||| ELF Projector | MinDamageProportion = 0.20000000298023
||| ELF Projector | DoesImpulseFlag = false
||| ELF Projector | DoesGibOnKill = false
||| ELF Projector | GibImpulseRadius = 100.0
||| ELF Projector | GibStrength = 40.0
Failed to get property with id 4000
||| ELF Projector | ProjectileSpeed = nil
Failed to get property with id 4001
||| ELF Projector | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| ELF Projector | CollisionSize = nil
Failed to get property with id 4003
||| ELF Projector | ProjectileInheritance = nil
Failed to get property with id 4004
||| ELF Projector | ProjectileLifespan = nil
Failed to get property with id 4005
||| ELF Projector | ProjectileGravity = nil
Failed to get property with id 4006
||| ELF Projector | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| ELF Projector | ProjectileBounceDamping = nil
||| ELF Projector | HitscanRange = 1250.0
||| ELF Projector | FireOffsetX = 20.0
||| ELF Projector | FireOffsetY = 5.0
||| ELF Projector | FireOffsetZ = 0.0
Failed to get property with id 3030
||| ELF Projector | FractalDuration = nil
Failed to get property with id 3031
||| ELF Projector | FractalShardInterval = nil
Failed to get property with id 3032
||| ELF Projector | FractalAscentTime = nil
Failed to get property with id 3033
||| ELF Projector | FractalAscentHeight = nil
Failed to get property with id 3034
||| ELF Projector | FractalShardDistance = nil
Failed to get property with id 3035
||| ELF Projector | FractalShardHeight = nil
Failed to get property with id 3036
||| ELF Projector | FractalShardDamage = nil
Failed to get property with id 3037
||| ELF Projector | FractalShardDamageRadius = nil
||| ELF Projector | MeleeDamageRadius = 0.0
||| ELF Projector | MeleeConeAngle = 0.0
||| ELF Projector | Accuracy = 1.0
||| ELF Projector | AccuracyLossOnShot = 0.0
||| ELF Projector | AccuracyLossOnJump = 0.30000001192093
||| ELF Projector | AccuracyLossMax = 0.0
||| ELF Projector | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| ELF Projector | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| ELF Projector | ThrowDelay = nil
Failed to get property with id 6001
||| ELF Projector | ThrowPullPinTime = nil
Failed to get property with id 6002
||| ELF Projector | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| ELF Projector | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| ELF Projector | FuseTimer = nil
Failed to get property with id 6005
||| ELF Projector | ExplodeOnContact = nil
Failed to get property with id 6006
||| ELF Projector | ExplodeOnFuse = nil
Failed to get property with id 6007
||| ELF Projector | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| ELF Projector | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| ELF Projector | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| ELF Projector | ThrustPackImpulse = nil
Failed to get property with id 7003
||| ELF Projector | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| ELF Projector | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| ELF Projector | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| ELF Projector | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| ELF Projector | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| ELF Projector | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| ELF Projector | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| ELF Projector | JammerPackRange = nil
Failed to get property with id 7011
||| ELF Projector | PackBuffAmount = nil
Failed to get property with id 7012
||| ELF Projector | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| ELF Projector | DeployableRange = nil
Failed to get property with id 8001
||| ELF Projector | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| ELF Projector | DeployableMinProximity = nil
Failed to get property with id 8003
||| ELF Projector | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| ELF Projector | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| ELF Projector | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| ELF Projector | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| ELF Projector | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| ELF Projector | MineDeployTime = nil
Failed to get property with id 9001
||| ELF Projector | MineMaxAllowed = nil
Failed to get property with id 9002
||| ELF Projector | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| ELF Projector | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| ELF Projector | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| ELF Projector | PrismMineTripDistance = nil
||| Honorfusor | SpareAmmo = 24
||| Honorfusor | AmmoPerShot = 1
||| Honorfusor | LowAmmoCutoff = 5
||| Honorfusor | Damage = 875.0
||| Honorfusor | DirectHitMultiplier = 1.0
||| Honorfusor | EnergyDrain = 0.0
||| Honorfusor | DamageAgainstArmorMultiplier = 1.0
||| Honorfusor | DamageAgainstGeneratorMultiplier = 1.0
||| Honorfusor | DamageAgainstBaseTurretMultiplier = 1.0
||| Honorfusor | DamageAgainstBaseSensorMultiplier = 1.0
||| Honorfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Honorfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Honorfusor | DamageAgainstShrikeMultiplier = 1.0
||| Honorfusor | ReloadTime = 1.5
||| Honorfusor | FireInterval = 0.46000000834465
||| Honorfusor | HoldToFire = true
||| Honorfusor | CanZoom = true
||| Honorfusor | ReloadSingle = true
||| Honorfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Honorfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Honorfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Honorfusor | SpinupTime = nil
Failed to get property with id 2009
||| Honorfusor | ShotgunShotCount = nil
||| Honorfusor | ShotEnergyCost = 0
||| Honorfusor | ImpactMomentum = 85000.0
||| Honorfusor | SelfImpactMomentumMultiplier = 1.5
||| Honorfusor | SelfImpactExtraZMomentum = 0.0
||| Honorfusor | ExplosiveRadius = 5.0
||| Honorfusor | BulletDamageRange = 6000.0
||| Honorfusor | MaxDamageRangeProportion = 0.0
||| Honorfusor | MinDamageRangeProportion = 1.0
||| Honorfusor | MinDamageProportion = 0.30000001192093
||| Honorfusor | DoesImpulseFlag = true
||| Honorfusor | DoesGibOnKill = false
||| Honorfusor | GibImpulseRadius = 100.0
||| Honorfusor | GibStrength = 40.0
||| Honorfusor | ProjectileSpeed = 3920.0
||| Honorfusor | ProjectileMaxSpeed = 8000.0
||| Honorfusor | CollisionSize = 15.0
||| Honorfusor | ProjectileInheritance = 0.5
||| Honorfusor | ProjectileLifespan = 6.0
||| Honorfusor | ProjectileGravity = 1.0
||| Honorfusor | ProjectileTerminalVelocity = 3500.0
||| Honorfusor | ProjectileBounceDamping = 0.55000001192093
||| Honorfusor | HitscanRange = 2000.0
||| Honorfusor | FireOffsetX = 3.0
||| Honorfusor | FireOffsetY = 10.0
||| Honorfusor | FireOffsetZ = -7.0
||| Honorfusor | FractalDuration = 1.6097135849238e-40
||| Honorfusor | FractalShardInterval = 1.4930442773811e-39
||| Honorfusor | FractalAscentTime = 6.428540782998e-40
||| Honorfusor | FractalAscentHeight = 3.6261100844132e-28
||| Honorfusor | FractalShardDistance = 7.0573594558791e-41
||| Honorfusor | FractalShardHeight = 9.396314093298e-35
||| Honorfusor | FractalShardDamage = 3
||| Honorfusor | FractalShardDamageRadius = 0.0
||| Honorfusor | MeleeDamageRadius = 0.0
||| Honorfusor | MeleeConeAngle = 0.0
||| Honorfusor | Accuracy = 1.0
||| Honorfusor | AccuracyLossOnShot = 0.0
||| Honorfusor | AccuracyLossOnJump = 0.30000001192093
||| Honorfusor | AccuracyLossMax = 0.0
||| Honorfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Honorfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Honorfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Honorfusor | ThrowPullPinTime = nil
||| Honorfusor | StuckDamageMultiplier = 0.0
||| Honorfusor | StuckMomentumMultiplier = 0.0
||| Honorfusor | FuseTimer = 0.0
||| Honorfusor | ExplodeOnContact = false
||| Honorfusor | ExplodeOnFuse = false
||| Honorfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Honorfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Honorfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Honorfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Honorfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Honorfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Honorfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Honorfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Honorfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Honorfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Honorfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Honorfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Honorfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Honorfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Honorfusor | DeployableRange = nil
Failed to get property with id 8001
||| Honorfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Honorfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Honorfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Honorfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Honorfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Honorfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Honorfusor | ForcefieldMaxDamageSpeed = nil
||| Honorfusor | MineDeployTime = 0.0
||| Honorfusor | MineMaxAllowed = 0
||| Honorfusor | MineCollisionCylinderRadius = 0.0
||| Honorfusor | MineCollisionCylinderHeight = 0.0
||| Honorfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Honorfusor | PrismMineTripDistance = 3.6261100844132e-28
||| Assault Rifle | SpareAmmo = 216
||| Assault Rifle | AmmoPerShot = 1
||| Assault Rifle | LowAmmoCutoff = 8
||| Assault Rifle | Damage = 75.0
||| Assault Rifle | DirectHitMultiplier = 1.0
||| Assault Rifle | EnergyDrain = 0.0
||| Assault Rifle | DamageAgainstArmorMultiplier = 0.5
||| Assault Rifle | DamageAgainstGeneratorMultiplier = 1.0
||| Assault Rifle | DamageAgainstBaseTurretMultiplier = 1.0
||| Assault Rifle | DamageAgainstBaseSensorMultiplier = 1.0
||| Assault Rifle | DamageAgainstGravCycleMultiplier = 0.5
||| Assault Rifle | DamageAgainstBeowulfMultiplier = 0.5
||| Assault Rifle | DamageAgainstShrikeMultiplier = 0.5
||| Assault Rifle | ReloadTime = 1.7999999523163
||| Assault Rifle | FireInterval = 0.10000000149012
||| Assault Rifle | HoldToFire = true
||| Assault Rifle | CanZoom = true
||| Assault Rifle | ReloadSingle = false
||| Assault Rifle | ReloadApplicationProportion = 0.58799999952316
Failed to get property with id 2006
||| Assault Rifle | BurstShotCount = nil
Failed to get property with id 2007
||| Assault Rifle | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Assault Rifle | SpinupTime = nil
Failed to get property with id 2009
||| Assault Rifle | ShotgunShotCount = nil
||| Assault Rifle | ShotEnergyCost = 0
||| Assault Rifle | ImpactMomentum = 0.0
||| Assault Rifle | SelfImpactMomentumMultiplier = 1.5
||| Assault Rifle | SelfImpactExtraZMomentum = 0.0
||| Assault Rifle | ExplosiveRadius = 0.0
||| Assault Rifle | BulletDamageRange = 6000.0
||| Assault Rifle | MaxDamageRangeProportion = 0.5
||| Assault Rifle | MinDamageRangeProportion = 1.0
||| Assault Rifle | MinDamageProportion = 0.80000001192093
||| Assault Rifle | DoesImpulseFlag = false
||| Assault Rifle | DoesGibOnKill = false
||| Assault Rifle | GibImpulseRadius = 100.0
||| Assault Rifle | GibStrength = 40.0
||| Assault Rifle | ProjectileSpeed = 21000.0
||| Assault Rifle | ProjectileMaxSpeed = 21000.0
||| Assault Rifle | CollisionSize = 25.0
||| Assault Rifle | ProjectileInheritance = 0.0
||| Assault Rifle | ProjectileLifespan = 1.0
||| Assault Rifle | ProjectileGravity = 0.0
||| Assault Rifle | ProjectileTerminalVelocity = 3500.0
||| Assault Rifle | ProjectileBounceDamping = 0.0
||| Assault Rifle | HitscanRange = 2000.0
||| Assault Rifle | FireOffsetX = 3.0
||| Assault Rifle | FireOffsetY = 0.0
||| Assault Rifle | FireOffsetZ = -0.0
||| Assault Rifle | FractalDuration = 1.6031274821415e-40
||| Assault Rifle | FractalShardInterval = 1.4930442773811e-39
||| Assault Rifle | FractalAscentTime = 6.428540782998e-40
||| Assault Rifle | FractalAscentHeight = 9.5974866918649e-29
||| Assault Rifle | FractalShardDistance = 7.024288812121e-41
||| Assault Rifle | FractalShardHeight = 9.396314093298e-35
||| Assault Rifle | FractalShardDamage = 3
||| Assault Rifle | FractalShardDamageRadius = 0.0
||| Assault Rifle | MeleeDamageRadius = 0.0
||| Assault Rifle | MeleeConeAngle = 0.0
||| Assault Rifle | Accuracy = 1.0
||| Assault Rifle | AccuracyLossOnShot = 0.0
||| Assault Rifle | AccuracyLossOnJump = 0.30000001192093
||| Assault Rifle | AccuracyLossMax = 0.0
||| Assault Rifle | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Assault Rifle | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Assault Rifle | ThrowDelay = nil
Failed to get property with id 6001
||| Assault Rifle | ThrowPullPinTime = nil
||| Assault Rifle | StuckDamageMultiplier = 0.0
||| Assault Rifle | StuckMomentumMultiplier = 0.0
||| Assault Rifle | FuseTimer = 0.0
||| Assault Rifle | ExplodeOnContact = false
||| Assault Rifle | ExplodeOnFuse = false
||| Assault Rifle | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Assault Rifle | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Assault Rifle | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Assault Rifle | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Assault Rifle | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Assault Rifle | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Assault Rifle | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Assault Rifle | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Assault Rifle | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Assault Rifle | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Assault Rifle | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Assault Rifle | JammerPackRange = nil
Failed to get property with id 7011
||| Assault Rifle | PackBuffAmount = nil
Failed to get property with id 7012
||| Assault Rifle | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Assault Rifle | DeployableRange = nil
Failed to get property with id 8001
||| Assault Rifle | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Assault Rifle | DeployableMinProximity = nil
Failed to get property with id 8003
||| Assault Rifle | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Assault Rifle | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Assault Rifle | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Assault Rifle | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Assault Rifle | ForcefieldMaxDamageSpeed = nil
||| Assault Rifle | MineDeployTime = 0.0
||| Assault Rifle | MineMaxAllowed = 0
||| Assault Rifle | MineCollisionCylinderRadius = 0.0
||| Assault Rifle | MineCollisionCylinderHeight = 0.0
||| Assault Rifle | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Assault Rifle | PrismMineTripDistance = 9.5974866918649e-29
||| Eagle Pistol | SpareAmmo = 135
||| Eagle Pistol | AmmoPerShot = 1
||| Eagle Pistol | LowAmmoCutoff = 8
||| Eagle Pistol | Damage = 80.0
Failed to get property with id 3002
||| Eagle Pistol | DirectHitMultiplier = nil
||| Eagle Pistol | EnergyDrain = 0.0
||| Eagle Pistol | DamageAgainstArmorMultiplier = 0.5
||| Eagle Pistol | DamageAgainstGeneratorMultiplier = 1.0
||| Eagle Pistol | DamageAgainstBaseTurretMultiplier = 1.0
||| Eagle Pistol | DamageAgainstBaseSensorMultiplier = 1.0
||| Eagle Pistol | DamageAgainstGravCycleMultiplier = 0.5
||| Eagle Pistol | DamageAgainstBeowulfMultiplier = 0.5
||| Eagle Pistol | DamageAgainstShrikeMultiplier = 0.5
||| Eagle Pistol | ReloadTime = 1.7999999523163
||| Eagle Pistol | FireInterval = 0.15999999642372
||| Eagle Pistol | HoldToFire = true
||| Eagle Pistol | CanZoom = true
||| Eagle Pistol | ReloadSingle = false
||| Eagle Pistol | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Eagle Pistol | BurstShotCount = nil
Failed to get property with id 2007
||| Eagle Pistol | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Eagle Pistol | SpinupTime = nil
Failed to get property with id 2009
||| Eagle Pistol | ShotgunShotCount = nil
||| Eagle Pistol | ShotEnergyCost = 0
||| Eagle Pistol | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Eagle Pistol | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Eagle Pistol | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Eagle Pistol | ExplosiveRadius = nil
||| Eagle Pistol | BulletDamageRange = 6000.0
||| Eagle Pistol | MaxDamageRangeProportion = 0.5
||| Eagle Pistol | MinDamageRangeProportion = 1.0
||| Eagle Pistol | MinDamageProportion = 0.5
||| Eagle Pistol | DoesImpulseFlag = false
||| Eagle Pistol | DoesGibOnKill = false
||| Eagle Pistol | GibImpulseRadius = 100.0
||| Eagle Pistol | GibStrength = 40.0
Failed to get property with id 4000
||| Eagle Pistol | ProjectileSpeed = nil
Failed to get property with id 4001
||| Eagle Pistol | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Eagle Pistol | CollisionSize = nil
Failed to get property with id 4003
||| Eagle Pistol | ProjectileInheritance = nil
Failed to get property with id 4004
||| Eagle Pistol | ProjectileLifespan = nil
Failed to get property with id 4005
||| Eagle Pistol | ProjectileGravity = nil
Failed to get property with id 4006
||| Eagle Pistol | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Eagle Pistol | ProjectileBounceDamping = nil
||| Eagle Pistol | HitscanRange = 6000.0
||| Eagle Pistol | FireOffsetX = 20.0
||| Eagle Pistol | FireOffsetY = 0.0
||| Eagle Pistol | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Eagle Pistol | FractalDuration = nil
Failed to get property with id 3031
||| Eagle Pistol | FractalShardInterval = nil
Failed to get property with id 3032
||| Eagle Pistol | FractalAscentTime = nil
Failed to get property with id 3033
||| Eagle Pistol | FractalAscentHeight = nil
Failed to get property with id 3034
||| Eagle Pistol | FractalShardDistance = nil
Failed to get property with id 3035
||| Eagle Pistol | FractalShardHeight = nil
Failed to get property with id 3036
||| Eagle Pistol | FractalShardDamage = nil
Failed to get property with id 3037
||| Eagle Pistol | FractalShardDamageRadius = nil
||| Eagle Pistol | MeleeDamageRadius = 0.0
||| Eagle Pistol | MeleeConeAngle = 0.0
||| Eagle Pistol | Accuracy = 1.0
||| Eagle Pistol | AccuracyLossOnShot = 0.0
||| Eagle Pistol | AccuracyLossOnJump = 0.30000001192093
||| Eagle Pistol | AccuracyLossMax = 0.0
||| Eagle Pistol | AccuracyCorrectionRate = 0.37999999523163
Failed to get property with id 5007
||| Eagle Pistol | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Eagle Pistol | ThrowDelay = nil
Failed to get property with id 6001
||| Eagle Pistol | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Eagle Pistol | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Eagle Pistol | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Eagle Pistol | FuseTimer = nil
Failed to get property with id 6005
||| Eagle Pistol | ExplodeOnContact = nil
Failed to get property with id 6006
||| Eagle Pistol | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Eagle Pistol | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Eagle Pistol | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Eagle Pistol | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Eagle Pistol | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Eagle Pistol | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Eagle Pistol | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Eagle Pistol | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Eagle Pistol | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Eagle Pistol | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Eagle Pistol | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Eagle Pistol | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Eagle Pistol | JammerPackRange = nil
Failed to get property with id 7011
||| Eagle Pistol | PackBuffAmount = nil
Failed to get property with id 7012
||| Eagle Pistol | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Eagle Pistol | DeployableRange = nil
Failed to get property with id 8001
||| Eagle Pistol | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Eagle Pistol | DeployableMinProximity = nil
Failed to get property with id 8003
||| Eagle Pistol | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Eagle Pistol | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Eagle Pistol | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Eagle Pistol | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Eagle Pistol | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Eagle Pistol | MineDeployTime = nil
Failed to get property with id 9001
||| Eagle Pistol | MineMaxAllowed = nil
Failed to get property with id 9002
||| Eagle Pistol | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Eagle Pistol | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Eagle Pistol | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Eagle Pistol | PrismMineTripDistance = nil
||| Nova Blaster | SpareAmmo = 54
||| Nova Blaster | AmmoPerShot = 1
||| Nova Blaster | LowAmmoCutoff = 3
||| Nova Blaster | Damage = 250.0
||| Nova Blaster | DirectHitMultiplier = 1.0
||| Nova Blaster | EnergyDrain = 0.0
||| Nova Blaster | DamageAgainstArmorMultiplier = 0.5
||| Nova Blaster | DamageAgainstGeneratorMultiplier = 1.0
||| Nova Blaster | DamageAgainstBaseTurretMultiplier = 1.0
||| Nova Blaster | DamageAgainstBaseSensorMultiplier = 1.0
||| Nova Blaster | DamageAgainstGravCycleMultiplier = 0.5
||| Nova Blaster | DamageAgainstBeowulfMultiplier = 0.5
||| Nova Blaster | DamageAgainstShrikeMultiplier = 0.5
||| Nova Blaster | ReloadTime = 1.7999999523163
||| Nova Blaster | FireInterval = 0.40000000596046
||| Nova Blaster | HoldToFire = false
||| Nova Blaster | CanZoom = true
||| Nova Blaster | ReloadSingle = false
||| Nova Blaster | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Nova Blaster | BurstShotCount = nil
Failed to get property with id 2007
||| Nova Blaster | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Nova Blaster | SpinupTime = nil
Failed to get property with id 2009
||| Nova Blaster | ShotgunShotCount = nil
||| Nova Blaster | ShotEnergyCost = 0
||| Nova Blaster | ImpactMomentum = 100.0
||| Nova Blaster | SelfImpactMomentumMultiplier = 1.5
||| Nova Blaster | SelfImpactExtraZMomentum = 0.0
||| Nova Blaster | ExplosiveRadius = 0.0
||| Nova Blaster | BulletDamageRange = 6000.0
||| Nova Blaster | MaxDamageRangeProportion = 0.5
||| Nova Blaster | MinDamageRangeProportion = 1.0
||| Nova Blaster | MinDamageProportion = 0.5
||| Nova Blaster | DoesImpulseFlag = false
||| Nova Blaster | DoesGibOnKill = false
||| Nova Blaster | GibImpulseRadius = 100.0
||| Nova Blaster | GibStrength = 40.0
||| Nova Blaster | ProjectileSpeed = 18000.0
||| Nova Blaster | ProjectileMaxSpeed = 18000.0
||| Nova Blaster | CollisionSize = 25.0
||| Nova Blaster | ProjectileInheritance = 0.0
||| Nova Blaster | ProjectileLifespan = 0.5
||| Nova Blaster | ProjectileGravity = 0.0
||| Nova Blaster | ProjectileTerminalVelocity = 3500.0
||| Nova Blaster | ProjectileBounceDamping = 0.0
||| Nova Blaster | HitscanRange = 2000.0
||| Nova Blaster | FireOffsetX = -15.0
||| Nova Blaster | FireOffsetY = 8.0
||| Nova Blaster | FireOffsetZ = -6.0
||| Nova Blaster | FractalDuration = 1.6135531427161e-40
||| Nova Blaster | FractalShardInterval = 1.4930442773811e-39
||| Nova Blaster | FractalAscentTime = 6.428540782998e-40
||| Nova Blaster | FractalAscentHeight = 1.5507310039896e-21
||| Nova Blaster | FractalShardDistance = 7.0785190626904e-41
||| Nova Blaster | FractalShardHeight = 9.396314093298e-35
||| Nova Blaster | FractalShardDamage = 3
||| Nova Blaster | FractalShardDamageRadius = 0.0
||| Nova Blaster | MeleeDamageRadius = 0.0
||| Nova Blaster | MeleeConeAngle = 0.0
||| Nova Blaster | Accuracy = 1.0
||| Nova Blaster | AccuracyLossOnShot = 0.0
||| Nova Blaster | AccuracyLossOnJump = 0.30000001192093
||| Nova Blaster | AccuracyLossMax = 0.0
||| Nova Blaster | AccuracyCorrectionRate = 0.28000000119209
Failed to get property with id 5007
||| Nova Blaster | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Nova Blaster | ThrowDelay = nil
Failed to get property with id 6001
||| Nova Blaster | ThrowPullPinTime = nil
||| Nova Blaster | StuckDamageMultiplier = 0.0
||| Nova Blaster | StuckMomentumMultiplier = 0.0
||| Nova Blaster | FuseTimer = 0.0
||| Nova Blaster | ExplodeOnContact = false
||| Nova Blaster | ExplodeOnFuse = true
||| Nova Blaster | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Nova Blaster | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Nova Blaster | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Nova Blaster | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Nova Blaster | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Nova Blaster | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Nova Blaster | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Nova Blaster | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Nova Blaster | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Nova Blaster | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Nova Blaster | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Nova Blaster | JammerPackRange = nil
Failed to get property with id 7011
||| Nova Blaster | PackBuffAmount = nil
Failed to get property with id 7012
||| Nova Blaster | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Nova Blaster | DeployableRange = nil
Failed to get property with id 8001
||| Nova Blaster | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Nova Blaster | DeployableMinProximity = nil
Failed to get property with id 8003
||| Nova Blaster | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Nova Blaster | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Nova Blaster | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Nova Blaster | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Nova Blaster | ForcefieldMaxDamageSpeed = nil
||| Nova Blaster | MineDeployTime = 0.0
||| Nova Blaster | MineMaxAllowed = 0
||| Nova Blaster | MineCollisionCylinderRadius = 0.0
||| Nova Blaster | MineCollisionCylinderHeight = 0.0
||| Nova Blaster | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Nova Blaster | PrismMineTripDistance = 1.5507310039896e-21
||| NJ4 SMG | SpareAmmo = 270
||| NJ4 SMG | AmmoPerShot = 1
||| NJ4 SMG | LowAmmoCutoff = 12
||| NJ4 SMG | Damage = 60.0
||| NJ4 SMG | DirectHitMultiplier = 1.0
||| NJ4 SMG | EnergyDrain = 0.0
||| NJ4 SMG | DamageAgainstArmorMultiplier = 0.5
||| NJ4 SMG | DamageAgainstGeneratorMultiplier = 1.0
||| NJ4 SMG | DamageAgainstBaseTurretMultiplier = 1.0
||| NJ4 SMG | DamageAgainstBaseSensorMultiplier = 1.0
||| NJ4 SMG | DamageAgainstGravCycleMultiplier = 0.5
||| NJ4 SMG | DamageAgainstBeowulfMultiplier = 0.5
||| NJ4 SMG | DamageAgainstShrikeMultiplier = 0.5
||| NJ4 SMG | ReloadTime = 1.7999999523163
||| NJ4 SMG | FireInterval = 0.079999998211861
||| NJ4 SMG | HoldToFire = true
||| NJ4 SMG | CanZoom = true
||| NJ4 SMG | ReloadSingle = false
||| NJ4 SMG | ReloadApplicationProportion = 0.58799999952316
Failed to get property with id 2006
||| NJ4 SMG | BurstShotCount = nil
Failed to get property with id 2007
||| NJ4 SMG | BurstShotRefireTime = nil
Failed to get property with id 2008
||| NJ4 SMG | SpinupTime = nil
Failed to get property with id 2009
||| NJ4 SMG | ShotgunShotCount = nil
||| NJ4 SMG | ShotEnergyCost = 0
||| NJ4 SMG | ImpactMomentum = 0.0
||| NJ4 SMG | SelfImpactMomentumMultiplier = 1.5
||| NJ4 SMG | SelfImpactExtraZMomentum = 0.0
||| NJ4 SMG | ExplosiveRadius = 0.0
||| NJ4 SMG | BulletDamageRange = 6000.0
||| NJ4 SMG | MaxDamageRangeProportion = 0.5
||| NJ4 SMG | MinDamageRangeProportion = 1.0
||| NJ4 SMG | MinDamageProportion = 0.80000001192093
||| NJ4 SMG | DoesImpulseFlag = false
||| NJ4 SMG | DoesGibOnKill = false
||| NJ4 SMG | GibImpulseRadius = 100.0
||| NJ4 SMG | GibStrength = 40.0
||| NJ4 SMG | ProjectileSpeed = 21000.0
||| NJ4 SMG | ProjectileMaxSpeed = 21000.0
||| NJ4 SMG | CollisionSize = 25.0
||| NJ4 SMG | ProjectileInheritance = 0.0
||| NJ4 SMG | ProjectileLifespan = 1.0
||| NJ4 SMG | ProjectileGravity = 0.0
||| NJ4 SMG | ProjectileTerminalVelocity = 3500.0
||| NJ4 SMG | ProjectileBounceDamping = 0.0
||| NJ4 SMG | HitscanRange = 2000.0
||| NJ4 SMG | FireOffsetX = 3.0
||| NJ4 SMG | FireOffsetY = 0.0
||| NJ4 SMG | FireOffsetZ = -0.0
||| NJ4 SMG | FractalDuration = 1.6132308440693e-40
||| NJ4 SMG | FractalShardInterval = 1.4930442773811e-39
||| NJ4 SMG | FractalAscentTime = 6.428540782998e-40
||| NJ4 SMG | FractalAscentHeight = 5.0133621698478e-09
||| NJ4 SMG | FractalShardDistance = 7.0771177642261e-41
||| NJ4 SMG | FractalShardHeight = 9.396314093298e-35
||| NJ4 SMG | FractalShardDamage = 3
||| NJ4 SMG | FractalShardDamageRadius = 0.0
||| NJ4 SMG | MeleeDamageRadius = 0.0
||| NJ4 SMG | MeleeConeAngle = 0.0
||| NJ4 SMG | Accuracy = 1.0
||| NJ4 SMG | AccuracyLossOnShot = 0.0
||| NJ4 SMG | AccuracyLossOnJump = 0.30000001192093
||| NJ4 SMG | AccuracyLossMax = 0.0
||| NJ4 SMG | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| NJ4 SMG | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| NJ4 SMG | ThrowDelay = nil
Failed to get property with id 6001
||| NJ4 SMG | ThrowPullPinTime = nil
||| NJ4 SMG | StuckDamageMultiplier = 0.0
||| NJ4 SMG | StuckMomentumMultiplier = 0.0
||| NJ4 SMG | FuseTimer = 0.0
||| NJ4 SMG | ExplodeOnContact = false
||| NJ4 SMG | ExplodeOnFuse = false
||| NJ4 SMG | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| NJ4 SMG | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| NJ4 SMG | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| NJ4 SMG | ThrustPackImpulse = nil
Failed to get property with id 7003
||| NJ4 SMG | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| NJ4 SMG | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| NJ4 SMG | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| NJ4 SMG | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| NJ4 SMG | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| NJ4 SMG | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| NJ4 SMG | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| NJ4 SMG | JammerPackRange = nil
Failed to get property with id 7011
||| NJ4 SMG | PackBuffAmount = nil
Failed to get property with id 7012
||| NJ4 SMG | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| NJ4 SMG | DeployableRange = nil
Failed to get property with id 8001
||| NJ4 SMG | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| NJ4 SMG | DeployableMinProximity = nil
Failed to get property with id 8003
||| NJ4 SMG | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| NJ4 SMG | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| NJ4 SMG | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| NJ4 SMG | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| NJ4 SMG | ForcefieldMaxDamageSpeed = nil
||| NJ4 SMG | MineDeployTime = 0.0
||| NJ4 SMG | MineMaxAllowed = 0
||| NJ4 SMG | MineCollisionCylinderRadius = 0.0
||| NJ4 SMG | MineCollisionCylinderHeight = 0.0
||| NJ4 SMG | ClaymoreDetonationAngle = 1.4930442773811e-39
||| NJ4 SMG | PrismMineTripDistance = 5.0133621698478e-09
||| NJ5-B SMG | SpareAmmo = 120
||| NJ5-B SMG | AmmoPerShot = 1
||| NJ5-B SMG | LowAmmoCutoff = 10
||| NJ5-B SMG | Damage = 150.0
||| NJ5-B SMG | DirectHitMultiplier = 1.0
||| NJ5-B SMG | EnergyDrain = 0.0
||| NJ5-B SMG | DamageAgainstArmorMultiplier = 0.5
||| NJ5-B SMG | DamageAgainstGeneratorMultiplier = 1.0
||| NJ5-B SMG | DamageAgainstBaseTurretMultiplier = 1.0
||| NJ5-B SMG | DamageAgainstBaseSensorMultiplier = 1.0
||| NJ5-B SMG | DamageAgainstGravCycleMultiplier = 0.5
||| NJ5-B SMG | DamageAgainstBeowulfMultiplier = 0.5
||| NJ5-B SMG | DamageAgainstShrikeMultiplier = 0.5
||| NJ5-B SMG | ReloadTime = 1.8999999761581
||| NJ5-B SMG | FireInterval = 0.20000000298023
||| NJ5-B SMG | HoldToFire = true
||| NJ5-B SMG | CanZoom = true
||| NJ5-B SMG | ReloadSingle = false
||| NJ5-B SMG | ReloadApplicationProportion = 0.58799999952316
Failed to get property with id 2006
||| NJ5-B SMG | BurstShotCount = nil
Failed to get property with id 2007
||| NJ5-B SMG | BurstShotRefireTime = nil
Failed to get property with id 2008
||| NJ5-B SMG | SpinupTime = nil
Failed to get property with id 2009
||| NJ5-B SMG | ShotgunShotCount = nil
||| NJ5-B SMG | ShotEnergyCost = 0
||| NJ5-B SMG | ImpactMomentum = 0.0
||| NJ5-B SMG | SelfImpactMomentumMultiplier = 1.5
||| NJ5-B SMG | SelfImpactExtraZMomentum = 0.0
||| NJ5-B SMG | ExplosiveRadius = 0.0
||| NJ5-B SMG | BulletDamageRange = 6000.0
||| NJ5-B SMG | MaxDamageRangeProportion = 0.5
||| NJ5-B SMG | MinDamageRangeProportion = 1.0
||| NJ5-B SMG | MinDamageProportion = 0.80000001192093
||| NJ5-B SMG | DoesImpulseFlag = false
||| NJ5-B SMG | DoesGibOnKill = false
||| NJ5-B SMG | GibImpulseRadius = 100.0
||| NJ5-B SMG | GibStrength = 40.0
||| NJ5-B SMG | ProjectileSpeed = 21000.0
||| NJ5-B SMG | ProjectileMaxSpeed = 21000.0
||| NJ5-B SMG | CollisionSize = 25.0
||| NJ5-B SMG | ProjectileInheritance = 0.0
||| NJ5-B SMG | ProjectileLifespan = 1.0
||| NJ5-B SMG | ProjectileGravity = 0.0
||| NJ5-B SMG | ProjectileTerminalVelocity = 3500.0
||| NJ5-B SMG | ProjectileBounceDamping = 0.0
||| NJ5-B SMG | HitscanRange = 2000.0
||| NJ5-B SMG | FireOffsetX = 3.0
||| NJ5-B SMG | FireOffsetY = 0.0
||| NJ5-B SMG | FireOffsetZ = -0.0
||| NJ5-B SMG | FractalDuration = 1.6134830777929e-40
||| NJ5-B SMG | FractalShardInterval = 1.4930442773811e-39
||| NJ5-B SMG | FractalAscentTime = 6.428540782998e-40
||| NJ5-B SMG | FractalAscentHeight = 3.6251394157212e-28
||| NJ5-B SMG | FractalShardDistance = 7.0782388029975e-41
||| NJ5-B SMG | FractalShardHeight = 9.396314093298e-35
||| NJ5-B SMG | FractalShardDamage = 3
||| NJ5-B SMG | FractalShardDamageRadius = 0.0
||| NJ5-B SMG | MeleeDamageRadius = 0.0
||| NJ5-B SMG | MeleeConeAngle = 0.0
||| NJ5-B SMG | Accuracy = 1.0
||| NJ5-B SMG | AccuracyLossOnShot = 0.0
||| NJ5-B SMG | AccuracyLossOnJump = 0.30000001192093
||| NJ5-B SMG | AccuracyLossMax = 0.0
||| NJ5-B SMG | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| NJ5-B SMG | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| NJ5-B SMG | ThrowDelay = nil
Failed to get property with id 6001
||| NJ5-B SMG | ThrowPullPinTime = nil
||| NJ5-B SMG | StuckDamageMultiplier = 0.0
||| NJ5-B SMG | StuckMomentumMultiplier = 0.0
||| NJ5-B SMG | FuseTimer = 0.0
||| NJ5-B SMG | ExplodeOnContact = false
||| NJ5-B SMG | ExplodeOnFuse = false
||| NJ5-B SMG | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| NJ5-B SMG | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| NJ5-B SMG | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| NJ5-B SMG | ThrustPackImpulse = nil
Failed to get property with id 7003
||| NJ5-B SMG | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| NJ5-B SMG | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| NJ5-B SMG | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| NJ5-B SMG | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| NJ5-B SMG | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| NJ5-B SMG | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| NJ5-B SMG | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| NJ5-B SMG | JammerPackRange = nil
Failed to get property with id 7011
||| NJ5-B SMG | PackBuffAmount = nil
Failed to get property with id 7012
||| NJ5-B SMG | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| NJ5-B SMG | DeployableRange = nil
Failed to get property with id 8001
||| NJ5-B SMG | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| NJ5-B SMG | DeployableMinProximity = nil
Failed to get property with id 8003
||| NJ5-B SMG | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| NJ5-B SMG | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| NJ5-B SMG | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| NJ5-B SMG | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| NJ5-B SMG | ForcefieldMaxDamageSpeed = nil
||| NJ5-B SMG | MineDeployTime = 0.0
||| NJ5-B SMG | MineMaxAllowed = 0
||| NJ5-B SMG | MineCollisionCylinderRadius = 0.0
||| NJ5-B SMG | MineCollisionCylinderHeight = 0.0
||| NJ5-B SMG | ClaymoreDetonationAngle = 1.4930442773811e-39
||| NJ5-B SMG | PrismMineTripDistance = 3.6251394157212e-28
||| Plasma Gun | SpareAmmo = 54
||| Plasma Gun | AmmoPerShot = 1
||| Plasma Gun | LowAmmoCutoff = 3
||| Plasma Gun | Damage = 270.0
||| Plasma Gun | DirectHitMultiplier = 1.5
||| Plasma Gun | EnergyDrain = 0.0
||| Plasma Gun | DamageAgainstArmorMultiplier = 1.25
||| Plasma Gun | DamageAgainstGeneratorMultiplier = 2.0
||| Plasma Gun | DamageAgainstBaseTurretMultiplier = 2.0
||| Plasma Gun | DamageAgainstBaseSensorMultiplier = 2.0
||| Plasma Gun | DamageAgainstGravCycleMultiplier = 1.25
||| Plasma Gun | DamageAgainstBeowulfMultiplier = 1.25
||| Plasma Gun | DamageAgainstShrikeMultiplier = 1.25
||| Plasma Gun | ReloadTime = 1.7999999523163
||| Plasma Gun | FireInterval = 0.5
||| Plasma Gun | HoldToFire = true
||| Plasma Gun | CanZoom = true
||| Plasma Gun | ReloadSingle = false
||| Plasma Gun | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Plasma Gun | BurstShotCount = nil
Failed to get property with id 2007
||| Plasma Gun | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Plasma Gun | SpinupTime = nil
Failed to get property with id 2009
||| Plasma Gun | ShotgunShotCount = nil
||| Plasma Gun | ShotEnergyCost = 0
||| Plasma Gun | ImpactMomentum = 25000.0
||| Plasma Gun | SelfImpactMomentumMultiplier = 1.5
||| Plasma Gun | SelfImpactExtraZMomentum = 25000.0
||| Plasma Gun | ExplosiveRadius = 250.0
||| Plasma Gun | BulletDamageRange = 6000.0
||| Plasma Gun | MaxDamageRangeProportion = 0.0
||| Plasma Gun | MinDamageRangeProportion = 1.0
||| Plasma Gun | MinDamageProportion = 0.30000001192093
||| Plasma Gun | DoesImpulseFlag = true
||| Plasma Gun | DoesGibOnKill = false
||| Plasma Gun | GibImpulseRadius = 100.0
||| Plasma Gun | GibStrength = 40.0
||| Plasma Gun | ProjectileSpeed = 3920.0
||| Plasma Gun | ProjectileMaxSpeed = 8000.0
||| Plasma Gun | CollisionSize = 20.0
||| Plasma Gun | ProjectileInheritance = 0.5
||| Plasma Gun | ProjectileLifespan = 1.0
||| Plasma Gun | ProjectileGravity = 1.0
||| Plasma Gun | ProjectileTerminalVelocity = 3500.0
||| Plasma Gun | ProjectileBounceDamping = 0.55000001192093
||| Plasma Gun | HitscanRange = 2000.0
||| Plasma Gun | FireOffsetX = 3.0
||| Plasma Gun | FireOffsetY = 10.0
||| Plasma Gun | FireOffsetZ = -7.0
||| Plasma Gun | FractalDuration = 1.6142117529943e-40
||| Plasma Gun | FractalShardInterval = 1.4930442773811e-39
||| Plasma Gun | FractalAscentTime = 6.428540782998e-40
||| Plasma Gun | FractalAscentHeight = 1.5583315477619e-28
||| Plasma Gun | FractalShardDistance = 7.0821624386976e-41
||| Plasma Gun | FractalShardHeight = 9.396314093298e-35
||| Plasma Gun | FractalShardDamage = 3
||| Plasma Gun | FractalShardDamageRadius = 0.0
||| Plasma Gun | MeleeDamageRadius = 0.0
||| Plasma Gun | MeleeConeAngle = 0.0
||| Plasma Gun | Accuracy = 1.0
||| Plasma Gun | AccuracyLossOnShot = 0.0
||| Plasma Gun | AccuracyLossOnJump = 0.30000001192093
||| Plasma Gun | AccuracyLossMax = 0.30000001192093
||| Plasma Gun | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Plasma Gun | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Plasma Gun | ThrowDelay = nil
Failed to get property with id 6001
||| Plasma Gun | ThrowPullPinTime = nil
||| Plasma Gun | StuckDamageMultiplier = 0.0
||| Plasma Gun | StuckMomentumMultiplier = 0.0
||| Plasma Gun | FuseTimer = 0.0
||| Plasma Gun | ExplodeOnContact = false
||| Plasma Gun | ExplodeOnFuse = false
||| Plasma Gun | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Plasma Gun | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Plasma Gun | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Plasma Gun | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Plasma Gun | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Plasma Gun | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Plasma Gun | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Plasma Gun | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Plasma Gun | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Plasma Gun | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Plasma Gun | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Plasma Gun | JammerPackRange = nil
Failed to get property with id 7011
||| Plasma Gun | PackBuffAmount = nil
Failed to get property with id 7012
||| Plasma Gun | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Plasma Gun | DeployableRange = nil
Failed to get property with id 8001
||| Plasma Gun | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Plasma Gun | DeployableMinProximity = nil
Failed to get property with id 8003
||| Plasma Gun | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Plasma Gun | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Plasma Gun | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Plasma Gun | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Plasma Gun | ForcefieldMaxDamageSpeed = nil
||| Plasma Gun | MineDeployTime = 0.0
||| Plasma Gun | MineMaxAllowed = 0
||| Plasma Gun | MineCollisionCylinderRadius = 0.0
||| Plasma Gun | MineCollisionCylinderHeight = 0.0
||| Plasma Gun | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Plasma Gun | PrismMineTripDistance = 1.5583315477619e-28
||| Sawed-Off Shotgun | SpareAmmo = 24
||| Sawed-Off Shotgun | AmmoPerShot = 1
||| Sawed-Off Shotgun | LowAmmoCutoff = 1
||| Sawed-Off Shotgun | Damage = 70.0
Failed to get property with id 3002
||| Sawed-Off Shotgun | DirectHitMultiplier = nil
||| Sawed-Off Shotgun | EnergyDrain = 0.0
||| Sawed-Off Shotgun | DamageAgainstArmorMultiplier = 0.5
||| Sawed-Off Shotgun | DamageAgainstGeneratorMultiplier = 1.0
||| Sawed-Off Shotgun | DamageAgainstBaseTurretMultiplier = 1.0
||| Sawed-Off Shotgun | DamageAgainstBaseSensorMultiplier = 1.0
||| Sawed-Off Shotgun | DamageAgainstGravCycleMultiplier = 0.5
||| Sawed-Off Shotgun | DamageAgainstBeowulfMultiplier = 0.5
||| Sawed-Off Shotgun | DamageAgainstShrikeMultiplier = 0.5
||| Sawed-Off Shotgun | ReloadTime = 1.6000000238419
||| Sawed-Off Shotgun | FireInterval = 0.5
||| Sawed-Off Shotgun | HoldToFire = true
||| Sawed-Off Shotgun | CanZoom = true
||| Sawed-Off Shotgun | ReloadSingle = false
||| Sawed-Off Shotgun | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Sawed-Off Shotgun | BurstShotCount = nil
Failed to get property with id 2007
||| Sawed-Off Shotgun | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Sawed-Off Shotgun | SpinupTime = nil
||| Sawed-Off Shotgun | ShotgunShotCount = 9
||| Sawed-Off Shotgun | ShotEnergyCost = 0
||| Sawed-Off Shotgun | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Sawed-Off Shotgun | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Sawed-Off Shotgun | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Sawed-Off Shotgun | ExplosiveRadius = nil
||| Sawed-Off Shotgun | BulletDamageRange = 6000.0
||| Sawed-Off Shotgun | MaxDamageRangeProportion = 0.5
||| Sawed-Off Shotgun | MinDamageRangeProportion = 1.0
||| Sawed-Off Shotgun | MinDamageProportion = 0.5
||| Sawed-Off Shotgun | DoesImpulseFlag = false
||| Sawed-Off Shotgun | DoesGibOnKill = false
||| Sawed-Off Shotgun | GibImpulseRadius = 100.0
||| Sawed-Off Shotgun | GibStrength = 40.0
Failed to get property with id 4000
||| Sawed-Off Shotgun | ProjectileSpeed = nil
Failed to get property with id 4001
||| Sawed-Off Shotgun | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Sawed-Off Shotgun | CollisionSize = nil
Failed to get property with id 4003
||| Sawed-Off Shotgun | ProjectileInheritance = nil
Failed to get property with id 4004
||| Sawed-Off Shotgun | ProjectileLifespan = nil
Failed to get property with id 4005
||| Sawed-Off Shotgun | ProjectileGravity = nil
Failed to get property with id 4006
||| Sawed-Off Shotgun | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Sawed-Off Shotgun | ProjectileBounceDamping = nil
||| Sawed-Off Shotgun | HitscanRange = 2500.0
||| Sawed-Off Shotgun | FireOffsetX = 0.0
||| Sawed-Off Shotgun | FireOffsetY = 0.0
||| Sawed-Off Shotgun | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Sawed-Off Shotgun | FractalDuration = nil
Failed to get property with id 3031
||| Sawed-Off Shotgun | FractalShardInterval = nil
Failed to get property with id 3032
||| Sawed-Off Shotgun | FractalAscentTime = nil
Failed to get property with id 3033
||| Sawed-Off Shotgun | FractalAscentHeight = nil
Failed to get property with id 3034
||| Sawed-Off Shotgun | FractalShardDistance = nil
Failed to get property with id 3035
||| Sawed-Off Shotgun | FractalShardHeight = nil
Failed to get property with id 3036
||| Sawed-Off Shotgun | FractalShardDamage = nil
Failed to get property with id 3037
||| Sawed-Off Shotgun | FractalShardDamageRadius = nil
||| Sawed-Off Shotgun | MeleeDamageRadius = 0.0
||| Sawed-Off Shotgun | MeleeConeAngle = 0.0
||| Sawed-Off Shotgun | Accuracy = 0.85000002384186
||| Sawed-Off Shotgun | AccuracyLossOnShot = 0.0
||| Sawed-Off Shotgun | AccuracyLossOnJump = 0.30000001192093
||| Sawed-Off Shotgun | AccuracyLossMax = 0.30000001192093
||| Sawed-Off Shotgun | AccuracyCorrectionRate = 0.18999999761581
||| Sawed-Off Shotgun | ShotgunUseGOTYSpread = 0
Failed to get property with id 6000
||| Sawed-Off Shotgun | ThrowDelay = nil
Failed to get property with id 6001
||| Sawed-Off Shotgun | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Sawed-Off Shotgun | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Sawed-Off Shotgun | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Sawed-Off Shotgun | FuseTimer = nil
Failed to get property with id 6005
||| Sawed-Off Shotgun | ExplodeOnContact = nil
Failed to get property with id 6006
||| Sawed-Off Shotgun | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Sawed-Off Shotgun | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Sawed-Off Shotgun | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Sawed-Off Shotgun | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Sawed-Off Shotgun | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Sawed-Off Shotgun | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Sawed-Off Shotgun | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Sawed-Off Shotgun | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Sawed-Off Shotgun | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Sawed-Off Shotgun | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Sawed-Off Shotgun | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Sawed-Off Shotgun | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Sawed-Off Shotgun | JammerPackRange = nil
Failed to get property with id 7011
||| Sawed-Off Shotgun | PackBuffAmount = nil
Failed to get property with id 7012
||| Sawed-Off Shotgun | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Sawed-Off Shotgun | DeployableRange = nil
Failed to get property with id 8001
||| Sawed-Off Shotgun | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Sawed-Off Shotgun | DeployableMinProximity = nil
Failed to get property with id 8003
||| Sawed-Off Shotgun | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Sawed-Off Shotgun | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Sawed-Off Shotgun | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Sawed-Off Shotgun | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Sawed-Off Shotgun | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Sawed-Off Shotgun | MineDeployTime = nil
Failed to get property with id 9001
||| Sawed-Off Shotgun | MineMaxAllowed = nil
Failed to get property with id 9002
||| Sawed-Off Shotgun | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Sawed-Off Shotgun | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Sawed-Off Shotgun | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Sawed-Off Shotgun | PrismMineTripDistance = nil
||| Flak Cannon | SpareAmmo = 32
||| Flak Cannon | AmmoPerShot = 1
||| Flak Cannon | LowAmmoCutoff = 1
||| Flak Cannon | Damage = 65.0
||| Flak Cannon | DirectHitMultiplier = 1.0
||| Flak Cannon | EnergyDrain = 0.0
||| Flak Cannon | DamageAgainstArmorMultiplier = 1.25
||| Flak Cannon | DamageAgainstGeneratorMultiplier = 2.0
||| Flak Cannon | DamageAgainstBaseTurretMultiplier = 2.0
||| Flak Cannon | DamageAgainstBaseSensorMultiplier = 2.0
||| Flak Cannon | DamageAgainstGravCycleMultiplier = 1.25
||| Flak Cannon | DamageAgainstBeowulfMultiplier = 1.25
||| Flak Cannon | DamageAgainstShrikeMultiplier = 1.25
||| Flak Cannon | ReloadTime = 1.7999999523163
||| Flak Cannon | FireInterval = 0.75
||| Flak Cannon | HoldToFire = true
||| Flak Cannon | CanZoom = true
||| Flak Cannon | ReloadSingle = false
||| Flak Cannon | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Flak Cannon | BurstShotCount = nil
Failed to get property with id 2007
||| Flak Cannon | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Flak Cannon | SpinupTime = nil
||| Flak Cannon | ShotgunShotCount = 9
||| Flak Cannon | ShotEnergyCost = 0
||| Flak Cannon | ImpactMomentum = 0.0
||| Flak Cannon | SelfImpactMomentumMultiplier = 1.5
||| Flak Cannon | SelfImpactExtraZMomentum = 0.0
||| Flak Cannon | ExplosiveRadius = 128.0
||| Flak Cannon | BulletDamageRange = 6000.0
||| Flak Cannon | MaxDamageRangeProportion = 0.0
||| Flak Cannon | MinDamageRangeProportion = 1.0
||| Flak Cannon | MinDamageProportion = 0.5
||| Flak Cannon | DoesImpulseFlag = true
||| Flak Cannon | DoesGibOnKill = false
||| Flak Cannon | GibImpulseRadius = 100.0
||| Flak Cannon | GibStrength = 40.0
||| Flak Cannon | ProjectileSpeed = 9000.0
||| Flak Cannon | ProjectileMaxSpeed = 8000.0
||| Flak Cannon | CollisionSize = 25.0
||| Flak Cannon | ProjectileInheritance = 0.5
||| Flak Cannon | ProjectileLifespan = 1.5
||| Flak Cannon | ProjectileGravity = 1.0
||| Flak Cannon | ProjectileTerminalVelocity = 9000.0
||| Flak Cannon | ProjectileBounceDamping = 0.60000002384186
||| Flak Cannon | HitscanRange = 2500.0
||| Flak Cannon | FireOffsetX = 3.0
||| Flak Cannon | FireOffsetY = 10.0
||| Flak Cannon | FireOffsetZ = -7.0
||| Flak Cannon | FractalDuration = 1.6066167153177e-40
||| Flak Cannon | FractalShardInterval = 1.4930442773811e-39
||| Flak Cannon | FractalAscentTime = 6.428540782998e-40
||| Flak Cannon | FractalAscentHeight = 3.6252780826772e-28
||| Flak Cannon | FractalShardDistance = 7.0441872503144e-41
||| Flak Cannon | FractalShardHeight = 9.396314093298e-35
||| Flak Cannon | FractalShardDamage = 3
||| Flak Cannon | FractalShardDamageRadius = 0.0
||| Flak Cannon | MeleeDamageRadius = 0.0
||| Flak Cannon | MeleeConeAngle = 0.0
||| Flak Cannon | Accuracy = 0.85000002384186
||| Flak Cannon | AccuracyLossOnShot = 0.0
||| Flak Cannon | AccuracyLossOnJump = 0.30000001192093
||| Flak Cannon | AccuracyLossMax = 0.30000001192093
||| Flak Cannon | AccuracyCorrectionRate = 0.18999999761581
||| Flak Cannon | ShotgunUseGOTYSpread = 0
Failed to get property with id 6000
||| Flak Cannon | ThrowDelay = nil
Failed to get property with id 6001
||| Flak Cannon | ThrowPullPinTime = nil
||| Flak Cannon | StuckDamageMultiplier = 0.0
||| Flak Cannon | StuckMomentumMultiplier = 0.0
||| Flak Cannon | FuseTimer = 0.0
||| Flak Cannon | ExplodeOnContact = false
||| Flak Cannon | ExplodeOnFuse = true
||| Flak Cannon | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Flak Cannon | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Flak Cannon | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Flak Cannon | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Flak Cannon | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Flak Cannon | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Flak Cannon | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Flak Cannon | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Flak Cannon | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Flak Cannon | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Flak Cannon | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Flak Cannon | JammerPackRange = nil
Failed to get property with id 7011
||| Flak Cannon | PackBuffAmount = nil
Failed to get property with id 7012
||| Flak Cannon | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Flak Cannon | DeployableRange = nil
Failed to get property with id 8001
||| Flak Cannon | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Flak Cannon | DeployableMinProximity = nil
Failed to get property with id 8003
||| Flak Cannon | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Flak Cannon | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Flak Cannon | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Flak Cannon | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Flak Cannon | ForcefieldMaxDamageSpeed = nil
||| Flak Cannon | MineDeployTime = 0.0
||| Flak Cannon | MineMaxAllowed = 0
||| Flak Cannon | MineCollisionCylinderRadius = 0.0
||| Flak Cannon | MineCollisionCylinderHeight = 0.0
||| Flak Cannon | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Flak Cannon | PrismMineTripDistance = 3.6252780826772e-28
||| Motion Sensor | SpareAmmo = 1
||| Motion Sensor | AmmoPerShot = 1
||| Motion Sensor | LowAmmoCutoff = 0
||| Motion Sensor | Damage = 200.0
||| Motion Sensor | DirectHitMultiplier = 1.0
||| Motion Sensor | EnergyDrain = 100.0
||| Motion Sensor | DamageAgainstArmorMultiplier = 2.0
||| Motion Sensor | DamageAgainstGeneratorMultiplier = 2.0
||| Motion Sensor | DamageAgainstBaseTurretMultiplier = 2.0
||| Motion Sensor | DamageAgainstBaseSensorMultiplier = 2.0
||| Motion Sensor | DamageAgainstGravCycleMultiplier = 2.0
||| Motion Sensor | DamageAgainstBeowulfMultiplier = 2.0
||| Motion Sensor | DamageAgainstShrikeMultiplier = 2.0
||| Motion Sensor | ReloadTime = 0.0
||| Motion Sensor | FireInterval = 0.20000000298023
||| Motion Sensor | HoldToFire = true
||| Motion Sensor | CanZoom = true
||| Motion Sensor | ReloadSingle = false
||| Motion Sensor | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Motion Sensor | BurstShotCount = nil
Failed to get property with id 2007
||| Motion Sensor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Motion Sensor | SpinupTime = nil
Failed to get property with id 2009
||| Motion Sensor | ShotgunShotCount = nil
||| Motion Sensor | ShotEnergyCost = 0
||| Motion Sensor | ImpactMomentum = 85000.0
||| Motion Sensor | SelfImpactMomentumMultiplier = 1.5
||| Motion Sensor | SelfImpactExtraZMomentum = 0.0
||| Motion Sensor | ExplosiveRadius = 520.0
||| Motion Sensor | BulletDamageRange = 6000.0
||| Motion Sensor | MaxDamageRangeProportion = 1.0
||| Motion Sensor | MinDamageRangeProportion = 1.0
||| Motion Sensor | MinDamageProportion = 1.0
||| Motion Sensor | DoesImpulseFlag = true
||| Motion Sensor | DoesGibOnKill = false
||| Motion Sensor | GibImpulseRadius = 100.0
||| Motion Sensor | GibStrength = 40.0
||| Motion Sensor | ProjectileSpeed = 300.0
||| Motion Sensor | ProjectileMaxSpeed = 300.0
||| Motion Sensor | CollisionSize = 42.0
||| Motion Sensor | ProjectileInheritance = 0.20000000298023
||| Motion Sensor | ProjectileLifespan = 0.0
||| Motion Sensor | ProjectileGravity = 1.0
||| Motion Sensor | ProjectileTerminalVelocity = 3500.0
||| Motion Sensor | ProjectileBounceDamping = 0.20000000298023
||| Motion Sensor | HitscanRange = 2000.0
||| Motion Sensor | FireOffsetX = 0.0
||| Motion Sensor | FireOffsetY = 0.0
||| Motion Sensor | FireOffsetZ = 0.0
||| Motion Sensor | FractalDuration = 5.4650640108668e-44
||| Motion Sensor | FractalShardInterval = 0.0
||| Motion Sensor | FractalAscentTime = 0.0
||| Motion Sensor | FractalAscentHeight = 0.0
||| Motion Sensor | FractalShardDistance = 0.0
||| Motion Sensor | FractalShardHeight = 0.0
||| Motion Sensor | FractalShardDamage = 0
||| Motion Sensor | FractalShardDamageRadius = 0.0
||| Motion Sensor | MeleeDamageRadius = 0.0
||| Motion Sensor | MeleeConeAngle = 0.0
||| Motion Sensor | Accuracy = 1.0
||| Motion Sensor | AccuracyLossOnShot = 0.0
||| Motion Sensor | AccuracyLossOnJump = 0.0
||| Motion Sensor | AccuracyLossMax = 0.0
||| Motion Sensor | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Motion Sensor | ShotgunUseGOTYSpread = nil
||| Motion Sensor | ThrowDelay = 0.69999998807907
||| Motion Sensor | ThrowPullPinTime = 0.20000000298023
||| Motion Sensor | StuckDamageMultiplier = 0.20000000298023
||| Motion Sensor | StuckMomentumMultiplier = 0.0
||| Motion Sensor | FuseTimer = 3.0828566215146e-44
||| Motion Sensor | ExplodeOnContact = false
||| Motion Sensor | ExplodeOnFuse = false
||| Motion Sensor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Motion Sensor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Motion Sensor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Motion Sensor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Motion Sensor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Motion Sensor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Motion Sensor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Motion Sensor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Motion Sensor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Motion Sensor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Motion Sensor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Motion Sensor | JammerPackRange = nil
Failed to get property with id 7011
||| Motion Sensor | PackBuffAmount = nil
Failed to get property with id 7012
||| Motion Sensor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Motion Sensor | DeployableRange = nil
Failed to get property with id 8001
||| Motion Sensor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Motion Sensor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Motion Sensor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Motion Sensor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Motion Sensor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Motion Sensor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Motion Sensor | ForcefieldMaxDamageSpeed = nil
||| Motion Sensor | MineDeployTime = 0.10000000149012
||| Motion Sensor | MineMaxAllowed = 2
||| Motion Sensor | MineCollisionCylinderRadius = 300.0
||| Motion Sensor | MineCollisionCylinderHeight = 200.0
||| Motion Sensor | ClaymoreDetonationAngle = 0.0
||| Motion Sensor | PrismMineTripDistance = 0.0
||| Blackout Grenade | SpareAmmo = 2
||| Blackout Grenade | AmmoPerShot = 1
||| Blackout Grenade | LowAmmoCutoff = 0
||| Blackout Grenade | Damage = 750.0
||| Blackout Grenade | DirectHitMultiplier = 1.0
||| Blackout Grenade | EnergyDrain = 0.0
||| Blackout Grenade | DamageAgainstArmorMultiplier = 1.0
||| Blackout Grenade | DamageAgainstGeneratorMultiplier = 1.0
||| Blackout Grenade | DamageAgainstBaseTurretMultiplier = 1.0
||| Blackout Grenade | DamageAgainstBaseSensorMultiplier = 1.0
||| Blackout Grenade | DamageAgainstGravCycleMultiplier = 1.0
||| Blackout Grenade | DamageAgainstBeowulfMultiplier = 1.0
||| Blackout Grenade | DamageAgainstShrikeMultiplier = 1.0
||| Blackout Grenade | ReloadTime = 0.0
||| Blackout Grenade | FireInterval = 0.20000000298023
||| Blackout Grenade | HoldToFire = true
||| Blackout Grenade | CanZoom = true
||| Blackout Grenade | ReloadSingle = false
||| Blackout Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Blackout Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| Blackout Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Blackout Grenade | SpinupTime = nil
Failed to get property with id 2009
||| Blackout Grenade | ShotgunShotCount = nil
||| Blackout Grenade | ShotEnergyCost = 0
||| Blackout Grenade | ImpactMomentum = 52000.0
||| Blackout Grenade | SelfImpactMomentumMultiplier = 1.5
||| Blackout Grenade | SelfImpactExtraZMomentum = 50000.0
||| Blackout Grenade | ExplosiveRadius = 600.0
||| Blackout Grenade | BulletDamageRange = 6000.0
||| Blackout Grenade | MaxDamageRangeProportion = 0.0
||| Blackout Grenade | MinDamageRangeProportion = 0.89999997615814
||| Blackout Grenade | MinDamageProportion = 0.5
||| Blackout Grenade | DoesImpulseFlag = true
||| Blackout Grenade | DoesGibOnKill = true
||| Blackout Grenade | GibImpulseRadius = 100.0
||| Blackout Grenade | GibStrength = 40.0
||| Blackout Grenade | ProjectileSpeed = 1200.0
||| Blackout Grenade | ProjectileMaxSpeed = 1600.0
||| Blackout Grenade | CollisionSize = 20.0
||| Blackout Grenade | ProjectileInheritance = 0.20000000298023
||| Blackout Grenade | ProjectileLifespan = 8.0
||| Blackout Grenade | ProjectileGravity = 0.5
||| Blackout Grenade | ProjectileTerminalVelocity = 7000.0
||| Blackout Grenade | ProjectileBounceDamping = 0.55000001192093
||| Blackout Grenade | HitscanRange = 2000.0
||| Blackout Grenade | FireOffsetX = 0.0
||| Blackout Grenade | FireOffsetY = 0.0
||| Blackout Grenade | FireOffsetZ = 0.0
||| Blackout Grenade | FractalDuration = 1.6226755957189e-40
||| Blackout Grenade | FractalShardInterval = 1.4930442773811e-39
||| Blackout Grenade | FractalAscentTime = 6.428540782998e-40
||| Blackout Grenade | FractalAscentHeight = 1.1957790875909e-28
||| Blackout Grenade | FractalShardDistance = 7.1370933384992e-41
||| Blackout Grenade | FractalShardHeight = 9.396314093298e-35
||| Blackout Grenade | FractalShardDamage = 3
||| Blackout Grenade | FractalShardDamageRadius = 0.0
||| Blackout Grenade | MeleeDamageRadius = 0.0
||| Blackout Grenade | MeleeConeAngle = 0.0
||| Blackout Grenade | Accuracy = 1.0
||| Blackout Grenade | AccuracyLossOnShot = 0.0
||| Blackout Grenade | AccuracyLossOnJump = 0.0
||| Blackout Grenade | AccuracyLossMax = 0.0
||| Blackout Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Blackout Grenade | ShotgunUseGOTYSpread = nil
||| Blackout Grenade | ThrowDelay = 0.69999998807907
||| Blackout Grenade | ThrowPullPinTime = 0.15000000596046
||| Blackout Grenade | StuckDamageMultiplier = 1.0
||| Blackout Grenade | StuckMomentumMultiplier = 1.0
||| Blackout Grenade | FuseTimer = 1.5
||| Blackout Grenade | ExplodeOnContact = false
||| Blackout Grenade | ExplodeOnFuse = true
||| Blackout Grenade | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Blackout Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Blackout Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Blackout Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Blackout Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Blackout Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Blackout Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Blackout Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Blackout Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Blackout Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Blackout Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Blackout Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| Blackout Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| Blackout Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Blackout Grenade | DeployableRange = nil
Failed to get property with id 8001
||| Blackout Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Blackout Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| Blackout Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Blackout Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Blackout Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Blackout Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Blackout Grenade | ForcefieldMaxDamageSpeed = nil
||| Blackout Grenade | MineDeployTime = 0.0
||| Blackout Grenade | MineMaxAllowed = 0
||| Blackout Grenade | MineCollisionCylinderRadius = 0.0
||| Blackout Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Blackout Grenade | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Blackout Grenade | PrismMineTripDistance = 1.1957790875909e-28
||| Anti-Personnel Grenade | SpareAmmo = 2
||| Anti-Personnel Grenade | AmmoPerShot = 1
||| Anti-Personnel Grenade | LowAmmoCutoff = 0
||| Anti-Personnel Grenade | Damage = 875.0
||| Anti-Personnel Grenade | DirectHitMultiplier = 1.0
||| Anti-Personnel Grenade | EnergyDrain = 0.0
||| Anti-Personnel Grenade | DamageAgainstArmorMultiplier = 1.0
||| Anti-Personnel Grenade | DamageAgainstGeneratorMultiplier = 1.0
||| Anti-Personnel Grenade | DamageAgainstBaseTurretMultiplier = 1.0
||| Anti-Personnel Grenade | DamageAgainstBaseSensorMultiplier = 1.0
||| Anti-Personnel Grenade | DamageAgainstGravCycleMultiplier = 1.5
||| Anti-Personnel Grenade | DamageAgainstBeowulfMultiplier = 1.5
||| Anti-Personnel Grenade | DamageAgainstShrikeMultiplier = 1.5
||| Anti-Personnel Grenade | ReloadTime = 0.0
||| Anti-Personnel Grenade | FireInterval = 0.20000000298023
||| Anti-Personnel Grenade | HoldToFire = true
||| Anti-Personnel Grenade | CanZoom = true
||| Anti-Personnel Grenade | ReloadSingle = false
||| Anti-Personnel Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Anti-Personnel Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| Anti-Personnel Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Anti-Personnel Grenade | SpinupTime = nil
Failed to get property with id 2009
||| Anti-Personnel Grenade | ShotgunShotCount = nil
||| Anti-Personnel Grenade | ShotEnergyCost = 0
||| Anti-Personnel Grenade | ImpactMomentum = 85000.0
||| Anti-Personnel Grenade | SelfImpactMomentumMultiplier = 1.5
||| Anti-Personnel Grenade | SelfImpactExtraZMomentum = 0.0
||| Anti-Personnel Grenade | ExplosiveRadius = 600.0
||| Anti-Personnel Grenade | BulletDamageRange = 6000.0
||| Anti-Personnel Grenade | MaxDamageRangeProportion = 0.0
||| Anti-Personnel Grenade | MinDamageRangeProportion = 1.0
||| Anti-Personnel Grenade | MinDamageProportion = 0.5
||| Anti-Personnel Grenade | DoesImpulseFlag = true
||| Anti-Personnel Grenade | DoesGibOnKill = true
||| Anti-Personnel Grenade | GibImpulseRadius = 100.0
||| Anti-Personnel Grenade | GibStrength = 40.0
||| Anti-Personnel Grenade | ProjectileSpeed = 1200.0
||| Anti-Personnel Grenade | ProjectileMaxSpeed = 1600.0
||| Anti-Personnel Grenade | CollisionSize = 20.0
||| Anti-Personnel Grenade | ProjectileInheritance = 0.20000000298023
||| Anti-Personnel Grenade | ProjectileLifespan = 8.0
||| Anti-Personnel Grenade | ProjectileGravity = 0.5
||| Anti-Personnel Grenade | ProjectileTerminalVelocity = 7000.0
||| Anti-Personnel Grenade | ProjectileBounceDamping = 0.55000001192093
||| Anti-Personnel Grenade | HitscanRange = 2000.0
||| Anti-Personnel Grenade | FireOffsetX = 0.0
||| Anti-Personnel Grenade | FireOffsetY = 0.0
||| Anti-Personnel Grenade | FireOffsetZ = 0.0
||| Anti-Personnel Grenade | FractalDuration = 1.5988955607793e-40
||| Anti-Personnel Grenade | FractalShardInterval = 1.4930442773811e-39
||| Anti-Personnel Grenade | FractalAscentTime = 6.428540782998e-40
||| Anti-Personnel Grenade | FractalAscentHeight = 1.3583404257372e-21
||| Anti-Personnel Grenade | FractalShardDistance = 6.9928997265201e-41
||| Anti-Personnel Grenade | FractalShardHeight = 9.396314093298e-35
||| Anti-Personnel Grenade | FractalShardDamage = 3
||| Anti-Personnel Grenade | FractalShardDamageRadius = 0.0
||| Anti-Personnel Grenade | MeleeDamageRadius = 0.0
||| Anti-Personnel Grenade | MeleeConeAngle = 0.0
||| Anti-Personnel Grenade | Accuracy = 1.0
||| Anti-Personnel Grenade | AccuracyLossOnShot = 0.0
||| Anti-Personnel Grenade | AccuracyLossOnJump = 0.0
||| Anti-Personnel Grenade | AccuracyLossMax = 0.0
||| Anti-Personnel Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Anti-Personnel Grenade | ShotgunUseGOTYSpread = nil
||| Anti-Personnel Grenade | ThrowDelay = 0.69999998807907
||| Anti-Personnel Grenade | ThrowPullPinTime = 0.15000000596046
||| Anti-Personnel Grenade | StuckDamageMultiplier = 1.0
||| Anti-Personnel Grenade | StuckMomentumMultiplier = 1.0
||| Anti-Personnel Grenade | FuseTimer = 2.0
||| Anti-Personnel Grenade | ExplodeOnContact = false
||| Anti-Personnel Grenade | ExplodeOnFuse = true
||| Anti-Personnel Grenade | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Anti-Personnel Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Anti-Personnel Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Anti-Personnel Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Anti-Personnel Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Anti-Personnel Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Anti-Personnel Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Anti-Personnel Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Anti-Personnel Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Anti-Personnel Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Anti-Personnel Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Anti-Personnel Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| Anti-Personnel Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| Anti-Personnel Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Anti-Personnel Grenade | DeployableRange = nil
Failed to get property with id 8001
||| Anti-Personnel Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Anti-Personnel Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| Anti-Personnel Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Anti-Personnel Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Anti-Personnel Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Anti-Personnel Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Anti-Personnel Grenade | ForcefieldMaxDamageSpeed = nil
||| Anti-Personnel Grenade | MineDeployTime = 0.0
||| Anti-Personnel Grenade | MineMaxAllowed = 0
||| Anti-Personnel Grenade | MineCollisionCylinderRadius = 0.0
||| Anti-Personnel Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Anti-Personnel Grenade | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Anti-Personnel Grenade | PrismMineTripDistance = 1.3583404257372e-21
||| EMP Grenade | SpareAmmo = 2
||| EMP Grenade | AmmoPerShot = 1
||| EMP Grenade | LowAmmoCutoff = 0
||| EMP Grenade | Damage = 500.0
||| EMP Grenade | DirectHitMultiplier = 1.0
||| EMP Grenade | EnergyDrain = 160.0
||| EMP Grenade | DamageAgainstArmorMultiplier = 3.0
||| EMP Grenade | DamageAgainstGeneratorMultiplier = 3.0
||| EMP Grenade | DamageAgainstBaseTurretMultiplier = 3.0
||| EMP Grenade | DamageAgainstBaseSensorMultiplier = 3.0
||| EMP Grenade | DamageAgainstGravCycleMultiplier = 3.0
||| EMP Grenade | DamageAgainstBeowulfMultiplier = 3.0
||| EMP Grenade | DamageAgainstShrikeMultiplier = 3.0
||| EMP Grenade | ReloadTime = 0.0
||| EMP Grenade | FireInterval = 0.20000000298023
||| EMP Grenade | HoldToFire = true
||| EMP Grenade | CanZoom = true
||| EMP Grenade | ReloadSingle = false
||| EMP Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| EMP Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| EMP Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| EMP Grenade | SpinupTime = nil
Failed to get property with id 2009
||| EMP Grenade | ShotgunShotCount = nil
||| EMP Grenade | ShotEnergyCost = 0
||| EMP Grenade | ImpactMomentum = 85000.0
||| EMP Grenade | SelfImpactMomentumMultiplier = 1.5
||| EMP Grenade | SelfImpactExtraZMomentum = 0.0
||| EMP Grenade | ExplosiveRadius = 600.0
||| EMP Grenade | BulletDamageRange = 6000.0
||| EMP Grenade | MaxDamageRangeProportion = 0.0
||| EMP Grenade | MinDamageRangeProportion = 1.0
||| EMP Grenade | MinDamageProportion = 0.5
||| EMP Grenade | DoesImpulseFlag = true
||| EMP Grenade | DoesGibOnKill = false
||| EMP Grenade | GibImpulseRadius = 100.0
||| EMP Grenade | GibStrength = 40.0
||| EMP Grenade | ProjectileSpeed = 1200.0
||| EMP Grenade | ProjectileMaxSpeed = 1600.0
||| EMP Grenade | CollisionSize = 20.0
||| EMP Grenade | ProjectileInheritance = 0.20000000298023
||| EMP Grenade | ProjectileLifespan = 8.0
||| EMP Grenade | ProjectileGravity = 0.5
||| EMP Grenade | ProjectileTerminalVelocity = 7000.0
||| EMP Grenade | ProjectileBounceDamping = 0.55000001192093
||| EMP Grenade | HitscanRange = 2000.0
||| EMP Grenade | FireOffsetX = 0.0
||| EMP Grenade | FireOffsetY = 0.0
||| EMP Grenade | FireOffsetZ = 0.0
||| EMP Grenade | FractalDuration = 1.6070230918723e-40
||| EMP Grenade | FractalShardInterval = 1.4930442773811e-39
||| EMP Grenade | FractalAscentTime = 6.428540782998e-40
||| EMP Grenade | FractalAscentHeight = 5.3901386539554e-29
||| EMP Grenade | FractalShardDistance = 7.0462891980109e-41
||| EMP Grenade | FractalShardHeight = 9.396314093298e-35
||| EMP Grenade | FractalShardDamage = 3
||| EMP Grenade | FractalShardDamageRadius = 0.0
||| EMP Grenade | MeleeDamageRadius = 0.0
||| EMP Grenade | MeleeConeAngle = 0.0
||| EMP Grenade | Accuracy = 1.0
||| EMP Grenade | AccuracyLossOnShot = 0.0
||| EMP Grenade | AccuracyLossOnJump = 0.0
||| EMP Grenade | AccuracyLossMax = 0.0
||| EMP Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| EMP Grenade | ShotgunUseGOTYSpread = nil
||| EMP Grenade | ThrowDelay = 0.69999998807907
||| EMP Grenade | ThrowPullPinTime = 0.15000000596046
||| EMP Grenade | StuckDamageMultiplier = 1.0
||| EMP Grenade | StuckMomentumMultiplier = 1.0
||| EMP Grenade | FuseTimer = 2.0
||| EMP Grenade | ExplodeOnContact = false
||| EMP Grenade | ExplodeOnFuse = true
||| EMP Grenade | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| EMP Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| EMP Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| EMP Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| EMP Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| EMP Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| EMP Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| EMP Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| EMP Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| EMP Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| EMP Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| EMP Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| EMP Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| EMP Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| EMP Grenade | DeployableRange = nil
Failed to get property with id 8001
||| EMP Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| EMP Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| EMP Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| EMP Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| EMP Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| EMP Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| EMP Grenade | ForcefieldMaxDamageSpeed = nil
||| EMP Grenade | MineDeployTime = 0.0
||| EMP Grenade | MineMaxAllowed = 0
||| EMP Grenade | MineCollisionCylinderRadius = 0.0
||| EMP Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| EMP Grenade | ClaymoreDetonationAngle = 1.4930442773811e-39
||| EMP Grenade | PrismMineTripDistance = 5.3901386539554e-29
||| Cluster Grenade | SpareAmmo = 2
||| Cluster Grenade | AmmoPerShot = 1
||| Cluster Grenade | LowAmmoCutoff = 0
||| Cluster Grenade | Damage = 25.0
||| Cluster Grenade | DirectHitMultiplier = 1.0
||| Cluster Grenade | EnergyDrain = 0.0
||| Cluster Grenade | DamageAgainstArmorMultiplier = 1.0
||| Cluster Grenade | DamageAgainstGeneratorMultiplier = 2.0
||| Cluster Grenade | DamageAgainstBaseTurretMultiplier = 2.0
||| Cluster Grenade | DamageAgainstBaseSensorMultiplier = 2.0
||| Cluster Grenade | DamageAgainstGravCycleMultiplier = 1.0
||| Cluster Grenade | DamageAgainstBeowulfMultiplier = 1.0
||| Cluster Grenade | DamageAgainstShrikeMultiplier = 1.0
||| Cluster Grenade | ReloadTime = 0.0
||| Cluster Grenade | FireInterval = 0.20000000298023
||| Cluster Grenade | HoldToFire = true
||| Cluster Grenade | CanZoom = true
||| Cluster Grenade | ReloadSingle = false
||| Cluster Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Cluster Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| Cluster Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Cluster Grenade | SpinupTime = nil
Failed to get property with id 2009
||| Cluster Grenade | ShotgunShotCount = nil
||| Cluster Grenade | ShotEnergyCost = 0
||| Cluster Grenade | ImpactMomentum = 10000.0
||| Cluster Grenade | SelfImpactMomentumMultiplier = 1.5
||| Cluster Grenade | SelfImpactExtraZMomentum = 0.0
||| Cluster Grenade | ExplosiveRadius = 550.0
||| Cluster Grenade | BulletDamageRange = 6000.0
||| Cluster Grenade | MaxDamageRangeProportion = 0.0
||| Cluster Grenade | MinDamageRangeProportion = 1.0
||| Cluster Grenade | MinDamageProportion = 0.5
||| Cluster Grenade | DoesImpulseFlag = true
||| Cluster Grenade | DoesGibOnKill = true
||| Cluster Grenade | GibImpulseRadius = 100.0
||| Cluster Grenade | GibStrength = 40.0
||| Cluster Grenade | ProjectileSpeed = 1200.0
||| Cluster Grenade | ProjectileMaxSpeed = 1600.0
||| Cluster Grenade | CollisionSize = 20.0
||| Cluster Grenade | ProjectileInheritance = 0.5
||| Cluster Grenade | ProjectileLifespan = 20.0
||| Cluster Grenade | ProjectileGravity = 0.5
||| Cluster Grenade | ProjectileTerminalVelocity = 7000.0
||| Cluster Grenade | ProjectileBounceDamping = 0.55000001192093
||| Cluster Grenade | HitscanRange = 2000.0
||| Cluster Grenade | FireOffsetX = 0.0
||| Cluster Grenade | FireOffsetY = 0.0
||| Cluster Grenade | FireOffsetZ = 0.0
||| Cluster Grenade | FractalDuration = 0.0
||| Cluster Grenade | FractalShardInterval = 0.0
||| Cluster Grenade | FractalAscentTime = 0.0
||| Cluster Grenade | FractalAscentHeight = 0.0
||| Cluster Grenade | FractalShardDistance = 0.0
||| Cluster Grenade | FractalShardHeight = 0.0
||| Cluster Grenade | FractalShardDamage = 0
||| Cluster Grenade | FractalShardDamageRadius = 0.0
||| Cluster Grenade | MeleeDamageRadius = 0.0
||| Cluster Grenade | MeleeConeAngle = 0.0
||| Cluster Grenade | Accuracy = 1.0
||| Cluster Grenade | AccuracyLossOnShot = 0.0
||| Cluster Grenade | AccuracyLossOnJump = 0.0
||| Cluster Grenade | AccuracyLossMax = 0.0
||| Cluster Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Cluster Grenade | ShotgunUseGOTYSpread = nil
||| Cluster Grenade | ThrowDelay = 0.69999998807907
||| Cluster Grenade | ThrowPullPinTime = 0.15000000596046
||| Cluster Grenade | StuckDamageMultiplier = 1.0
||| Cluster Grenade | StuckMomentumMultiplier = 1.0
||| Cluster Grenade | FuseTimer = 2.0
||| Cluster Grenade | ExplodeOnContact = false
||| Cluster Grenade | ExplodeOnFuse = true
||| Cluster Grenade | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Cluster Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Cluster Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Cluster Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Cluster Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Cluster Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Cluster Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Cluster Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Cluster Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Cluster Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Cluster Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Cluster Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| Cluster Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| Cluster Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Cluster Grenade | DeployableRange = nil
Failed to get property with id 8001
||| Cluster Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Cluster Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| Cluster Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Cluster Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Cluster Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Cluster Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Cluster Grenade | ForcefieldMaxDamageSpeed = nil
||| Cluster Grenade | MineDeployTime = 0.0
||| Cluster Grenade | MineMaxAllowed = 0
||| Cluster Grenade | MineCollisionCylinderRadius = 0.0
||| Cluster Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Cluster Grenade | ClaymoreDetonationAngle = 0.0
||| Cluster Grenade | PrismMineTripDistance = 0.0
||| Light Turret | SpareAmmo = 0
||| Light Turret | AmmoPerShot = 1
||| Light Turret | LowAmmoCutoff = 0
||| Light Turret | Damage = 65.0
Failed to get property with id 3002
||| Light Turret | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Light Turret | EnergyDrain = nil
Failed to get property with id 3011
||| Light Turret | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Light Turret | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Light Turret | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Light Turret | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Light Turret | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Light Turret | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Light Turret | DamageAgainstShrikeMultiplier = nil
||| Light Turret | ReloadTime = 1.7999999523163
||| Light Turret | FireInterval = 1.0
||| Light Turret | HoldToFire = true
||| Light Turret | CanZoom = true
||| Light Turret | ReloadSingle = false
||| Light Turret | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Light Turret | BurstShotCount = nil
Failed to get property with id 2007
||| Light Turret | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Light Turret | SpinupTime = nil
Failed to get property with id 2009
||| Light Turret | ShotgunShotCount = nil
||| Light Turret | ShotEnergyCost = 0
||| Light Turret | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Light Turret | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Light Turret | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Light Turret | ExplosiveRadius = nil
Failed to get property with id 3010
||| Light Turret | BulletDamageRange = nil
Failed to get property with id 3007
||| Light Turret | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Light Turret | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Light Turret | MinDamageProportion = nil
Failed to get property with id 3021
||| Light Turret | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Light Turret | DoesGibOnKill = nil
Failed to get property with id 3019
||| Light Turret | GibImpulseRadius = nil
Failed to get property with id 3020
||| Light Turret | GibStrength = nil
Failed to get property with id 4000
||| Light Turret | ProjectileSpeed = nil
Failed to get property with id 4001
||| Light Turret | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Light Turret | CollisionSize = nil
Failed to get property with id 4003
||| Light Turret | ProjectileInheritance = nil
Failed to get property with id 4004
||| Light Turret | ProjectileLifespan = nil
Failed to get property with id 4005
||| Light Turret | ProjectileGravity = nil
Failed to get property with id 4006
||| Light Turret | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Light Turret | ProjectileBounceDamping = nil
||| Light Turret | HitscanRange = 2000.0
||| Light Turret | FireOffsetX = 0.0
||| Light Turret | FireOffsetY = 0.0
||| Light Turret | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Light Turret | FractalDuration = nil
Failed to get property with id 3031
||| Light Turret | FractalShardInterval = nil
Failed to get property with id 3032
||| Light Turret | FractalAscentTime = nil
Failed to get property with id 3033
||| Light Turret | FractalAscentHeight = nil
Failed to get property with id 3034
||| Light Turret | FractalShardDistance = nil
Failed to get property with id 3035
||| Light Turret | FractalShardHeight = nil
Failed to get property with id 3036
||| Light Turret | FractalShardDamage = nil
Failed to get property with id 3037
||| Light Turret | FractalShardDamageRadius = nil
||| Light Turret | MeleeDamageRadius = 0.0
||| Light Turret | MeleeConeAngle = 0.0
||| Light Turret | Accuracy = 1.0
||| Light Turret | AccuracyLossOnShot = 0.10000000149012
||| Light Turret | AccuracyLossOnJump = 0.30000001192093
||| Light Turret | AccuracyLossMax = 0.30000001192093
||| Light Turret | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Light Turret | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Light Turret | ThrowDelay = nil
Failed to get property with id 6001
||| Light Turret | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Light Turret | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Light Turret | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Light Turret | FuseTimer = nil
Failed to get property with id 6005
||| Light Turret | ExplodeOnContact = nil
Failed to get property with id 6006
||| Light Turret | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Light Turret | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Light Turret | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Light Turret | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Light Turret | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Light Turret | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Light Turret | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Light Turret | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Light Turret | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Light Turret | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Light Turret | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Light Turret | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Light Turret | JammerPackRange = nil
Failed to get property with id 7011
||| Light Turret | PackBuffAmount = nil
Failed to get property with id 7012
||| Light Turret | StealthPackMaxSpeed = nil
||| Light Turret | DeployableRange = 0.0
||| Light Turret | DeployableMaxAllowed = 1
||| Light Turret | DeployableMinProximity = 1024.0
||| Light Turret | TurretTimeToAcquireTarget = 0.55000001192093
Failed to get property with id 8005
||| Light Turret | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Light Turret | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Light Turret | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Light Turret | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Light Turret | MineDeployTime = nil
Failed to get property with id 9001
||| Light Turret | MineMaxAllowed = nil
Failed to get property with id 9002
||| Light Turret | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Light Turret | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Light Turret | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Light Turret | PrismMineTripDistance = nil
||| EXR Turret | SpareAmmo = 0
||| EXR Turret | AmmoPerShot = 1
||| EXR Turret | LowAmmoCutoff = 0
||| EXR Turret | Damage = 380.0
Failed to get property with id 3002
||| EXR Turret | DirectHitMultiplier = nil
Failed to get property with id 3006
||| EXR Turret | EnergyDrain = nil
Failed to get property with id 3011
||| EXR Turret | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| EXR Turret | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| EXR Turret | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| EXR Turret | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| EXR Turret | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| EXR Turret | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| EXR Turret | DamageAgainstShrikeMultiplier = nil
||| EXR Turret | ReloadTime = 1.7999999523163
||| EXR Turret | FireInterval = 1.0
||| EXR Turret | HoldToFire = true
||| EXR Turret | CanZoom = true
||| EXR Turret | ReloadSingle = false
||| EXR Turret | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| EXR Turret | BurstShotCount = nil
Failed to get property with id 2007
||| EXR Turret | BurstShotRefireTime = nil
Failed to get property with id 2008
||| EXR Turret | SpinupTime = nil
Failed to get property with id 2009
||| EXR Turret | ShotgunShotCount = nil
||| EXR Turret | ShotEnergyCost = 0
||| EXR Turret | ImpactMomentum = 0.0
Failed to get property with id 3004
||| EXR Turret | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| EXR Turret | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| EXR Turret | ExplosiveRadius = nil
Failed to get property with id 3010
||| EXR Turret | BulletDamageRange = nil
Failed to get property with id 3007
||| EXR Turret | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| EXR Turret | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| EXR Turret | MinDamageProportion = nil
Failed to get property with id 3021
||| EXR Turret | DoesImpulseFlag = nil
Failed to get property with id 3018
||| EXR Turret | DoesGibOnKill = nil
Failed to get property with id 3019
||| EXR Turret | GibImpulseRadius = nil
Failed to get property with id 3020
||| EXR Turret | GibStrength = nil
Failed to get property with id 4000
||| EXR Turret | ProjectileSpeed = nil
Failed to get property with id 4001
||| EXR Turret | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| EXR Turret | CollisionSize = nil
Failed to get property with id 4003
||| EXR Turret | ProjectileInheritance = nil
Failed to get property with id 4004
||| EXR Turret | ProjectileLifespan = nil
Failed to get property with id 4005
||| EXR Turret | ProjectileGravity = nil
Failed to get property with id 4006
||| EXR Turret | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| EXR Turret | ProjectileBounceDamping = nil
||| EXR Turret | HitscanRange = 2000.0
||| EXR Turret | FireOffsetX = 0.0
||| EXR Turret | FireOffsetY = 0.0
||| EXR Turret | FireOffsetZ = 0.0
Failed to get property with id 3030
||| EXR Turret | FractalDuration = nil
Failed to get property with id 3031
||| EXR Turret | FractalShardInterval = nil
Failed to get property with id 3032
||| EXR Turret | FractalAscentTime = nil
Failed to get property with id 3033
||| EXR Turret | FractalAscentHeight = nil
Failed to get property with id 3034
||| EXR Turret | FractalShardDistance = nil
Failed to get property with id 3035
||| EXR Turret | FractalShardHeight = nil
Failed to get property with id 3036
||| EXR Turret | FractalShardDamage = nil
Failed to get property with id 3037
||| EXR Turret | FractalShardDamageRadius = nil
||| EXR Turret | MeleeDamageRadius = 0.0
||| EXR Turret | MeleeConeAngle = 0.0
||| EXR Turret | Accuracy = 1.0
||| EXR Turret | AccuracyLossOnShot = 0.10000000149012
||| EXR Turret | AccuracyLossOnJump = 0.30000001192093
||| EXR Turret | AccuracyLossMax = 0.30000001192093
||| EXR Turret | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| EXR Turret | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| EXR Turret | ThrowDelay = nil
Failed to get property with id 6001
||| EXR Turret | ThrowPullPinTime = nil
Failed to get property with id 6002
||| EXR Turret | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| EXR Turret | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| EXR Turret | FuseTimer = nil
Failed to get property with id 6005
||| EXR Turret | ExplodeOnContact = nil
Failed to get property with id 6006
||| EXR Turret | ExplodeOnFuse = nil
Failed to get property with id 6007
||| EXR Turret | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| EXR Turret | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| EXR Turret | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| EXR Turret | ThrustPackImpulse = nil
Failed to get property with id 7003
||| EXR Turret | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| EXR Turret | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| EXR Turret | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| EXR Turret | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| EXR Turret | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| EXR Turret | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| EXR Turret | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| EXR Turret | JammerPackRange = nil
Failed to get property with id 7011
||| EXR Turret | PackBuffAmount = nil
Failed to get property with id 7012
||| EXR Turret | StealthPackMaxSpeed = nil
||| EXR Turret | DeployableRange = 0.0
||| EXR Turret | DeployableMaxAllowed = 1
||| EXR Turret | DeployableMinProximity = 1024.0
||| EXR Turret | TurretTimeToAcquireTarget = 0.55000001192093
Failed to get property with id 8005
||| EXR Turret | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| EXR Turret | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| EXR Turret | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| EXR Turret | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| EXR Turret | MineDeployTime = nil
Failed to get property with id 9001
||| EXR Turret | MineMaxAllowed = nil
Failed to get property with id 9002
||| EXR Turret | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| EXR Turret | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| EXR Turret | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| EXR Turret | PrismMineTripDistance = nil
||| Drop Station | SpareAmmo = 0
||| Drop Station | AmmoPerShot = 1
||| Drop Station | LowAmmoCutoff = 0
Failed to get property with id 3000
||| Drop Station | Damage = nil
Failed to get property with id 3002
||| Drop Station | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Drop Station | EnergyDrain = nil
Failed to get property with id 3011
||| Drop Station | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Drop Station | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Drop Station | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Drop Station | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Drop Station | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Drop Station | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Drop Station | DamageAgainstShrikeMultiplier = nil
||| Drop Station | ReloadTime = 1.7999999523163
||| Drop Station | FireInterval = 1.0
||| Drop Station | HoldToFire = true
||| Drop Station | CanZoom = true
||| Drop Station | ReloadSingle = false
||| Drop Station | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Drop Station | BurstShotCount = nil
Failed to get property with id 2007
||| Drop Station | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Drop Station | SpinupTime = nil
Failed to get property with id 2009
||| Drop Station | ShotgunShotCount = nil
||| Drop Station | ShotEnergyCost = 0
||| Drop Station | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Drop Station | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Drop Station | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Drop Station | ExplosiveRadius = nil
Failed to get property with id 3010
||| Drop Station | BulletDamageRange = nil
Failed to get property with id 3007
||| Drop Station | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Drop Station | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Drop Station | MinDamageProportion = nil
Failed to get property with id 3021
||| Drop Station | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Drop Station | DoesGibOnKill = nil
Failed to get property with id 3019
||| Drop Station | GibImpulseRadius = nil
Failed to get property with id 3020
||| Drop Station | GibStrength = nil
Failed to get property with id 4000
||| Drop Station | ProjectileSpeed = nil
Failed to get property with id 4001
||| Drop Station | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Drop Station | CollisionSize = nil
Failed to get property with id 4003
||| Drop Station | ProjectileInheritance = nil
Failed to get property with id 4004
||| Drop Station | ProjectileLifespan = nil
Failed to get property with id 4005
||| Drop Station | ProjectileGravity = nil
Failed to get property with id 4006
||| Drop Station | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Drop Station | ProjectileBounceDamping = nil
||| Drop Station | HitscanRange = 2000.0
||| Drop Station | FireOffsetX = 0.0
||| Drop Station | FireOffsetY = 0.0
||| Drop Station | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Drop Station | FractalDuration = nil
Failed to get property with id 3031
||| Drop Station | FractalShardInterval = nil
Failed to get property with id 3032
||| Drop Station | FractalAscentTime = nil
Failed to get property with id 3033
||| Drop Station | FractalAscentHeight = nil
Failed to get property with id 3034
||| Drop Station | FractalShardDistance = nil
Failed to get property with id 3035
||| Drop Station | FractalShardHeight = nil
Failed to get property with id 3036
||| Drop Station | FractalShardDamage = nil
Failed to get property with id 3037
||| Drop Station | FractalShardDamageRadius = nil
||| Drop Station | MeleeDamageRadius = 0.0
||| Drop Station | MeleeConeAngle = 0.0
||| Drop Station | Accuracy = 1.0
||| Drop Station | AccuracyLossOnShot = 0.10000000149012
||| Drop Station | AccuracyLossOnJump = 0.30000001192093
||| Drop Station | AccuracyLossMax = 0.30000001192093
||| Drop Station | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Drop Station | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Drop Station | ThrowDelay = nil
Failed to get property with id 6001
||| Drop Station | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Drop Station | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Drop Station | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Drop Station | FuseTimer = nil
Failed to get property with id 6005
||| Drop Station | ExplodeOnContact = nil
Failed to get property with id 6006
||| Drop Station | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Drop Station | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Drop Station | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Drop Station | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Drop Station | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Drop Station | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Drop Station | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Drop Station | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Drop Station | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Drop Station | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Drop Station | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Drop Station | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Drop Station | JammerPackRange = nil
Failed to get property with id 7011
||| Drop Station | PackBuffAmount = nil
Failed to get property with id 7012
||| Drop Station | StealthPackMaxSpeed = nil
||| Drop Station | DeployableRange = 0.0
||| Drop Station | DeployableMaxAllowed = 1
||| Drop Station | DeployableMinProximity = 64.0
Failed to get property with id 8003
||| Drop Station | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Drop Station | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Drop Station | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Drop Station | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Drop Station | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Drop Station | MineDeployTime = nil
Failed to get property with id 9001
||| Drop Station | MineMaxAllowed = nil
Failed to get property with id 9002
||| Drop Station | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Drop Station | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Drop Station | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Drop Station | PrismMineTripDistance = nil
||| Jammer Pack | SpareAmmo = 0
||| Jammer Pack | AmmoPerShot = 0
||| Jammer Pack | LowAmmoCutoff = 0
||| Jammer Pack | Damage = 0.0
Failed to get property with id 3002
||| Jammer Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Jammer Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Jammer Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Jammer Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Jammer Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Jammer Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Jammer Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Jammer Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Jammer Pack | DamageAgainstShrikeMultiplier = nil
||| Jammer Pack | ReloadTime = 1.7999999523163
||| Jammer Pack | FireInterval = 1.0
||| Jammer Pack | HoldToFire = true
||| Jammer Pack | CanZoom = true
||| Jammer Pack | ReloadSingle = false
||| Jammer Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Jammer Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Jammer Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Jammer Pack | SpinupTime = nil
Failed to get property with id 2009
||| Jammer Pack | ShotgunShotCount = nil
||| Jammer Pack | ShotEnergyCost = 0
||| Jammer Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Jammer Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Jammer Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Jammer Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Jammer Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Jammer Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Jammer Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Jammer Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Jammer Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Jammer Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Jammer Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Jammer Pack | GibStrength = nil
Failed to get property with id 4000
||| Jammer Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Jammer Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Jammer Pack | CollisionSize = nil
Failed to get property with id 4003
||| Jammer Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Jammer Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Jammer Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Jammer Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Jammer Pack | ProjectileBounceDamping = nil
||| Jammer Pack | HitscanRange = 2000.0
||| Jammer Pack | FireOffsetX = 0.0
||| Jammer Pack | FireOffsetY = 0.0
||| Jammer Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Jammer Pack | FractalDuration = nil
Failed to get property with id 3031
||| Jammer Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Jammer Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Jammer Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Jammer Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Jammer Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Jammer Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Jammer Pack | FractalShardDamageRadius = nil
||| Jammer Pack | MeleeDamageRadius = 0.0
||| Jammer Pack | MeleeConeAngle = 0.0
||| Jammer Pack | Accuracy = 1.0
||| Jammer Pack | AccuracyLossOnShot = 0.10000000149012
||| Jammer Pack | AccuracyLossOnJump = 0.30000001192093
||| Jammer Pack | AccuracyLossMax = 0.30000001192093
||| Jammer Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Jammer Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Jammer Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Jammer Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Jammer Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Jammer Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Jammer Pack | FuseTimer = nil
Failed to get property with id 6005
||| Jammer Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Jammer Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Jammer Pack | MustBounceBeforeExplode = nil
||| Jammer Pack | PackSustainedEnergyCost = 4.5
Failed to get property with id 7001
||| Jammer Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Jammer Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Jammer Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Jammer Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Jammer Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Jammer Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Jammer Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Jammer Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Jammer Pack | ShieldPackEnergyCostPerDamagePoint = nil
||| Jammer Pack | JammerPackRange = 1000.0
||| Jammer Pack | PackBuffAmount = 1.0
Failed to get property with id 7012
||| Jammer Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Jammer Pack | DeployableRange = nil
Failed to get property with id 8001
||| Jammer Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Jammer Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Jammer Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Jammer Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Jammer Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Jammer Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Jammer Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Jammer Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Jammer Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Jammer Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Jammer Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Jammer Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Jammer Pack | PrismMineTripDistance = nil
||| Shield Pack | SpareAmmo = 0
||| Shield Pack | AmmoPerShot = 0
||| Shield Pack | LowAmmoCutoff = 0
||| Shield Pack | Damage = 0.0
Failed to get property with id 3002
||| Shield Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Shield Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Shield Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Shield Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Shield Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Shield Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Shield Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Shield Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Shield Pack | DamageAgainstShrikeMultiplier = nil
||| Shield Pack | ReloadTime = 1.7999999523163
||| Shield Pack | FireInterval = 1.0
||| Shield Pack | HoldToFire = true
||| Shield Pack | CanZoom = true
||| Shield Pack | ReloadSingle = false
||| Shield Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Shield Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Shield Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Shield Pack | SpinupTime = nil
Failed to get property with id 2009
||| Shield Pack | ShotgunShotCount = nil
||| Shield Pack | ShotEnergyCost = 0
||| Shield Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Shield Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Shield Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Shield Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Shield Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Shield Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Shield Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Shield Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Shield Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Shield Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Shield Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Shield Pack | GibStrength = nil
Failed to get property with id 4000
||| Shield Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Shield Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Shield Pack | CollisionSize = nil
Failed to get property with id 4003
||| Shield Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Shield Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Shield Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Shield Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Shield Pack | ProjectileBounceDamping = nil
||| Shield Pack | HitscanRange = 2000.0
||| Shield Pack | FireOffsetX = 0.0
||| Shield Pack | FireOffsetY = 0.0
||| Shield Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Shield Pack | FractalDuration = nil
Failed to get property with id 3031
||| Shield Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Shield Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Shield Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Shield Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Shield Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Shield Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Shield Pack | FractalShardDamageRadius = nil
||| Shield Pack | MeleeDamageRadius = 0.0
||| Shield Pack | MeleeConeAngle = 0.0
||| Shield Pack | Accuracy = 1.0
||| Shield Pack | AccuracyLossOnShot = 0.10000000149012
||| Shield Pack | AccuracyLossOnJump = 0.30000001192093
||| Shield Pack | AccuracyLossMax = 0.30000001192093
||| Shield Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Shield Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Shield Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Shield Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Shield Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Shield Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Shield Pack | FuseTimer = nil
Failed to get property with id 6005
||| Shield Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Shield Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Shield Pack | MustBounceBeforeExplode = nil
||| Shield Pack | PackSustainedEnergyCost = 8.0
Failed to get property with id 7001
||| Shield Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Shield Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Shield Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Shield Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Shield Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Shield Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Shield Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Shield Pack | ThrustPackSpeedCapReduction = nil
||| Shield Pack | ShieldPackEnergyCostPerDamagePoint = 0.15999999642372
Failed to get property with id 7010
||| Shield Pack | JammerPackRange = nil
||| Shield Pack | PackBuffAmount = 1.0
Failed to get property with id 7012
||| Shield Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Shield Pack | DeployableRange = nil
Failed to get property with id 8001
||| Shield Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Shield Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Shield Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Shield Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Shield Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Shield Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Shield Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Shield Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Shield Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Shield Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Shield Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Shield Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Shield Pack | PrismMineTripDistance = nil
||| Utility Pack | SpareAmmo = 0
||| Utility Pack | AmmoPerShot = 0
||| Utility Pack | LowAmmoCutoff = 0
||| Utility Pack | Damage = 0.0
Failed to get property with id 3002
||| Utility Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Utility Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Utility Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Utility Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Utility Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Utility Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Utility Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Utility Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Utility Pack | DamageAgainstShrikeMultiplier = nil
||| Utility Pack | ReloadTime = 1.7999999523163
||| Utility Pack | FireInterval = 1.0
||| Utility Pack | HoldToFire = true
||| Utility Pack | CanZoom = true
||| Utility Pack | ReloadSingle = false
||| Utility Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Utility Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Utility Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Utility Pack | SpinupTime = nil
Failed to get property with id 2009
||| Utility Pack | ShotgunShotCount = nil
||| Utility Pack | ShotEnergyCost = 0
||| Utility Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Utility Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Utility Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Utility Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Utility Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Utility Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Utility Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Utility Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Utility Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Utility Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Utility Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Utility Pack | GibStrength = nil
Failed to get property with id 4000
||| Utility Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Utility Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Utility Pack | CollisionSize = nil
Failed to get property with id 4003
||| Utility Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Utility Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Utility Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Utility Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Utility Pack | ProjectileBounceDamping = nil
||| Utility Pack | HitscanRange = 2000.0
||| Utility Pack | FireOffsetX = 0.0
||| Utility Pack | FireOffsetY = 0.0
||| Utility Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Utility Pack | FractalDuration = nil
Failed to get property with id 3031
||| Utility Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Utility Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Utility Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Utility Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Utility Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Utility Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Utility Pack | FractalShardDamageRadius = nil
||| Utility Pack | MeleeDamageRadius = 0.0
||| Utility Pack | MeleeConeAngle = 0.0
||| Utility Pack | Accuracy = 1.0
||| Utility Pack | AccuracyLossOnShot = 0.10000000149012
||| Utility Pack | AccuracyLossOnJump = 0.30000001192093
||| Utility Pack | AccuracyLossMax = 0.30000001192093
||| Utility Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Utility Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Utility Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Utility Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Utility Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Utility Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Utility Pack | FuseTimer = nil
Failed to get property with id 6005
||| Utility Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Utility Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Utility Pack | MustBounceBeforeExplode = nil
||| Utility Pack | PackSustainedEnergyCost = 0.0
Failed to get property with id 7001
||| Utility Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Utility Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Utility Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Utility Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Utility Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Utility Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Utility Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Utility Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Utility Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Utility Pack | JammerPackRange = nil
Failed to get property with id 7011
||| Utility Pack | PackBuffAmount = nil
Failed to get property with id 7012
||| Utility Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Utility Pack | DeployableRange = nil
Failed to get property with id 8001
||| Utility Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Utility Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Utility Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Utility Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Utility Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Utility Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Utility Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Utility Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Utility Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Utility Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Utility Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Utility Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Utility Pack | PrismMineTripDistance = nil
||| Heavy Spinfusor | SpareAmmo = 30
||| Heavy Spinfusor | AmmoPerShot = 1
||| Heavy Spinfusor | LowAmmoCutoff = 5
||| Heavy Spinfusor | Damage = 760.0
||| Heavy Spinfusor | DirectHitMultiplier = 1.25
||| Heavy Spinfusor | EnergyDrain = 0.0
||| Heavy Spinfusor | DamageAgainstArmorMultiplier = 1.5
||| Heavy Spinfusor | DamageAgainstGeneratorMultiplier = 1.5
||| Heavy Spinfusor | DamageAgainstBaseTurretMultiplier = 1.5
||| Heavy Spinfusor | DamageAgainstBaseSensorMultiplier = 1.5
||| Heavy Spinfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Heavy Spinfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Heavy Spinfusor | DamageAgainstShrikeMultiplier = 1.0
||| Heavy Spinfusor | ReloadTime = 1.25
||| Heavy Spinfusor | FireInterval = 0.46000000834465
||| Heavy Spinfusor | HoldToFire = true
||| Heavy Spinfusor | CanZoom = true
||| Heavy Spinfusor | ReloadSingle = true
||| Heavy Spinfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Heavy Spinfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Heavy Spinfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Heavy Spinfusor | SpinupTime = nil
Failed to get property with id 2009
||| Heavy Spinfusor | ShotgunShotCount = nil
||| Heavy Spinfusor | ShotEnergyCost = 0
||| Heavy Spinfusor | ImpactMomentum = 85000.0
||| Heavy Spinfusor | SelfImpactMomentumMultiplier = 1.5
||| Heavy Spinfusor | SelfImpactExtraZMomentum = 25000.0
||| Heavy Spinfusor | ExplosiveRadius = 360.0
||| Heavy Spinfusor | BulletDamageRange = 6000.0
||| Heavy Spinfusor | MaxDamageRangeProportion = 0.0
||| Heavy Spinfusor | MinDamageRangeProportion = 1.0
||| Heavy Spinfusor | MinDamageProportion = 0.40000000596046
||| Heavy Spinfusor | DoesImpulseFlag = true
||| Heavy Spinfusor | DoesGibOnKill = false
||| Heavy Spinfusor | GibImpulseRadius = 100.0
||| Heavy Spinfusor | GibStrength = 40.0
||| Heavy Spinfusor | ProjectileSpeed = 3920.0
||| Heavy Spinfusor | ProjectileMaxSpeed = 8000.0
||| Heavy Spinfusor | CollisionSize = 15.0
||| Heavy Spinfusor | ProjectileInheritance = 0.5
||| Heavy Spinfusor | ProjectileLifespan = 6.0
||| Heavy Spinfusor | ProjectileGravity = 1.0
||| Heavy Spinfusor | ProjectileTerminalVelocity = 3500.0
||| Heavy Spinfusor | ProjectileBounceDamping = 0.55000001192093
||| Heavy Spinfusor | HitscanRange = 2000.0
||| Heavy Spinfusor | FireOffsetX = 3.0
||| Heavy Spinfusor | FireOffsetY = 10.0
||| Heavy Spinfusor | FireOffsetZ = -7.0
||| Heavy Spinfusor | FractalDuration = 1.6090689876303e-40
||| Heavy Spinfusor | FractalShardInterval = 1.4930442773811e-39
||| Heavy Spinfusor | FractalAscentTime = 6.428540782998e-40
||| Heavy Spinfusor | FractalAscentHeight = 9.7675077873554e-29
||| Heavy Spinfusor | FractalShardDistance = 7.0551173783362e-41
||| Heavy Spinfusor | FractalShardHeight = 9.396314093298e-35
||| Heavy Spinfusor | FractalShardDamage = 3
||| Heavy Spinfusor | FractalShardDamageRadius = 0.0
||| Heavy Spinfusor | MeleeDamageRadius = 0.0
||| Heavy Spinfusor | MeleeConeAngle = 0.0
||| Heavy Spinfusor | Accuracy = 1.0
||| Heavy Spinfusor | AccuracyLossOnShot = 0.0
||| Heavy Spinfusor | AccuracyLossOnJump = 0.30000001192093
||| Heavy Spinfusor | AccuracyLossMax = 0.0
||| Heavy Spinfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Heavy Spinfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Heavy Spinfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Heavy Spinfusor | ThrowPullPinTime = nil
||| Heavy Spinfusor | StuckDamageMultiplier = 0.0
||| Heavy Spinfusor | StuckMomentumMultiplier = 0.0
||| Heavy Spinfusor | FuseTimer = 0.0
||| Heavy Spinfusor | ExplodeOnContact = false
||| Heavy Spinfusor | ExplodeOnFuse = false
||| Heavy Spinfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Heavy Spinfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Heavy Spinfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Heavy Spinfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Heavy Spinfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Heavy Spinfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Heavy Spinfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Heavy Spinfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Heavy Spinfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Heavy Spinfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Heavy Spinfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Heavy Spinfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Heavy Spinfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Heavy Spinfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Heavy Spinfusor | DeployableRange = nil
Failed to get property with id 8001
||| Heavy Spinfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Heavy Spinfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Heavy Spinfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Heavy Spinfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Heavy Spinfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Heavy Spinfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Heavy Spinfusor | ForcefieldMaxDamageSpeed = nil
||| Heavy Spinfusor | MineDeployTime = 0.0
||| Heavy Spinfusor | MineMaxAllowed = 0
||| Heavy Spinfusor | MineCollisionCylinderRadius = 0.0
||| Heavy Spinfusor | MineCollisionCylinderHeight = 0.0
||| Heavy Spinfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Heavy Spinfusor | PrismMineTripDistance = 9.7675077873554e-29
||| Heavy Bolt Launcher | SpareAmmo = 32
||| Heavy Bolt Launcher | AmmoPerShot = 1
||| Heavy Bolt Launcher | LowAmmoCutoff = 4
||| Heavy Bolt Launcher | Damage = 760.0
||| Heavy Bolt Launcher | DirectHitMultiplier = 1.25
||| Heavy Bolt Launcher | EnergyDrain = 0.0
||| Heavy Bolt Launcher | DamageAgainstArmorMultiplier = 1.5
||| Heavy Bolt Launcher | DamageAgainstGeneratorMultiplier = 1.5
||| Heavy Bolt Launcher | DamageAgainstBaseTurretMultiplier = 1.5
||| Heavy Bolt Launcher | DamageAgainstBaseSensorMultiplier = 1.5
||| Heavy Bolt Launcher | DamageAgainstGravCycleMultiplier = 1.0
||| Heavy Bolt Launcher | DamageAgainstBeowulfMultiplier = 1.0
||| Heavy Bolt Launcher | DamageAgainstShrikeMultiplier = 1.0
||| Heavy Bolt Launcher | ReloadTime = 1.5
||| Heavy Bolt Launcher | FireInterval = 0.46000000834465
||| Heavy Bolt Launcher | HoldToFire = true
||| Heavy Bolt Launcher | CanZoom = true
||| Heavy Bolt Launcher | ReloadSingle = true
||| Heavy Bolt Launcher | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Heavy Bolt Launcher | BurstShotCount = nil
Failed to get property with id 2007
||| Heavy Bolt Launcher | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Heavy Bolt Launcher | SpinupTime = nil
Failed to get property with id 2009
||| Heavy Bolt Launcher | ShotgunShotCount = nil
||| Heavy Bolt Launcher | ShotEnergyCost = 0
||| Heavy Bolt Launcher | ImpactMomentum = 85000.0
||| Heavy Bolt Launcher | SelfImpactMomentumMultiplier = 1.5
||| Heavy Bolt Launcher | SelfImpactExtraZMomentum = 25000.0
||| Heavy Bolt Launcher | ExplosiveRadius = 400.0
||| Heavy Bolt Launcher | BulletDamageRange = 6000.0
||| Heavy Bolt Launcher | MaxDamageRangeProportion = 0.0
||| Heavy Bolt Launcher | MinDamageRangeProportion = 1.0
||| Heavy Bolt Launcher | MinDamageProportion = 0.40000000596046
||| Heavy Bolt Launcher | DoesImpulseFlag = true
||| Heavy Bolt Launcher | DoesGibOnKill = false
||| Heavy Bolt Launcher | GibImpulseRadius = 100.0
||| Heavy Bolt Launcher | GibStrength = 40.0
||| Heavy Bolt Launcher | ProjectileSpeed = 3820.0
||| Heavy Bolt Launcher | ProjectileMaxSpeed = 8000.0
||| Heavy Bolt Launcher | CollisionSize = 15.0
||| Heavy Bolt Launcher | ProjectileInheritance = 0.5
||| Heavy Bolt Launcher | ProjectileLifespan = 6.0
||| Heavy Bolt Launcher | ProjectileGravity = 0.40000000596046
||| Heavy Bolt Launcher | ProjectileTerminalVelocity = 3520.0
||| Heavy Bolt Launcher | ProjectileBounceDamping = 0.55000001192093
||| Heavy Bolt Launcher | HitscanRange = 2000.0
||| Heavy Bolt Launcher | FireOffsetX = 3.0
||| Heavy Bolt Launcher | FireOffsetY = 10.0
||| Heavy Bolt Launcher | FireOffsetZ = -7.0
||| Heavy Bolt Launcher | FractalDuration = 1.6088167539067e-40
||| Heavy Bolt Launcher | FractalShardInterval = 1.4930442773811e-39
||| Heavy Bolt Launcher | FractalAscentTime = 6.428540782998e-40
||| Heavy Bolt Launcher | FractalAscentHeight = 1.7993892509413e-21
||| Heavy Bolt Launcher | FractalShardDistance = 7.0545568589504e-41
||| Heavy Bolt Launcher | FractalShardHeight = 9.396314093298e-35
||| Heavy Bolt Launcher | FractalShardDamage = 3
||| Heavy Bolt Launcher | FractalShardDamageRadius = 0.0
||| Heavy Bolt Launcher | MeleeDamageRadius = 0.0
||| Heavy Bolt Launcher | MeleeConeAngle = 0.0
||| Heavy Bolt Launcher | Accuracy = 1.0
||| Heavy Bolt Launcher | AccuracyLossOnShot = 0.0
||| Heavy Bolt Launcher | AccuracyLossOnJump = 0.30000001192093
||| Heavy Bolt Launcher | AccuracyLossMax = 0.30000001192093
||| Heavy Bolt Launcher | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Heavy Bolt Launcher | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Heavy Bolt Launcher | ThrowDelay = nil
Failed to get property with id 6001
||| Heavy Bolt Launcher | ThrowPullPinTime = nil
||| Heavy Bolt Launcher | StuckDamageMultiplier = 0.0
||| Heavy Bolt Launcher | StuckMomentumMultiplier = 0.0
||| Heavy Bolt Launcher | FuseTimer = 0.0
||| Heavy Bolt Launcher | ExplodeOnContact = false
||| Heavy Bolt Launcher | ExplodeOnFuse = false
||| Heavy Bolt Launcher | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Heavy Bolt Launcher | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Heavy Bolt Launcher | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Heavy Bolt Launcher | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Heavy Bolt Launcher | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Heavy Bolt Launcher | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Heavy Bolt Launcher | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Heavy Bolt Launcher | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Heavy Bolt Launcher | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Heavy Bolt Launcher | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Heavy Bolt Launcher | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Heavy Bolt Launcher | JammerPackRange = nil
Failed to get property with id 7011
||| Heavy Bolt Launcher | PackBuffAmount = nil
Failed to get property with id 7012
||| Heavy Bolt Launcher | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Heavy Bolt Launcher | DeployableRange = nil
Failed to get property with id 8001
||| Heavy Bolt Launcher | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Heavy Bolt Launcher | DeployableMinProximity = nil
Failed to get property with id 8003
||| Heavy Bolt Launcher | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Heavy Bolt Launcher | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Heavy Bolt Launcher | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Heavy Bolt Launcher | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Heavy Bolt Launcher | ForcefieldMaxDamageSpeed = nil
||| Heavy Bolt Launcher | MineDeployTime = 0.0
||| Heavy Bolt Launcher | MineMaxAllowed = 0
||| Heavy Bolt Launcher | MineCollisionCylinderRadius = 0.0
||| Heavy Bolt Launcher | MineCollisionCylinderHeight = 0.0
||| Heavy Bolt Launcher | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Heavy Bolt Launcher | PrismMineTripDistance = 1.7993892509413e-21
||| Heavy Blinksfusor | SpareAmmo = 30
||| Heavy Blinksfusor | AmmoPerShot = 1
||| Heavy Blinksfusor | LowAmmoCutoff = 5
||| Heavy Blinksfusor | Damage = 760.0
||| Heavy Blinksfusor | DirectHitMultiplier = 1.25
||| Heavy Blinksfusor | EnergyDrain = 0.0
||| Heavy Blinksfusor | DamageAgainstArmorMultiplier = 1.5
||| Heavy Blinksfusor | DamageAgainstGeneratorMultiplier = 1.5
||| Heavy Blinksfusor | DamageAgainstBaseTurretMultiplier = 1.5
||| Heavy Blinksfusor | DamageAgainstBaseSensorMultiplier = 1.5
||| Heavy Blinksfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Heavy Blinksfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Heavy Blinksfusor | DamageAgainstShrikeMultiplier = 1.0
||| Heavy Blinksfusor | ReloadTime = 1.25
||| Heavy Blinksfusor | FireInterval = 0.46000000834465
||| Heavy Blinksfusor | HoldToFire = true
||| Heavy Blinksfusor | CanZoom = true
||| Heavy Blinksfusor | ReloadSingle = true
||| Heavy Blinksfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Heavy Blinksfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Heavy Blinksfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Heavy Blinksfusor | SpinupTime = nil
Failed to get property with id 2009
||| Heavy Blinksfusor | ShotgunShotCount = nil
||| Heavy Blinksfusor | ShotEnergyCost = 0
||| Heavy Blinksfusor | ImpactMomentum = 85000.0
||| Heavy Blinksfusor | SelfImpactMomentumMultiplier = 1.5
||| Heavy Blinksfusor | SelfImpactExtraZMomentum = 25000.0
||| Heavy Blinksfusor | ExplosiveRadius = 360.0
||| Heavy Blinksfusor | BulletDamageRange = 6000.0
||| Heavy Blinksfusor | MaxDamageRangeProportion = 0.0
||| Heavy Blinksfusor | MinDamageRangeProportion = 1.0
||| Heavy Blinksfusor | MinDamageProportion = 0.40000000596046
||| Heavy Blinksfusor | DoesImpulseFlag = true
||| Heavy Blinksfusor | DoesGibOnKill = false
||| Heavy Blinksfusor | GibImpulseRadius = 100.0
||| Heavy Blinksfusor | GibStrength = 40.0
||| Heavy Blinksfusor | ProjectileSpeed = 3920.0
||| Heavy Blinksfusor | ProjectileMaxSpeed = 8000.0
||| Heavy Blinksfusor | CollisionSize = 15.0
||| Heavy Blinksfusor | ProjectileInheritance = 1.0
||| Heavy Blinksfusor | ProjectileLifespan = 6.0
||| Heavy Blinksfusor | ProjectileGravity = 1.0
||| Heavy Blinksfusor | ProjectileTerminalVelocity = 3500.0
||| Heavy Blinksfusor | ProjectileBounceDamping = 0.55000001192093
||| Heavy Blinksfusor | HitscanRange = 2000.0
||| Heavy Blinksfusor | FireOffsetX = 3.0
||| Heavy Blinksfusor | FireOffsetY = 10.0
||| Heavy Blinksfusor | FireOffsetZ = -7.0
||| Heavy Blinksfusor | FractalDuration = 1.6091810915074e-40
||| Heavy Blinksfusor | FractalShardInterval = 1.4930442773811e-39
||| Heavy Blinksfusor | FractalAscentTime = 6.428540782998e-40
||| Heavy Blinksfusor | FractalAscentHeight = 2.9203106858337e-28
||| Heavy Blinksfusor | FractalShardDistance = 7.0555377678755e-41
||| Heavy Blinksfusor | FractalShardHeight = 9.396314093298e-35
||| Heavy Blinksfusor | FractalShardDamage = 3
||| Heavy Blinksfusor | FractalShardDamageRadius = 0.0
||| Heavy Blinksfusor | MeleeDamageRadius = 0.0
||| Heavy Blinksfusor | MeleeConeAngle = 0.0
||| Heavy Blinksfusor | Accuracy = 1.0
||| Heavy Blinksfusor | AccuracyLossOnShot = 0.0
||| Heavy Blinksfusor | AccuracyLossOnJump = 0.30000001192093
||| Heavy Blinksfusor | AccuracyLossMax = 0.0
||| Heavy Blinksfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Heavy Blinksfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Heavy Blinksfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Heavy Blinksfusor | ThrowPullPinTime = nil
||| Heavy Blinksfusor | StuckDamageMultiplier = 0.0
||| Heavy Blinksfusor | StuckMomentumMultiplier = 0.0
||| Heavy Blinksfusor | FuseTimer = 0.0
||| Heavy Blinksfusor | ExplodeOnContact = false
||| Heavy Blinksfusor | ExplodeOnFuse = false
||| Heavy Blinksfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Heavy Blinksfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Heavy Blinksfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Heavy Blinksfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Heavy Blinksfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Heavy Blinksfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Heavy Blinksfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Heavy Blinksfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Heavy Blinksfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Heavy Blinksfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Heavy Blinksfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Heavy Blinksfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Heavy Blinksfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Heavy Blinksfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Heavy Blinksfusor | DeployableRange = nil
Failed to get property with id 8001
||| Heavy Blinksfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Heavy Blinksfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Heavy Blinksfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Heavy Blinksfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Heavy Blinksfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Heavy Blinksfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Heavy Blinksfusor | ForcefieldMaxDamageSpeed = nil
||| Heavy Blinksfusor | MineDeployTime = 0.0
||| Heavy Blinksfusor | MineMaxAllowed = 0
||| Heavy Blinksfusor | MineCollisionCylinderRadius = 0.0
||| Heavy Blinksfusor | MineCollisionCylinderHeight = 0.0
||| Heavy Blinksfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Heavy Blinksfusor | PrismMineTripDistance = 2.9203106858337e-28
||| Heavy Twinfusor | SpareAmmo = 60
||| Heavy Twinfusor | AmmoPerShot = 1
||| Heavy Twinfusor | LowAmmoCutoff = 1
||| Heavy Twinfusor | Damage = 350.0
||| Heavy Twinfusor | DirectHitMultiplier = 1.5
||| Heavy Twinfusor | EnergyDrain = 0.0
||| Heavy Twinfusor | DamageAgainstArmorMultiplier = 1.0
||| Heavy Twinfusor | DamageAgainstGeneratorMultiplier = 1.5
||| Heavy Twinfusor | DamageAgainstBaseTurretMultiplier = 1.5
||| Heavy Twinfusor | DamageAgainstBaseSensorMultiplier = 1.5
||| Heavy Twinfusor | DamageAgainstGravCycleMultiplier = 1.0
||| Heavy Twinfusor | DamageAgainstBeowulfMultiplier = 1.0
||| Heavy Twinfusor | DamageAgainstShrikeMultiplier = 1.0
||| Heavy Twinfusor | ReloadTime = 1.3999999761581
||| Heavy Twinfusor | FireInterval = 0.34999999403954
||| Heavy Twinfusor | HoldToFire = true
||| Heavy Twinfusor | CanZoom = true
||| Heavy Twinfusor | ReloadSingle = false
||| Heavy Twinfusor | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Heavy Twinfusor | BurstShotCount = nil
Failed to get property with id 2007
||| Heavy Twinfusor | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Heavy Twinfusor | SpinupTime = nil
Failed to get property with id 2009
||| Heavy Twinfusor | ShotgunShotCount = nil
||| Heavy Twinfusor | ShotEnergyCost = 0
||| Heavy Twinfusor | ImpactMomentum = 45000.0
||| Heavy Twinfusor | SelfImpactMomentumMultiplier = 1.5
||| Heavy Twinfusor | SelfImpactExtraZMomentum = 22500.0
||| Heavy Twinfusor | ExplosiveRadius = 300.0
||| Heavy Twinfusor | BulletDamageRange = 6000.0
||| Heavy Twinfusor | MaxDamageRangeProportion = 0.0
||| Heavy Twinfusor | MinDamageRangeProportion = 1.0
||| Heavy Twinfusor | MinDamageProportion = 0.40000000596046
||| Heavy Twinfusor | DoesImpulseFlag = true
||| Heavy Twinfusor | DoesGibOnKill = false
||| Heavy Twinfusor | GibImpulseRadius = 100.0
||| Heavy Twinfusor | GibStrength = 40.0
||| Heavy Twinfusor | ProjectileSpeed = 3920.0
||| Heavy Twinfusor | ProjectileMaxSpeed = 8000.0
||| Heavy Twinfusor | CollisionSize = 15.0
||| Heavy Twinfusor | ProjectileInheritance = 0.5
||| Heavy Twinfusor | ProjectileLifespan = 6.0
||| Heavy Twinfusor | ProjectileGravity = 1.0
||| Heavy Twinfusor | ProjectileTerminalVelocity = 3500.0
||| Heavy Twinfusor | ProjectileBounceDamping = 0.55000001192093
||| Heavy Twinfusor | HitscanRange = 2000.0
||| Heavy Twinfusor | FireOffsetX = 3.0
||| Heavy Twinfusor | FireOffsetY = 10.0
||| Heavy Twinfusor | FireOffsetZ = -7.0
||| Heavy Twinfusor | FractalDuration = 1.6093352343385e-40
||| Heavy Twinfusor | FractalShardInterval = 1.4930442773811e-39
||| Heavy Twinfusor | FractalAscentTime = 6.428540782998e-40
||| Heavy Twinfusor | FractalAscentHeight = 1.5107225595367e-28
||| Heavy Twinfusor | FractalShardDistance = 7.056378546954e-41
||| Heavy Twinfusor | FractalShardHeight = 9.396314093298e-35
||| Heavy Twinfusor | FractalShardDamage = 3
||| Heavy Twinfusor | FractalShardDamageRadius = 0.0
||| Heavy Twinfusor | MeleeDamageRadius = 0.0
||| Heavy Twinfusor | MeleeConeAngle = 0.0
||| Heavy Twinfusor | Accuracy = 1.0
||| Heavy Twinfusor | AccuracyLossOnShot = 0.0
||| Heavy Twinfusor | AccuracyLossOnJump = 0.30000001192093
||| Heavy Twinfusor | AccuracyLossMax = 0.0
||| Heavy Twinfusor | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Heavy Twinfusor | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Heavy Twinfusor | ThrowDelay = nil
Failed to get property with id 6001
||| Heavy Twinfusor | ThrowPullPinTime = nil
||| Heavy Twinfusor | StuckDamageMultiplier = 0.0
||| Heavy Twinfusor | StuckMomentumMultiplier = 0.0
||| Heavy Twinfusor | FuseTimer = 0.0
||| Heavy Twinfusor | ExplodeOnContact = false
||| Heavy Twinfusor | ExplodeOnFuse = false
||| Heavy Twinfusor | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Heavy Twinfusor | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Heavy Twinfusor | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Heavy Twinfusor | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Heavy Twinfusor | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Heavy Twinfusor | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Heavy Twinfusor | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Heavy Twinfusor | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Heavy Twinfusor | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Heavy Twinfusor | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Heavy Twinfusor | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Heavy Twinfusor | JammerPackRange = nil
Failed to get property with id 7011
||| Heavy Twinfusor | PackBuffAmount = nil
Failed to get property with id 7012
||| Heavy Twinfusor | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Heavy Twinfusor | DeployableRange = nil
Failed to get property with id 8001
||| Heavy Twinfusor | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Heavy Twinfusor | DeployableMinProximity = nil
Failed to get property with id 8003
||| Heavy Twinfusor | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Heavy Twinfusor | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Heavy Twinfusor | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Heavy Twinfusor | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Heavy Twinfusor | ForcefieldMaxDamageSpeed = nil
||| Heavy Twinfusor | MineDeployTime = 0.0
||| Heavy Twinfusor | MineMaxAllowed = 0
||| Heavy Twinfusor | MineCollisionCylinderRadius = 0.0
||| Heavy Twinfusor | MineCollisionCylinderHeight = 0.0
||| Heavy Twinfusor | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Heavy Twinfusor | PrismMineTripDistance = 1.5107225595367e-28
||| Fusion Mortar | SpareAmmo = 20
||| Fusion Mortar | AmmoPerShot = 1
||| Fusion Mortar | LowAmmoCutoff = 5
||| Fusion Mortar | Damage = 1300.0
||| Fusion Mortar | DirectHitMultiplier = 1.154000043869
||| Fusion Mortar | EnergyDrain = 0.0
||| Fusion Mortar | DamageAgainstArmorMultiplier = 2.0
||| Fusion Mortar | DamageAgainstGeneratorMultiplier = 2.5
||| Fusion Mortar | DamageAgainstBaseTurretMultiplier = 2.5
||| Fusion Mortar | DamageAgainstBaseSensorMultiplier = 2.5
||| Fusion Mortar | DamageAgainstGravCycleMultiplier = 2.5
||| Fusion Mortar | DamageAgainstBeowulfMultiplier = 2.5
||| Fusion Mortar | DamageAgainstShrikeMultiplier = 2.5
||| Fusion Mortar | ReloadTime = 2.75
||| Fusion Mortar | FireInterval = 0.46000000834465
||| Fusion Mortar | HoldToFire = true
||| Fusion Mortar | CanZoom = true
||| Fusion Mortar | ReloadSingle = false
||| Fusion Mortar | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Fusion Mortar | BurstShotCount = nil
Failed to get property with id 2007
||| Fusion Mortar | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Fusion Mortar | SpinupTime = nil
Failed to get property with id 2009
||| Fusion Mortar | ShotgunShotCount = nil
||| Fusion Mortar | ShotEnergyCost = 0
||| Fusion Mortar | ImpactMomentum = 110000.0
||| Fusion Mortar | SelfImpactMomentumMultiplier = 1.5
||| Fusion Mortar | SelfImpactExtraZMomentum = 0.0
||| Fusion Mortar | ExplosiveRadius = 650.0
||| Fusion Mortar | BulletDamageRange = 6000.0
||| Fusion Mortar | MaxDamageRangeProportion = 0.0
||| Fusion Mortar | MinDamageRangeProportion = 1.0
||| Fusion Mortar | MinDamageProportion = 0.46200001239777
||| Fusion Mortar | DoesImpulseFlag = true
||| Fusion Mortar | DoesGibOnKill = true
||| Fusion Mortar | GibImpulseRadius = 100.0
||| Fusion Mortar | GibStrength = 40.0
||| Fusion Mortar | ProjectileSpeed = 4000.0
||| Fusion Mortar | ProjectileMaxSpeed = 8000.0
||| Fusion Mortar | CollisionSize = 20.0
||| Fusion Mortar | ProjectileInheritance = 0.5
||| Fusion Mortar | ProjectileLifespan = 20.0
||| Fusion Mortar | ProjectileGravity = 0.80000001192093
||| Fusion Mortar | ProjectileTerminalVelocity = 8000.0
||| Fusion Mortar | ProjectileBounceDamping = 0.80000001192093
||| Fusion Mortar | HitscanRange = 2000.0
||| Fusion Mortar | FireOffsetX = 3.0
||| Fusion Mortar | FireOffsetY = 10.0
||| Fusion Mortar | FireOffsetZ = -7.0
||| Fusion Mortar | FractalDuration = 1.6126983506529e-40
||| Fusion Mortar | FractalShardInterval = 1.4930442773811e-39
||| Fusion Mortar | FractalAscentTime = 6.428540782998e-40
||| Fusion Mortar | FractalAscentHeight = 1.079345066873e-28
||| Fusion Mortar | FractalShardDistance = 7.0744552971438e-41
||| Fusion Mortar | FractalShardHeight = 9.396314093298e-35
||| Fusion Mortar | FractalShardDamage = 3
||| Fusion Mortar | FractalShardDamageRadius = 0.0
||| Fusion Mortar | MeleeDamageRadius = 0.0
||| Fusion Mortar | MeleeConeAngle = 0.0
||| Fusion Mortar | Accuracy = 1.0
||| Fusion Mortar | AccuracyLossOnShot = 0.0
||| Fusion Mortar | AccuracyLossOnJump = 0.30000001192093
||| Fusion Mortar | AccuracyLossMax = 0.0
||| Fusion Mortar | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Fusion Mortar | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Fusion Mortar | ThrowDelay = nil
Failed to get property with id 6001
||| Fusion Mortar | ThrowPullPinTime = nil
||| Fusion Mortar | StuckDamageMultiplier = 1.0
||| Fusion Mortar | StuckMomentumMultiplier = 1.0
||| Fusion Mortar | FuseTimer = 2.0
||| Fusion Mortar | ExplodeOnContact = false
||| Fusion Mortar | ExplodeOnFuse = true
||| Fusion Mortar | MustBounceBeforeExplode = true
Failed to get property with id 7000
||| Fusion Mortar | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Fusion Mortar | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Fusion Mortar | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Fusion Mortar | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Fusion Mortar | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Fusion Mortar | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Fusion Mortar | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Fusion Mortar | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Fusion Mortar | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Fusion Mortar | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Fusion Mortar | JammerPackRange = nil
Failed to get property with id 7011
||| Fusion Mortar | PackBuffAmount = nil
Failed to get property with id 7012
||| Fusion Mortar | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Fusion Mortar | DeployableRange = nil
Failed to get property with id 8001
||| Fusion Mortar | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Fusion Mortar | DeployableMinProximity = nil
Failed to get property with id 8003
||| Fusion Mortar | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Fusion Mortar | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Fusion Mortar | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Fusion Mortar | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Fusion Mortar | ForcefieldMaxDamageSpeed = nil
||| Fusion Mortar | MineDeployTime = 0.75
||| Fusion Mortar | MineMaxAllowed = 0
||| Fusion Mortar | MineCollisionCylinderRadius = 0.0
||| Fusion Mortar | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Fusion Mortar | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Fusion Mortar | PrismMineTripDistance = 1.079345066873e-28
||| MIRV Launcher | SpareAmmo = 15
||| MIRV Launcher | AmmoPerShot = 1
||| MIRV Launcher | LowAmmoCutoff = 5
||| MIRV Launcher | Damage = 50.0
||| MIRV Launcher | DirectHitMultiplier = 1.0
||| MIRV Launcher | EnergyDrain = 0.0
||| MIRV Launcher | DamageAgainstArmorMultiplier = 2.0
||| MIRV Launcher | DamageAgainstGeneratorMultiplier = 2.0
||| MIRV Launcher | DamageAgainstBaseTurretMultiplier = 2.0
||| MIRV Launcher | DamageAgainstBaseSensorMultiplier = 2.0
||| MIRV Launcher | DamageAgainstGravCycleMultiplier = 1.25
||| MIRV Launcher | DamageAgainstBeowulfMultiplier = 1.25
||| MIRV Launcher | DamageAgainstShrikeMultiplier = 1.25
||| MIRV Launcher | ReloadTime = 2.75
||| MIRV Launcher | FireInterval = 0.46000000834465
||| MIRV Launcher | HoldToFire = true
||| MIRV Launcher | CanZoom = true
||| MIRV Launcher | ReloadSingle = false
||| MIRV Launcher | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| MIRV Launcher | BurstShotCount = nil
Failed to get property with id 2007
||| MIRV Launcher | BurstShotRefireTime = nil
Failed to get property with id 2008
||| MIRV Launcher | SpinupTime = nil
Failed to get property with id 2009
||| MIRV Launcher | ShotgunShotCount = nil
||| MIRV Launcher | ShotEnergyCost = 0
||| MIRV Launcher | ImpactMomentum = 2000.0
||| MIRV Launcher | SelfImpactMomentumMultiplier = 1.5
||| MIRV Launcher | SelfImpactExtraZMomentum = 0.0
||| MIRV Launcher | ExplosiveRadius = 200.0
||| MIRV Launcher | BulletDamageRange = 6000.0
||| MIRV Launcher | MaxDamageRangeProportion = 0.0
||| MIRV Launcher | MinDamageRangeProportion = 1.0
||| MIRV Launcher | MinDamageProportion = 0.5
||| MIRV Launcher | DoesImpulseFlag = true
||| MIRV Launcher | DoesGibOnKill = true
||| MIRV Launcher | GibImpulseRadius = 100.0
||| MIRV Launcher | GibStrength = 40.0
||| MIRV Launcher | ProjectileSpeed = 3600.0
||| MIRV Launcher | ProjectileMaxSpeed = 7000.0
||| MIRV Launcher | CollisionSize = 20.0
||| MIRV Launcher | ProjectileInheritance = 0.5
||| MIRV Launcher | ProjectileLifespan = 20.0
||| MIRV Launcher | ProjectileGravity = 0.80000001192093
||| MIRV Launcher | ProjectileTerminalVelocity = 7000.0
||| MIRV Launcher | ProjectileBounceDamping = 0.75
||| MIRV Launcher | HitscanRange = 2000.0
||| MIRV Launcher | FireOffsetX = 3.0
||| MIRV Launcher | FireOffsetY = 10.0
||| MIRV Launcher | FireOffsetZ = -7.0
||| MIRV Launcher | FractalDuration = 0.0
||| MIRV Launcher | FractalShardInterval = 0.0
||| MIRV Launcher | FractalAscentTime = 0.0
||| MIRV Launcher | FractalAscentHeight = 0.0
||| MIRV Launcher | FractalShardDistance = 0.0
||| MIRV Launcher | FractalShardHeight = 0.0
||| MIRV Launcher | FractalShardDamage = 0
||| MIRV Launcher | FractalShardDamageRadius = 0.0
||| MIRV Launcher | MeleeDamageRadius = 0.0
||| MIRV Launcher | MeleeConeAngle = 0.0
||| MIRV Launcher | Accuracy = 1.0
||| MIRV Launcher | AccuracyLossOnShot = 0.0
||| MIRV Launcher | AccuracyLossOnJump = 0.30000001192093
||| MIRV Launcher | AccuracyLossMax = 0.0
||| MIRV Launcher | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| MIRV Launcher | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| MIRV Launcher | ThrowDelay = nil
Failed to get property with id 6001
||| MIRV Launcher | ThrowPullPinTime = nil
||| MIRV Launcher | StuckDamageMultiplier = 1.0
||| MIRV Launcher | StuckMomentumMultiplier = 1.0
||| MIRV Launcher | FuseTimer = 2.0
||| MIRV Launcher | ExplodeOnContact = false
||| MIRV Launcher | ExplodeOnFuse = true
||| MIRV Launcher | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| MIRV Launcher | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| MIRV Launcher | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| MIRV Launcher | ThrustPackImpulse = nil
Failed to get property with id 7003
||| MIRV Launcher | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| MIRV Launcher | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| MIRV Launcher | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| MIRV Launcher | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| MIRV Launcher | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| MIRV Launcher | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| MIRV Launcher | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| MIRV Launcher | JammerPackRange = nil
Failed to get property with id 7011
||| MIRV Launcher | PackBuffAmount = nil
Failed to get property with id 7012
||| MIRV Launcher | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| MIRV Launcher | DeployableRange = nil
Failed to get property with id 8001
||| MIRV Launcher | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| MIRV Launcher | DeployableMinProximity = nil
Failed to get property with id 8003
||| MIRV Launcher | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| MIRV Launcher | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| MIRV Launcher | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| MIRV Launcher | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| MIRV Launcher | ForcefieldMaxDamageSpeed = nil
||| MIRV Launcher | MineDeployTime = 0.0
||| MIRV Launcher | MineMaxAllowed = 0
||| MIRV Launcher | MineCollisionCylinderRadius = 0.0
||| MIRV Launcher | MineCollisionCylinderHeight = 2.9461181470885e-28
||| MIRV Launcher | ClaymoreDetonationAngle = 0.0
||| MIRV Launcher | PrismMineTripDistance = 0.0
||| Saber Launcher | SpareAmmo = 15
||| Saber Launcher | AmmoPerShot = 1
||| Saber Launcher | LowAmmoCutoff = 0
||| Saber Launcher | Damage = 1350.0
||| Saber Launcher | DirectHitMultiplier = 1.0
||| Saber Launcher | EnergyDrain = 0.0
||| Saber Launcher | DamageAgainstArmorMultiplier = 1.0
||| Saber Launcher | DamageAgainstGeneratorMultiplier = 1.0
||| Saber Launcher | DamageAgainstBaseTurretMultiplier = 1.0
||| Saber Launcher | DamageAgainstBaseSensorMultiplier = 1.0
||| Saber Launcher | DamageAgainstGravCycleMultiplier = 2.0
||| Saber Launcher | DamageAgainstBeowulfMultiplier = 2.0
||| Saber Launcher | DamageAgainstShrikeMultiplier = 2.0
||| Saber Launcher | ReloadTime = 3.0
||| Saber Launcher | FireInterval = 0.5
||| Saber Launcher | HoldToFire = true
||| Saber Launcher | CanZoom = true
||| Saber Launcher | ReloadSingle = false
||| Saber Launcher | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Saber Launcher | BurstShotCount = nil
Failed to get property with id 2007
||| Saber Launcher | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Saber Launcher | SpinupTime = nil
Failed to get property with id 2009
||| Saber Launcher | ShotgunShotCount = nil
||| Saber Launcher | ShotEnergyCost = 0
||| Saber Launcher | ImpactMomentum = 85000.0
||| Saber Launcher | SelfImpactMomentumMultiplier = 1.5
||| Saber Launcher | SelfImpactExtraZMomentum = 0.0
||| Saber Launcher | ExplosiveRadius = 360.0
||| Saber Launcher | BulletDamageRange = 6000.0
||| Saber Launcher | MaxDamageRangeProportion = 0.0
||| Saber Launcher | MinDamageRangeProportion = 1.0
||| Saber Launcher | MinDamageProportion = 0.5
||| Saber Launcher | DoesImpulseFlag = true
||| Saber Launcher | DoesGibOnKill = false
||| Saber Launcher | GibImpulseRadius = 100.0
||| Saber Launcher | GibStrength = 40.0
||| Saber Launcher | ProjectileSpeed = 845.0
||| Saber Launcher | ProjectileMaxSpeed = 2800.0
||| Saber Launcher | CollisionSize = 20.0
||| Saber Launcher | ProjectileInheritance = 1.0
||| Saber Launcher | ProjectileLifespan = 20.0
||| Saber Launcher | ProjectileGravity = 0.40000000596046
||| Saber Launcher | ProjectileTerminalVelocity = 3500.0
||| Saber Launcher | ProjectileBounceDamping = 0.55000001192093
||| Saber Launcher | HitscanRange = 30000.0
||| Saber Launcher | FireOffsetX = 3.0
||| Saber Launcher | FireOffsetY = 10.0
||| Saber Launcher | FireOffsetZ = -7.0
||| Saber Launcher | FractalDuration = 1.1905431752904e-40
||| Saber Launcher | FractalShardInterval = 1.4930442773811e-39
||| Saber Launcher | FractalAscentTime = 5.6051938572993e-45
||| Saber Launcher | FractalAscentHeight = 0.0
||| Saber Launcher | FractalShardDistance = 7.0650665974329e-41
||| Saber Launcher | FractalShardHeight = 9.396314093298e-35
||| Saber Launcher | FractalShardDamage = 3
||| Saber Launcher | FractalShardDamageRadius = 0.0
||| Saber Launcher | MeleeDamageRadius = 0.0
||| Saber Launcher | MeleeConeAngle = 0.0
||| Saber Launcher | Accuracy = 1.0
||| Saber Launcher | AccuracyLossOnShot = 0.5
||| Saber Launcher | AccuracyLossOnJump = 0.30000001192093
||| Saber Launcher | AccuracyLossMax = 0.30000001192093
||| Saber Launcher | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Saber Launcher | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Saber Launcher | ThrowDelay = nil
Failed to get property with id 6001
||| Saber Launcher | ThrowPullPinTime = nil
||| Saber Launcher | StuckDamageMultiplier = 0.0
||| Saber Launcher | StuckMomentumMultiplier = 0.0
||| Saber Launcher | FuseTimer = 0.0
||| Saber Launcher | ExplodeOnContact = false
||| Saber Launcher | ExplodeOnFuse = false
||| Saber Launcher | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Saber Launcher | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Saber Launcher | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Saber Launcher | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Saber Launcher | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Saber Launcher | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Saber Launcher | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Saber Launcher | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Saber Launcher | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Saber Launcher | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Saber Launcher | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Saber Launcher | JammerPackRange = nil
Failed to get property with id 7011
||| Saber Launcher | PackBuffAmount = nil
Failed to get property with id 7012
||| Saber Launcher | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Saber Launcher | DeployableRange = nil
Failed to get property with id 8001
||| Saber Launcher | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Saber Launcher | DeployableMinProximity = nil
Failed to get property with id 8003
||| Saber Launcher | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Saber Launcher | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Saber Launcher | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Saber Launcher | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Saber Launcher | ForcefieldMaxDamageSpeed = nil
||| Saber Launcher | MineDeployTime = 1.0
||| Saber Launcher | MineMaxAllowed = 0
||| Saber Launcher | MineCollisionCylinderRadius = 0.60000002384186
||| Saber Launcher | MineCollisionCylinderHeight = 20.0
||| Saber Launcher | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Saber Launcher | PrismMineTripDistance = 0.0
||| Gladiator | SpareAmmo = 25
||| Gladiator | AmmoPerShot = 1
||| Gladiator | LowAmmoCutoff = 5
||| Gladiator | Damage = 460.0
||| Gladiator | DirectHitMultiplier = 2.0
||| Gladiator | EnergyDrain = 0.0
||| Gladiator | DamageAgainstArmorMultiplier = 1.0
||| Gladiator | DamageAgainstGeneratorMultiplier = 1.0
||| Gladiator | DamageAgainstBaseTurretMultiplier = 1.0
||| Gladiator | DamageAgainstBaseSensorMultiplier = 1.0
||| Gladiator | DamageAgainstGravCycleMultiplier = 1.0
||| Gladiator | DamageAgainstBeowulfMultiplier = 1.0
||| Gladiator | DamageAgainstShrikeMultiplier = 1.0
||| Gladiator | ReloadTime = 1.3999999761581
||| Gladiator | FireInterval = 0.46000000834465
||| Gladiator | HoldToFire = true
||| Gladiator | CanZoom = true
||| Gladiator | ReloadSingle = true
||| Gladiator | ReloadApplicationProportion = 0.38999998569489
Failed to get property with id 2006
||| Gladiator | BurstShotCount = nil
Failed to get property with id 2007
||| Gladiator | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Gladiator | SpinupTime = nil
Failed to get property with id 2009
||| Gladiator | ShotgunShotCount = nil
||| Gladiator | ShotEnergyCost = 0
||| Gladiator | ImpactMomentum = 80000.0
||| Gladiator | SelfImpactMomentumMultiplier = 1.5
||| Gladiator | SelfImpactExtraZMomentum = 0.0
||| Gladiator | ExplosiveRadius = 200.0
||| Gladiator | BulletDamageRange = 6000.0
||| Gladiator | MaxDamageRangeProportion = 0.0
||| Gladiator | MinDamageRangeProportion = 1.0
||| Gladiator | MinDamageProportion = 0.40000000596046
||| Gladiator | DoesImpulseFlag = true
||| Gladiator | DoesGibOnKill = false
||| Gladiator | GibImpulseRadius = 100.0
||| Gladiator | GibStrength = 40.0
||| Gladiator | ProjectileSpeed = 3820.0
||| Gladiator | ProjectileMaxSpeed = 8000.0
||| Gladiator | CollisionSize = 20.0
||| Gladiator | ProjectileInheritance = 0.5
||| Gladiator | ProjectileLifespan = 8.0
||| Gladiator | ProjectileGravity = 0.44999998807907
||| Gladiator | ProjectileTerminalVelocity = 8000.0
||| Gladiator | ProjectileBounceDamping = 0.55000001192093
||| Gladiator | HitscanRange = 2000.0
||| Gladiator | FireOffsetX = 3.0
||| Gladiator | FireOffsetY = 10.0
||| Gladiator | FireOffsetZ = -7.0
||| Gladiator | FractalDuration = 3.6606843787748e-28
||| Gladiator | FractalShardInterval = 3.6605611192584e-28
||| Gladiator | FractalAscentTime = 0.0
||| Gladiator | FractalAscentHeight = 1.8716955737762e-34
||| Gladiator | FractalShardDistance = 0.0
||| Gladiator | FractalShardHeight = 0.0
||| Gladiator | FractalShardDamage = 0
||| Gladiator | FractalShardDamageRadius = 0.0
||| Gladiator | MeleeDamageRadius = 0.0
||| Gladiator | MeleeConeAngle = 0.0
||| Gladiator | Accuracy = 1.0
||| Gladiator | AccuracyLossOnShot = 0.0
||| Gladiator | AccuracyLossOnJump = 0.30000001192093
||| Gladiator | AccuracyLossMax = 0.0
||| Gladiator | AccuracyCorrectionRate = 0.0
Failed to get property with id 5007
||| Gladiator | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Gladiator | ThrowDelay = nil
Failed to get property with id 6001
||| Gladiator | ThrowPullPinTime = nil
||| Gladiator | StuckDamageMultiplier = 1.5
||| Gladiator | StuckMomentumMultiplier = 1.0
||| Gladiator | FuseTimer = 0.55000001192093
||| Gladiator | ExplodeOnContact = false
||| Gladiator | ExplodeOnFuse = false
||| Gladiator | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Gladiator | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Gladiator | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Gladiator | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Gladiator | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Gladiator | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Gladiator | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Gladiator | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Gladiator | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Gladiator | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Gladiator | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Gladiator | JammerPackRange = nil
Failed to get property with id 7011
||| Gladiator | PackBuffAmount = nil
Failed to get property with id 7012
||| Gladiator | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Gladiator | DeployableRange = nil
Failed to get property with id 8001
||| Gladiator | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Gladiator | DeployableMinProximity = nil
Failed to get property with id 8003
||| Gladiator | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Gladiator | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Gladiator | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Gladiator | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Gladiator | ForcefieldMaxDamageSpeed = nil
||| Gladiator | MineDeployTime = 0.0
||| Gladiator | MineMaxAllowed = 0
||| Gladiator | MineCollisionCylinderRadius = 0.0
||| Gladiator | MineCollisionCylinderHeight = 1.8716588395777e-34
||| Gladiator | ClaymoreDetonationAngle = 3.6605611192584e-28
||| Gladiator | PrismMineTripDistance = 1.8716955737762e-34
||| Chain Gun | SpareAmmo = 250
||| Chain Gun | AmmoPerShot = 1
||| Chain Gun | LowAmmoCutoff = 0
||| Chain Gun | Damage = 70.0
||| Chain Gun | DirectHitMultiplier = 1.0
||| Chain Gun | EnergyDrain = 0.0
||| Chain Gun | DamageAgainstArmorMultiplier = 0.5
||| Chain Gun | DamageAgainstGeneratorMultiplier = 1.0
||| Chain Gun | DamageAgainstBaseTurretMultiplier = 1.0
||| Chain Gun | DamageAgainstBaseSensorMultiplier = 1.0
||| Chain Gun | DamageAgainstGravCycleMultiplier = 0.5
||| Chain Gun | DamageAgainstBeowulfMultiplier = 0.5
||| Chain Gun | DamageAgainstShrikeMultiplier = 0.5
||| Chain Gun | ReloadTime = 0.0
||| Chain Gun | FireInterval = 0.10000000149012
||| Chain Gun | HoldToFire = true
||| Chain Gun | CanZoom = true
||| Chain Gun | ReloadSingle = false
||| Chain Gun | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Chain Gun | BurstShotCount = nil
Failed to get property with id 2007
||| Chain Gun | BurstShotRefireTime = nil
||| Chain Gun | SpinupTime = 0.60000002384186
Failed to get property with id 2009
||| Chain Gun | ShotgunShotCount = nil
||| Chain Gun | ShotEnergyCost = 0
||| Chain Gun | ImpactMomentum = 0.0
||| Chain Gun | SelfImpactMomentumMultiplier = 1.5
||| Chain Gun | SelfImpactExtraZMomentum = 0.0
||| Chain Gun | ExplosiveRadius = 0.0
||| Chain Gun | BulletDamageRange = 6000.0
||| Chain Gun | MaxDamageRangeProportion = 0.5
||| Chain Gun | MinDamageRangeProportion = 1.0
||| Chain Gun | MinDamageProportion = 0.80000001192093
||| Chain Gun | DoesImpulseFlag = false
||| Chain Gun | DoesGibOnKill = false
||| Chain Gun | GibImpulseRadius = 100.0
||| Chain Gun | GibStrength = 40.0
||| Chain Gun | ProjectileSpeed = 21000.0
||| Chain Gun | ProjectileMaxSpeed = 21000.0
||| Chain Gun | CollisionSize = 25.0
||| Chain Gun | ProjectileInheritance = 0.0
||| Chain Gun | ProjectileLifespan = 1.0
||| Chain Gun | ProjectileGravity = 0.0
||| Chain Gun | ProjectileTerminalVelocity = 3500.0
||| Chain Gun | ProjectileBounceDamping = 0.0
||| Chain Gun | HitscanRange = 2000.0
||| Chain Gun | FireOffsetX = 3.0
||| Chain Gun | FireOffsetY = 0.0
||| Chain Gun | FireOffsetZ = -0.0
||| Chain Gun | FractalDuration = 1.6045848325444e-40
||| Chain Gun | FractalShardInterval = 1.4930442773811e-39
||| Chain Gun | FractalAscentTime = 6.428540782998e-40
||| Chain Gun | FractalAscentHeight = 1.5883030983755e-21
||| Chain Gun | FractalShardDistance = 7.0290532268997e-41
||| Chain Gun | FractalShardHeight = 9.396314093298e-35
||| Chain Gun | FractalShardDamage = 3
||| Chain Gun | FractalShardDamageRadius = 0.0
||| Chain Gun | MeleeDamageRadius = 0.0
||| Chain Gun | MeleeConeAngle = 0.0
||| Chain Gun | Accuracy = 1.0
||| Chain Gun | AccuracyLossOnShot = 0.0
||| Chain Gun | AccuracyLossOnJump = 0.30000001192093
||| Chain Gun | AccuracyLossMax = 0.0
||| Chain Gun | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Chain Gun | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Chain Gun | ThrowDelay = nil
Failed to get property with id 6001
||| Chain Gun | ThrowPullPinTime = nil
||| Chain Gun | StuckDamageMultiplier = 0.0
||| Chain Gun | StuckMomentumMultiplier = 0.0
||| Chain Gun | FuseTimer = 0.0
||| Chain Gun | ExplodeOnContact = false
||| Chain Gun | ExplodeOnFuse = false
||| Chain Gun | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Chain Gun | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Chain Gun | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Chain Gun | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Chain Gun | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Chain Gun | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Chain Gun | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Chain Gun | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Chain Gun | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Chain Gun | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Chain Gun | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Chain Gun | JammerPackRange = nil
Failed to get property with id 7011
||| Chain Gun | PackBuffAmount = nil
Failed to get property with id 7012
||| Chain Gun | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Chain Gun | DeployableRange = nil
Failed to get property with id 8001
||| Chain Gun | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Chain Gun | DeployableMinProximity = nil
Failed to get property with id 8003
||| Chain Gun | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Chain Gun | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Chain Gun | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Chain Gun | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Chain Gun | ForcefieldMaxDamageSpeed = nil
||| Chain Gun | MineDeployTime = 0.0
||| Chain Gun | MineMaxAllowed = 0
||| Chain Gun | MineCollisionCylinderRadius = 0.0
||| Chain Gun | MineCollisionCylinderHeight = 0.0
||| Chain Gun | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Chain Gun | PrismMineTripDistance = 1.5883030983755e-21
||| Nova Colt | SpareAmmo = 150
||| Nova Colt | AmmoPerShot = 1
||| Nova Colt | LowAmmoCutoff = 1
||| Nova Colt | Damage = 80.0
Failed to get property with id 3002
||| Nova Colt | DirectHitMultiplier = nil
||| Nova Colt | EnergyDrain = 0.0
||| Nova Colt | DamageAgainstArmorMultiplier = 0.5
||| Nova Colt | DamageAgainstGeneratorMultiplier = 1.0
||| Nova Colt | DamageAgainstBaseTurretMultiplier = 1.0
||| Nova Colt | DamageAgainstBaseSensorMultiplier = 1.0
||| Nova Colt | DamageAgainstGravCycleMultiplier = 0.5
||| Nova Colt | DamageAgainstBeowulfMultiplier = 0.5
||| Nova Colt | DamageAgainstShrikeMultiplier = 0.5
||| Nova Colt | ReloadTime = 1.7999999523163
||| Nova Colt | FireInterval = 0.15999999642372
||| Nova Colt | HoldToFire = false
||| Nova Colt | CanZoom = true
||| Nova Colt | ReloadSingle = false
||| Nova Colt | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Nova Colt | BurstShotCount = nil
Failed to get property with id 2007
||| Nova Colt | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Nova Colt | SpinupTime = nil
Failed to get property with id 2009
||| Nova Colt | ShotgunShotCount = nil
||| Nova Colt | ShotEnergyCost = 0
||| Nova Colt | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Nova Colt | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Nova Colt | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Nova Colt | ExplosiveRadius = nil
||| Nova Colt | BulletDamageRange = 6000.0
||| Nova Colt | MaxDamageRangeProportion = 0.5
||| Nova Colt | MinDamageRangeProportion = 1.0
||| Nova Colt | MinDamageProportion = 0.5
||| Nova Colt | DoesImpulseFlag = false
||| Nova Colt | DoesGibOnKill = false
||| Nova Colt | GibImpulseRadius = 100.0
||| Nova Colt | GibStrength = 40.0
Failed to get property with id 4000
||| Nova Colt | ProjectileSpeed = nil
Failed to get property with id 4001
||| Nova Colt | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Nova Colt | CollisionSize = nil
Failed to get property with id 4003
||| Nova Colt | ProjectileInheritance = nil
Failed to get property with id 4004
||| Nova Colt | ProjectileLifespan = nil
Failed to get property with id 4005
||| Nova Colt | ProjectileGravity = nil
Failed to get property with id 4006
||| Nova Colt | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Nova Colt | ProjectileBounceDamping = nil
||| Nova Colt | HitscanRange = 6000.0
||| Nova Colt | FireOffsetX = 3.0
||| Nova Colt | FireOffsetY = 0.0
||| Nova Colt | FireOffsetZ = -0.0
Failed to get property with id 3030
||| Nova Colt | FractalDuration = nil
Failed to get property with id 3031
||| Nova Colt | FractalShardInterval = nil
Failed to get property with id 3032
||| Nova Colt | FractalAscentTime = nil
Failed to get property with id 3033
||| Nova Colt | FractalAscentHeight = nil
Failed to get property with id 3034
||| Nova Colt | FractalShardDistance = nil
Failed to get property with id 3035
||| Nova Colt | FractalShardHeight = nil
Failed to get property with id 3036
||| Nova Colt | FractalShardDamage = nil
Failed to get property with id 3037
||| Nova Colt | FractalShardDamageRadius = nil
||| Nova Colt | MeleeDamageRadius = 0.0
||| Nova Colt | MeleeConeAngle = 0.0
||| Nova Colt | Accuracy = 1.0
||| Nova Colt | AccuracyLossOnShot = 0.0
||| Nova Colt | AccuracyLossOnJump = 0.30000001192093
||| Nova Colt | AccuracyLossMax = 0.0
||| Nova Colt | AccuracyCorrectionRate = 0.37999999523163
Failed to get property with id 5007
||| Nova Colt | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Nova Colt | ThrowDelay = nil
Failed to get property with id 6001
||| Nova Colt | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Nova Colt | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Nova Colt | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Nova Colt | FuseTimer = nil
Failed to get property with id 6005
||| Nova Colt | ExplodeOnContact = nil
Failed to get property with id 6006
||| Nova Colt | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Nova Colt | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Nova Colt | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Nova Colt | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Nova Colt | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Nova Colt | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Nova Colt | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Nova Colt | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Nova Colt | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Nova Colt | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Nova Colt | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Nova Colt | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Nova Colt | JammerPackRange = nil
Failed to get property with id 7011
||| Nova Colt | PackBuffAmount = nil
Failed to get property with id 7012
||| Nova Colt | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Nova Colt | DeployableRange = nil
Failed to get property with id 8001
||| Nova Colt | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Nova Colt | DeployableMinProximity = nil
Failed to get property with id 8003
||| Nova Colt | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Nova Colt | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Nova Colt | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Nova Colt | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Nova Colt | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Nova Colt | MineDeployTime = nil
Failed to get property with id 9001
||| Nova Colt | MineMaxAllowed = nil
Failed to get property with id 9002
||| Nova Colt | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Nova Colt | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Nova Colt | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Nova Colt | PrismMineTripDistance = nil
||| X1 LMG | SpareAmmo = 300
||| X1 LMG | AmmoPerShot = 1
||| X1 LMG | LowAmmoCutoff = 0
||| X1 LMG | Damage = 60.0
||| X1 LMG | DirectHitMultiplier = 1.0
||| X1 LMG | EnergyDrain = 0.0
||| X1 LMG | DamageAgainstArmorMultiplier = 0.5
||| X1 LMG | DamageAgainstGeneratorMultiplier = 1.0
||| X1 LMG | DamageAgainstBaseTurretMultiplier = 1.0
||| X1 LMG | DamageAgainstBaseSensorMultiplier = 1.0
||| X1 LMG | DamageAgainstGravCycleMultiplier = 0.5
||| X1 LMG | DamageAgainstBeowulfMultiplier = 0.5
||| X1 LMG | DamageAgainstShrikeMultiplier = 0.5
||| X1 LMG | ReloadTime = 1.7999999523163
||| X1 LMG | FireInterval = 0.079999998211861
||| X1 LMG | HoldToFire = true
||| X1 LMG | CanZoom = true
||| X1 LMG | ReloadSingle = false
||| X1 LMG | ReloadApplicationProportion = 0.58799999952316
Failed to get property with id 2006
||| X1 LMG | BurstShotCount = nil
Failed to get property with id 2007
||| X1 LMG | BurstShotRefireTime = nil
||| X1 LMG | SpinupTime = 0.0
Failed to get property with id 2009
||| X1 LMG | ShotgunShotCount = nil
||| X1 LMG | ShotEnergyCost = 0
||| X1 LMG | ImpactMomentum = 0.0
||| X1 LMG | SelfImpactMomentumMultiplier = 1.5
||| X1 LMG | SelfImpactExtraZMomentum = 0.0
||| X1 LMG | ExplosiveRadius = 0.0
||| X1 LMG | BulletDamageRange = 6000.0
||| X1 LMG | MaxDamageRangeProportion = 0.5
||| X1 LMG | MinDamageRangeProportion = 1.0
||| X1 LMG | MinDamageProportion = 0.85000002384186
||| X1 LMG | DoesImpulseFlag = false
||| X1 LMG | DoesGibOnKill = false
||| X1 LMG | GibImpulseRadius = 100.0
||| X1 LMG | GibStrength = 40.0
||| X1 LMG | ProjectileSpeed = 21000.0
||| X1 LMG | ProjectileMaxSpeed = 21000.0
||| X1 LMG | CollisionSize = 25.0
||| X1 LMG | ProjectileInheritance = 0.0
||| X1 LMG | ProjectileLifespan = 1.0
||| X1 LMG | ProjectileGravity = 0.0
||| X1 LMG | ProjectileTerminalVelocity = 3500.0
||| X1 LMG | ProjectileBounceDamping = 0.0
||| X1 LMG | HitscanRange = 2000.0
||| X1 LMG | FireOffsetX = 3.0
||| X1 LMG | FireOffsetY = 0.0
||| X1 LMG | FireOffsetZ = -0.0
||| X1 LMG | FractalDuration = 1.6227456606421e-40
||| X1 LMG | FractalShardInterval = 1.4930442773811e-39
||| X1 LMG | FractalAscentTime = 6.428540782998e-40
||| X1 LMG | FractalAscentHeight = 1.3700437389351e-21
||| X1 LMG | FractalShardDistance = 7.137373598192e-41
||| X1 LMG | FractalShardHeight = 9.396314093298e-35
||| X1 LMG | FractalShardDamage = 3
||| X1 LMG | FractalShardDamageRadius = 0.0
||| X1 LMG | MeleeDamageRadius = 0.0
||| X1 LMG | MeleeConeAngle = 0.0
||| X1 LMG | Accuracy = 1.0
||| X1 LMG | AccuracyLossOnShot = 0.0
||| X1 LMG | AccuracyLossOnJump = 0.30000001192093
||| X1 LMG | AccuracyLossMax = 0.0
||| X1 LMG | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| X1 LMG | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| X1 LMG | ThrowDelay = nil
Failed to get property with id 6001
||| X1 LMG | ThrowPullPinTime = nil
||| X1 LMG | StuckDamageMultiplier = 0.0
||| X1 LMG | StuckMomentumMultiplier = 0.0
||| X1 LMG | FuseTimer = 0.0
||| X1 LMG | ExplodeOnContact = false
||| X1 LMG | ExplodeOnFuse = false
||| X1 LMG | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| X1 LMG | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| X1 LMG | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| X1 LMG | ThrustPackImpulse = nil
Failed to get property with id 7003
||| X1 LMG | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| X1 LMG | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| X1 LMG | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| X1 LMG | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| X1 LMG | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| X1 LMG | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| X1 LMG | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| X1 LMG | JammerPackRange = nil
Failed to get property with id 7011
||| X1 LMG | PackBuffAmount = nil
Failed to get property with id 7012
||| X1 LMG | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| X1 LMG | DeployableRange = nil
Failed to get property with id 8001
||| X1 LMG | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| X1 LMG | DeployableMinProximity = nil
Failed to get property with id 8003
||| X1 LMG | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| X1 LMG | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| X1 LMG | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| X1 LMG | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| X1 LMG | ForcefieldMaxDamageSpeed = nil
||| X1 LMG | MineDeployTime = 0.0
||| X1 LMG | MineMaxAllowed = 0
||| X1 LMG | MineCollisionCylinderRadius = 0.0
||| X1 LMG | MineCollisionCylinderHeight = 0.0
||| X1 LMG | ClaymoreDetonationAngle = 1.4930442773811e-39
||| X1 LMG | PrismMineTripDistance = 1.3700437389351e-21
||| Plasma Cannon | SpareAmmo = 60
||| Plasma Cannon | AmmoPerShot = 1
||| Plasma Cannon | LowAmmoCutoff = 4
||| Plasma Cannon | Damage = 300.0
||| Plasma Cannon | DirectHitMultiplier = 1.5
||| Plasma Cannon | EnergyDrain = 0.0
||| Plasma Cannon | DamageAgainstArmorMultiplier = 2.0
||| Plasma Cannon | DamageAgainstGeneratorMultiplier = 3.0
||| Plasma Cannon | DamageAgainstBaseTurretMultiplier = 3.0
||| Plasma Cannon | DamageAgainstBaseSensorMultiplier = 3.0
||| Plasma Cannon | DamageAgainstGravCycleMultiplier = 2.0
||| Plasma Cannon | DamageAgainstBeowulfMultiplier = 2.0
||| Plasma Cannon | DamageAgainstShrikeMultiplier = 2.0
||| Plasma Cannon | ReloadTime = 1.7999999523163
||| Plasma Cannon | FireInterval = 0.60000002384186
||| Plasma Cannon | HoldToFire = true
||| Plasma Cannon | CanZoom = true
||| Plasma Cannon | ReloadSingle = false
||| Plasma Cannon | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Plasma Cannon | BurstShotCount = nil
Failed to get property with id 2007
||| Plasma Cannon | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Plasma Cannon | SpinupTime = nil
Failed to get property with id 2009
||| Plasma Cannon | ShotgunShotCount = nil
||| Plasma Cannon | ShotEnergyCost = 0
||| Plasma Cannon | ImpactMomentum = 25000.0
||| Plasma Cannon | SelfImpactMomentumMultiplier = 1.5
||| Plasma Cannon | SelfImpactExtraZMomentum = 25000.0
||| Plasma Cannon | ExplosiveRadius = 275.0
||| Plasma Cannon | BulletDamageRange = 6000.0
||| Plasma Cannon | MaxDamageRangeProportion = 0.0
||| Plasma Cannon | MinDamageRangeProportion = 1.0
||| Plasma Cannon | MinDamageProportion = 0.40000000596046
||| Plasma Cannon | DoesImpulseFlag = true
||| Plasma Cannon | DoesGibOnKill = false
||| Plasma Cannon | GibImpulseRadius = 100.0
||| Plasma Cannon | GibStrength = 40.0
||| Plasma Cannon | ProjectileSpeed = 3920.0
||| Plasma Cannon | ProjectileMaxSpeed = 8000.0
||| Plasma Cannon | CollisionSize = 20.0
||| Plasma Cannon | ProjectileInheritance = 0.5
||| Plasma Cannon | ProjectileLifespan = 1.0
||| Plasma Cannon | ProjectileGravity = 1.0
||| Plasma Cannon | ProjectileTerminalVelocity = 3500.0
||| Plasma Cannon | ProjectileBounceDamping = 0.55000001192093
||| Plasma Cannon | HitscanRange = 2000.0
||| Plasma Cannon | FireOffsetX = 3.0
||| Plasma Cannon | FireOffsetY = 10.0
||| Plasma Cannon | FireOffsetZ = -7.0
||| Plasma Cannon | FractalDuration = 1.6141136621018e-40
||| Plasma Cannon | FractalShardInterval = 1.4930442773811e-39
||| Plasma Cannon | FractalAscentTime = 6.428540782998e-40
||| Plasma Cannon | FractalAscentHeight = 1.260649102925e-21
||| Plasma Cannon | FractalShardDistance = 7.0817420491583e-41
||| Plasma Cannon | FractalShardHeight = 9.396314093298e-35
||| Plasma Cannon | FractalShardDamage = 3
||| Plasma Cannon | FractalShardDamageRadius = 0.0
||| Plasma Cannon | MeleeDamageRadius = 0.0
||| Plasma Cannon | MeleeConeAngle = 0.0
||| Plasma Cannon | Accuracy = 1.0
||| Plasma Cannon | AccuracyLossOnShot = 0.0
||| Plasma Cannon | AccuracyLossOnJump = 0.30000001192093
||| Plasma Cannon | AccuracyLossMax = 0.30000001192093
||| Plasma Cannon | AccuracyCorrectionRate = 0.18999999761581
Failed to get property with id 5007
||| Plasma Cannon | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Plasma Cannon | ThrowDelay = nil
Failed to get property with id 6001
||| Plasma Cannon | ThrowPullPinTime = nil
||| Plasma Cannon | StuckDamageMultiplier = 0.0
||| Plasma Cannon | StuckMomentumMultiplier = 0.0
||| Plasma Cannon | FuseTimer = 0.0
||| Plasma Cannon | ExplodeOnContact = false
||| Plasma Cannon | ExplodeOnFuse = false
||| Plasma Cannon | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Plasma Cannon | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Plasma Cannon | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Plasma Cannon | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Plasma Cannon | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Plasma Cannon | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Plasma Cannon | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Plasma Cannon | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Plasma Cannon | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Plasma Cannon | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Plasma Cannon | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Plasma Cannon | JammerPackRange = nil
Failed to get property with id 7011
||| Plasma Cannon | PackBuffAmount = nil
Failed to get property with id 7012
||| Plasma Cannon | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Plasma Cannon | DeployableRange = nil
Failed to get property with id 8001
||| Plasma Cannon | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Plasma Cannon | DeployableMinProximity = nil
Failed to get property with id 8003
||| Plasma Cannon | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Plasma Cannon | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Plasma Cannon | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Plasma Cannon | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Plasma Cannon | ForcefieldMaxDamageSpeed = nil
||| Plasma Cannon | MineDeployTime = 0.0
||| Plasma Cannon | MineMaxAllowed = 0
||| Plasma Cannon | MineCollisionCylinderRadius = 0.0
||| Plasma Cannon | MineCollisionCylinderHeight = 0.0
||| Plasma Cannon | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Plasma Cannon | PrismMineTripDistance = 1.260649102925e-21
||| Nova Blaster MX | SpareAmmo = 48
||| Nova Blaster MX | AmmoPerShot = 1
||| Nova Blaster MX | LowAmmoCutoff = 3
||| Nova Blaster MX | Damage = 250.0
||| Nova Blaster MX | DirectHitMultiplier = 1.0
||| Nova Blaster MX | EnergyDrain = 0.0
||| Nova Blaster MX | DamageAgainstArmorMultiplier = 0.5
||| Nova Blaster MX | DamageAgainstGeneratorMultiplier = 1.0
||| Nova Blaster MX | DamageAgainstBaseTurretMultiplier = 1.0
||| Nova Blaster MX | DamageAgainstBaseSensorMultiplier = 1.0
||| Nova Blaster MX | DamageAgainstGravCycleMultiplier = 0.5
||| Nova Blaster MX | DamageAgainstBeowulfMultiplier = 0.5
||| Nova Blaster MX | DamageAgainstShrikeMultiplier = 0.5
||| Nova Blaster MX | ReloadTime = 1.7999999523163
||| Nova Blaster MX | FireInterval = 0.40000000596046
||| Nova Blaster MX | HoldToFire = false
||| Nova Blaster MX | CanZoom = true
||| Nova Blaster MX | ReloadSingle = false
||| Nova Blaster MX | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Nova Blaster MX | BurstShotCount = nil
Failed to get property with id 2007
||| Nova Blaster MX | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Nova Blaster MX | SpinupTime = nil
Failed to get property with id 2009
||| Nova Blaster MX | ShotgunShotCount = nil
||| Nova Blaster MX | ShotEnergyCost = 0
||| Nova Blaster MX | ImpactMomentum = 100.0
||| Nova Blaster MX | SelfImpactMomentumMultiplier = 1.5
||| Nova Blaster MX | SelfImpactExtraZMomentum = 0.0
||| Nova Blaster MX | ExplosiveRadius = 0.0
||| Nova Blaster MX | BulletDamageRange = 6000.0
||| Nova Blaster MX | MaxDamageRangeProportion = 0.5
||| Nova Blaster MX | MinDamageRangeProportion = 1.0
||| Nova Blaster MX | MinDamageProportion = 0.5
||| Nova Blaster MX | DoesImpulseFlag = false
||| Nova Blaster MX | DoesGibOnKill = false
||| Nova Blaster MX | GibImpulseRadius = 100.0
||| Nova Blaster MX | GibStrength = 40.0
||| Nova Blaster MX | ProjectileSpeed = 18000.0
||| Nova Blaster MX | ProjectileMaxSpeed = 18000.0
||| Nova Blaster MX | CollisionSize = 25.0
||| Nova Blaster MX | ProjectileInheritance = 0.0
||| Nova Blaster MX | ProjectileLifespan = 0.5
||| Nova Blaster MX | ProjectileGravity = 0.0
||| Nova Blaster MX | ProjectileTerminalVelocity = 3500.0
||| Nova Blaster MX | ProjectileBounceDamping = 0.0
||| Nova Blaster MX | HitscanRange = 2000.0
||| Nova Blaster MX | FireOffsetX = -15.0
||| Nova Blaster MX | FireOffsetY = 8.0
||| Nova Blaster MX | FireOffsetZ = -6.0
||| Nova Blaster MX | FractalDuration = 1.6137353115165e-40
||| Nova Blaster MX | FractalShardInterval = 1.4930442773811e-39
||| Nova Blaster MX | FractalAscentTime = 6.428540782998e-40
||| Nova Blaster MX | FractalAscentHeight = 1.2616960033877e-21
||| Nova Blaster MX | FractalShardDistance = 7.0796401014618e-41
||| Nova Blaster MX | FractalShardHeight = 9.396314093298e-35
||| Nova Blaster MX | FractalShardDamage = 3
||| Nova Blaster MX | FractalShardDamageRadius = 0.0
||| Nova Blaster MX | MeleeDamageRadius = 0.0
||| Nova Blaster MX | MeleeConeAngle = 0.0
||| Nova Blaster MX | Accuracy = 1.0
||| Nova Blaster MX | AccuracyLossOnShot = 0.0
||| Nova Blaster MX | AccuracyLossOnJump = 0.30000001192093
||| Nova Blaster MX | AccuracyLossMax = 0.0
||| Nova Blaster MX | AccuracyCorrectionRate = 0.28000000119209
Failed to get property with id 5007
||| Nova Blaster MX | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Nova Blaster MX | ThrowDelay = nil
Failed to get property with id 6001
||| Nova Blaster MX | ThrowPullPinTime = nil
||| Nova Blaster MX | StuckDamageMultiplier = 0.0
||| Nova Blaster MX | StuckMomentumMultiplier = 0.0
||| Nova Blaster MX | FuseTimer = 0.0
||| Nova Blaster MX | ExplodeOnContact = false
||| Nova Blaster MX | ExplodeOnFuse = true
||| Nova Blaster MX | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Nova Blaster MX | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Nova Blaster MX | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Nova Blaster MX | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Nova Blaster MX | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Nova Blaster MX | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Nova Blaster MX | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Nova Blaster MX | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Nova Blaster MX | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Nova Blaster MX | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Nova Blaster MX | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Nova Blaster MX | JammerPackRange = nil
Failed to get property with id 7011
||| Nova Blaster MX | PackBuffAmount = nil
Failed to get property with id 7012
||| Nova Blaster MX | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Nova Blaster MX | DeployableRange = nil
Failed to get property with id 8001
||| Nova Blaster MX | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Nova Blaster MX | DeployableMinProximity = nil
Failed to get property with id 8003
||| Nova Blaster MX | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Nova Blaster MX | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Nova Blaster MX | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Nova Blaster MX | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Nova Blaster MX | ForcefieldMaxDamageSpeed = nil
||| Nova Blaster MX | MineDeployTime = 0.0
||| Nova Blaster MX | MineMaxAllowed = 0
||| Nova Blaster MX | MineCollisionCylinderRadius = 0.0
||| Nova Blaster MX | MineCollisionCylinderHeight = 0.0
||| Nova Blaster MX | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Nova Blaster MX | PrismMineTripDistance = 1.2616960033877e-21
||| Automatic Shotgun | SpareAmmo = 80
||| Automatic Shotgun | AmmoPerShot = 1
||| Automatic Shotgun | LowAmmoCutoff = 2
||| Automatic Shotgun | Damage = 45.0
Failed to get property with id 3002
||| Automatic Shotgun | DirectHitMultiplier = nil
||| Automatic Shotgun | EnergyDrain = 0.0
||| Automatic Shotgun | DamageAgainstArmorMultiplier = 0.5
||| Automatic Shotgun | DamageAgainstGeneratorMultiplier = 1.0
||| Automatic Shotgun | DamageAgainstBaseTurretMultiplier = 1.0
||| Automatic Shotgun | DamageAgainstBaseSensorMultiplier = 1.0
||| Automatic Shotgun | DamageAgainstGravCycleMultiplier = 0.5
||| Automatic Shotgun | DamageAgainstBeowulfMultiplier = 0.5
||| Automatic Shotgun | DamageAgainstShrikeMultiplier = 0.5
||| Automatic Shotgun | ReloadTime = 1.7999999523163
||| Automatic Shotgun | FireInterval = 0.5
||| Automatic Shotgun | HoldToFire = true
||| Automatic Shotgun | CanZoom = true
||| Automatic Shotgun | ReloadSingle = false
||| Automatic Shotgun | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Automatic Shotgun | BurstShotCount = nil
Failed to get property with id 2007
||| Automatic Shotgun | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Automatic Shotgun | SpinupTime = nil
||| Automatic Shotgun | ShotgunShotCount = 9
||| Automatic Shotgun | ShotEnergyCost = 0
||| Automatic Shotgun | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Automatic Shotgun | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Automatic Shotgun | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Automatic Shotgun | ExplosiveRadius = nil
||| Automatic Shotgun | BulletDamageRange = 6000.0
||| Automatic Shotgun | MaxDamageRangeProportion = 0.5
||| Automatic Shotgun | MinDamageRangeProportion = 1.0
||| Automatic Shotgun | MinDamageProportion = 0.5
||| Automatic Shotgun | DoesImpulseFlag = false
||| Automatic Shotgun | DoesGibOnKill = false
||| Automatic Shotgun | GibImpulseRadius = 100.0
||| Automatic Shotgun | GibStrength = 40.0
Failed to get property with id 4000
||| Automatic Shotgun | ProjectileSpeed = nil
Failed to get property with id 4001
||| Automatic Shotgun | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Automatic Shotgun | CollisionSize = nil
Failed to get property with id 4003
||| Automatic Shotgun | ProjectileInheritance = nil
Failed to get property with id 4004
||| Automatic Shotgun | ProjectileLifespan = nil
Failed to get property with id 4005
||| Automatic Shotgun | ProjectileGravity = nil
Failed to get property with id 4006
||| Automatic Shotgun | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Automatic Shotgun | ProjectileBounceDamping = nil
||| Automatic Shotgun | HitscanRange = 2500.0
||| Automatic Shotgun | FireOffsetX = 0.0
||| Automatic Shotgun | FireOffsetY = 0.0
||| Automatic Shotgun | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Automatic Shotgun | FractalDuration = nil
Failed to get property with id 3031
||| Automatic Shotgun | FractalShardInterval = nil
Failed to get property with id 3032
||| Automatic Shotgun | FractalAscentTime = nil
Failed to get property with id 3033
||| Automatic Shotgun | FractalAscentHeight = nil
Failed to get property with id 3034
||| Automatic Shotgun | FractalShardDistance = nil
Failed to get property with id 3035
||| Automatic Shotgun | FractalShardHeight = nil
Failed to get property with id 3036
||| Automatic Shotgun | FractalShardDamage = nil
Failed to get property with id 3037
||| Automatic Shotgun | FractalShardDamageRadius = nil
||| Automatic Shotgun | MeleeDamageRadius = 0.0
||| Automatic Shotgun | MeleeConeAngle = 0.0
||| Automatic Shotgun | Accuracy = 0.85000002384186
||| Automatic Shotgun | AccuracyLossOnShot = 0.0
||| Automatic Shotgun | AccuracyLossOnJump = 0.30000001192093
||| Automatic Shotgun | AccuracyLossMax = 0.30000001192093
||| Automatic Shotgun | AccuracyCorrectionRate = 0.18999999761581
||| Automatic Shotgun | ShotgunUseGOTYSpread = 0
Failed to get property with id 6000
||| Automatic Shotgun | ThrowDelay = nil
Failed to get property with id 6001
||| Automatic Shotgun | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Automatic Shotgun | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Automatic Shotgun | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Automatic Shotgun | FuseTimer = nil
Failed to get property with id 6005
||| Automatic Shotgun | ExplodeOnContact = nil
Failed to get property with id 6006
||| Automatic Shotgun | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Automatic Shotgun | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Automatic Shotgun | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Automatic Shotgun | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Automatic Shotgun | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Automatic Shotgun | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Automatic Shotgun | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Automatic Shotgun | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Automatic Shotgun | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Automatic Shotgun | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Automatic Shotgun | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Automatic Shotgun | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Automatic Shotgun | JammerPackRange = nil
Failed to get property with id 7011
||| Automatic Shotgun | PackBuffAmount = nil
Failed to get property with id 7012
||| Automatic Shotgun | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Automatic Shotgun | DeployableRange = nil
Failed to get property with id 8001
||| Automatic Shotgun | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Automatic Shotgun | DeployableMinProximity = nil
Failed to get property with id 8003
||| Automatic Shotgun | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Automatic Shotgun | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Automatic Shotgun | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Automatic Shotgun | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Automatic Shotgun | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Automatic Shotgun | MineDeployTime = nil
Failed to get property with id 9001
||| Automatic Shotgun | MineMaxAllowed = nil
Failed to get property with id 9002
||| Automatic Shotgun | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Automatic Shotgun | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Automatic Shotgun | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Automatic Shotgun | PrismMineTripDistance = nil
||| EFG | SpareAmmo = 80
||| EFG | AmmoPerShot = 1
||| EFG | LowAmmoCutoff = 2
||| EFG | Damage = 55.0
||| EFG | DirectHitMultiplier = 1.0
||| EFG | EnergyDrain = 6.0
||| EFG | DamageAgainstArmorMultiplier = 3.0
||| EFG | DamageAgainstGeneratorMultiplier = 3.0
||| EFG | DamageAgainstBaseTurretMultiplier = 3.0
||| EFG | DamageAgainstBaseSensorMultiplier = 3.0
||| EFG | DamageAgainstGravCycleMultiplier = 2.0
||| EFG | DamageAgainstBeowulfMultiplier = 2.0
||| EFG | DamageAgainstShrikeMultiplier = 2.0
||| EFG | ReloadTime = 1.7999999523163
||| EFG | FireInterval = 0.75
||| EFG | HoldToFire = true
||| EFG | CanZoom = true
||| EFG | ReloadSingle = false
||| EFG | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| EFG | BurstShotCount = nil
Failed to get property with id 2007
||| EFG | BurstShotRefireTime = nil
Failed to get property with id 2008
||| EFG | SpinupTime = nil
||| EFG | ShotgunShotCount = 7
||| EFG | ShotEnergyCost = 0
||| EFG | ImpactMomentum = 0.0
||| EFG | SelfImpactMomentumMultiplier = 1.5
||| EFG | SelfImpactExtraZMomentum = 0.0
||| EFG | ExplosiveRadius = 128.0
||| EFG | BulletDamageRange = 6000.0
||| EFG | MaxDamageRangeProportion = 0.0
||| EFG | MinDamageRangeProportion = 1.0
||| EFG | MinDamageProportion = 0.5
||| EFG | DoesImpulseFlag = true
||| EFG | DoesGibOnKill = false
||| EFG | GibImpulseRadius = 100.0
||| EFG | GibStrength = 40.0
||| EFG | ProjectileSpeed = 9000.0
||| EFG | ProjectileMaxSpeed = 8000.0
||| EFG | CollisionSize = 25.0
||| EFG | ProjectileInheritance = 0.5
||| EFG | ProjectileLifespan = 1.5
||| EFG | ProjectileGravity = 1.0
||| EFG | ProjectileTerminalVelocity = 9000.0
||| EFG | ProjectileBounceDamping = 0.80000001192093
||| EFG | HitscanRange = 2500.0
||| EFG | FireOffsetX = 3.0
||| EFG | FireOffsetY = 10.0
||| EFG | FireOffsetZ = -7.0
||| EFG | FractalDuration = 1.6068549360566e-40
||| EFG | FractalShardInterval = 1.4930442773811e-39
||| EFG | FractalAscentTime = 6.428540782998e-40
||| EFG | FractalAscentHeight = 9.9785897092603e-29
||| EFG | FractalShardDistance = 7.0454484189323e-41
||| EFG | FractalShardHeight = 9.396314093298e-35
||| EFG | FractalShardDamage = 3
||| EFG | FractalShardDamageRadius = 0.0
||| EFG | MeleeDamageRadius = 0.0
||| EFG | MeleeConeAngle = 0.0
||| EFG | Accuracy = 0.85000002384186
||| EFG | AccuracyLossOnShot = 0.0
||| EFG | AccuracyLossOnJump = 0.30000001192093
||| EFG | AccuracyLossMax = 0.30000001192093
||| EFG | AccuracyCorrectionRate = 0.18999999761581
||| EFG | ShotgunUseGOTYSpread = 0
Failed to get property with id 6000
||| EFG | ThrowDelay = nil
Failed to get property with id 6001
||| EFG | ThrowPullPinTime = nil
||| EFG | StuckDamageMultiplier = 0.0
||| EFG | StuckMomentumMultiplier = 0.0
||| EFG | FuseTimer = 0.0
||| EFG | ExplodeOnContact = false
||| EFG | ExplodeOnFuse = false
||| EFG | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| EFG | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| EFG | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| EFG | ThrustPackImpulse = nil
Failed to get property with id 7003
||| EFG | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| EFG | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| EFG | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| EFG | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| EFG | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| EFG | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| EFG | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| EFG | JammerPackRange = nil
Failed to get property with id 7011
||| EFG | PackBuffAmount = nil
Failed to get property with id 7012
||| EFG | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| EFG | DeployableRange = nil
Failed to get property with id 8001
||| EFG | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| EFG | DeployableMinProximity = nil
Failed to get property with id 8003
||| EFG | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| EFG | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| EFG | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| EFG | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| EFG | ForcefieldMaxDamageSpeed = nil
||| EFG | MineDeployTime = 0.0
||| EFG | MineMaxAllowed = 0
||| EFG | MineCollisionCylinderRadius = 0.0
||| EFG | MineCollisionCylinderHeight = 0.0
||| EFG | ClaymoreDetonationAngle = 1.4930442773811e-39
||| EFG | PrismMineTripDistance = 9.9785897092603e-29
||| Frag Grenade | SpareAmmo = 2
||| Frag Grenade | AmmoPerShot = 1
||| Frag Grenade | LowAmmoCutoff = 0
||| Frag Grenade | Damage = 950.0
||| Frag Grenade | DirectHitMultiplier = 1.0
||| Frag Grenade | EnergyDrain = 0.0
||| Frag Grenade | DamageAgainstArmorMultiplier = 2.0
||| Frag Grenade | DamageAgainstGeneratorMultiplier = 2.0
||| Frag Grenade | DamageAgainstBaseTurretMultiplier = 2.0
||| Frag Grenade | DamageAgainstBaseSensorMultiplier = 2.0
||| Frag Grenade | DamageAgainstGravCycleMultiplier = 1.5
||| Frag Grenade | DamageAgainstBeowulfMultiplier = 1.5
||| Frag Grenade | DamageAgainstShrikeMultiplier = 1.5
||| Frag Grenade | ReloadTime = 0.0
||| Frag Grenade | FireInterval = 0.20000000298023
||| Frag Grenade | HoldToFire = true
||| Frag Grenade | CanZoom = true
||| Frag Grenade | ReloadSingle = false
||| Frag Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Frag Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| Frag Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Frag Grenade | SpinupTime = nil
Failed to get property with id 2009
||| Frag Grenade | ShotgunShotCount = nil
||| Frag Grenade | ShotEnergyCost = 0
||| Frag Grenade | ImpactMomentum = 85000.0
||| Frag Grenade | SelfImpactMomentumMultiplier = 1.5
||| Frag Grenade | SelfImpactExtraZMomentum = 0.0
||| Frag Grenade | ExplosiveRadius = 600.0
||| Frag Grenade | BulletDamageRange = 6000.0
||| Frag Grenade | MaxDamageRangeProportion = 0.0
||| Frag Grenade | MinDamageRangeProportion = 1.0
||| Frag Grenade | MinDamageProportion = 0.5
||| Frag Grenade | DoesImpulseFlag = true
||| Frag Grenade | DoesGibOnKill = true
||| Frag Grenade | GibImpulseRadius = 100.0
||| Frag Grenade | GibStrength = 40.0
||| Frag Grenade | ProjectileSpeed = 1400.0
||| Frag Grenade | ProjectileMaxSpeed = 1600.0
||| Frag Grenade | CollisionSize = 20.0
||| Frag Grenade | ProjectileInheritance = 0.20000000298023
||| Frag Grenade | ProjectileLifespan = 8.0
||| Frag Grenade | ProjectileGravity = 0.5
||| Frag Grenade | ProjectileTerminalVelocity = 3500.0
||| Frag Grenade | ProjectileBounceDamping = 0.55000001192093
||| Frag Grenade | HitscanRange = 2000.0
||| Frag Grenade | FireOffsetX = 0.0
||| Frag Grenade | FireOffsetY = 0.0
||| Frag Grenade | FireOffsetZ = 0.0
||| Frag Grenade | FractalDuration = 1.1905011363364e-40
||| Frag Grenade | FractalShardInterval = 1.4930442773811e-39
||| Frag Grenade | FractalAscentTime = 5.6051938572993e-45
||| Frag Grenade | FractalAscentHeight = 0.0
||| Frag Grenade | FractalShardDistance = 6.9919188175951e-41
||| Frag Grenade | FractalShardHeight = 9.396314093298e-35
||| Frag Grenade | FractalShardDamage = 3
||| Frag Grenade | FractalShardDamageRadius = 0.0
||| Frag Grenade | MeleeDamageRadius = 0.0
||| Frag Grenade | MeleeConeAngle = 0.0
||| Frag Grenade | Accuracy = 1.0
||| Frag Grenade | AccuracyLossOnShot = 0.0
||| Frag Grenade | AccuracyLossOnJump = 0.0
||| Frag Grenade | AccuracyLossMax = 0.0
||| Frag Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Frag Grenade | ShotgunUseGOTYSpread = nil
||| Frag Grenade | ThrowDelay = 0.69999998807907
||| Frag Grenade | ThrowPullPinTime = 0.15000000596046
||| Frag Grenade | StuckDamageMultiplier = 1.0
||| Frag Grenade | StuckMomentumMultiplier = 1.0
||| Frag Grenade | FuseTimer = 2.0
||| Frag Grenade | ExplodeOnContact = false
||| Frag Grenade | ExplodeOnFuse = true
||| Frag Grenade | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Frag Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Frag Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Frag Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Frag Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Frag Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Frag Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Frag Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Frag Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Frag Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Frag Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Frag Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| Frag Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| Frag Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Frag Grenade | DeployableRange = nil
Failed to get property with id 8001
||| Frag Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Frag Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| Frag Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Frag Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Frag Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Frag Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Frag Grenade | ForcefieldMaxDamageSpeed = nil
||| Frag Grenade | MineDeployTime = 0.0
||| Frag Grenade | MineMaxAllowed = 0
||| Frag Grenade | MineCollisionCylinderRadius = 0.0
||| Frag Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Frag Grenade | ClaymoreDetonationAngle = 1.4930442773811e-39
||| Frag Grenade | PrismMineTripDistance = 0.0
||| Mines | SpareAmmo = 1
||| Mines | AmmoPerShot = 1
||| Mines | LowAmmoCutoff = 0
||| Mines | Damage = 300.0
||| Mines | DirectHitMultiplier = 1.0
||| Mines | EnergyDrain = 0.0
||| Mines | DamageAgainstArmorMultiplier = 2.0
||| Mines | DamageAgainstGeneratorMultiplier = 2.0
||| Mines | DamageAgainstBaseTurretMultiplier = 2.0
||| Mines | DamageAgainstBaseSensorMultiplier = 2.0
||| Mines | DamageAgainstGravCycleMultiplier = 2.0
||| Mines | DamageAgainstBeowulfMultiplier = 2.0
||| Mines | DamageAgainstShrikeMultiplier = 2.0
||| Mines | ReloadTime = 0.0
||| Mines | FireInterval = 0.20000000298023
||| Mines | HoldToFire = true
||| Mines | CanZoom = true
||| Mines | ReloadSingle = false
||| Mines | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Mines | BurstShotCount = nil
Failed to get property with id 2007
||| Mines | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Mines | SpinupTime = nil
Failed to get property with id 2009
||| Mines | ShotgunShotCount = nil
||| Mines | ShotEnergyCost = 0
||| Mines | ImpactMomentum = 85000.0
||| Mines | SelfImpactMomentumMultiplier = 1.5
||| Mines | SelfImpactExtraZMomentum = 0.0
||| Mines | ExplosiveRadius = 300.0
||| Mines | BulletDamageRange = 6000.0
||| Mines | MaxDamageRangeProportion = 0.0
||| Mines | MinDamageRangeProportion = 1.0
||| Mines | MinDamageProportion = 1.0
||| Mines | DoesImpulseFlag = true
||| Mines | DoesGibOnKill = true
||| Mines | GibImpulseRadius = 100.0
||| Mines | GibStrength = 40.0
||| Mines | ProjectileSpeed = 300.0
||| Mines | ProjectileMaxSpeed = 300.0
||| Mines | CollisionSize = 20.0
||| Mines | ProjectileInheritance = 0.20000000298023
||| Mines | ProjectileLifespan = 0.0
||| Mines | ProjectileGravity = 1.0
||| Mines | ProjectileTerminalVelocity = 3500.0
||| Mines | ProjectileBounceDamping = 0.20000000298023
||| Mines | HitscanRange = 2000.0
||| Mines | FireOffsetX = 0.0
||| Mines | FireOffsetY = 0.0
||| Mines | FireOffsetZ = 0.0
||| Mines | FractalDuration = 5.6051938572993e-44
||| Mines | FractalShardInterval = 8.7244436012308e-39
||| Mines | FractalAscentTime = 4.5918813065828e-39
||| Mines | FractalAscentHeight = 3.1224937498765e-39
||| Mines | FractalShardDistance = 7.3469041523687e-39
||| Mines | FractalShardHeight = 4.6837266118301e-39
||| Mines | FractalShardDamage = 2687010
||| Mines | FractalShardDamageRadius = 5.7453237037317e-44
||| Mines | MeleeDamageRadius = 0.0
||| Mines | MeleeConeAngle = 0.0
||| Mines | Accuracy = 1.0
||| Mines | AccuracyLossOnShot = 0.0
||| Mines | AccuracyLossOnJump = 0.0
||| Mines | AccuracyLossMax = 0.0
||| Mines | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Mines | ShotgunUseGOTYSpread = nil
||| Mines | ThrowDelay = 0.69999998807907
||| Mines | ThrowPullPinTime = 0.20000000298023
||| Mines | StuckDamageMultiplier = 0.20000000298023
||| Mines | StuckMomentumMultiplier = 0.0
||| Mines | FuseTimer = 3.0828566215146e-44
||| Mines | ExplodeOnContact = false
||| Mines | ExplodeOnFuse = false
||| Mines | MustBounceBeforeExplode = false
Failed to get property with id 7000
||| Mines | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Mines | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Mines | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Mines | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Mines | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Mines | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Mines | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Mines | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Mines | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Mines | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Mines | JammerPackRange = nil
Failed to get property with id 7011
||| Mines | PackBuffAmount = nil
Failed to get property with id 7012
||| Mines | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Mines | DeployableRange = nil
Failed to get property with id 8001
||| Mines | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Mines | DeployableMinProximity = nil
Failed to get property with id 8003
||| Mines | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Mines | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Mines | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Mines | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Mines | ForcefieldMaxDamageSpeed = nil
||| Mines | MineDeployTime = 4.0
||| Mines | MineMaxAllowed = 2
||| Mines | MineCollisionCylinderRadius = 150.0
||| Mines | MineCollisionCylinderHeight = 50.0
||| Mines | ClaymoreDetonationAngle = 8.7244436012308e-39
||| Mines | PrismMineTripDistance = 3.1224937498765e-39
||| Fractal Grenade | SpareAmmo = 2
||| Fractal Grenade | AmmoPerShot = 1
||| Fractal Grenade | LowAmmoCutoff = 0
||| Fractal Grenade | Damage = 125.0
||| Fractal Grenade | DirectHitMultiplier = 1.0
||| Fractal Grenade | EnergyDrain = 0.0
||| Fractal Grenade | DamageAgainstArmorMultiplier = 0.5
||| Fractal Grenade | DamageAgainstGeneratorMultiplier = 0.5
||| Fractal Grenade | DamageAgainstBaseTurretMultiplier = 0.5
||| Fractal Grenade | DamageAgainstBaseSensorMultiplier = 0.5
||| Fractal Grenade | DamageAgainstGravCycleMultiplier = 1.0
||| Fractal Grenade | DamageAgainstBeowulfMultiplier = 1.0
||| Fractal Grenade | DamageAgainstShrikeMultiplier = 1.0
||| Fractal Grenade | ReloadTime = 0.0
||| Fractal Grenade | FireInterval = 0.20000000298023
||| Fractal Grenade | HoldToFire = true
||| Fractal Grenade | CanZoom = true
||| Fractal Grenade | ReloadSingle = false
||| Fractal Grenade | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Fractal Grenade | BurstShotCount = nil
Failed to get property with id 2007
||| Fractal Grenade | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Fractal Grenade | SpinupTime = nil
Failed to get property with id 2009
||| Fractal Grenade | ShotgunShotCount = nil
||| Fractal Grenade | ShotEnergyCost = 0
||| Fractal Grenade | ImpactMomentum = 5000.0
||| Fractal Grenade | SelfImpactMomentumMultiplier = 1.5
||| Fractal Grenade | SelfImpactExtraZMomentum = 0.0
||| Fractal Grenade | ExplosiveRadius = 300.0
||| Fractal Grenade | BulletDamageRange = 6000.0
||| Fractal Grenade | MaxDamageRangeProportion = 0.0
||| Fractal Grenade | MinDamageRangeProportion = 1.0
||| Fractal Grenade | MinDamageProportion = 0.5
||| Fractal Grenade | DoesImpulseFlag = true
||| Fractal Grenade | DoesGibOnKill = true
||| Fractal Grenade | GibImpulseRadius = 100.0
||| Fractal Grenade | GibStrength = 40.0
||| Fractal Grenade | ProjectileSpeed = 1200.0
||| Fractal Grenade | ProjectileMaxSpeed = 1600.0
||| Fractal Grenade | CollisionSize = 20.0
||| Fractal Grenade | ProjectileInheritance = 0.20000000298023
||| Fractal Grenade | ProjectileLifespan = 20.0
||| Fractal Grenade | ProjectileGravity = 0.5
||| Fractal Grenade | ProjectileTerminalVelocity = 7000.0
||| Fractal Grenade | ProjectileBounceDamping = 0.75
||| Fractal Grenade | HitscanRange = 2000.0
||| Fractal Grenade | FireOffsetX = 0.0
||| Fractal Grenade | FireOffsetY = 0.0
||| Fractal Grenade | FireOffsetZ = 0.0
||| Fractal Grenade | FractalDuration = 3.0
||| Fractal Grenade | FractalShardInterval = 0.15000000596046
||| Fractal Grenade | FractalAscentTime = 1.0
||| Fractal Grenade | FractalAscentHeight = 90.0
||| Fractal Grenade | FractalShardDistance = 900.0
||| Fractal Grenade | FractalShardHeight = 100.0
||| Fractal Grenade | FractalShardDamage = 100
||| Fractal Grenade | FractalShardDamageRadius = 300.0
||| Fractal Grenade | MeleeDamageRadius = 0.0
||| Fractal Grenade | MeleeConeAngle = 0.0
||| Fractal Grenade | Accuracy = 1.0
||| Fractal Grenade | AccuracyLossOnShot = 0.0
||| Fractal Grenade | AccuracyLossOnJump = 0.0
||| Fractal Grenade | AccuracyLossMax = 0.0
||| Fractal Grenade | AccuracyCorrectionRate = 1.0
Failed to get property with id 5007
||| Fractal Grenade | ShotgunUseGOTYSpread = nil
||| Fractal Grenade | ThrowDelay = 0.69999998807907
||| Fractal Grenade | ThrowPullPinTime = 0.15000000596046
||| Fractal Grenade | StuckDamageMultiplier = 1.0
||| Fractal Grenade | StuckMomentumMultiplier = 1.0
||| Fractal Grenade | FuseTimer = 2.0
||| Fractal Grenade | ExplodeOnContact = false
||| Fractal Grenade | ExplodeOnFuse = true
||| Fractal Grenade | MustBounceBeforeExplode = true
Failed to get property with id 7000
||| Fractal Grenade | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Fractal Grenade | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Fractal Grenade | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Fractal Grenade | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Fractal Grenade | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Fractal Grenade | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Fractal Grenade | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Fractal Grenade | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Fractal Grenade | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Fractal Grenade | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Fractal Grenade | JammerPackRange = nil
Failed to get property with id 7011
||| Fractal Grenade | PackBuffAmount = nil
Failed to get property with id 7012
||| Fractal Grenade | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Fractal Grenade | DeployableRange = nil
Failed to get property with id 8001
||| Fractal Grenade | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Fractal Grenade | DeployableMinProximity = nil
Failed to get property with id 8003
||| Fractal Grenade | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Fractal Grenade | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Fractal Grenade | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Fractal Grenade | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Fractal Grenade | ForcefieldMaxDamageSpeed = nil
||| Fractal Grenade | MineDeployTime = 0.0
||| Fractal Grenade | MineMaxAllowed = 0
||| Fractal Grenade | MineCollisionCylinderRadius = 0.0
||| Fractal Grenade | MineCollisionCylinderHeight = 2.9461181470885e-28
||| Fractal Grenade | ClaymoreDetonationAngle = 0.15000000596046
||| Fractal Grenade | PrismMineTripDistance = 90.0
||| Force Field | SpareAmmo = 0
||| Force Field | AmmoPerShot = 1
||| Force Field | LowAmmoCutoff = 0
||| Force Field | Damage = 0.0
Failed to get property with id 3002
||| Force Field | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Force Field | EnergyDrain = nil
Failed to get property with id 3011
||| Force Field | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Force Field | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Force Field | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Force Field | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Force Field | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Force Field | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Force Field | DamageAgainstShrikeMultiplier = nil
||| Force Field | ReloadTime = 1.7999999523163
||| Force Field | FireInterval = 1.0
||| Force Field | HoldToFire = true
||| Force Field | CanZoom = true
||| Force Field | ReloadSingle = false
||| Force Field | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Force Field | BurstShotCount = nil
Failed to get property with id 2007
||| Force Field | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Force Field | SpinupTime = nil
Failed to get property with id 2009
||| Force Field | ShotgunShotCount = nil
||| Force Field | ShotEnergyCost = 0
||| Force Field | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Force Field | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Force Field | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Force Field | ExplosiveRadius = nil
Failed to get property with id 3010
||| Force Field | BulletDamageRange = nil
Failed to get property with id 3007
||| Force Field | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Force Field | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Force Field | MinDamageProportion = nil
Failed to get property with id 3021
||| Force Field | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Force Field | DoesGibOnKill = nil
Failed to get property with id 3019
||| Force Field | GibImpulseRadius = nil
Failed to get property with id 3020
||| Force Field | GibStrength = nil
Failed to get property with id 4000
||| Force Field | ProjectileSpeed = nil
Failed to get property with id 4001
||| Force Field | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Force Field | CollisionSize = nil
Failed to get property with id 4003
||| Force Field | ProjectileInheritance = nil
Failed to get property with id 4004
||| Force Field | ProjectileLifespan = nil
Failed to get property with id 4005
||| Force Field | ProjectileGravity = nil
Failed to get property with id 4006
||| Force Field | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Force Field | ProjectileBounceDamping = nil
||| Force Field | HitscanRange = 2000.0
||| Force Field | FireOffsetX = 0.0
||| Force Field | FireOffsetY = 0.0
||| Force Field | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Force Field | FractalDuration = nil
Failed to get property with id 3031
||| Force Field | FractalShardInterval = nil
Failed to get property with id 3032
||| Force Field | FractalAscentTime = nil
Failed to get property with id 3033
||| Force Field | FractalAscentHeight = nil
Failed to get property with id 3034
||| Force Field | FractalShardDistance = nil
Failed to get property with id 3035
||| Force Field | FractalShardHeight = nil
Failed to get property with id 3036
||| Force Field | FractalShardDamage = nil
Failed to get property with id 3037
||| Force Field | FractalShardDamageRadius = nil
||| Force Field | MeleeDamageRadius = 0.0
||| Force Field | MeleeConeAngle = 0.0
||| Force Field | Accuracy = 1.0
||| Force Field | AccuracyLossOnShot = 0.10000000149012
||| Force Field | AccuracyLossOnJump = 0.30000001192093
||| Force Field | AccuracyLossMax = 0.30000001192093
||| Force Field | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Force Field | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Force Field | ThrowDelay = nil
Failed to get property with id 6001
||| Force Field | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Force Field | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Force Field | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Force Field | FuseTimer = nil
Failed to get property with id 6005
||| Force Field | ExplodeOnContact = nil
Failed to get property with id 6006
||| Force Field | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Force Field | MustBounceBeforeExplode = nil
Failed to get property with id 7000
||| Force Field | PackSustainedEnergyCost = nil
Failed to get property with id 7001
||| Force Field | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Force Field | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Force Field | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Force Field | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Force Field | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Force Field | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Force Field | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Force Field | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Force Field | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Force Field | JammerPackRange = nil
Failed to get property with id 7011
||| Force Field | PackBuffAmount = nil
Failed to get property with id 7012
||| Force Field | StealthPackMaxSpeed = nil
||| Force Field | DeployableRange = 0.0
||| Force Field | DeployableMaxAllowed = 1
||| Force Field | DeployableMinProximity = 1024.0
Failed to get property with id 8003
||| Force Field | TurretTimeToAcquireTarget = nil
||| Force Field | ForcefieldMinDamage = 0.0
||| Force Field | ForcefieldMaxDamage = 300.0
||| Force Field | ForcefieldMinDamageSpeed = 400.0
||| Force Field | ForcefieldMaxDamageSpeed = 1800.0
Failed to get property with id 9000
||| Force Field | MineDeployTime = nil
Failed to get property with id 9001
||| Force Field | MineMaxAllowed = nil
Failed to get property with id 9002
||| Force Field | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Force Field | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Force Field | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Force Field | PrismMineTripDistance = nil
||| Heavy Shield Pack | SpareAmmo = 0
||| Heavy Shield Pack | AmmoPerShot = 0
||| Heavy Shield Pack | LowAmmoCutoff = 0
||| Heavy Shield Pack | Damage = 0.0
Failed to get property with id 3002
||| Heavy Shield Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Heavy Shield Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Heavy Shield Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Heavy Shield Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Heavy Shield Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Heavy Shield Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Heavy Shield Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Heavy Shield Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Heavy Shield Pack | DamageAgainstShrikeMultiplier = nil
||| Heavy Shield Pack | ReloadTime = 1.7999999523163
||| Heavy Shield Pack | FireInterval = 1.0
||| Heavy Shield Pack | HoldToFire = true
||| Heavy Shield Pack | CanZoom = true
||| Heavy Shield Pack | ReloadSingle = false
||| Heavy Shield Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Heavy Shield Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Heavy Shield Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Heavy Shield Pack | SpinupTime = nil
Failed to get property with id 2009
||| Heavy Shield Pack | ShotgunShotCount = nil
||| Heavy Shield Pack | ShotEnergyCost = 0
||| Heavy Shield Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Heavy Shield Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Heavy Shield Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Heavy Shield Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Heavy Shield Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Heavy Shield Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Heavy Shield Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Heavy Shield Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Heavy Shield Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Heavy Shield Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Heavy Shield Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Heavy Shield Pack | GibStrength = nil
Failed to get property with id 4000
||| Heavy Shield Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Heavy Shield Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Heavy Shield Pack | CollisionSize = nil
Failed to get property with id 4003
||| Heavy Shield Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Heavy Shield Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Heavy Shield Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Heavy Shield Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Heavy Shield Pack | ProjectileBounceDamping = nil
||| Heavy Shield Pack | HitscanRange = 2000.0
||| Heavy Shield Pack | FireOffsetX = 0.0
||| Heavy Shield Pack | FireOffsetY = 0.0
||| Heavy Shield Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Heavy Shield Pack | FractalDuration = nil
Failed to get property with id 3031
||| Heavy Shield Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Heavy Shield Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Heavy Shield Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Heavy Shield Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Heavy Shield Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Heavy Shield Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Heavy Shield Pack | FractalShardDamageRadius = nil
||| Heavy Shield Pack | MeleeDamageRadius = 0.0
||| Heavy Shield Pack | MeleeConeAngle = 0.0
||| Heavy Shield Pack | Accuracy = 1.0
||| Heavy Shield Pack | AccuracyLossOnShot = 0.10000000149012
||| Heavy Shield Pack | AccuracyLossOnJump = 0.30000001192093
||| Heavy Shield Pack | AccuracyLossMax = 0.30000001192093
||| Heavy Shield Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Heavy Shield Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Heavy Shield Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Heavy Shield Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Heavy Shield Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Heavy Shield Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Heavy Shield Pack | FuseTimer = nil
Failed to get property with id 6005
||| Heavy Shield Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Heavy Shield Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Heavy Shield Pack | MustBounceBeforeExplode = nil
||| Heavy Shield Pack | PackSustainedEnergyCost = 11.0
Failed to get property with id 7001
||| Heavy Shield Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Heavy Shield Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Heavy Shield Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Heavy Shield Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Heavy Shield Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Heavy Shield Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Heavy Shield Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Heavy Shield Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Heavy Shield Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Heavy Shield Pack | JammerPackRange = nil
||| Heavy Shield Pack | PackBuffAmount = 1.0
Failed to get property with id 7012
||| Heavy Shield Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Heavy Shield Pack | DeployableRange = nil
Failed to get property with id 8001
||| Heavy Shield Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Heavy Shield Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Heavy Shield Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Heavy Shield Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Heavy Shield Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Heavy Shield Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Heavy Shield Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Heavy Shield Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Heavy Shield Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Heavy Shield Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Heavy Shield Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Heavy Shield Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Heavy Shield Pack | PrismMineTripDistance = nil
||| Heavy Energy Pack | SpareAmmo = 0
||| Heavy Energy Pack | AmmoPerShot = 0
||| Heavy Energy Pack | LowAmmoCutoff = 0
||| Heavy Energy Pack | Damage = 0.0
Failed to get property with id 3002
||| Heavy Energy Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Heavy Energy Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Heavy Energy Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Heavy Energy Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Heavy Energy Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Heavy Energy Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Heavy Energy Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Heavy Energy Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Heavy Energy Pack | DamageAgainstShrikeMultiplier = nil
||| Heavy Energy Pack | ReloadTime = 1.7999999523163
||| Heavy Energy Pack | FireInterval = 1.0
||| Heavy Energy Pack | HoldToFire = true
||| Heavy Energy Pack | CanZoom = true
||| Heavy Energy Pack | ReloadSingle = false
||| Heavy Energy Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Heavy Energy Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Heavy Energy Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Heavy Energy Pack | SpinupTime = nil
Failed to get property with id 2009
||| Heavy Energy Pack | ShotgunShotCount = nil
||| Heavy Energy Pack | ShotEnergyCost = 0
||| Heavy Energy Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Heavy Energy Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Heavy Energy Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Heavy Energy Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Heavy Energy Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Heavy Energy Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Heavy Energy Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Heavy Energy Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Heavy Energy Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Heavy Energy Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Heavy Energy Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Heavy Energy Pack | GibStrength = nil
Failed to get property with id 4000
||| Heavy Energy Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Heavy Energy Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Heavy Energy Pack | CollisionSize = nil
Failed to get property with id 4003
||| Heavy Energy Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Heavy Energy Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Heavy Energy Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Heavy Energy Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Heavy Energy Pack | ProjectileBounceDamping = nil
||| Heavy Energy Pack | HitscanRange = 2000.0
||| Heavy Energy Pack | FireOffsetX = 0.0
||| Heavy Energy Pack | FireOffsetY = 0.0
||| Heavy Energy Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Heavy Energy Pack | FractalDuration = nil
Failed to get property with id 3031
||| Heavy Energy Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Heavy Energy Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Heavy Energy Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Heavy Energy Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Heavy Energy Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Heavy Energy Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Heavy Energy Pack | FractalShardDamageRadius = nil
||| Heavy Energy Pack | MeleeDamageRadius = 0.0
||| Heavy Energy Pack | MeleeConeAngle = 0.0
||| Heavy Energy Pack | Accuracy = 1.0
||| Heavy Energy Pack | AccuracyLossOnShot = 0.10000000149012
||| Heavy Energy Pack | AccuracyLossOnJump = 0.30000001192093
||| Heavy Energy Pack | AccuracyLossMax = 0.30000001192093
||| Heavy Energy Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Heavy Energy Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Heavy Energy Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Heavy Energy Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Heavy Energy Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Heavy Energy Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Heavy Energy Pack | FuseTimer = nil
Failed to get property with id 6005
||| Heavy Energy Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Heavy Energy Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Heavy Energy Pack | MustBounceBeforeExplode = nil
||| Heavy Energy Pack | PackSustainedEnergyCost = 0.0
Failed to get property with id 7001
||| Heavy Energy Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Heavy Energy Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Heavy Energy Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Heavy Energy Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Heavy Energy Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Heavy Energy Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Heavy Energy Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Heavy Energy Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Heavy Energy Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Heavy Energy Pack | JammerPackRange = nil
Failed to get property with id 7011
||| Heavy Energy Pack | PackBuffAmount = nil
Failed to get property with id 7012
||| Heavy Energy Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Heavy Energy Pack | DeployableRange = nil
Failed to get property with id 8001
||| Heavy Energy Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Heavy Energy Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Heavy Energy Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Heavy Energy Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Heavy Energy Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Heavy Energy Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Heavy Energy Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Heavy Energy Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Heavy Energy Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Heavy Energy Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Heavy Energy Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Heavy Energy Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Heavy Energy Pack | PrismMineTripDistance = nil
||| Heavy Utility Pack | SpareAmmo = 0
||| Heavy Utility Pack | AmmoPerShot = 0
||| Heavy Utility Pack | LowAmmoCutoff = 0
||| Heavy Utility Pack | Damage = 0.0
Failed to get property with id 3002
||| Heavy Utility Pack | DirectHitMultiplier = nil
Failed to get property with id 3006
||| Heavy Utility Pack | EnergyDrain = nil
Failed to get property with id 3011
||| Heavy Utility Pack | DamageAgainstArmorMultiplier = nil
Failed to get property with id 3012
||| Heavy Utility Pack | DamageAgainstGeneratorMultiplier = nil
Failed to get property with id 3013
||| Heavy Utility Pack | DamageAgainstBaseTurretMultiplier = nil
Failed to get property with id 3014
||| Heavy Utility Pack | DamageAgainstBaseSensorMultiplier = nil
Failed to get property with id 3015
||| Heavy Utility Pack | DamageAgainstGravCycleMultiplier = nil
Failed to get property with id 3016
||| Heavy Utility Pack | DamageAgainstBeowulfMultiplier = nil
Failed to get property with id 3017
||| Heavy Utility Pack | DamageAgainstShrikeMultiplier = nil
||| Heavy Utility Pack | ReloadTime = 1.7999999523163
||| Heavy Utility Pack | FireInterval = 1.0
||| Heavy Utility Pack | HoldToFire = true
||| Heavy Utility Pack | CanZoom = true
||| Heavy Utility Pack | ReloadSingle = false
||| Heavy Utility Pack | ReloadApplicationProportion = 0.5799999833107
Failed to get property with id 2006
||| Heavy Utility Pack | BurstShotCount = nil
Failed to get property with id 2007
||| Heavy Utility Pack | BurstShotRefireTime = nil
Failed to get property with id 2008
||| Heavy Utility Pack | SpinupTime = nil
Failed to get property with id 2009
||| Heavy Utility Pack | ShotgunShotCount = nil
||| Heavy Utility Pack | ShotEnergyCost = 0
||| Heavy Utility Pack | ImpactMomentum = 0.0
Failed to get property with id 3004
||| Heavy Utility Pack | SelfImpactMomentumMultiplier = nil
Failed to get property with id 3005
||| Heavy Utility Pack | SelfImpactExtraZMomentum = nil
Failed to get property with id 3001
||| Heavy Utility Pack | ExplosiveRadius = nil
Failed to get property with id 3010
||| Heavy Utility Pack | BulletDamageRange = nil
Failed to get property with id 3007
||| Heavy Utility Pack | MaxDamageRangeProportion = nil
Failed to get property with id 3008
||| Heavy Utility Pack | MinDamageRangeProportion = nil
Failed to get property with id 3009
||| Heavy Utility Pack | MinDamageProportion = nil
Failed to get property with id 3021
||| Heavy Utility Pack | DoesImpulseFlag = nil
Failed to get property with id 3018
||| Heavy Utility Pack | DoesGibOnKill = nil
Failed to get property with id 3019
||| Heavy Utility Pack | GibImpulseRadius = nil
Failed to get property with id 3020
||| Heavy Utility Pack | GibStrength = nil
Failed to get property with id 4000
||| Heavy Utility Pack | ProjectileSpeed = nil
Failed to get property with id 4001
||| Heavy Utility Pack | ProjectileMaxSpeed = nil
Failed to get property with id 4002
||| Heavy Utility Pack | CollisionSize = nil
Failed to get property with id 4003
||| Heavy Utility Pack | ProjectileInheritance = nil
Failed to get property with id 4004
||| Heavy Utility Pack | ProjectileLifespan = nil
Failed to get property with id 4005
||| Heavy Utility Pack | ProjectileGravity = nil
Failed to get property with id 4006
||| Heavy Utility Pack | ProjectileTerminalVelocity = nil
Failed to get property with id 4007
||| Heavy Utility Pack | ProjectileBounceDamping = nil
||| Heavy Utility Pack | HitscanRange = 2000.0
||| Heavy Utility Pack | FireOffsetX = 0.0
||| Heavy Utility Pack | FireOffsetY = 0.0
||| Heavy Utility Pack | FireOffsetZ = 0.0
Failed to get property with id 3030
||| Heavy Utility Pack | FractalDuration = nil
Failed to get property with id 3031
||| Heavy Utility Pack | FractalShardInterval = nil
Failed to get property with id 3032
||| Heavy Utility Pack | FractalAscentTime = nil
Failed to get property with id 3033
||| Heavy Utility Pack | FractalAscentHeight = nil
Failed to get property with id 3034
||| Heavy Utility Pack | FractalShardDistance = nil
Failed to get property with id 3035
||| Heavy Utility Pack | FractalShardHeight = nil
Failed to get property with id 3036
||| Heavy Utility Pack | FractalShardDamage = nil
Failed to get property with id 3037
||| Heavy Utility Pack | FractalShardDamageRadius = nil
||| Heavy Utility Pack | MeleeDamageRadius = 0.0
||| Heavy Utility Pack | MeleeConeAngle = 0.0
||| Heavy Utility Pack | Accuracy = 1.0
||| Heavy Utility Pack | AccuracyLossOnShot = 0.10000000149012
||| Heavy Utility Pack | AccuracyLossOnJump = 0.30000001192093
||| Heavy Utility Pack | AccuracyLossMax = 0.30000001192093
||| Heavy Utility Pack | AccuracyCorrectionRate = 0.050000000745058
Failed to get property with id 5007
||| Heavy Utility Pack | ShotgunUseGOTYSpread = nil
Failed to get property with id 6000
||| Heavy Utility Pack | ThrowDelay = nil
Failed to get property with id 6001
||| Heavy Utility Pack | ThrowPullPinTime = nil
Failed to get property with id 6002
||| Heavy Utility Pack | StuckDamageMultiplier = nil
Failed to get property with id 6003
||| Heavy Utility Pack | StuckMomentumMultiplier = nil
Failed to get property with id 6004
||| Heavy Utility Pack | FuseTimer = nil
Failed to get property with id 6005
||| Heavy Utility Pack | ExplodeOnContact = nil
Failed to get property with id 6006
||| Heavy Utility Pack | ExplodeOnFuse = nil
Failed to get property with id 6007
||| Heavy Utility Pack | MustBounceBeforeExplode = nil
||| Heavy Utility Pack | PackSustainedEnergyCost = 0.0
Failed to get property with id 7001
||| Heavy Utility Pack | ThrustPackEnergyCost = nil
Failed to get property with id 7002
||| Heavy Utility Pack | ThrustPackImpulse = nil
Failed to get property with id 7003
||| Heavy Utility Pack | ThrustPackSidewaysImpulse = nil
Failed to get property with id 7004
||| Heavy Utility Pack | ThrustPackMinVerticalImpulse = nil
Failed to get property with id 7005
||| Heavy Utility Pack | ThrustPackCooldownTime = nil
Failed to get property with id 7006
||| Heavy Utility Pack | ThrustPackSpeedRangeStart = nil
Failed to get property with id 7007
||| Heavy Utility Pack | ThrustPackSpeedRangeEnd = nil
Failed to get property with id 7008
||| Heavy Utility Pack | ThrustPackSpeedCapReduction = nil
Failed to get property with id 7009
||| Heavy Utility Pack | ShieldPackEnergyCostPerDamagePoint = nil
Failed to get property with id 7010
||| Heavy Utility Pack | JammerPackRange = nil
Failed to get property with id 7011
||| Heavy Utility Pack | PackBuffAmount = nil
Failed to get property with id 7012
||| Heavy Utility Pack | StealthPackMaxSpeed = nil
Failed to get property with id 8000
||| Heavy Utility Pack | DeployableRange = nil
Failed to get property with id 8001
||| Heavy Utility Pack | DeployableMaxAllowed = nil
Failed to get property with id 8002
||| Heavy Utility Pack | DeployableMinProximity = nil
Failed to get property with id 8003
||| Heavy Utility Pack | TurretTimeToAcquireTarget = nil
Failed to get property with id 8005
||| Heavy Utility Pack | ForcefieldMinDamage = nil
Failed to get property with id 8006
||| Heavy Utility Pack | ForcefieldMaxDamage = nil
Failed to get property with id 8007
||| Heavy Utility Pack | ForcefieldMinDamageSpeed = nil
Failed to get property with id 8008
||| Heavy Utility Pack | ForcefieldMaxDamageSpeed = nil
Failed to get property with id 9000
||| Heavy Utility Pack | MineDeployTime = nil
Failed to get property with id 9001
||| Heavy Utility Pack | MineMaxAllowed = nil
Failed to get property with id 9002
||| Heavy Utility Pack | MineCollisionCylinderRadius = nil
Failed to get property with id 9003
||| Heavy Utility Pack | MineCollisionCylinderHeight = nil
Failed to get property with id 9004
||| Heavy Utility Pack | ClaymoreDetonationAngle = nil
Failed to get property with id 9005
||| Heavy Utility Pack | PrismMineTripDistance = nil'''

# Initialize a dictionary to store weapon properties
weapons = defaultdict(dict)

# Process each line
for line in data.splitlines():
    if "|||" in line:
        # Extract weapon name and property
        parts = line.split("|||")
        weapon_property = parts[1].strip().split(" | ")
        weapon_name = weapon_property[0]
        if len(weapon_property) > 1:
            prop, value = weapon_property[1].split(" = ")
            # Convert `nil` to `null`, and handle data types
            if value == "nil":
                value = None
            elif value.isdigit():
                value = int(value)
            elif value.replace('.', '', 1).isdigit():
                value = float(value)
            elif value.lower() in ("true", "false"):
                value = value.lower() == "true"
            # Add to the weapon's properties
            weapons[weapon_name][prop] = value

# Convert dictionary to JSON

# Save or print the JSON output
output_file = "weapons_data.json"
with open(output_file, "w") as json_file:
    json.dump(weapons, json_file, indent=4)

print(f"Data has been saved to {output_file}")
