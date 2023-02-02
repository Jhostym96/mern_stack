import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import roles from "../../Helpers/Roles";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  // const [user, setUser] = useState({ id: 1, role: roles.regular })

  const login = (userCredentials, fromLocation) => {
    setUser({ id: 1, name: 'Jhostym Rosas', email: 'jhosrohe27@gmail.com', role: roles.regular });
    if (fromLocation) {
      navigate(fromLocation, { replace: true })
    }
  };

  const logout = () => setUser(null);

  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
