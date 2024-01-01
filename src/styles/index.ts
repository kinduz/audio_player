import styled from "@emotion/styled";
import {TextField} from "@mui/material";

export const InputStyled = styled(TextField)`
  color: "red";
`;

export const PageStyled = styled("div")`
  display: flex;
`;

export const LoadingStyled = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;
