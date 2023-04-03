import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

function toggleTailwindThemeClass(colorMode: string) {
  const className = "dark";
  if (typeof window !== "undefined") {
    const bodyClasses = window?.document.body.classList;
    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className);
  }
}
function toggleAliceDsThemeClass(colorMode: string) {
  if (typeof window !== "undefined") {
    const bodyClasses = window?.document.body;
    colorMode === "dark"
      ? bodyClasses.setAttribute("data-theme", 'on-dark')
      : bodyClasses.setAttribute("data-theme", 'on-light')
  }
}

function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    toggleTailwindThemeClass(colorMode)
    toggleAliceDsThemeClass(colorMode)
  }, [colorMode]);

  return [colorMode, setColorMode];
}

export default useColorMode;
