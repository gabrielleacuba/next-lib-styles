import { useState, useEffect, useRef } from "react";
import { ListArray, ListType } from "../pages/constants/types";
import { motion } from "framer-motion";
import Card from "./Card";
import Image from "next/image";

export const Cards = ({ moviesList }: { moviesList: ListArray[] }) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollWidth = carousel.current?.scrollWidth;
    const offsetWidth = carousel.current?.offsetWidth;

    if (scrollWidth && offsetWidth) {
      setWidth(scrollWidth - offsetWidth);
    }
  });
  return (
    <>
      <div className=" flex flex-col h-auto mt-11 py-11">
        <div className= "ml-10">
          
          <div className="flex w-auto">
            <h1 className="text-3xl font-popins mx-3 text-shades-gray-00 font-extralight">Filmes populares da semana</h1>

          </div>

          <motion.div
            ref={carousel}
            className="cursor-grab overflow-hidden w-full max-w-full my-12"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ul className="flex">
                {moviesList.map((item: any) => (
                  <motion.div key={item.id}>
                    <Card movie={item} />
                  </motion.div>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cards;
