import React, { useContext, useEffect, useState } from "react";
import {
  ContainerForm,
  FieldContainerInput,
  FilterContainerInputSepareted,
  FilterContainerInputSepareted__div,
  CheckboxContentInput,
} from "./styled";
import InputData from "../../InputData";
import TextArea from "../../TextArea";
import LineSeparator from "../../LineSeparator";
import userContext from "../../../services/context";

const FormCadMenu = ({fieldsRender, children }) => {
  const { setForm } = useContext(userContext);
  const [list, setList] = useState([]);

  const copyForm = (value) => {
    setList(value);
  };
  const setValue = (index, name, value) => {  
    let copy = [...list]
    copy[index][name] = value;
    setList(copy);
  };

  const handleSubmit=(e)=>{

    localStorage.setItem('SetDataForm', JSON.stringify(list));
    alert('Requisição enviada com sucesso!')

    e.preventDefault();
  }

  

  useEffect(() => {
    copyForm(fieldsRender);
  }, []);



  return (
    <ContainerForm onSubmit={(e)=>handleSubmit(e)}>
      <FieldContainerInput>
        <FilterContainerInputSepareted>
          <FilterContainerInputSepareted__div width={"20%"}>
            {list.map((item, index) => {
              if (item?.fieldname === "cod_sistema") {
                return (
                  <InputData
                  key={item.cod_g3camposcad}
                    placeholder={item.caption}
                    title={item.caption}
                    uniqueKey={item.fieldname}
                    type={"text"}
                    onChange={(e) => setValue(index, 'conteudo', e.target.value)}
                    value={item.conteudo}
                    readonly={item.readonly}
                    obrigatorio={item.obrigatorio}
                  />
                );
              }
            })}
          </FilterContainerInputSepareted__div>

          <FilterContainerInputSepareted__div width={"70%"}>
            {list.map((item, index) => {
              if (item?.fieldname === "atv_sistema") {
                return (
                  <CheckboxContentInput   key={item.cod_g3camposcad}>
                    <label htmlFor="ativo_id">{item.caption}</label>
                    <input
                      type={"checkbox"}
                      id={item?.fieldname}
                      onClick={() => setValue(index, 'conteudo',item.conteudo === "V" ? 'F' : 'V')}
                      defaultChecked={item.conteudo === "V" ? true : false}
                    />
                  </CheckboxContentInput>
                );
              }
            })}
            {list.map((item, index) => {
              if (item?.fieldname === "dtc_sistema") {
                return (
                  <InputData
                  key={item.cod_g3camposcad}
                    placeholder={item.caption}
                    title={item.caption}
                    uniqueKey={item.fieldname}
                    type={"date"}
                    onChange={(e) =>  setValue(index, 'conteudo', e.target.value)}
                    value={item.conteudo}
                    readonly={item.readonly}
                    obrigatorio={item.obrigatorio}
                  />
                );
              }
            })}
          </FilterContainerInputSepareted__div>
        </FilterContainerInputSepareted>

        {list.map((item, index) => {
          if (item?.fieldname === "nome_sistema") {
            return (
              <InputData
              key={item.cod_g3camposcad}
                placeholder={item.caption}
                title={item.caption}
                uniqueKey={item.fieldname}
                type={"text"}
                onChange={(e) =>  setValue(index, 'conteudo', e.target.value)}
                value={item.conteudo}
                readonly={item.readonly}
                obrigatorio={item.obrigatorio}
              />
            );
          }
        })}
        {list.map((item, index) => {
          if (item?.fieldname === "obs_sistema") {
            return (
              <TextArea
              key={item.cod_g3camposcad}
                id={item.fieldname}
                placeholder={item.caption}
                title={item.caption}
                onChange={(e) =>  setValue(index, 'conteudo', e.target.value)}
                value={item.conteudo}
                readonly={item.readonly}
                obrigatorio={item.obrigatorio}
              />
            );
          }
        })}

        <LineSeparator />
        {children}
      </FieldContainerInput>
    </ContainerForm>
  );
};

export default FormCadMenu;
