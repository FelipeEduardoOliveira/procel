import React from "react";
import { useNavigate } from "react-router-dom";
import { logged } from "../../../../services/utils/logged";
import * as SC from '../../style';
const AvatarMenu = ({showAvatarMenu}) => {
    const navigate = useNavigate();

    const logOut = () => {
        navigate("/");
        logged(false);
      };
  return (
    <SC.AvatarListMenu showAvatarMenu={showAvatarMenu}>
        <ul style={{listStyle:'none'}}>
        <SC.ItemAvatarListMenu onClick={() => logOut()}>
        Sair
        </SC.ItemAvatarListMenu>
        </ul>
    </SC.AvatarListMenu>
  );
};

export default AvatarMenu;
