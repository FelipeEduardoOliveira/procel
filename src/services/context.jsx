import React, { createContext, useEffect, useState } from "react";

  const userContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [state, saveState] = useState('Dados do licenciado');
  const [form, setForm] = useState();
  const [list, setList] = useState([]); 



  return (
    <userContext.Provider value={{ state, saveState, form, setForm, list, setList }}>
      {children}
    </userContext.Provider>
  );
};
export {UserContextProvider};
export default userContext;
