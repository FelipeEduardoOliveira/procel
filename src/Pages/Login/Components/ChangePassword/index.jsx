import React from "react";
import Input from "../../../../Components/Input";

const ChangePassword = ({
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassoword,
  password,
  setPassword,
  showPassword,
  errors
}) => {
  return (
    <>
      <Input
        name={"Senha atual"}
        onChange={(e) => setOldPassword(e)}
        placeholder={"Senha atual"}
        value={oldPassword}
        error={errors?.includes("Senha atual")}
        type={"password"}
      />
      <Input
        name={"Nova senha"}
        onChange={(e) => setNewPassoword(e)}
        placeholder={"Nova senha"}
        value={newPassword}
        error={errors?.includes("Nova senha")}
        type={showPassword ? "text" : "password"}
      />
      <Input
        name={"Confirmar senha"}
        onChange={(e) => setPassword(e)}
        placeholder={"Confirmar senha"}
        value={password}
        error={errors?.includes("Confirmar senha")}
        type={showPassword ? "text" : "password"}
      />
    </>
  );
};

export default ChangePassword;
