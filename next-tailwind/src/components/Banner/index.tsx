

export const Banner = () => {
  return (
    <>
      <div className="relative h-[660px]  bg-cover bg-center  bg-bannerImage md:h-[660px] ">
        <div
          className="absolute inset-0 h-full bg-shades-gray-00 dark:bg-shades-gray-100 w-[100%]"
          style={{
            background:
              "linear-gradient(40deg, rgb(39 40 41) 0%, rgb(39 40 41) 25%, rgba(83, 100, 141, 0) 100%)",
          }}
        ></div>

        <div className="absolute top-48 left-0 ml-8">
          <span className="badge bg-shades-magenta-50 dark:bg-shades-yellow-50 text-dark font-poppins text-[16px] mb-6 font-bold">
            New
          </span>

          <p className="text-shades-gray-00 font-poppins  mb-4 font-bold  lg:text-7xl md:text-6xl text-4xl">
            THE LAST OF US
          </p>

          <ul className="flex text-shades-gray-00 mb-4">
            <li className="mr-5">2023</li>
            <li className="mr-5">+16</li>
            <li className="mr-5">88%</li>
          </ul>

          <div className="lg:max-w-[35%] max-md:max-w-[100%] max-md:mr-8">
            <p className="text-shades-gray-00  ax-md:text-sm text-base">
              Situado duas décadas após a implosão de nossa sociedade, o drama
              seguirá Joel, um sobrevivente difícil, que é contratado para
              contrabandear uma garota de 14 anos chamada Ellie para fora de uma
              zona de quarentena opressiva. O que começa como um pequeno
              trabalho logo se torna uma jornada brutal e de partir o coração.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
