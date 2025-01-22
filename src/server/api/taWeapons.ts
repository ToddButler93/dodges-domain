import "server-only";

export type TAWeapon = {
  name: string;
  clipAmmo: number;
  spareAmmo: number;
  ammoPerShot: number;
  reloadTime: number;
  fireInterval: number;
  holdToFire: boolean;
  canZoom: boolean;
  reloadSingle: boolean;
  damage: number;
  energyDrain: number;
  bulletDamageRange: number;
  maxDamageRangeProportion: number;
  minDamageRangeProportion: number;
  minDamageProportion: number;
  doesGibOnKill: boolean;
  gibImpulseRadius: number;
  gibStrength: number;
  accuracy: number;
  accuracyLossOnShot: number;
  accuracyLossOnJump: number;
  accuracyLossMax: number;
  accuracyCorrectionRate: number;
};

export interface TAWeaponProjectile extends TAWeapon {
  directHitMultiplier: number;
  impactMomentum: number;
  selfImpactMomentumMultiplier: number;
  selfImpactExtraZMomentum: number;
  projectileSpeed: number;
  projectileMaxSpeed: number;
  collisionSize: number;
  projectileInheritance: number;
  projectileLifeSpan: number;
  projectileGravity: number;
  projectileTerminalVelocity: number;
  projectileBounceDamping: number;
}

export interface TAWeaponExplosive extends TAWeaponProjectile {
  explosiveRadius: number;
  doesImpulseFlag: boolean;
}

export interface TAWeaponHitscan extends TAWeapon {
  hitscanRange: number;
}

export interface TAWeaponSnipeEnergy extends TAWeaponHitscan {
  phaseDamagePerEnergy: number;
  phaseMaxConsumedEnergy: number;
}

export interface TAWeaponSnipeBXT extends TAWeaponHitscan {
  bxtChargeMaxDamage: number;
  bxtChargeTime: number;
  bxtChargeMultCoefficient: number;
  bxtChargeDivCoefficient: number;
}

export interface TAWeaponThrown extends TAWeaponExplosive {
  throwDelay: number;
  throwPullPinTime: number;
  fuseTimer: number;
  explodeOnContact: boolean;
  explodeOnFuse: boolean;
  mustBounceBeforeExplode: boolean;
}

export interface TAStickyWeapon extends TAWeaponThrown {
  stuckDamageMultiplier: number;
  stuckMomentumMultiplier: number;
}

export type GameModeWeaponInfo = {
  taWeapons: TAWeapon[]
  taProjectileWeapons: TAWeaponProjectile[]
  taExplosiveWeapons: TAWeaponExplosive[]
  taHitscanWeapons: TAWeaponHitscan[]
  taBXTWeapons: TAWeaponSnipeBXT[]
  taEnergyWeapons: TAWeaponSnipeEnergy[]
  taThrownWeapons: TAWeaponThrown[]
};

type WeaponData = Record<string, any>;

export function parseWeapons(data: WeaponData): (TAWeaponExplosive | TAWeaponProjectile)[] {
  const weapons: (TAWeaponExplosive | TAWeaponProjectile)[] = [];

  for (const [name, attributes] of Object.entries(data)) {
    const weapon: Partial<TAWeaponExplosive & TAWeaponProjectile> = {
      name,
      spareAmmo: attributes.SpareAmmo,
      ammoPerShot: attributes.AmmoPerShot,
      reloadTime: attributes.ReloadTime,
      fireInterval: attributes.FireInterval,
      holdToFire: attributes.HoldToFire,
      canZoom: attributes.CanZoom,
      reloadSingle: attributes.ReloadSingle,
      damage: attributes.Damage,
      energyDrain: attributes.EnergyDrain,
      bulletDamageRange: attributes.BulletDamageRange,
      maxDamageRangeProportion: attributes.MaxDamageRangeProportion,
      minDamageRangeProportion: attributes.MinDamageRangeProportion,
      minDamageProportion: attributes.MinDamageProportion,
      doesGibOnKill: attributes.DoesGibOnKill,
      gibImpulseRadius: attributes.GibImpulseRadius,
      gibStrength: attributes.GibStrength,
      accuracy: attributes.Accuracy,
      accuracyLossOnShot: attributes.AccuracyLossOnShot,
      accuracyLossOnJump: attributes.AccuracyLossOnJump,
      accuracyLossMax: attributes.AccuracyLossMax,
      accuracyCorrectionRate: attributes.AccuracyCorrectionRate,
      directHitMultiplier: attributes.DirectHitMultiplier,
      impactMomentum: attributes.ImpactMomentum,
      selfImpactMomentumMultiplier: attributes.SelfImpactMomentumMultiplier,
      selfImpactExtraZMomentum: attributes.SelfImpactExtraZMomentum,
      projectileSpeed: attributes.ProjectileSpeed,
      projectileMaxSpeed: attributes.ProjectileMaxSpeed,
      collisionSize: attributes.CollisionSize,
      projectileInheritance: attributes.ProjectileInheritance,
      projectileLifeSpan: attributes.ProjectileLifespan,
      projectileGravity: attributes.ProjectileGravity,
      projectileTerminalVelocity: attributes.ProjectileTerminalVelocity,
      projectileBounceDamping: attributes.ProjectileBounceDamping,
      explosiveRadius: attributes.ExplosiveRadius,
      doesImpulseFlag: attributes.DoesImpulseFlag,
    };

    weapons.push(weapon as TAWeaponExplosive | TAWeaponProjectile);
  }

  return weapons;
}


export function getGOTYWeaponInfo() {
    
}

export function getOOTBWeaponInfo() {

}