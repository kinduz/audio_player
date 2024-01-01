import React, {useEffect, useState} from "react";
import {AuthButtonStyled} from "./Auth.styled";
import {loginEndpoint} from "../../utils/spotify";
import {useActions} from "../../hooks/useActions";

const AuthButton = () => {
  const [token, setToken] = useState<string>("");
  const {setToken: setTokenAction} = useActions();

  useEffect(() => {
    if (window.location.hash) {
      setToken(window.location.hash.split("=")[1].split("&")[0]);
    }
    if (token) {
      setTokenAction(token);
    }
  }, [setTokenAction, token]);

  return (
    <AuthButtonStyled href={loginEndpoint} variant="contained">
      log in*
    </AuthButtonStyled>
  );
};

export default AuthButton;
