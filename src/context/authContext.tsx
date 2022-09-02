import {createContext, useCallback, useMemo, useState} from 'react';

const MY_AUTH_APP = "MY_AUTH_APP_1";
export const AuthContext = createContext();

export function AuthContextProvider({children}){
  const [isAuhenticated, setIsAuthenticated] = useState(localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const login = useCallback(function(){
    window.localStorage.setItem(MY_AUTH_APP, "true")
    setIsAuthenticated(false)
  },[] );

  const logout = useCallback(function(){
    window.localStorage.removeItem(MY_AUTH_APP)
    setIsAuthenticated(false)
  },[] );

  const value = useMemo(
    ()=>({
      login,
      logout,
      isAuhenticated
    }), [login,logout,isAuhenticated]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

