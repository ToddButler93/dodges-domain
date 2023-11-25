"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const handleToggleScheme = () => {
    if (colorScheme === "dark") return setColorScheme("light");

    return setColorScheme("dark");
  };

  return (
    <ActionIcon onClick={handleToggleScheme}>
      {colorScheme === "dark" ? (
        <FaSun color="white" size={18} />
      ) : (
        <FaMoon color="black" size={18} />
      )}
    </ActionIcon>
  );
}
