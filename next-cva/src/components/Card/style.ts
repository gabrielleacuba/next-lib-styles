import { cva, VariantProps } from "class-variance-authority";

export const CardStyle = cva(
  "h-80 w-64 bg-shades-gray-90 rounded-gl-border-radius-xs bg-cover bg-center shadow-card shadow-shades-gray-90 transform scale-90 transition ease-in-out duration-300 hover:transform hover:scale-100"
);

export const TitleStyle = cva("", {
  variants: {
    color: {
      primary: "text-blue-200",
      secondary: "bg-slate-300",
    },
    size: {
      small: "text-2xl",
      medium: "text-3xl",
    },
  },
  // compoundVariants: [{ color: "primary", class: "uppercase" }],
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});
