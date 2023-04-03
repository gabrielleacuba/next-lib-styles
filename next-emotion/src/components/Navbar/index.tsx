import { useContext } from 'react';
import Image from "next/image";
import { Button, NavbarContainer } from "./style";
import { ThemeContext } from '../../styles/themes/ThemeContext';

type Props = {
  blackNavebar: boolean;
};

export const Navbar = ({ blackNavebar }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <NavbarContainer blackNavebar={blackNavebar}>
        <Image src="/tmdb.svg" alt="Logo tmdb" width={35} height={35} />

        <Button onClick={toggleTheme}>theme</Button>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
