import React, { useState, createContext } from 'react'

const LoginContext = createContext();

function LoginContextProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </LoginContext.Provider>
  )
}

export {
  LoginContext,
  LoginContextProvider
}