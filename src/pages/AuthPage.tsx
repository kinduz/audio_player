import React from "react";
import Auth from "../components/Auth/Auth";
import {AuthPageStyled} from "./PagesStyled";

const AuthPage = () => {
  return (
    <AuthPageStyled>
      <Auth />
    </AuthPageStyled>
  );
};

export default AuthPage;
