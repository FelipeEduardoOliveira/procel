import React from "react";
import { ContainerLicense, GridShowLicense, TitleContainer } from "./style";
import CardTeste from "../../Components/BasicCard/index2.jsx";
import api from "../../services/Api";
import { useEffect } from "react";
import { useState } from "react";

export const LicenseSelect = () => {
  const [license, setLicense] = useState([]);

  const getLicenciamento = async () => {
    let licenseApi = await api
      .post("usuario/sistemausuario", { COD_USUARIO: 1 })
      .then((res) => {
        return res.data;
      });
    setLicense(licenseApi);
  };

  const handleLicenseComponent02 = () => {
    return license.map((item) => {
      return <CardTeste data={item} />;
    });
  };

  useEffect(() => {
    getLicenciamento();
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
