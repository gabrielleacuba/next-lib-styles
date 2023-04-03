import styled from "@emotion/styled";
import NavbarContainerProps from "./type";

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: fixed;
  z-index: 40;
  height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* padding: 0 var(--gl-spacing-08); */

  background-color: var(--gl-color-shades-gray-70)


  transition: all ease-in 150;
`;

const Button = styled.button`
    background-color: var(--gl-color-shades-gray-70)
    padding: var(--gl-spacing-03)
    border-radius: 5px;
`;

export { NavbarContainer, Button };
