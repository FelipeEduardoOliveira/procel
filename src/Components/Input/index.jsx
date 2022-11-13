import React, { useState } from "react";
import { ConntainerNewInput, ContainerInput, Imagem, InputMain, MyNewInput, MySpan } from "./styles";
// import ErrorIcon from "@src/Assets/error.png";


const Input = ({
  error,
  placeholder,
  onChange,
  value,
  type,
  name,
  onClick,
  invalidField
}) => {
  return (
    <ConntainerNewInput>
        <MyNewInput 
        key={`${name}_Input`}
            placeholder={placeholder}   
            onChange={(e)=>onChange(e.target.value)}
            value={value}
            type={type}
            error={error}
            onClick={onClick}
        />

        <MySpan error={error}>
                {placeholder}
        </MySpan>

    </ConntainerNewInput>
  );
};

export default Input;
