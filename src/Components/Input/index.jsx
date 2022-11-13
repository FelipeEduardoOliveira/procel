import React from "react";
import { ConntainerNewInput, MyNewInput, MySpan } from "./styles";



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
