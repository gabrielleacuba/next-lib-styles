import { ListType } from "../../types/movies";

export const Card = ({ movie }: { movie: ListType }) => {
  const image = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default Card;
