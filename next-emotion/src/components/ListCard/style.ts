import styled from "@emotion/styled";

const ListCardsSection = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;
  margin-top: var(--gl-spacing-10);
  padding: var(--gl-spacing-10) 0;
`;

const ListCardContainer = styled.div`
  margin-left: var(--gl-spacing-10);
`;

const ListCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 var(gl-spacing-03);
  width: auto;
`;

const ListCardTitle = styled.div`
  font-size: var(--gl-font-size-xl);
  font-weight: var(--gl-font-weight-light);
  color: ${(props) => props.theme.colors.text};
`;

const ListCardLine = styled.div`
  width: 96px;
  border: var(--gl-border-width-md) solid
    ${(props) => props.theme.colors.primary};
  margin-top: var(--gl-spacing-02);
`;

const CardCarouselContainer = styled.div`
  cursor: grab;
  overflow: hidden;
  height: 320px;
  width: 100%;
  max-width: 100%;
  margin-top: var(--gl-spacing-12);
`;
export {
  ListCardsSection,
  ListCardContainer,
  ListCardTitleContainer,
  ListCardTitle,
  ListCardLine,
  CardCarouselContainer,
};
