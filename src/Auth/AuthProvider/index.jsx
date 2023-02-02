import { createContext, useState } from "react";
import roles from "../../Helpers/Roles";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

  // const [user, setUser] = useState(null)

  const [user, setUser] = useState({ id: 1, role: roles.regular })

  console.log(user)

  const contextValue = {
    user,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
