import tw, { styled } from "twin.macro";

const BannerContainer = styled.div(() => [
  tw`relative`,
  tw`md:h-[660px] h-[660px]`,
  tw`bg-cover bg-center  bg-bannerImage`,
]);

const BannerGradient = styled.div(() => [
  tw`absolute inset-0 h-full`,
  tw`bg-shades-gray-00 dark:bg-shades-gray-100 bg-gradient-to-l`,
  tw`w-[100%]`,
]);

const BannerTextContainer = styled.div(() => [tw`absolute top-48 left-0 ml-8`]);

const BannerTitle = styled.h2(() => [
  tw`text-shades-gray-00 font-poppins  mb-4 font-bold`,
  tw`lg:text-7xl md:text-6xl text-4xl`,
]);

const BannerListText = styled.ul(() => [tw`flex text-shades-gray-00 mb-4`]);

const ItemList = styled.li(() => [tw`mr-gl-spacing-08`]);

const BannerTextDescription = styled.p(() => [
  tw`lg:max-w-[35%] md:max-w-[100%] md:mr-8`,
  tw`text-shades-gray-00 text-base`,
]);

export {
  BannerContainer,
  BannerGradient,
  BannerTextContainer,
  BannerTitle,
  BannerListText,
  ItemList,
  BannerTextDescription,
};
