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

export default function BasicCard({data}) {
  return (
      <ContainerCard>
        <HeaderCard>
          <Title>{data?.apelido}</Title>
        </HeaderCard>

        <BodyCard>
          <Subtitle>
            Licenciamento: <Description>{data?.cod_licenciamento | '-'}</Description>
          </Subtitle>
        </BodyCard>
      </ContainerCard>
  );
}
