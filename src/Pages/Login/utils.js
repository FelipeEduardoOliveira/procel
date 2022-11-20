import api from "../../services/Api";

export async function sendBodyToLoginApi(login, pass) {
  const body = {
    USUARIO: login,
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

export async function sendBodyToForgtPasswordApi(login) {
  const body = {
    USUARIO: login,
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
      !login && erros.push("login");
      !pass && erros.push("senha");
      break;
    case "forgotPassword":
      !login && erros.push("login");
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

export const maskCnpj = (v) => {
  v = v.replace(/\D/g, "")

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  } else {
    v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    v = v.replace(/(\d{4})(\d)/, "$1-$2")
  }

  return v
}


export const logged = (isLogged) =>{
  localStorage.setItem('isLogged', JSON.stringify({isLogged}));
}