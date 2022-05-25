import React from "react";
import {
  ButtonContainer
} from "./styled";

const Button = ({color, colorLetter, onClick, label }) => {
  return (
            <ButtonContainer onClick={onClick} color={color} colorLetter={colorLetter}>
              {label}
            </ButtonContainer>
      
      
  );
};

export default Button;
