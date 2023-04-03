import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { ListArray } from "@/types/movies";
import {
  ListCardsSection,
  ListCardContainer,
  ListCardTitle,
  ListCardTitleContainer,
  ListCardLine,
  CardCarouselContainer,
} from "./style";
import Card from "../Card";

const ListCard = ({
  moviesList,
  title,
}: {
  moviesList: ListArray[];
  title: String;
}) => {
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
    <ListCardsSection>
      <ListCardContainer>
        <ListCardTitleContainer>
          <ListCardTitle>{title}</ListCardTitle>
          <ListCardLine />
        </ListCardTitleContainer>

        <CardCarouselContainer>
          <motion.div ref={carousel}>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ul style={{ display: "flex" }}>
                {moviesList.map((item: any) => (
                  <motion.div key={item.id}>
                    <Card movie={item} />
                  </motion.div>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </CardCarouselContainer>
      </ListCardContainer>
    </ListCardsSection>
  );
};

export default ListCard;
