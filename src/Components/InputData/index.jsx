import React from 'react';
import {ContainerInput, TitleInput, Input} from './styled';


const InputData = ({placeholder, title, type, onChange, uniqueKey, value}) =>{

    return(
        <ContainerInput>
            <TitleInput>{title}</TitleInput>
            <Input type={type} placeholder={placeholder} id={uniqueKey} onChange={(e) => onChange(e)} value={value}/>
        </ContainerInput>
    );
}

export default InputData;