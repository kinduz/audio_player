import React from "react";
import {LoadingStyled} from "../../../styles";
import {CircularProgress} from "@mui/material";

const Loading = () => {
  return (
    <LoadingStyled>
      <CircularProgress />
    </LoadingStyled>
  );
};

export default Loading;
