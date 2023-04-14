import tw, { styled } from "twin.macro";

const BadgeStyle = styled.div(() => [
  tw`inline-block bg-shades-magenta-50 dark:bg-shades-yellow-50`,
  tw`px-gl-spacing-01 py-gl-spacing-01 mb-6`,
  tw`text-center whitespace-nowrap align-baseline text-shades-gray-100 font-poppins text-[16px] font-bold`,
  tw`rounded-gl-border-radius-xs`,
]);

export { BadgeStyle };
