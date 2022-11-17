import React from "react";
import Input from "../../../../Components/Input";

const ForgetPassword = ({login, setLogin, errors}) => {


  return (
    <>    
        <Input
          name={"login"}
          onChange={(e) => setLogin(e)}
          placeholder={"login"}
          value={login}
          error={errors?.includes("login")}
          type={"login"}
        />
    </>
  );
};

export default ForgetPassword;
