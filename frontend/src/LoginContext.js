import React, { useState } from "react";

export const LoginContext = React.createContext();

export const LoginProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    category: "",
    id: ""
  });

  return (
    <LoginContext.Provider
      value={{
        loggedInUserContext: [loggedInUser, setLoggedInUser],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
