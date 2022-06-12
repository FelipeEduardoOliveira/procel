import React from "react";
import {
  TextAreaContainerMain,
  LabelTextArea,
  TextAreaContainer,
} from "./styled";
const TextArea = ({ title, placeholder, rows, id, value, onChange, readonly, obrigatorio }) => {
  return (
    <TextAreaContainerMain>
      <LabelTextArea htmlFor={id}>{title}: {obrigatorio == 1&&('*')}</LabelTextArea>

      <TextAreaContainer
        id={id}
        name={id}
        rows={rows ? rows : 8}
        cols="10"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        readOnly={readonly}
        required={obrigatorio}
      >
      </TextAreaContainer>
    </TextAreaContainerMain>
  );
};

export default TextArea;
