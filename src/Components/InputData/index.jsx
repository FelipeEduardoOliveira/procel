import React from "react";
import { ContainerInput, TitleInput, Input } from "./styled";

const InputData = ({
  placeholder,
  title,
  type,
  onChange,
  uniqueKey,
  value,
  onClick,
  readonly,
  obrigatorio
}) => {
  return (
    <ContainerInput>
      <TitleInput >{title} {obrigatorio == 1&&('*')}</TitleInput>
      <Input
        type={type}
        placeholder={placeholder}
        id={uniqueKey}
        onChange={(e) => onChange(e)}
        value={value}
        onClick={onClick}
        readOnly={readonly}
        required={obrigatorio}
      />
    </ContainerInput>
  );
};

export default InputData;
