import tw, { styled, css, theme } from "twin.macro";

const BannerContainer = tw.div`
   relative 
   h-[660px]  
   md:h-[660px]
   bg-cover bg-center  bg-bannerImage
`;

const BannerGradient = tw.div`
    absolute 
    inset-0 
    h-full 
    w-[100%]
    bg-shades-gray-00 dark:bg-shades-gray-100 
`;

const BannerTextContainer = "";
const BannerTitle = "";
const BannerListText = "";
const ItemList = "";
const BannerTextDescription = "";

export {
  BannerContainer,
  BannerGradient,
  BannerTextContainer,
  BannerTitle,
  BannerListText,
  ItemList,
  BannerTextDescription,
};
