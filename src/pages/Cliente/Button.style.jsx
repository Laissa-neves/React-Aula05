import { styled } from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 60px;

  &:hover {
    background-color: #faf6f6;
  }
`;

export const VioletButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: violet;
  &:hover {
    background-color: #e6e0e0;
  }
`;

export const PinkButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: pink;
  &:hover {
    background-color: #c06f6f;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => (props.active? "#b24a5c" : "pink")};
  color: ${(props) => (props.active? "white" : "black")};
  border: 1px solid #b24a5c;
  border-radius: 4px;
  padding: 20px;
  
`;