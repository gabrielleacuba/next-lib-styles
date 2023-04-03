import { ListArray } from "@/types/movies";
import {
  ListCardsSection,
  ListCardContainer,
  ListCardTitle,
  ListCardTitleContainer,
  ListCardLine,
} from "./style";

const ListCard = ({ moviesList, title }: { moviesList: ListArray, title: String }) => {
  return (
    <ListCardsSection>
      <ListCardContainer>
        <ListCardTitleContainer>
          <ListCardTitle>{title}</ListCardTitle>
          <ListCardLine />
        </ListCardTitleContainer>
      </ListCardContainer>
    </ListCardsSection>
  );
};


export default ListCard