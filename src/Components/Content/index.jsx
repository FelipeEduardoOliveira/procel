import React, { useContext, useEffect, useState } from "react";
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
import { FieldaReturnApi } from "../../services/utils/handleFields";
import api from "../../services/Api";

import { Toast } from "devextreme-react/toast";
const ContentContainer = (props) => {
  const { state } = useContext(userContext);
  const [actionButton, setActionbutton] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [fiedlsApi, setFiedlsApi] = useState();
  const [toastConfig, setToastConfig] = useState({
    isVisible: false,
    type: "info",
    message: "",
  });
  const [payload, setPayload] = useState();

  const params = useParams(
    "only-form/:idOnlyPage/:COD_LICENCIAMENTO/:COD_ROTINA/:COD_USUARIO/:TIPO/:COD_PK"
  );
  const {
    idOnlyPage,
    COD_LICENCIAMENTO,
    COD_ROTINA,
    COD_USUARIO,
    TIPO,
    COD_PK,
  } = params;

  const saveUpdate = async (value) => {
    const UpdatePayload = {
      cod_sistema: value?.conteudo,
      nome_sistema: value?.nome_sistema,
      dtc_sistema: value?.dtc_sistema,
      atv_sistema: value?.atv_sistema,
    };

    await api
      .post(
        `cadastro/setdadoscadastro/${COD_LICENCIAMENTO}/${COD_ROTINA}/${COD_USUARIO}/${COD_PK}`,
        UpdatePayload
      )
      .then(() => {
        setToastConfig({
          isVisible: true,
          type: "success",
          message: "Cadastro atualizado com sucesso!",
        });
      })
      .catch(()=>{

        setToastConfig({
          isVisible: true,
          type: "error",
          message: "Ops.. Tente novamente mais tarde!",
        });

      });

    return;
  };



  function onHiding() {
    setToastConfig({
      ...toastConfig,
      isVisible: false,
    });
  }

  const getInfo = async () => {
    let payload = {
      COD_LICENCIAMENTO: COD_LICENCIAMENTO,
      COD_ROTINA: COD_ROTINA,
      COD_USUARIO: COD_USUARIO,
      COD_PK: COD_PK,
    };

    await api.post("cadastro/getcamposcadastro", payload).then((response) => {
      // let data = response.data
      setFiedlsApi(response.data);
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <ContainerContentMain>
      <>
        {fiedlsApi && (
          <div key={"Cadastro Menu"}>
            <Toast
              visible={toastConfig.isVisible}
              message={toastConfig.message}
              type={toastConfig.type}
              onHiding={onHiding}
              displayTime={600}
            />

            <FormCadMenu
              setUpdateValue={setUpdateValue}
              newFields={fiedlsApi}
              saveUpdate={saveUpdate}
            >
              {TIPO.toLowerCase() === "v" ? (
                <ContainerButtons justifyContent={"space-between"}>
                  <DivContainerButton lado={"start"}>
                    <Button
                      label={"Fechar"}
                      color={"#da534f"}
                      onClick={() => setActionbutton("#")}
                    />
                  </DivContainerButton>
                </ContainerButtons>
              ) : (
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
                      //  onClick={() => console.log('')}
                    />
                    <Button
                      label={"Cancelar"}
                      color={"#da534f"}
                      onClick={() => setActionbutton("clean")}
                    />
                  </DivContainerButton>
                </ContainerButtons>
              )}
            </FormCadMenu>
          </div>
        )}
      </>
    </ContainerContentMain>
  );
};

export default ContentContainer;
