import React from "react";
import {INavbarItems} from "../../utils/index.interfaces";
import {NavbarItemStyled} from "./Navbar.styled";

interface INavbarItem {
  navbarItem: INavbarItems;
}
const NavbarItem: React.FC<INavbarItem> = ({navbarItem}) => {
  return (
    <NavbarItemStyled
      to={navbarItem.to}
      className={isActive => (isActive ? "active link" : "link")}>
      {navbarItem.icon} {navbarItem.title}
    </NavbarItemStyled>
  );
};

export default NavbarItem;
