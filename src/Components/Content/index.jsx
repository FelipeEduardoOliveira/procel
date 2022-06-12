import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ContainerContentMain,
  ContainerButtons,
  DivContainerButton,
} from "./styled";
import Form from "../Form";
import FormCadMenu from "../Form/FormCadastroMenu";
import userContext from "../../services/context";
import Button from "../Button";
import { FieldsCad, FieldaReturnApi } from "../../services/utils/handleFields";

const ContentContainer = (props) => {
  const { state } = useContext(userContext);
  const [actionButton, setActionbutton] = useState("");

  const params = useParams("only-form/:idOnlyPage");
  const { idOnlyPage } = params;




 

  return (
    <ContainerContentMain>
      {state === "Dados do licenciado" ||
        (idOnlyPage === "Dados-do-licenciado" && (
          <>
            <Form actionButton={actionButton}>
              
              
            <ContainerButtons>
              <Button
                label={"Salvar"}
                color={"#95b75d"}
                onClick={() => setActionbutton("save")}
              />
              <Button
                label={"Cancelar"}
                color={"#fe970a"}
                onClick={() => setActionbutton("clean")}
              />
            </ContainerButtons>

            </Form>
          </>
        ))}
      {state === "Cadastro-menu" ||
        (idOnlyPage === "Cadastro-menu" && (
          <>
            <div key={'Cadastro Menu'}>
              <p
                style={{
                  backgroundColor: "white",
                  padding: "10px 0",
                  margin: "20px 0",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Cadastro Menu
              </p>
              <FormCadMenu fieldsRender={FieldaReturnApi}>

              <ContainerButtons justifyContent={"space-between"}>
                <DivContainerButton lado={"start"}>
                  <Button
                    label={"Opções"}
                    color={"#418bca"}
                    onClick={() => setActionbutton("#")}
                  />
                </DivContainerButton>

                <DivContainerButton lado={"end"}>
                  <Button
                    label={"Confirmar"}
                    color={"#5bb85c"}
                    onClick={() => setActionbutton("save")}
                  />
                  <Button
                    label={"Cancelar"}
                    color={"#da534f"}
                    onClick={() => setActionbutton("clean")}
                  />
                </DivContainerButton>
              </ContainerButtons>

              </FormCadMenu>
            </div>
          </>
        ))}
    </ContainerContentMain>
  );
};

export default ContentContainer;
