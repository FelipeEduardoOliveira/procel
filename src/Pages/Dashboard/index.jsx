import React from 'react';
import {useNavigate} from 'react-router-dom'

export const Dashboard = ()=>{
    const navigate = useNavigate();

    const logOut = ()=>{
        navigate("/");
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