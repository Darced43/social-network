import { createContext, useState } from "react"; 

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [users, setUsers] = useState({login : null, pasword: null})

    const signin = (newUser, cb) => {
        setUsers(newUser)
        cb()
    }

    const signout = (cb) => {
        setUsers(null)
        cb()
    }

    const value = { users, signin, signout} //это всё может получить любой компонент через хук useContext
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}