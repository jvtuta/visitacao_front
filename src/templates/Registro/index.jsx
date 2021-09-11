import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export default function Registro () {
    return (
        <> 
            <Header login='true'/>
            <Link to="/login">Login</Link>
        </>
    )
}