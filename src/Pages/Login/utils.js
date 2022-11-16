import api from "../../services/Api";

export async function sendBodyToLoginApi(email, pass) {
  const body = {
    USUARIO: email,
    SENHA: pass,
  };

  const response = await api
    .post("/usuario/verificalogin", body)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        body: res.data,
      };
    })
    .catch((error) => {
      return {
        status: error.code,
        message: error.message,
        body: {},
      };
    });

  return response;
}
export async function sendBodyRefreshPasswordApi(codUser, pass) {
  const body = {
    SENHA: pass,
    COD_USUARIO: codUser
  }

  const response = await api
    .post("/usuario/alterarsenha", body)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        body: res.data.result,
      };
    })
    .catch((error) => {
      return {
        status: error.code,
        message: error.message,
        body: {},
      };
    });

  return response;
}

export async function sendBodyToForgtPasswordApi(email) {
  const body = {
    USUARIO: email,
  };

  const response = await api
    .post("/usuario/recuperasenha", body)
    .then((res) => {
      return {
        status: res.status,
        message: res.statusText,
        body: res.data,
      };
    })
    .catch((error) => {
      return {
        status: error.code,
        message: error.message,
        body: {},
      };
    });

  return response;
}

export const notify = async (type, message, setModalAlert, timeBox = 5000) => {
  setModalAlert({
    alertType: type,
    message: message,
  });
  setTimeout(() => {
    setModalAlert({
      alertType: "",
      message: "",
    });
  }, timeBox);
};

export function validateLoginFields(login, pass, typeFormValidation) {
  let erros = [];

  switch (typeFormValidation) {
    case "login":
      !login && erros.push("email");
      !pass && erros.push("senha");
      break;
    case "forgotPassword":
      !login && erros.push("email");
      break;
  }

  return erros;
}
export function validateRefreshPassword(oldPassword, newPassword, confirmPassword) {
  let erros = [];

  !oldPassword && erros.push('Senha atual');
  !newPassword && erros.push('Nova senha');
  !confirmPassword && erros.push('Confirmar senha');

  if(Object.keys(erros).length === 0){
    newPassword !== confirmPassword && erros.push('senhaDivergente')
  }



  return erros;
}

export function needChangePassword(data) {
  return data.forca_senha === 'V' ? true : false;
}


export function saveAccess(login, pass, remember){
   localStorage.setItem('myAccess', JSON.stringify({login, pass, remember}));

}