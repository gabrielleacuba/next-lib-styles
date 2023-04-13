import tw, { styled } from "twin.macro";

const ButtonStyle = styled.button(() => [
  tw`px-4 py-2 transform duration-200 rounded bg-shades-gray-10 text-shades-gray-10 font-medium border-2  whitespace-nowrap`,
  tw`focus:(outline-none ring-2 ring-shades-gray-00 ring-opacity-50)`,
  tw`hover:(scale-[1.02] shadow-lg)`,
  tw`active:scale-100`,
]);

export default ButtonStyle;
