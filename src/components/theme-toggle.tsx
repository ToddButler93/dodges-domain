
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === 'light' ? (
        <>
          <FaSun className="h-[1.2rem] w-[1.2rem]" />
        </>
      ) : (
        <>
          <FaMoon className="h-[1.2rem] w-[1.2rem]" />
        </>
      )}
    </Button>
  );
}
