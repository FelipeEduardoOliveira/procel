import React, { useContext, useEffect, useState } from "react";
import {
  ContainerForm,
  FieldContainerInput,
  FilterContainerInputSepareted,
  FilterContainerInputSepareted__div,
  CheckboxContentInput,
} from "./styled";
import InputData from "../../InputData";
import userContext from "../../../services/context";

const FormCadMenu = ({ actionButton }) => {
  const { setForm } = useContext(userContext);
  const [cod_cad_men, setCod_cad_men] = useState("");
  const [date_criac, setDate_criac] = useState("");
  const [nome_cad_menu, setNome_cad_menu] = useState("");
  const [active_id, setActive_id] = useState(false);

  useEffect(() => {
    if (actionButton === "save") {
      saveAllFields();
      return;
    }

    if (actionButton === "clean") {
      clearAllFields();
      return;
    }
  }, [actionButton]);
  const clearAllFields = () => {
    setCod_cad_men("");
    setDate_criac("");
    setNome_cad_menu("");
    setActive_id(false);
  };

  const saveAllFields = () => {
    const payload = {
      cod_cad_men: cod_cad_men,
      date_criac: date_criac,
      nome_cad_menu: nome_cad_menu,
      active_id: active_id
    };

    setForm(payload);
    setCod_cad_men("");
    setDate_criac("");
    setNome_cad_menu("");
    setActive_id(false)
  };

  return (
    <ContainerForm>
      <FieldContainerInput>
        <FilterContainerInputSepareted>
          <FilterContainerInputSepareted__div width={"20%"}>
            <InputData
              placeholder={"Código"}
              title={"Código"}
              uniqueKey={"cod_cad_men"}
              type={"text"}
              onChange={(e) => setCod_cad_men(e.target.value)}
              value={cod_cad_men}
            />
          </FilterContainerInputSepareted__div>

          <FilterContainerInputSepareted__div width={"70%"}>
            <CheckboxContentInput>
              <label htmlFor="ativo_id">
                Ativo
                
              </label>
              <input type={"checkbox"} id={'ativo_id'} onClick={() => setActive_id(!active_id)} defaultChecked={active_id} />
            </CheckboxContentInput>
            <InputData
              placeholder={"Data de criação"}
              title={"Data de criação"}
              type={"date"}
              uniqueKey={"date_criac"}
              onChange={(e) => setDate_criac(e.target.value)}
              value={date_criac}
            />
          </FilterContainerInputSepareted__div>
        </FilterContainerInputSepareted>

        <InputData
          placeholder={"Nome"}
          title={"Nome"}
          type={"text"}
          uniqueKey={"nome_cad_menu"}
          onChange={(e) => setNome_cad_menu(e.target.value)}
          value={nome_cad_menu}
        />
      </FieldContainerInput>
    </ContainerForm>
  );
};

export default FormCadMenu;
