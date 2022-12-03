import React, { useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import userContext from '../../services/context';
import {logged} from '../../services/utils/logged';

export const Dashboard = ()=>{
    const navigate = useNavigate();
    const { form, setForm } = useContext(userContext);

    const logOut = ()=>{
        navigate("/");
        logged(false);
    }

    useEffect(()=>{
        console.log({form})
    },[form])
    
    return(
        <>
        <h1>Welcome to Dash</h1>
        <button onClick={(()=>logOut())}>
        Sair
        </button>
        </>
    )
}