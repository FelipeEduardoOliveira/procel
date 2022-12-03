
import * as React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../../services/context";
import { logged } from "../../services/utils/logged";

import {
  ContainerCard,
  HeaderCard,
  BodyCard,
  Title,
  Description,
  Subtitle,
} from "./styled";

export default function BasicCard({data}) {
  const { form, setForm } = useContext(userContext);
  
  const navigate = useNavigate();


  const handleClick = () =>{
    setForm({...form, cardSelected: data});
    
    logged(true);
    navigate("/dashboard");
  }

  return (
      <ContainerCard key={data.apelido} onClick={() =>handleClick()}>
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
