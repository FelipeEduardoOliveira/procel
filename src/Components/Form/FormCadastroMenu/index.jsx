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

const FormCadMenu = ({ setUpdateValue, newFields, children, saveUpdate }) => {
  const [list, setList] = useState([]);
  const { state } = useContext(userContext);
  const [valueUpdate, setValueUpdate] = useState({});
  const copyForm = (value) => {
    setList(value);
  };

  const getPaylodNewValues = () => {
   let teste =  list.reduce((target, key, index) => {
      target[key.fieldname] = key.conteudo;

      return target
    });

    return teste;
  };

  const setValue = (index, name, value) => {
    let copy = [...list];
    copy[index][name] = value;
    setList(copy);
  };

  const handleSubmit = async (e) => {
   
    let payload = await getPaylodNewValues();
       setUpdateValue(payload);
       saveUpdate(payload)
    e.preventDefault();
  };

  useEffect(() => {
    copyForm(newFields);
  }, []);

  return (
    <ContainerForm onSubmit={(e) => handleSubmit(e)}>
      <FieldContainerInput>
        <FilterContainerInputSepareted>
          <FilterContainerInputSepareted__div width={"20%"}>
            {list.map((item, index) => {
              if (item?.fieldname === "cod_sistema") {
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
              if (item?.fieldname === "atv_sistema") {
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
              if (item?.fieldname === "dtc_sistema") {
                // setValueUpdate({...valueUpdate, dtc_sistema:item.conteudo})
                return (
                  <InputData
                    key={item.cod_g3camposcad}
                    placeholder={item.caption}
                    title={item.caption}
                    uniqueKey={item.fieldname}
                    type={"date"}
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
        </FilterContainerInputSepareted>

        {list.map((item, index) => {
          if (item?.fieldname === "nome_sistema") {
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
          if (item?.fieldname === "obs_sistema") {
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
