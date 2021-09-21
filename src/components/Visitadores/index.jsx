import { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VisitadorContext } from "../../context/Visitador/context";
import { RowVisitador }  from "../RowVisitador"

export const Visitadores = ({onclick}) => {
  const { visitadorState } = useContext(VisitadorContext)
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
            <th>Observações</th>
            <th>Locais de atendimento</th>
            <th>#</th>
          </tr>
        </thead>  
        <tbody>
          {visitadores.length > 0 &&visitadores.map((e)=>{ 
            return(
              <tr key={e.id}>
                <RowVisitador visitador={e} />
                <td>
                  <Link to={"/visitacoes/"+e.id} className="btn btn-sm btn-info">Visitações</Link>
                </td>
              </tr>
             )
          })}
        </tbody>
      </Table>
      {/* <FormVisitador /> */}
    </>
  );
};
