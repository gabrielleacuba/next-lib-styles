import Card from "./Card";
import { ListArray, ListType} from "../pages/constants/types";

export const Cards = ({ moviesList }: {moviesList: ListArray[]}) => {
  return (
    <>
      <div className=" flex items-center justify-center bg-shades-gray-80 h-1/2 mt-11">
        <ul>
          {moviesList.map((item: any) => (
            <Card key={item.id} movie={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cards;
