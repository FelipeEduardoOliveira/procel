import React, { useContext } from "react";
import { ContainerLicense, GridShowLicense, TitleContainer } from "./style";
import BasicCard from "../../Components/BasicCard/index.jsx";
import api from "../../services/Api";
import { useEffect } from "react";
import { useState } from "react";
import userContext from "../../services/context";
import { useNavigate } from "react-router-dom";

export const LicenseSelect = () => {
  const [license, setLicense] = useState([]);
  const { form, setForm } = useContext(userContext);
  const navigate = useNavigate();



  const verifyIsLogged = () => {
    let auth = JSON.parse(localStorage.getItem("isLogged"));
    setForm({ ...form, auth });
    if (auth?.isLogged) {
      navigate("/dashboard");
    }else{
      getLicenciamento();
    }
  };

  const getLicenciamento = async () => {
    let licenseApi = await api
      .post("usuario/sistemausuario", { COD_USUARIO: form.user.cod_usuario })
      .then((res) => {
        return res.data;
      });
    setLicense(licenseApi);
  };

  const handleLicenseComponent02 = () => {
    return license.map((item) => {
      return <BasicCard data={item} key={item.apelido}/>;
    });
  };

  useEffect(() => {
  
   verifyIsLogged();
  }, []);

  return (
    <ContainerLicense>
      <TitleContainer>
        <h1>Selecione o licenciamento</h1>

      </TitleContainer>
      <GridShowLicense>
      {handleLicenseComponent02()}
      </GridShowLicense>
    </ContainerLicense>
  );
};
