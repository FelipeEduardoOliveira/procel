import React, { useContext } from "react";
import { ContainerContent } from "./styled";
import Form from "../Form";
import userContext from "../../services/context";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const ContentContainer = () => {
  const { state } = useContext(userContext);


  
  return (
    <ContainerContent>
      {state === "Dados do licenciado" && (
        <>
          <Form />
        </>
      )}
      {state !== "Dados do licenciado" && (
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
