import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Aplication from '../../Layout/HomeLayout';
import ContentContainer from '../../Components/Content';
import {UserContextProvider} from '../context';

const Rotas = () =>{
    return(

        <BrowserRouter>
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Aplication/>} />
                <Route path='/only-form/:idOnlyPage/:COD_LICENCIAMENTO/:COD_ROTINA/:COD_USUARIO/:TIPO/:COD_PK'  element={<ContentContainer/>} />
            </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
}


export default Rotas;