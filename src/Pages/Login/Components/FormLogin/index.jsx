import React, { useState } from "react";
import Input from "../../../../Components/Input";


const FormLogin = ({login, setLogin, password, setPassword, errors}) => {



  return (
    <>   

        <Input
          name={"login"}
          onChange={(e) => setLogin(e)}
          placeholder={"login"}
          value={login}
          error={errors?.includes("login")}
          // type={"login"}
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
