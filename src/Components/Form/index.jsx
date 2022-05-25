import React, { useContext, useState } from "react";
import { ContainerForm, FieldContainerInput } from "./styled";
import InputData from "../InputData";
import userContext from "../../services/context";
import Button from "../Button";
const Form = () => {
  const [cod_licen, setCod_licen] = useState("");
  const [data_limite, setData_limite] = useState("");
  const [apelido, setApelido] = useState("");
  const [data_criacao, setData_criacao] = useState("");
  const [validade, setValidade] = useState("");
  const [ultima_verifica, setUltima_verifica] = useState("");
  const [dias_alerta, setDias_alerta] = useState("");
  const [qtde_indic, setQtde_indic] = useState("");
  const [qtde_check, setQtde_check] = useState("");
  const [qtde_relat, setQtde_relat] = useState("");
  const { setForm } = useContext(userContext);

  const clearAllFields = () => {
    setCod_licen("");
    setData_limite("");
    setApelido("");
    setData_criacao("");
    setValidade("");
    setUltima_verifica("");
    setDias_alerta("");
    setQtde_indic("");
    setQtde_check("");
    setQtde_relat("");
  };

  const saveAllFields = () => {
    const payload = {
      cod_licen: cod_licen,
      data_limite: data_limite,
      apelido: apelido,
      data_criacao: data_criacao,
      validade: validade,
      ultima_verifica: ultima_verifica,
      dias_alerta: dias_alerta,
      qtde_indic: qtde_indic,
      qtde_check: qtde_check,
      qtde_relat: qtde_relat,
    };

    setForm(payload);
    setCod_licen("");
    setData_limite("");
    setApelido("");
    setData_criacao("");
    setValidade("");
    setUltima_verifica("");
    setDias_alerta("");
    setQtde_indic("");
    setQtde_check("");
    setQtde_relat("");
  };

  return (
    <ContainerForm>
      <FieldContainerInput>
        <InputData
          placeholder={"Código do licenciado"}
          title={"Cód Licenciado"}
          uniqueKey={"cod_licen"}
          type={"text"}
          onChange={(e) => setCod_licen(e.target.value)}
          value={cod_licen}
        />
        <InputData
          placeholder={"Data Limite"}
          title={"Data Limite"}
          type={"date"}
          uniqueKey={"data_limite"}
          onChange={(e) => setData_limite(e.target.value)}
          value={data_limite}
        />
      </FieldContainerInput>
      <FieldContainerInput>
        <InputData
          placeholder={"Apelido"}
          title={"Apelido"}
          type={"text"}
          uniqueKey={"apelido"}
          onChange={(e) => setApelido(e.target.value)}
          value={apelido}
        />
        <InputData
          placeholder={"Data Criação"}
          title={"Data Criação"}
          type={"date"}
          uniqueKey={"data_criacao"}
          onChange={(e) => setData_criacao(e.target.value)}
          value={data_criacao}
        />
      </FieldContainerInput>
      <FieldContainerInput>
        <InputData
          placeholder={"Validade"}
          title={"Validade"}
          type={"date"}
          uniqueKey={"validade"}
          onChange={(e) => setValidade(e.target.value)}
          value={validade}
        />
        <InputData
          placeholder={"Última verificação"}
          title={"Última verificação"}
          type={"date"}
          uniqueKey={"ultima_verifica"}
          onChange={(e) => setUltima_verifica(e.target.value)}
          value={ultima_verifica}
        />
      </FieldContainerInput>
      <FieldContainerInput>
        <InputData
          placeholder={"Dias alerta"}
          title={"Dias alerta"}
          type={"text"}
          uniqueKey={"dias_alerta"}
          onChange={(e) => setDias_alerta(e.target.value)}
          value={dias_alerta}
        />
        <InputData
          placeholder={"Qtde indicadores"}
          title={"Qtde indicadores"}
          type={"text"}
          uniqueKey={"qtde_indic"}
          onChange={(e) => setQtde_indic(e.target.value)}
          value={qtde_indic}
        />
        <InputData
          placeholder={"Qtde Checkwin"}
          title={"Qtde Checkwin"}
          type={"text"}
          uniqueKey={"qtde_check"}
          onChange={(e) => setQtde_check(e.target.value)}
          value={qtde_check}
        />
        <InputData
          placeholder={"Qtde Relatórios"}
          title={"Qtde Relatórios"}
          type={"text"}
          uniqueKey={"qtde_relat"}
          onChange={(e) => setQtde_relat(e.target.value)}
          value={qtde_relat}
        />
      </FieldContainerInput>

      <Button
        label={"Salvar"}
        color={"green"}
        onClick={() => saveAllFields()}
      />
      <Button
        label={"Cancelar"}
        color={"orange"}
        onClick={() => clearAllFields()}
      />
    </ContainerForm>
  );
};

export default Form;
