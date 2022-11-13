import React from "react";
import Input from "../../../../Components/Input";


const FormLogin = ({login, setLogin, password, setPassword, errors}) => {


  return (
    <>   

        <Input
          name={"Email"}
          onChange={(e) => setLogin(e)}
          placeholder={"Email"}
          value={login}
          error={errors?.includes("email")}
          type={"email"}
        />

        <Input
          name={"Senha"}
          onChange={(e) => setPassword(e)}
          placeholder={"Senha"}
          value={password}
          error={errors?.includes("senha")}
          type={"password"}
        />
    </>
  );
};

export default FormLogin;
