import Image from "next/image";
import { Button, NavbarContainer } from "./style";

type Props = {
  blackNavebar: boolean;
};

export const Navbar = ({ blackNavebar }: Props) => {
  return (
    <>
      <NavbarContainer blackNavebar={blackNavebar}>
        <Image src="/tmdb.svg" alt="Logo tmdb" width={35} height={35} />

        <Button onClick={() => ""}>theme</Button>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
