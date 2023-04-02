import { useState, useEffect, useRef } from "react";
import { ListArray } from "../../pages/constants/types";
import { motion } from "framer-motion";
import Card from "../Card";

export const Cards = ({ moviesList, title }: { moviesList: ListArray[], title: String }) => {
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
      <div className="flex flex-col h-auto mt-gl-spacing-10 py-gl-spacing-10">
        <div className= "ml-gl-spacing-10">
          
          <div className="flex flex-col w-auto">
            <h1 className="text-gl-font-size-xl font-popins mx-gl-spacing-03  text-shades-gray-100 dark:text-shades-gray-00 font-gl-font-weight-light">{title}</h1>
            <div className="w-24 border-gl-border-width-md border-shades-magenta-50 dark:border-shades-turquoise-60 mx-gl-spacing-03 mt-gl-spacing-02"/>
          </div>

          <motion.div
            ref={carousel}
            className="cursor-grab overflow-hidden w-full max-w-full mt-gl-spacing-12"
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
