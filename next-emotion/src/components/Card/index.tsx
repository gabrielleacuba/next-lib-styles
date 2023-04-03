import { ListType } from "@/types/movies";
import { CardStyle } from "./style";

const Card = ({ movie }: { movie: ListType }) => {
  const image = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <CardStyle
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
};


export default Card;