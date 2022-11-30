import { Grid } from "@mui/material";
import * as React from "react";
import {
  ContainerCard,
  HeaderCard,
  BodyCard,
  ButtonContainerCard,
  FlagActive,
  Title,
  Description,
  Subtitle,
  Button
} from "./styled";

export default function CardTeste({data}) {
  return (
    <Grid item xs={4} key={"teste"}>
      <ContainerCard>
        <HeaderCard>
          <Title>{data?.apelido}</Title>
        </HeaderCard>

        <BodyCard>
          <Subtitle>
            Numero do licenciamento: <Description>{data?.cod_licenciamento | '-'}</Description>
          </Subtitle>
        </BodyCard>
      </ContainerCard>
    </Grid>
  );
}
