import React, { useContext, useState } from "react";
import { ContainerContent, ContainerButtons } from "./styled";
import Form from "../Form";
import userContext from "../../services/context";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Button from '../Button';
const ContentContainer = () => {
  const { state } = useContext(userContext);
  const [actionButton, setActionbutton] = useState('');

  
  return (
    <ContainerContent>
      {state === "Dados do licenciado" && (
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
      {state !== "Dados do licenciado" && state !== "form2" && (
        <Box sx={{ width: "100%"}}>
          <Skeleton width={"80%"} animation={"pulse"} height={50}/>
          <Skeleton width={"80%"} animation={"wave"} height={50}/>
          <Skeleton width={"80%"} animation={"pulse"} height={50}/>
          <Skeleton width={"80%"} animation={"wave"} height={50}/>
          <Skeleton width={"80%"} animation={"pulse"} height={50}/>
          <Skeleton width={"80%"} animation={"pulse"} height={50}/>
          </Box>
      )}
    </ContainerContent>
  );
};

export default ContentContainer;
