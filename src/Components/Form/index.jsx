import React, { useContext } from "react";
import { ContainerForm, FieldContainerInput } from "./styled";
import InputData from "../InputData";
import userContext from "../../services/context";
const Form = () => {
  const { form, setForm } = useContext(userContext);

  const onChange = (e) => {
    let actualFiel = e.target.id;
    let actualValue = e.target.value;
    setForm({
      ...form,
      [actualFiel]: actualValue,
    });
  };
  return (
    <ContainerForm>
      <FieldContainerInput>
        <InputData
          placeholder={"Código do licenciado"}
          title={"Cód Licenciado"}
          uniqueKey={"cod_licen"}
          type={"text"}
          onChange={onChange}
          value={form.cod_licen}
        />
        <InputData
          placeholder={"Data Limite"}
          title={"Data Limite"}
          type={"date"}
          uniqueKey={"data_limite"}
          onChange={onChange}
          value={form.data_limite}
        />
      </FieldContainerInput>
      <FieldContainerInput>
        <InputData
          placeholder={"Apelido"}
          title={"Apelido"}
          type={"text"}
          uniqueKey={"apelido"}
          onChange={onChange}
          value={form.apelido}
        />
        <InputData
          placeholder={"Data Criação"}
          title={"Data Criação"}
          type={"date"}
          uniqueKey={"data_criacao"}
          onChange={onChange}
          value={form.data_criacao}
        />
      </FieldContainerInput>
      <FieldContainerInput>
        <InputData
          placeholder={"Validade"}
          title={"Validade"}
          type={"date"}
          uniqueKey={"validade"}
          onChange={onChange}
          value={form.validade}
        />
        <InputData
          placeholder={"Última verificação"}
          title={"Última verificação"}
          type={"date"}
          uniqueKey={"ultima_verifica"}
          onChange={onChange}
          value={form.ultima_verifica}
        />
      </FieldContainerInput>
      <FieldContainerInput>
        <InputData
          placeholder={"Dias alerta"}
          title={"Dias alerta"}
          type={"text"}
          uniqueKey={"dias_alerta"}
          onChange={onChange}
          value={form.dias_alerta}
        />
        <InputData
          placeholder={"Qtde indicadores"}
          title={"Qtde indicadores"}
          type={"text"}
          uniqueKey={"qtde_indic"}
          onChange={onChange}
          value={form.qtde_indic}
        />
        <InputData
          placeholder={"Qtde Checkwin"}
          title={"Qtde Checkwin"}
          type={"text"}
          uniqueKey={"qtde_check"}
          onChange={onChange}
          value={form.qtde_check}
        />
        <InputData
          placeholder={"Qtde Relatórios"}
          title={"Qtde Relatórios"}
          type={"text"}
          uniqueKey={"qtde_relat"}
          onChange={onChange}
          value={form.qtde_relat}
        />
      </FieldContainerInput>
    </ContainerForm>
  );
};

export default Form;
