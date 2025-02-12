import React from "react";
import type {
  TAWeapon,
  TAWeaponHitscan,
  TAWeaponSnipeBXT,
  TAWeaponThrown,
  TAStickyWeapon,
  TAWeaponExplosive,
  TAWeaponProjectile,
} from "~/server/api/taWeapons";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface WeaponsTableProps {
  weapons: (
    | TAWeapon
    | TAWeaponHitscan
    | TAWeaponSnipeBXT
    | TAWeaponThrown
    | TAStickyWeapon
    | TAWeaponExplosive
    | TAWeaponProjectile
  )[];
}

export const WeaponsTable: React.FC<WeaponsTableProps> = ({ weapons }) => {
  return (
    // TODO: Fix width on small screens 'max-w-xl'
    // Look into DataTable instead of Table
    <ScrollArea className="max-w-screen whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4">
        <Table className="w-full table-auto border-collapse text-sm">
          <TableHeader>
            <TableRow className="bg-zinc-200 dark:bg-zinc-800">
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Name
              </TableHead>
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Damage (Direct)
              </TableHead>
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Fire Rate
              </TableHead>
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Reload Time
              </TableHead>
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Collision Size
              </TableHead>
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Inheritance
              </TableHead>
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Projectile Speed
              </TableHead>
              <TableHead className="border px-4 py-2 dark:text-zinc-200">
                Explosive Radius
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {weapons.map((weapon) => (
              <TableRow
                key={weapon.name}
                className="odd:bg-white even:bg-zinc-100 dark:bg-zinc-900 dark:even:bg-zinc-800"
              >
                <TableCell className="border px-4 py-2 text-right">
                  {weapon.name}
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  {weapon.damage && weapon.damage !== 0
                    ? "directHitMultiplier" in weapon
                      ? (
                          (weapon.directHitMultiplier ?? 1) * weapon.damage
                        ).toFixed(0)
                      : ""
                    : ""}
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  {weapon.fireInterval.toFixed(2)}
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  {weapon.reloadTime !== 0 ? weapon.reloadTime.toFixed(2) : ""}
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  {"collisionSize" in weapon
                    ? (weapon.collisionSize ?? "")
                    : ""}
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  {"projectileInheritance" in weapon
                    ? ((weapon.projectileInheritance ?? 0) * 100).toFixed(0)
                    : ""}
                  %
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  {"projectileSpeed" in weapon ? weapon.projectileSpeed : "N/A"}
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  {"explosiveRadius" in weapon ? weapon.explosiveRadius : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
