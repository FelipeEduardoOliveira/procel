import React, { useEffect, useState, useContext } from "react";
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

const FormCadMenu = ({  children }) => {
  const { list, setList } = useContext(userContext);
  

 

  const setValue = (index, name, value) => {
    let copy = [...list];
    copy[index][name] = value;
    setList(copy);
  };


  const onSubmit = (e)=>{

    console.log({e})
    e.preventDefault()
  }
  


  return (
    <ContainerForm onSubmit={(e) =>onSubmit()}>
      <FieldContainerInput>
        <FilterContainerInputSepareted>
          <FilterContainerInputSepareted__div width={"20%"}>
            {list&& list.map((item, index) => {
              if (item?.tipo_campo === "cod") {
                // setValueUpdate({...valueUpdate, cod_sistema:item.conteudo})
                return (
                  <InputData
                    key={item.cod_g3camposcad}
                    placeholder={item.caption}
                    title={item.caption}
                    uniqueKey={item.fieldname}
                    type={"text"}
                    onChange={(e) =>
                      setValue(index, "conteudo", e.target.value)
                    }
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
              if (item?.tipo_campo === "atv") {
                // setValueUpdate({...valueUpdate, atv_sistema:item.conteudo})
                return (
                  <CheckboxContentInput key={item.cod_g3camposcad}>
                    <label htmlFor="ativo_id">{item.caption}</label>
                    <input
                      type={"checkbox"}
                      id={item?.fieldname}
                      onClick={() =>
                        setValue(
                          index,
                          "conteudo",
                          item.conteudo === "V" ? "F" : "V"
                        )
                      }
                      defaultChecked={item.conteudo === "V" ? true : false}
                    />
                  </CheckboxContentInput>
                );
              }
            })}
            {list.map((item, index) => {
              if (item?.tipo_campo === "dtc") {
                // setValueUpdate({...valueUpdate, dtc_sistema:item.conteudo})
                
                return (
                  <InputData
                    key={item.cod_g3camposcad}
                    placeholder={item.caption}
                    title={item.caption}
                    uniqueKey={item.fieldname}
                    type={"datetime-local"}
                    mydateFormat="DD/MM/YYYY, hh:mm:ss"
                    onChange={(e) =>
                      {setValue(index, "conteudo", e.target.value)
                    }
                    }
                    value={item.conteudo&&item.conteudo.substring(16,0)}
                    readonly={item.readonly}
                    obrigatorio={item.obrigatorio}
                  />
                );
              }
            })}
          </FilterContainerInputSepareted__div>
        </FilterContainerInputSepareted>

        {list.map((item, index) => {
          if (item?.tipo_campo === "nome") {
            // setValueUpdate({...valueUpdate, nome_sistema:item.conteudo})
            return (
              <InputData
                key={item.cod_g3camposcad}
                placeholder={item.caption}
                title={item.caption}
                uniqueKey={item.fieldname}
                type={"text"}
                onChange={(e) => setValue(index, "conteudo", e.target.value)}
                value={item.conteudo}
                readonly={item.readonly}
                obrigatorio={item.obrigatorio}
              />
            );
          }
        })}
        {list.map((item, index) => {
          if (item?.tipo_campo === "obs") {
            // setValueUpdate({...valueUpdate, obs_sistema:item.conteudo})
            return (
              <TextArea
                key={item.cod_g3camposcad}
                id={item.fieldname}
                placeholder={item.caption}
                title={item.caption}
                onChange={(e) => setValue(index, "conteudo", e.target.value)}
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
