import React from 'react'

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
