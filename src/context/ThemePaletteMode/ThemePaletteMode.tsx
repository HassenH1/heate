import { type Theme, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../../theme";

const ThemePaletteModeContext = createContext<null | {
  themePaletteMode: Theme;
  isSystemDarkMode: boolean;
  themePaletteModeContextProvider: {
    toggleThemePaletteMode: () => void;
  };
}>(null);

//@todo put back useMediaQuery
function ThemePaletteMode(props: { children: Readonly<ReactNode> }) {
  const isSystemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const isSystemDarkMode = false;
  const [themePaletteMode, setThemePaletteMode] = useState(
    isSystemDarkMode ? darkTheme : lightTheme
  );

  const themePaletteModeContextProvider = useMemo(
    () => ({
      toggleThemePaletteMode: () => {
        setThemePaletteMode((prevMode) =>
          prevMode.palette.mode === "light" ? darkTheme : lightTheme
        );
      },
    }),
    []
  );

  return (
    <ThemePaletteModeContext.Provider
      value={{
        themePaletteModeContextProvider,
        themePaletteMode,
        isSystemDarkMode,
      }}
      {...props}
    />
  );
}

function useThemePaletteMode() {
  const context = useContext(ThemePaletteModeContext);
  if (!context) {
    throw new Error(
      "useThemePaletteMode must be within ThemePaletteMode provider"
    );
  }

  return context;
}

export { ThemePaletteMode, useThemePaletteMode };
