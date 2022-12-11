import React from "react";
import * as SC from "./style";
import MenuIcon from "../../assets/menu_navigation_icon.png";
import AlertNotification from "../../assets/alert_notification.svg";
import { useState } from "react";
import { useEffect } from "react";
import Avatar from "./Avatar";


const Header = () => {
  const [hasNotification, setHasNotification] = useState(true);

  useEffect(()=>{
    console.log({hasNotification})
  },[hasNotification])
  return (
    <SC.ContainerHeader>
      <SC.IconNavigate src={MenuIcon} />
      <SC.UserContainerActions>
        <SC.ItemList>
          <SC.ContainerNotification onClick={() => setHasNotification(!hasNotification)}>
            <SC.BulletNotification hasNotification={hasNotification}/>
            <SC.IconNavigate src={AlertNotification} />
          </SC.ContainerNotification>
        </SC.ItemList>
        <SC.ItemList>
          <Avatar/>
        </SC.ItemList>
      </SC.UserContainerActions>
    </SC.ContainerHeader>
  );
};

export default Header;
