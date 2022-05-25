import React, {useContext} from "react";
import {Paragraph, ContainerItemMenu} from './styled';
import {MenuItem} from '../../services/utils/menu';
import userContext from '../../services/context';

const ItemMenu = () =>{

    const {saveState} = useContext(userContext)

    const renderItem = () =>{
     
      return(
        MenuItem.map((item) =>{
            return(
                <ContainerItemMenu key={item.codeId} onClick={() => saveState(item.label)}>
                    <Paragraph id={'Paragraph'}>{item.name}</Paragraph>
                </ContainerItemMenu>
                
            )
        })
      );
      
        
    }
    return(
        renderItem()
    );
}

export default ItemMenu; 