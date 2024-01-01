import React from "react";
import {NavbarStyled} from "./Navbar.styled";
import {NavbarItems} from "../../utils/index.constants";
import NavbarItem from "./NavbarItem";

const Navbar = React.memo(() => {
  return (
    <NavbarStyled>
      {NavbarItems.map(item => (
        <NavbarItem navbarItem={item} key={item.title} />
      ))}
    </NavbarStyled>
  );
});

export default Navbar;
