import styled from "@emotion/styled";
import {spotiColor} from "../../utils/index.constants";
import {NavLink} from "react-router-dom";

export const NavbarStyled = styled("nav")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10em;
  padding: 2em 1em;
  gap: 16px;
  color: white;
  background: ${spotiColor};
  height: 93.3vh;
`;

export const NavbarItemStyled = styled(NavLink)`
  display: flex;
  width: 5.5em;
  padding: 16px 0;
  transition: 0.3s all;
  font-size: 20px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  & svg {
    width: 32px;
    height: 32px;
  }
  &:hover {
    background: #000000;
  }
`;
