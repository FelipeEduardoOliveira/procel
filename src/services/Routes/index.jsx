import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Aplication from '../../Layout/HomeLayout';
import Login from '../../Pages/Login';
import ContentContainer from '../../Components/Content';
import {UserContextProvider} from '../context';
import { Dashboard } from '../../Pages/Dashboard';
const Rotas = () =>{


    return(

        <BrowserRouter>
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/only-form/:idOnlyPage/:COD_LICENCIAMENTO/:COD_ROTINA/:COD_USUARIO/:TIPO/:COD_PK'  element={<ContentContainer/>} />
            </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
}


export default Rotas;