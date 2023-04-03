import styled from "@emotion/styled";
import NavbarContainerProps from "../../types/navbar";

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: fixed;
  z-index: 40;
  height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 var(--gl-spacing-08);

  transition: all ease-in 150;
`;

const Button = styled.button`
  background-color: var(--gl-color-shades-gray-70);
  padding: var(--gl-spacing-02);
  border-radius: 5px;
  color: var(--gl-color-shades-gray-00);

  &:hover {
    cursor: pointer;
    background-color: var(--gl-color-shades-gray-90);
  }
`;

export { NavbarContainer, Button };
