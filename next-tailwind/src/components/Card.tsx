export const Card = ({ movie }: { movie: any }) => {
  const image = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </>
  );
};

export default Card;
