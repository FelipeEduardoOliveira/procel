import React, { useContext, useState } from "react";
import { Paragraph, ContainerItemMenu, TitleContainer, SubmenuList } from "./styled";
import { MenuItem } from "../../services/utils/menu";
import userContext from "../../services/context";
import { useNavigate } from "react-router-dom";

const ItemMenu = () => {
  const navigate = useNavigate();
  const [showSubmenu, setShowSubmenu] = useState(false)

  const { saveState } = useContext(userContext);


  


  const handleClickRoute = (item) => {

    if(item?.submenu && Object.keys(item?.submenu).length >= 1){
        return setShowSubmenu(!showSubmenu)
    }

    item?.label && saveState(item?.label);
    item?.link && navigate(item?.link);
   
  };

  const renderItem = () => {
    return MenuItem.map((item) => {
      return (
        <ContainerItemMenu
          key={item.codeId}
          
        >
          <TitleContainer>
            <Paragraph onClick={() => handleClickRoute(item)} id={item.codeId}>{item.name}</Paragraph>
            {item.icon && <img src={item.icon} />}
          </TitleContainer>

          {showSubmenu && item.submenu && (
            <SubmenuList>
              <ul>
                {item.submenu.map((item) => {
                  return <Paragraph onClick={() => handleClickRoute(item)} id={item.subId}>{item.name}</Paragraph>;
                })}
              </ul>
            </SubmenuList>
          )}
        </ContainerItemMenu>
      );
    });
  };
  return renderItem();
};

export default ItemMenu;
