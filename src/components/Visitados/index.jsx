import { useContext } from "react";
import { Table, ButtonGroup } from "react-bootstrap";
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
      <Table size="sm" responsive striped bordered hover >
        <thead>
          <tr>
            <th>Nome</th> 
            <th>Conselho regional</th> 
            <th>Secretárias</th>
            <th>Telefone</th>
            <th>#</th>
          </tr>
        </thead>  
        <tbody>
          {visitados.length > 0 &&visitados.map((e)=>{ 
            return(
              <tr key={e.id}>
                <RowVisitado visitado={e} />
                <td className="col-md-2 p-0 text-center align-middle">
                  <ButtonGroup>
                    <Link to={"/visitacoes/"+e.id} className="btn btn-sm btn-info">Visitações</Link>
                    <Link size="sm" className="btn btn-sm btn-warning">Editar</Link>
                    <Link to={"/visitado-cadastro/"+e.id} className="btn btn-sm btn-success">Cadastrar visitacao</Link>
                  </ButtonGroup>
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
