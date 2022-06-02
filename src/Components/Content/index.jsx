import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerContentMain, ContainerButtons } from "./styled";
import Form from "../Form";
import FormCadMenu from '../Form/FormCadastroMenu';
import userContext from "../../services/context";
import Button from '../Button';
const ContentContainer = (props) => {
  const { state } = useContext(userContext);
  const [actionButton, setActionbutton] = useState('');

const params = useParams('only-form/:idOnlyPage');
  const  {idOnlyPage} = params;

  console.log({idOnlyPage})
  
  return (
    <ContainerContentMain>
      {state === "Dados do licenciado" | idOnlyPage === 'Dados-do-licenciado' && (
        <>
        <Form actionButton={actionButton}/>

        <ContainerButtons>

        <Button
        label={"Salvar"}
        color={"#95b75d"}
        onClick={() => setActionbutton('save')}
      />
      <Button
        label={"Cancelar"}
        color={"#fe970a"}
        onClick={() => setActionbutton('clean')}
      />

        </ContainerButtons>
        
        </>
      )}
      {state === "Cadastro-menu" | idOnlyPage === 'Cadastro-menu' && (
        <>
        <FormCadMenu actionButton={actionButton}/>

        <ContainerButtons>

        <Button
        label={"Confirmar"}
        color={"#95b75d"}
        onClick={() => setActionbutton('save')}
      />
      <Button
        label={"Cancelar"}
        color={"#fe2f0a"}
        onClick={() => setActionbutton('clean')}
      />

        </ContainerButtons>
        
        </>
      )}
    </ContainerContentMain>
  );
};

export default ContentContainer;
