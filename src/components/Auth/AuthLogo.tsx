import React from "react";
import {AuthLogoStyled} from "./Auth.styled";
import Logo from "../../assets/images/logo.png";

const AuthLogo = () => {
  return (
    <AuthLogoStyled>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      SpotiClone
    </AuthLogoStyled>
  );
};

export default AuthLogo;
