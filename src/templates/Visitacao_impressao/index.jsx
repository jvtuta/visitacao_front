import { useParams } from "react-router"

export const Visitacao_Impressao = () => {
    let {id} = useParams() 
    return (
        <h1>Impressão da visitacao de {id}!</h1>
    )
}