import React from "react";
import { ContainerLicense, TitleContainer } from "./style";
import BasicCard from "../../Components/BasicCard";
import { Box, Grid } from "@mui/material";
import api from "../../services/Api";
import { useEffect } from "react";
import { useState } from "react";

 export const LicenseSelect = () => {

    const [license, setLicense] = useState([]);

    const getLicenciamento = async() =>{
       let licenseApi = await api.post('usuario/sistemausuario', {COD_USUARIO: 1})
        .then((res)=>{
            return res.data;
        });
        setLicense(licenseApi);
    }


    const handleLicenseComponent = () =>{

        return license.map((item)=>{
            return(

                <BasicCard data={item}/>
                
            )
        })
        
    }


    useEffect(()=>{
        getLicenciamento();
    },[])

  return (
    <ContainerLicense>
      <TitleContainer>
        <h1>Selecione o licenciamento</h1>
      </TitleContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {handleLicenseComponent()}
        </Grid>
      </Box>
      {/* <h1> Selecione a licença</h1> */}
    </ContainerLicense>
  );
};
