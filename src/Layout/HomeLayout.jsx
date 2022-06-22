import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import SidebarMenu from "../Components/SidebarMenu";
import HeaderTitle from '../Components/HeaderTitle';
import ContentContainer from '../Components/Content';
import "../App.css";

import { Container, Sidebar, Header, Content } from "../styles/Global";

function Aplication() {
  return (
      <Container>
      <Sidebar>
        {" "}
        <SidebarMenu />{" "}
        
      </Sidebar>
      <Header>
        {" "}
      <HeaderTitle/>
      </Header>
      <Content>
        {" "}
        <ContentContainer/>

        
      </Content>
    </Container>
  );
}

export default Aplication;
