import React, { useEffect, useState } from "react";
import MaterialTable, { Column } from "@material-table/core";

//TODO set URL based on gameVersion      function weaponDataTable(gameVersion) {
function WeaponDataTable() {

  const [data, setData] = useState([])

  const columns=[
    {title:"Weapon", field: "Weapon", width: 200, hidden: false, },
    {title:"Damage", field: "Damage", width: 90, hidden: false, },
    {title:"Direct Multiplier", field: "DirectHitMultiplier", width: 90, hidden: false, },
    {title:"SpareAmmo", field: "SpareAmmo", width: 200, hidden: true, },
    {title:"AmmoPerShot", field: "AmmoPerShot", width: 200, hidden: true, },
    {title:"LowAmmoCutoff", field: "LowAmmoCutoff", width: 200, hidden: true, },
    {title:"EnergyDrain", field: "EnergyDrain", width: 200, hidden: true, },
    {title:"DamageAgainstArmorMultiplier", field: "DamageAgainstArmorMultiplier", width: 200, hidden: true, },
    {title:"DamageAgainstGeneratorMultiplier", field: "DamageAgainstGeneratorMultiplier", width: 200, hidden: true, },
    {title:"DamageAgainstBaseTurretMultiplier", field: "DamageAgainstBaseTurretMultiplier", width: 200, hidden: true, },
    {title:"DamageAgainstBaseSensorMultiplier", field: "DamageAgainstBaseSensorMultiplier", width: 200, hidden: true, },
    {title:"DamageAgainstGravCycleMultiplier", field: "DamageAgainstGravCycleMultiplier", width: 200, hidden: true, },
    {title:"DamageAgainstBeowulfMultiplier", field: "DamageAgainstBeowulfMultiplier", width: 200, hidden: true, },
    {title:"DamageAgainstShrikeMultiplier", field: "DamageAgainstShrikeMultiplier", width: 200, hidden: true, },
    {title:"FireInterval", field: "FireInterval", width: 200, hidden: false, },
    {title:"Reload Time", field: "ReloadTime", width: 100, hidden: false, },
    {title:"HoldToFire", field: "HoldToFire", width: 200, hidden: true, },
    {title:"CanZoom", field: "CanZoom", width: 200, hidden: true, },
    {title:"ReloadSingle", field: "ReloadSingle", width: 200, hidden: true, },
    {title:"ReloadApplicationProportion", field: "ReloadApplicationProportion", width: 200, hidden: true, },
    {title:"ShotEnergyCost", field: "ShotEnergyCost", width: 200, hidden: true, },
    {title:"ImpactMomentum", field: "ImpactMomentum", width: 200, hidden: false, },
    {title:"SelfImpactMomentumMultiplier", field: "SelfImpactMomentumMultiplier", width: 200, hidden: true, },
    {title:"SelfImpactExtraZMomentum", field: "SelfImpactExtraZMomentum", width: 200, hidden: true, },
    {title:"ExplosiveRadius", field: "ExplosiveRadius", width: 200, hidden: false, },
    {title:"BulletDamageRange", field: "BulletDamageRange", width: 200, hidden: true, },
    {title:"MaxDamageRangeProportion", field: "MaxDamageRangeProportion", width: 200, hidden: true, },
    {title:"MinDamageRangeProportion", field: "MinDamageRangeProportion", width: 200, hidden: true, },
    {title:"MinDamageProportion", field: "MinDamageProportion", width: 200, hidden: false, },
    {title:"DoesImpulseFlag", field: "DoesImpulseFlag", width: 200, hidden: true, },
    {title:"DoesGibOnKill", field: "DoesGibOnKill", width: 200, hidden: true, },
    {title:"GibImpulseRadius", field: "GibImpulseRadius", width: 200, hidden: true, },
    {title:"GibStrength", field: "GibStrength", width: 200, hidden: true, },
    {title:"ProjectileSpeed", field: "ProjectileSpeed", width: 200, hidden: false, },
    {title:"ProjectileMaxSpeed", field: "ProjectileMaxSpeed", width: 200, hidden: true, },
    {title:"CollisionSize", field: "CollisionSize", width: 200, hidden: false, },
    {title:"ProjectileInheritance", field: "ProjectileInheritance", width: 200, hidden: false, },
    {title:"ProjectileLifespan", field: "ProjectileLifespan", width: 200, hidden: true, },
    {title:"ProjectileGravity", field: "ProjectileGravity", width: 200, hidden: true, },
    {title:"ProjectileTerminalVelocity", field: "ProjectileTerminalVelocity", width: 200, hidden: true, },
    {title:"ProjectileBounceDamping", field: "ProjectileBounceDamping", width: 200, hidden: true, },
    {title:"HitscanRange", field: "HitscanRange", width: 200, hidden: true, },
    {title:"FireOffsetX", field: "FireOffsetX", width: 200, hidden: true, },
    {title:"FireOffsetY", field: "FireOffsetY", width: 200, hidden: true, },
    {title:"FireOffsetZ", field: "FireOffsetZ", width: 200, hidden: true, },
    {title:"FractalDuration", field: "FractalDuration", width: 200, hidden: true, },
    {title:"FractalShardInterval", field: "FractalShardInterval", width: 200, hidden: true, },
    {title:"FractalAscentTime", field: "FractalAscentTime", width: 200, hidden: true, },
    {title:"FractalAscentHeight", field: "FractalAscentHeight", width: 200, hidden: true, },
    {title:"FractalShardDistance", field: "FractalShardDistance", width: 200, hidden: true, },
    {title:"FractalShardHeight", field: "FractalShardHeight", width: 200, hidden: true, },
    {title:"FractalShardDamage", field: "FractalShardDamage", width: 200, hidden: true, },
    {title:"FractalShardDamageRadius", field: "FractalShardDamageRadius", width: 200, hidden: true, },
    {title:"MeleeDamageRadius", field: "MeleeDamageRadius", width: 200, hidden: true, },
    {title:"MeleeConeAngle", field: "MeleeConeAngle", width: 200, hidden: true, },
    {title:"Accuracy", field: "Accuracy", width: 200, hidden: true, },
    {title:"AccuracyLossOnShot", field: "AccuracyLossOnShot", width: 200, hidden: true, },
    {title:"AccuracyLossOnJump", field: "AccuracyLossOnJump", width: 200, hidden: true, },
    {title:"AccuracyLossMax", field: "AccuracyLossMax", width: 200, hidden: true, },
    {title:"AccuracyCorrectionRate", field: "AccuracyCorrectionRate", width: 200, hidden: true, },
    {title:"StuckDamageMultiplier", field: "StuckDamageMultiplier", width: 200, hidden: true, },
    {title:"StuckMomentumMultiplier", field: "StuckMomentumMultiplier", width: 200, hidden: true, },
    {title:"FuseTimer", field: "FuseTimer", width: 200, hidden: true, },
    {title:"ExplodeOnContact", field: "ExplodeOnContact", width: 200, hidden: true, },
    {title:"ExplodeOnFuse", field: "ExplodeOnFuse", width: 200, hidden: true, },
    {title:"MustBounceBeforeExplode", field: "MustBounceBeforeExplode", width: 200, hidden: true, },
    {title:"MineDeployTime", field: "MineDeployTime", width: 200, hidden: true, },
    {title:"MineMaxAllowed", field: "MineMaxAllowed", width: 200, hidden: true, },
    {title:"MineCollisionCylinderRadius", field: "MineCollisionCylinderRadius", width: 200, hidden: true, },
    {title:"MineCollisionCylinderHeight", field: "MineCollisionCylinderHeight", width: 200, hidden: true, },
    {title:"ClaymoreDetonationAngle", field: "ClaymoreDetonationAngle", width: 200, hidden: true, },
    {title:"PrismMineTripDistance", field: "PrismMineTripDistance", width: 200, hidden: true,}
  ]

  //TODO set URL based on gameVersion
  useEffect(()=>{
    fetch("/text/weapon-data/partingGiftsWeapons.json")
    .then(resp=>resp.json())
    .then(resp=>{
      console.log(resp)
      setData(resp)
    })
  },[])

// TODO Add Rounding of data to 2 decimal points
  return (
    <MaterialTable
      data={data}
      columns={columns}
      options={{
        fixedColumns: { left: 1 },
        columnsButton: true,
        thirdSortClick: false,
      }}
    />
  );
}

export default WeaponDataTable;