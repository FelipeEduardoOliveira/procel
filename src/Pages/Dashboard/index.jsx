import React from 'react';
import {useNavigate} from 'react-router-dom'
import {logged} from '../../services/utils/logged';

export const Dashboard = ()=>{
    const navigate = useNavigate();

    const logOut = ()=>{
        navigate("/");
        logged(false);
    }
    
    return(
        <>
        <h1>Welcome to Dash</h1>
        <button onClick={(()=>logOut())}>
        Sair
        </button>
        </>
    )
}