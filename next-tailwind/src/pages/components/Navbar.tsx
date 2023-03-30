import Image from "next/image";
import useColorMode from '../../../hooks/useColorMode';

export const Navbar = () => {
  const [colorMode, serColorMode] = useColorMode()

  const changeColor = () => {

  }
  return (
    <>
      <div className="flex items-center h-16 bg-gl-color-shades-gray-100 border-b-2 border-b-solid border-b-shades-gray-80">
        <div className="w-full flex justify-between flex-row">
          <Image
            src="/popcorn.png"
            alt="logo pop corn"
            width={35}
            height={35}
            className="mx-5"
          />
          <button onClick={() =>  serColorMode(colorMode === 'light' ? 'dark' : 'light')}>Theme</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
