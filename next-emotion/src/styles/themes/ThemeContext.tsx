import type { ReactNode } from "react";
import { createContext, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { defaultTheme, lightTheme, darkTheme } from "../themes/theme";

type ThemeContextType = {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
};

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

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <EmotionThemeProvider theme={currentTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
