import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Aplication from '../../Layout/HomeLayout';
import ContentContainer from '../../Components/Content';

const Rotas = () =>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Aplication/>} />
                <Route path='/only-form/:idOnlyPage'  element={<ContentContainer/>} />
            </Routes>
        </BrowserRouter>
    );
}


export default Rotas;