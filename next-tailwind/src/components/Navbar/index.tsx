import Image from "next/image";
import useColorMode from "../../../hooks/useColorMode";
import { WButton } from "@alice-health/wonderland-react";

export const Navbar = ({ blackNavebar }: { blackNavebar: Boolean }) => {
  const [colorMode, serColorMode] = useColorMode();

  return (
    <>
      <div
        className={`fixed z-40 h-16 w-full flex items-center justify-between px-gl-spacing-08  ${
          blackNavebar ? "bg-shades-gray-100" : "transparent"
        } transition ease-in duration-150`}
      >
        <Image src="/tmdb.svg" alt="Logo tmdb" width={35} height={35} />
        <WButton
          variant="cta"
          onClick={() => serColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Theme
        </WButton>
      </div>
    </>
  );
};

export default Navbar;
