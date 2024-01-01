import React from "react";
import Navbar from "./Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {PageStyled} from "../styles";

const Layout = () => {
  return (
    <PageStyled>
      <Navbar /> <Outlet />
    </PageStyled>
  );
};

export default Layout;
