import React from "react";
import Input from "../../../../Components/Input";

const ForgetPassword = ({login, setLogin, errors}) => {


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
    </>
  );
};

export default ForgetPassword;
