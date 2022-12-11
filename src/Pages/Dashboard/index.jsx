import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import userContext from "../../services/context";
import { logged } from "../../services/utils/logged";
import SidebarMenu from "../../Components/SidebarMenu";
import { ContainerDashboard, AplicationHeader, AplicationSectionDashboard, AplicationSidebarMenu, LeftContainer, RightContainer, FooterMenuList, LogoMenuList } from "./style";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { form, openMenuList } = useContext(userContext);
  const logOut = () => {
    navigate("/");
    logged(false);
  };

  useEffect(() => {
    console.log({ form });
  }, [form]);

  return (
    <ContainerDashboard>
        <LeftContainer openMenuList={openMenuList}>

            <LogoMenuList src={"https://myg3.com.br/repo/img/procel_myg3.png"}/>

        <AplicationSidebarMenu>
        <SidebarMenu />
      </AplicationSidebarMenu>

      <FooterMenuList openMenuList={openMenuList}>
            <p>Termos de uso</p>
            <p>Outros links externos </p>
      </FooterMenuList>
    
        </LeftContainer>
      
      <RightContainer>

      <AplicationHeader>
        <Header />
      </AplicationHeader>

      <AplicationSectionDashboard>
        <h1>Welcome to Dash</h1>
      </AplicationSectionDashboard>

      </RightContainer>

      
    </ContainerDashboard>
  );
};
