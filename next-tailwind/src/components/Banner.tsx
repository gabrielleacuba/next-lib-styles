import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <div
        className="h-[564px] flex justify-center  flex-col bg-cover bg-center opacity-60 "
        style={{ backgroundImage: `url(/backgroundBanner.jpeg)` }}
      >
        <div className="mt-20">
          {/* <p className="text-shades-gray-00 ml-6 font-inconsolata text-7xl">
            Um site que trás os filmes destaques da semana
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
