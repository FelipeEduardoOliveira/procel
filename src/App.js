import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import SidebarMenu from "./Components/SidebarMenu";
import HeaderTitle from './Components/HeaderTitle';
import ContentContainer from './Components/Content';
import "./App.css";
import {UserContextProvider} from './services/context';
import { Container, Sidebar, Header, Content } from "./styles/Global";

function App() {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;
