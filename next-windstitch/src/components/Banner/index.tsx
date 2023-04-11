import {
  BannerContainer,
  BannerGradient,
  BannerListText,
  BannerTextContainer,
  BannerTextDescription,
  BannerTitle,
  ItemList,
} from "./style";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerGradient
        style={{
          background:
            "linear-gradient(40deg, rgb(39 40 41) 0%, rgb(39 40 41) 25%, rgba(83, 100, 141, 0) 100%)",
        }}
      />

      <BannerTextContainer>
        <BannerTitle>THE LAST OF US</BannerTitle>
        <BannerListText>
          <ItemList>2023</ItemList>
          <ItemList>+16</ItemList>
          <ItemList>88%</ItemList>
        </BannerListText>
        <BannerTextDescription>
          Situado duas décadas após a implosão de nossa sociedade, o drama
          seguirá Joel, um sobrevivente difícil, que é contratado para
          contrabandear uma garota de 14 anos chamada Ellie para fora de uma
          zona de quarentena opressiva. O que começa como um pequeno trabalho
          logo se torna uma jornada brutal e de partir o coração.
        </BannerTextDescription>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
