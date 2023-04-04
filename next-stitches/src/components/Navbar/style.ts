import NavbarContainerProps from "@/types/navbar";
import { styled } from "../../../stitches.config";

export const NavbarContainer = styled("div", {
  position: "fixed",
  zIndex: "40",
  height: "48px",
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 var(--gl-spacing-08)",

  backgroundColor: "var(--sys-color-surface-background-light)",
});
