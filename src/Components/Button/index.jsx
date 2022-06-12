import React from "react";
import {
  ButtonContainer
} from "./styled";

const Button = ({color, colorLetter, onClick, label, onSubmit }) => {
  return (
            <ButtonContainer onClick={onClick} color={color} colorLetter={colorLetter} onSubmit={onSubmit}>
              {label}
            </ButtonContainer>
      
      
  );
};

export default Button;
