import React from "react";
import Input from '../../../../Components/Input';
import { useState } from "react";
import { LoginContainer, ImagemContainer, Imagem, DivisorInput, ContainerButton, ButtonLogin, ForgotPassword, AlertContainer } from "./style";
import BasicAlerts from "../../../../Components/Alert";
import Rememberme from "../../../../Components/Remember";
const FormLogin = () =>{

    const[errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [checked, setChecked] = useState(false);
    const [modalAlert, setModalAlert] = useState({});

    const loginOnSytem = () =>{
        if(email, pass){

            setModalAlert({
                alertType:'success',
                message: 'Login efetuado com sucesso'
            });
            setTimeout(()=>{
                setModalAlert({
                    alertType:'',
                    message: ''
                }); 
            },5000)

        }else{
            setModalAlert({
                alertType:'error',
                message: 'Ops..! Preencha todos os campos'
            });
            setTimeout(()=>{
                setModalAlert({
                    alertType:'',
                    message: ''
                }); 
            },3000)
        }
    }


    const forgotPassword = ()=>{

        if(email){

            setModalAlert({
                alertType:'success',
                message: 'Enviamos um link para recuperar sua senha'
            });
            setTimeout(()=>{
                setModalAlert({
                    alertType:'',
                    message: ''
                }); 
            },5000)
           
        }else{
            let allErrors = ['email'];
            setErrors(allErrors)
            setModalAlert({
                alertType:'error',
                message: 'Por favor, digite seu email'
            })
            setTimeout(()=>{
                setModalAlert({
                    alertType:'',
                    message: ''
                });
                setErrors([])
            },3000)
        }
    }
    

    return(

        <>
        <AlertContainer>
<BasicAlerts modalAlert={modalAlert}/>
</AlertContainer>
<LoginContainer>
<ImagemContainer>
<Imagem src={'https://myg3.com.br/repo/img/procel_myg3.png'}/>
</ImagemContainer>
    
    
    <Input 
    name={'Email'} 
    onChange={(e)=>setEmail(e)} 
    placeholder={'Email'}
    value={email}
    error={errors?.includes('email')}
    type={'email'}
    />

    <Input 
    name={'Senha'} 
    onChange={(e)=>setPass(e)} 
    placeholder={'Senha'}
    value={pass}
    error={errors?.includes('senha')}
    type={'password'}
    />

    <DivisorInput>
        <Rememberme
        label={'Lembrar senha'}
        value={checked}
        onchange={(e)=>setChecked(e)}
        />
        <ForgotPassword onClick={()=>forgotPassword()}>Esquecia senha </ForgotPassword>

    </DivisorInput>

    <ContainerButton>

        <ButtonLogin onClick={()=>loginOnSytem()} >
            Entrar
        </ButtonLogin>


        

    </ContainerButton>
  
   </LoginContainer>
   </>


    )
}


export default FormLogin;

