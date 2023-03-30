type CardProps = {
  type: string;
};

export const Card = (props: CardProps) => {
  return (
    <>
      {props.type === "day" ? (
        <div
          className="h-96 mx-5 w-72 bg-shades-gray-90 rounded-md  bg-dayMovie bg-cover bg-center  shadow-card shadow-shades-gray-90
        "
        ></div>
      ) : (
        <div
          className="h-96 mx-5 w-72 bg-shades-gray-90 rounded-md  bg-weekMovie bg-cover bg-center shadow-card shadow-shades-gray-90
         "
        ></div>
      )}
    </>
  );
};

export default Card;
