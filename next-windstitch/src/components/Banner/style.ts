import { w, W } from "windstitch";

export const BannerContainer = w.div(
  `relative h-[660px]  bg-cover bg-center  bg-bannerImage md:h-[660px]`
);

export const BannerGradient = w.div(`
    absolute inset-0 h-full bg-shades-gray-00 dark:bg-shades-gray-100 w-[100%]
`);
export const BannerTextContainer = w.div(`
    absolute top-48 left-0 ml-8
`);
export const BannerTitle = w.h2(`
    text-shades-gray-00 font-poppins  mb-4 font-bold  lg:text-7xl md:text-6xl text-4xl
`);
export const BannerListText = w.ul(`
    flex text-shades-gray-00 mb-4
`);
export const ItemList = w.li(`
    mr-5
`);
export const BannerTextDescription = w.p(`
    lg:max-w-[35%] max-md:max-w-[100%] max-md:mr-8 text-shades-gray-00  max-md:text-sm 
`);

export type BannerContainerProps = W.Infer<typeof BannerContainer>;
