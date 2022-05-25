import React, {useContext} from "react";
import {ContainerHeaderTitle, ContainerHeaderLetter} from './styled';
import userContext from '../../services/context';
const HeaderTitle = () =>{

    const {state} = useContext(userContext)
    return(
        <ContainerHeaderTitle>
            <ContainerHeaderLetter>
                {state}
            </ContainerHeaderLetter>
        </ContainerHeaderTitle>
    );
}


export default HeaderTitle;