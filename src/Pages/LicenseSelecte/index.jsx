import React from "react";
import { ContainerLicense, TitleContainer } from "./style";
import BasicCard from "../../Components/BasicCard";
import CardTeste from "../../Components/BasicCard/index2.jsx";
import { Box, Grid } from "@mui/material";
import api from "../../services/Api";
import { useEffect } from "react";
import { useState } from "react";

export const LicenseSelect = () => {
  const [license, setLicense] = useState([]);
  const [typeCard, setTypeCard] = useState("Card-1");

  const getLicenciamento = async () => {
    let licenseApi = await api
      .post("usuario/sistemausuario", { COD_USUARIO: 1 })
      .then((res) => {
        return res.data;
      });
    setLicense(licenseApi);
  };

  const handleLicenseComponent = () => {
    return license.map((item) => {
      return <BasicCard data={item} />;
    });
  };
  const handleLicenseComponent02 = () => {
    return license.map((item) => {
      return <CardTeste data={item} />;
    });
  };

  useEffect(() => {
    getLicenciamento();
  }, []);
  useEffect(() => {
    console.log({ typeCard });
  }, [typeCard]);

  return (
    <ContainerLicense>
      <TitleContainer>
        <h1>Selecione o licenciamento</h1>

        <div style={{ marginLeft: 20 }}>
          <label>
            <input
              type="radio"
              id="Card01"
              name="tipeCard"
              value="Card-1"
              onChange={() => setTypeCard("Card-1")}
              checked={typeCard === "Card-1"}
            />
            Card - 01
          </label>
          <label style={{ marginLeft: 10 }}>
            <input
              type="radio"
              id="Card0"
              name="tipeCard"
              value="Card-2"
              checked={typeCard === "Card-2"}
              onChange={() => setTypeCard("Card-2")}
            />
            Card - 02
          </label>
        </div>
      </TitleContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 3, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {typeCard === "Card-2" && handleLicenseComponent()}
          {typeCard === "Card-1" && handleLicenseComponent02()}
        </Grid>
      </Box>
    </ContainerLicense>
  );
};
