export const Card = ({ movie }: { movie: any }) => {
  const image = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  return (
    <>
      <div
        className="h-96 mx-5 w-72 bg-shades-gray-90 rounded-md bg-cover bg-center shadow-card shadow-shades-gray-90
        "
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </>
  );
};

export default Card;
