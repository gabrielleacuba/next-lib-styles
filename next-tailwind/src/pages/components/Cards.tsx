import Card from "./Card";

export const Cards = () => {
  return (
    <>
      <div className=" flex items-center justify-center bg-shades-gray-80 h-1/2 mt-11">
        <Card type="day" />
        <Card type="week" />
      </div>
    </>
  );
};

export default Cards;
