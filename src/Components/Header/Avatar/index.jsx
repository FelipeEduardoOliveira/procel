import React from "react";
import * as SC from '../style';
import Avatar_Icon from '../../../assets/Avatar/homem_terno.jpg';
import AvatarMenu from "./Components/AvatarMenu";
import { useState } from "react";
const Avatar = () => {
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  
  return (
    <SC.ContainerAvatar Avatar_Icon={Avatar_Icon} onClick={() => setShowAvatarMenu(!showAvatarMenu)}>
      <AvatarMenu showAvatarMenu={showAvatarMenu}/>
    </SC.ContainerAvatar>
  );
};

export default Avatar;
