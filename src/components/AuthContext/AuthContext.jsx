import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, [token]);

    const login = ({ user, token }) => {
        setUser(user);
        setToken(token);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        setToken(null);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);