import {Route, Routes, BrowserRouter, Outlet, Navigate} from 'react-router-dom';
import Login from '../../Pages/Login';
import ContentContainer from '../../Components/Content';
import {UserContextProvider} from '../context';
import { Dashboard } from '../../Pages/Dashboard';
import { LicenseSelect } from '../../Pages/LicenseSelecte';

const Rotas = () =>{


    return(

        <BrowserRouter>
        <UserContextProvider>
            <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
                <Route path='/' element={<Login/>} />
                <Route path='/license' element={<LicenseSelect/>} />
                <Route path='/only-form/:idOnlyPage/:COD_LICENCIAMENTO/:COD_ROTINA/:COD_USUARIO/:TIPO/:COD_PK'  element={<ContentContainer/>} />
            </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
}


const PrivateRoutes = () => {
  let auth = JSON.parse(localStorage.getItem('isLogged'));
  return (
      auth?.isLogged ? <Outlet/> : <Navigate to='/'/>
    )
  }


export default Rotas;