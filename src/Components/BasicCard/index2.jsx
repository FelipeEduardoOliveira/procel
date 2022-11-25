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
        <FlagActive>
          <p>Ativo</p>
        </FlagActive>
        <HeaderCard>
          <Title>{data?.nome_sistema}</Title>
          <Description >{data?.apelido}</Description>
        </HeaderCard>

        <BodyCard>
          <Subtitle>
            Numero do licenciamento: <Description>13123</Description>
          </Subtitle>
          <Subtitle>
            Data de vencimento: <Description>{data?.validade.split('T')[0]}</Description>
          </Subtitle>
        </BodyCard>
      </ContainerCard>
    </Grid>
  );
}
