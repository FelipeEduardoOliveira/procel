import React from "react";
import { ContainerContent, ContainerButtons, SaveButton, CancelButton } from "./styled";
import Form from "../Form";

const ContentContainer = () => {
  return (
    <ContainerContent>
      {" "}
      <Form />{" "}

      <ContainerButtons>
        <SaveButton>
          Salvar
        </SaveButton>
        <CancelButton>
          Cancelar
        </CancelButton>
      </ContainerButtons>
      
    </ContainerContent>
  );
};

export default ContentContainer;
