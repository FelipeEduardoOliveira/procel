import React, { createContext, useState } from "react";

  const userContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [state, saveState] = useState('Dados do licenciado');
  const [form, setForm] = useState();

 

  return (
    <userContext.Provider value={{ state, saveState, form, setForm }}>
      {children}
    </userContext.Provider>
  );
};
export {UserContextProvider};
export default userContext;
