import { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../../src/context/Auth/context";

//Se a rota estiver autenticada retornar componentes filhos, caso contrário retornar para login
export const PrivateRoute = () => {

}

function useAuth() {
    const auth = useContext(AuthContext)
    return auth
}