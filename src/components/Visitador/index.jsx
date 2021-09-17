import { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { VisitadorContext } from "../../context/Visitador/context";
import { FormVisitador } from "../FormVisitador";
import {RowVisitador} from "../RowVisitador"

export const Visitador = ({onclick}) => {
  const{visitadorState, visitadorDispatch}=useContext(VisitadorContext)
  const { visitadores } = visitadorState
  return (
    <>
      <div className="">
        <h4 className="d-inline border-bottom py-2">Visitadores</h4>
        <Button onClick={()=>onclick(true)} variant="success" className="float-end" size="sm">Cadastrar visitação</Button>
      </div>
      <Table size="sm" responsive="lg" >
        <thead>
          <tr>
            <th>Visitador</th> 
            <th>Conselho regional</th> 
            <th>Especialidade</th>
            <th>Email</th>
            <th>Secretárias</th>
            <th>Data de nascimento</th>
            <th>Telefone</th>
            <th>Locais de atendimento</th>
          </tr>
        </thead>
        <tbody>
          {visitadores.length > 0 &&visitadores.map((e)=>{ 
            return(
              <tr key={e.id}>
                <RowVisitador visitador={e} />
              </tr>
             )
          })}
        </tbody>
      </Table>
      {/* <FormVisitador /> */}
    </>
  );
};
