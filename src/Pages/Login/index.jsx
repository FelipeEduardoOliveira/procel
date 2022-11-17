import React, { useEffect, useState } from "react";
import FormLogin from "./Components/FormLogin";
import ForgetPassword from "./Components/ForgetPassword";
import ChangePassword from "./Components/ChangePassword";
import {
  notify,
  sendBodyToLoginApi,
  validateLoginFields,
  sendBodyToForgtPasswordApi,
  needChangePassword,
  validateRefreshPassword,
  sendBodyRefreshPasswordApi,
  saveAccess,
  maskCnpj
} from "./utils";
import {
  ContainerLogin,
  FormContainer,
  DivisorInput,
  ForgotPassword,
  ButtonLogin,
  ContainerButton,
  AlertContainer,
  ImagemContainer,
  Imagem,
  ContainerLoad,
} from "./style";
import Rememberme from "../../Components/Remember";
import BasicAlerts from "../../Components/Alert";
import Loading from "../../Components/Loading";
import { useNavigate   } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassoword] = useState("");
  const [errors, setErrors] = useState([]);
  const [modalAlert, setModalAlert] = useState({});
  const [rememberPassword, setRememberPassword] = useState(false);
  const [sendForgetPass, setSendForgetPass] = useState(false);
  const [refreshPassword, setRefreshPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codUser, setCodUser] = useState(0);
  const navigate = useNavigate();
  // notify("warning", "Usuario nao encontrado", setModalAlert)

  const logIn = async () => {
    let invalidFields = validateLoginFields(login, password, "login");
    if (Object.keys(invalidFields).length > 0) {
      notify("error", "Preencha todos os campos", setModalAlert);
      setErrors(invalidFields);
      setLoading(false);
      return;
    }

    let response = await sendBodyToLoginApi(login, password);

    if (response.status === "ERR_NETWORK") {
      notify(
        "error",
        "Ops...! Tivemos um problema interno, tente mais tarde",
        setModalAlert
      );
    } else {
      let data = response.body;

      if (data.cod_usuario > 0) {
        setCodUser(data.cod_usuario);
        if (needChangePassword(data)) {
          setRefreshPassword(!refreshPassword);
          setPassword("");
          notify(
            "info",
            "Precisamos que você altere a sua senha!",
            setModalAlert
          );
          setLoading(false);
          return;
        }
        await notify("success", "Usuário logado com sucesso!", setModalAlert);
        navigate("/dashboard");
        if(rememberPassword){
          saveAccess(login, password, rememberPassword)
        }else{
          localStorage.removeItem('myAccess')
        }
      } else {
        notify("warning", "Usuário não encontrado", setModalAlert);
      }
    }
    setLoading(false)
  };

  const forgetPassword = async () => {
    let invalidFields = validateLoginFields(login, password, "forgotPassword");
    if (Object.keys(invalidFields).length > 0) {
      notify("error", "Preencha todos os campos", setModalAlert);
      setErrors(invalidFields);
      setLoading(false)
      return;
    }

    let response = await sendBodyToForgtPasswordApi(login);

    if (response.status === "ERR_NETWORK") {
      notify(
        "error",
        "Ops...! Tivemos um problema interno, tente mais tarde",
        setModalAlert
      );
    } else {
      let data = response.body;
      if (data.result) {
        notify(
          "success",
          "Enviamos um email com uma senha temporaria!",
          setModalAlert
        );
        setSendForgetPass(!sendForgetPass)
      } else {
        notify("warning", "Usuário não encontrado", setModalAlert);
      }
    }
    setLoading(false)
  };

  const sendNewPassword = async () => {
    let invalidFields = validateRefreshPassword(
      oldPassword,
      newPassword,
      password
    );
    if (Object.keys(invalidFields).length > 0) {
      if (invalidFields.includes("senhaDivergente")) {
        setErrors(["Nova senha", "Confirmar senha"]);
        notify("warning", "As senhas não são iguais", setModalAlert);
        setLoading(false)
        return;
      }

      notify("error", "Preencha todos os campos", setModalAlert);
      setErrors(invalidFields);
      setLoading(false)
      return;
    }

    let response = await sendBodyRefreshPasswordApi(codUser, newPassword);

    if(response.body) {
      notify("success", "Senha alterada com sucesso!", setModalAlert);
      setLoading(false);
      navigate("/dashboard");
      if(rememberPassword){
        saveAccess(login, password, rememberPassword)
      }else{
        localStorage.removeItem('myAccess')
      }
      return;
    } else{
      notify("warning", "Ops! tente novamente mais tarde", setModalAlert);
      setLoading(false);
      setRefreshPassword(!refreshPassword)
      return;
    }
    
    

  
 
  };

  const handleTypeFormAction = () => {
    setLoading(true)
    if (sendForgetPass) {
      forgetPassword();
      return;
    }
    if (refreshPassword) {
      sendNewPassword();
      return;
    } else {
      logIn();
    }
  };

  function getRememberPassword(){
    let local = JSON.parse(localStorage.getItem('myAccess'));

    if(local?.remember){
      console.log(local)
      setRememberPassword(local.remember)
      setPassword(local.pass)
      setLogin(local.login);
      
    }

  }


  useEffect(()=>{
    getRememberPassword()
  },[])

  useEffect(() => {
    setErrors([]);
  }, [login, password, oldPassword, newPassword]);

  return (
    <ContainerLogin>
      {loading && (
        <ContainerLoad>
          <Loading />
        </ContainerLoad>
      )}

      <AlertContainer>
        <BasicAlerts modalAlert={modalAlert} />
      </AlertContainer>

      <FormContainer>
        <ImagemContainer>
          <Imagem src={"https://myg3.com.br/repo/img/procel_myg3.png"} />
        </ImagemContainer>

        {!sendForgetPass && !refreshPassword && (
          <FormLogin
            login={login}
            setLogin={setLogin}
            password={password}
            setPassword={setPassword}
            errors={errors}
          />
        )}
        {sendForgetPass && (
          <ForgetPassword login={login} setLogin={setLogin} errors={errors} />
        )}
        {refreshPassword && (
          <ChangePassword
            oldPassword={oldPassword}
            setOldPassword={setOldPassword}
            newPassword={newPassword}
            setNewPassoword={setNewPassoword}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            errors={errors}
          />
        )}

        <DivisorInput>
        {!refreshPassword &&(
           <Rememberme
           label={"Lembrar senha"}
           value={rememberPassword}
           onchange={(e) => setRememberPassword(e)}
         />
        )
}
         
          {!refreshPassword && (
            <ForgotPassword onClick={() => setSendForgetPass(!sendForgetPass)}>
              {!sendForgetPass ? "Esqueci a senha" : "Voltar"}
            </ForgotPassword>
          )}
          {refreshPassword && (
            <ForgotPassword onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? "Mostrar senha" : "Ocultar senha"}
            </ForgotPassword>
          )}
        </DivisorInput>

        <ContainerButton>
          <ButtonLogin onClick={() => handleTypeFormAction()}>
            Entrar
          </ButtonLogin>
        </ContainerButton>
      </FormContainer>
    </ContainerLogin>
  );
};

export default Login;
