import React, { createContext, useState } from "react";

  const userContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [state, saveState] = useState('changeNAme');

  return (
    <userContext.Provider value={{ state, saveState }}>
      {children}
    </userContext.Provider>
  );
};
export {UserContextProvider};
export default userContext;
