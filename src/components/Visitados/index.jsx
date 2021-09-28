import { useContext } from "react";
import { Table, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VisitadoContext } from "../../context/Visitados/context";
import { RowVisitado }  from "../RowVisitado"
import { PaginationLinks } from "../PaginationLinks";

export const Visitados = () => {
  const { visitadosState } = useContext(VisitadoContext)
  //Todos os visitados
  const { visitados } = visitadosState

  const pages = Math.ceil(visitados.length / 21)
  
  
  return (
    <>
      <div className="mb-1 p-2 border-bottom row">

        <div className="col me-auto">
          <h4 className="d-inline  py-2">Visitados</h4>
        </div>


        <div className="col text-end">
          <Link to="/visitado-cadastro" className="btn btn-sm btn-outline-info">Cadastrar visitação</Link>
        </div>

      </div>
      <div className="row mb-1">      
        <nav aria-label="..." className="col m-0">
          <ul class="pagination pagination-sm">
            <PaginationLinks qtd={pages} />
          </ul>
        </nav>
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
                    {/* <Link size="sm" className="btn btn-sm btn-warning">Editar</Link> */}
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
