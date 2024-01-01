import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";
import {Button} from "@mui/material";

export const AuthComponentStyled = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AuthMainStyled = styled("div")`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const RotateAnimation = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
`;

export const AuthLogoStyled = styled("div")`
  font-size: 60px;
  display: flex;
  align-items: center;
  & div {
    height: 140px;
    & img {
      animation: ${RotateAnimation} 8s linear infinite;
      width: 100%;
      height: 100%;
    }
  }
`;

export const AuthButtonStyled = styled(Button)`
  padding: 4px 48px;
  font-weight: 700;
  border-radius: 20px;
  background: #ffffff;
  font-size: 20px;
  color: black;

  &:hover {
    background: #f1f1f1;
  }
`;

export const AuthFooterStyled = styled("footer")`
  color: white;
  font-family: SpotiFontLight;
  font-weight: 500;
  position: absolute;
  bottom: 1em;
  font-size: 16px;
`;
