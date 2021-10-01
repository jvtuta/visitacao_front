//Componentes
import { FormVisitado } from "../FormVisitado";
import { Feedback } from "../Feedback";
import { Loading } from "../Loading";
//Funções
import { update_visitado } from "../../context/Visitados/actions";
import { VisitadoContext } from "../../context/Visitados/context";
import { useContext } from "react";
import  moment  from "moment";

export const VisitadoUpdate = ({idVisitado, updateFunction}) => {
    const { visitadosState, visitadosDispatch }= useContext(VisitadoContext)
    
    const onClickUpdate = (form_update) => {
        visitadosState.feedback = ''

        let obj;

        for (let i = 0; i < form_update.current.length - 1; i++) {
          obj = {
            ...obj,
            [form_update.current[i].name]: form_update.current[i].value,
          };
        }

        const {
            tipo,
            conselhoRegional,
            nome,
            especialidade,
            data_de_nascimento,
            email,
            telefone,
            secretarias,
            locais_de_atendimento,
            observacoes
          } = obj;
      
        const visitadoForm = {
            _method: 'PATCH',
            tipo,
            crm: tipo === "crm" ? conselhoRegional : "",
            crn: tipo === "crn" ? conselhoRegional : "",
            nome,
            especialidade,
            data_de_nascimento: moment(data_de_nascimento, 'YYYY-MM-DD').format('DD-MM-YYYY'),
            email,
            telefone,
            secretarias,
            locais_de_atendimento,
            observacoes
          };
        const visitadoData = new URLSearchParams(visitadoForm)
        
        update_visitado(visitadosDispatch, visitadoData, idVisitado)
        
    }
    return (
        <>
            <FormVisitado id_visitado={idVisitado} update={true} updateFunction={updateFunction} onClickCallback={onClickUpdate}/>
            {visitadosState.feedback.includes('ERR')&&<Feedback feedback={visitadosState.feedback} success={false} />}
            {!visitadosState.feedback.includes('ERR')&&<Feedback feedback={visitadosState.feedback} />}
            {visitadosState.loading&&<Loading />}
        </>
    )
    
}