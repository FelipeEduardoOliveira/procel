import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: row;
`;

//  CONTAINER LISTA DE MENU --------------------
export const LeftContainer = styled.div`
  width: ${(props) => (props.openMenuList ? "280px" : "0px")};
  height: 100vh;
  transition: all 0.5s ease;
`;
export const LogoMenuList = styled.img`
  width: 200px;
  padding: 20px;
`;

export const AplicationSidebarMenu = styled.div`
 
  height: 80%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const FooterMenuList = styled.div`
display: ${(props) => (props.openMenuList ? 'flex' : 'none')};
flex-direction: column;
color: white;
padding: 20px;
`;
//  CONTAINER LISTA DE MENU --------------------

export const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AplicationHeader = styled.div`
  /* grid-area: 1 / 2 / 2 / 12; */
`;

export const AplicationSectionDashboard = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
 height: 100%;
`;
