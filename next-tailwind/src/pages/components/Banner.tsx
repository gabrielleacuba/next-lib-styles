import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <div className="h-auto mt-20 flex justify-center items-center flex-col">
        <Image src={"/tmdb.svg"} width={300} height={300} alt="tmdb logo" />
        <div className="mt-20">
          <p className="font-roboto text-lg font-thin text-shades-gray-00">
            Um site que trás os filmes destaques da semana
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
