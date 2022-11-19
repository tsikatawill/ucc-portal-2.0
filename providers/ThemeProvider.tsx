import React, {
  useMemo,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export const ThemeContext = createContext<any>(null);

interface themeContextProviderI {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: themeContextProviderI) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
