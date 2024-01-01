import React from "react";
import {AuthComponentStyled, AuthMainStyled} from "./Auth.styled";
import AuthLogo from "./AuthLogo";
import AuthButton from "./AuthButton";
import AuthFooter from "./AuthFooter";

const Auth = () => {
  return (
    <AuthComponentStyled>
      <AuthMainStyled>
        <AuthLogo />
        <AuthButton />
      </AuthMainStyled>
      <AuthFooter />
    </AuthComponentStyled>
  );
};

export default Auth;
