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
        notify("success", "Usuário logado com sucesso!", setModalAlert);
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
          "Enviamos um email para recuperar sua senha!",
          setModalAlert
        );
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

    notify("success", "Senha alterada com sucesso!", setModalAlert);
    setLoading(false)
    return;
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
          <Rememberme
            label={"Lembrar senha"}
            value={rememberPassword}
            onchange={(e) => setRememberPassword(e)}
          />
          {!refreshPassword && (
            <ForgotPassword onClick={() => setSendForgetPass(!sendForgetPass)}>
              {!sendForgetPass ? "Esqueci a senha" : "Logar"}
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
