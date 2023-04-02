import Image from "next/image";
import useColorMode from "../../../hooks/useColorMode";

export const Navbar = ({ blackNavebar }: { blackNavebar: Boolean }) => {
  const [colorMode, serColorMode] = useColorMode();

  return (
    <>
      <div
        className={`fixed z-40 h-16 w-full flex items-center justify-between px-8  ${blackNavebar? "bg-shades-gray-100" : "transparent"} transition ease-in duration-150`}
      >
        <Image src="/tmdb.svg" alt="logo pop corn" width={35} height={35} />
        <button
          className="bg-shades-gray-70 p-3 rounded-md"
          onClick={() => serColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Theme
        </button>
      </div>
    </>
  );
};

export default Navbar;
