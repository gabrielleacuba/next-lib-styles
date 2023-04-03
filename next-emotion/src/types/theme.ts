import { defaultTheme, lightTheme, darkTheme } from "../styles/themes/theme";

export type ThemeContextType = {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
};

export type Theme = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
};
