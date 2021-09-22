import { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VisitadoContext } from "../../context/Visitados/context";
import { RowVisitado }  from "../RowVisitado"

export const Visitados = ({onclick }) => {
  const { visitadosState } = useContext(VisitadoContext)
  const { visitados } = visitadosState
  return (
    <>
      <div className="">
        <h4 className="d-inline border-bottom py-2">Visitados</h4>
        {/* Trocar butão por link */}
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
          {visitados.length > 0 &&visitados.map((e)=>{ 
            return(
              <tr key={e.id}>
                <RowVisitado visitador={e} />
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
