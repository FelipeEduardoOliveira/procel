import React from 'react';
import ItemMenu from '../ItemMenu';
import {ContainerSidebarMenu} from './styled';

const SidebarMenu = () =>{
    return(
        <ContainerSidebarMenu>
            <ItemMenu/>
        </ContainerSidebarMenu>
    );
}


export default SidebarMenu;