import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    const contex = useContext(AuthContext);
    if (!contex){
        throw new Error('Acá va un mensaje especifíco de error de contexto');
    }
    return contex;
};