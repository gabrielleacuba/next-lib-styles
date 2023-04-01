import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <div className="relative h-[564px]  bg-cover bg-center  bg-bannerImage before:absolute before:inset-0 before:h-full before:bg-shades-gray-100 before:opacity-40">
        {/* <div className="absolute inset-0 h-full bg-shades-gray-100 opacity-40"></div> */}
        <div className="mt-20 absolute top-0 left-0">
          <p className="text-shades-gray-00 ml-6 font-inconsolata text-7xl">
            texto teste
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
