import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VisitadoContext } from "../../context/Visitados/context";
import { RowVisitado }  from "../RowVisitado"

export const Visitados = () => {
  const { visitadosState } = useContext(VisitadoContext)
  const { visitados } = visitadosState
  return (
    <>
      <div className="mb-3">
        <h4 className="d-inline border-bottom py-2">Visitados</h4>
        {/* Trocar botão por link */}
        <Link to="/visitado-cadastro" className="float-end btn btn-sm btn-outline-info">Cadastrar visitação</Link>
        
      </div>
      <Table size="sm" responsive="lg" >
        <thead>
          <tr>
            <th>Visitado</th> 
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
                <RowVisitado visitado={e} />
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
