import { useParams } from "react-router"

export const VisitacaoImpressao = () => {
    let {id} = useParams() 
    return (
        <h1>Impressão da visitacao de {id}!</h1>
    )
}