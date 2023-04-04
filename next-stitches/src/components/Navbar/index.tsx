import Image from "next/image";
import { WButton } from "@alice-health/wonderland-react";
import { NavbarContainer } from "./style";
import { useTheme } from "next-themes";

type Props = {
  blackNavebar: boolean;
};

export const Navbar = ({ blackNavebar }: Props) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  
  return (
    <NavbarContainer>
      <Image src="/tmdb.svg" alt="Logo tmdb" width={35} height={35} />

      <WButton onClick={()=> ''} variant="cta">
        theme
      </WButton>
    </NavbarContainer>
  );
};

export default Navbar;
