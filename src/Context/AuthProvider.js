import { createContext } from "react";
import useData from "../hook/useData";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const { children } = props;
    const allContext = useData();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;