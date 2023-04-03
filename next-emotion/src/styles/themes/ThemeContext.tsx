import type { ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { defaultTheme, lightTheme, darkTheme } from "./theme";
import { Theme, ThemeContextType } from "../../types/theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

type Props = {
  children?: ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  function toggleAliceDsThemeClass( colorMode : Theme) {
    if (typeof window !== "undefined") {
      const bodyClasses = window?.document.body;
      colorMode.name === "dark"
        ? bodyClasses.setAttribute("data-theme", "on-dark")
        : bodyClasses.setAttribute("data-theme", "on-light");
    }
  }

  useEffect(() => {
    toggleAliceDsThemeClass(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <EmotionThemeProvider theme={currentTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
