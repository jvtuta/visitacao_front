import { useContext } from "react";
import { Table, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VisitadoContext } from "../../context/Visitados/context";
import { RowVisitado }  from "../RowVisitado"
import { PaginationLinks } from "../PaginationLinks";
import { Search } from "../Search/Index";
import { useState } from "react";
import { VisitadoUpdate } from "../VisitadoUpdate";

export const Visitados = ({reload}) => {
  const { visitadosState } = useContext(VisitadoContext)
  //Todos os visitados
  const { visitados } = visitadosState
  const [ visitadosSearch, setVisitadosSearch ] = useState([])
  const [ search, setSearch ] = useState(false)
  const [ visitadoUpdateId, setVisitadoUpdateId ] = useState('')
  const pages = Math.ceil(visitados.length / 21)
  const handleUpdateFunction = (event) => {
    event.preventDefault();
    setVisitadoUpdateId(false);
    visitadosState.feedback = ''
    reload(true)
  }


  const handleSonchange = (searchValue) => {
    if(searchValue.length > 0) {
      setSearch(true)
    } else {
      setSearch(false)
    }
    let res 
    if(isNaN(searchValue)) {
      
      res = visitados.filter((visitado)=>{
        return visitado.nome.toLowerCase().includes(searchValue.toLowerCase())
      })

    } else { 
      const search = Number(searchValue)
      res = visitados.filter((visitado)=>{
        return visitado.crm ? visitado.crm === search : visitado.crn === search
      })

    }
    setVisitadosSearch(()=>res)
  } 

  return (
    <>
      {!visitadoUpdateId&&(
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
            <nav aria-label="..." className="col-sm-12 m-0 col-md">
              <ul className="pagination pagination-sm">
                <PaginationLinks qtd={pages} />
              </ul>
            </nav>
            <div className="col-sm-12 col-md">
              <Search handleSonchange={handleSonchange} />
            </div>
          </div>
        </>
      )}

      
      {!visitadoUpdateId&&<Table size="sm" responsive striped bordered hover >
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

          {visitadosSearch.length === 0 && search ? 
            (
              <tr>
                <td colSpan="100%">Registro não encontrado!</td>
              </tr>
            )
          : search ? visitadosSearch.map((e)=>{
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
          }) 
          : visitados.map((e)=>{
            return(
              <tr key={e.id}>
                <RowVisitado visitado={e} />
                <td className="col-md-2 p-0 text-center align-middle">
                  <ButtonGroup>
                    <Link to={"/visitacoes/"+e.id} className="btn btn-sm btn-info">Visitações</Link>
                    <Link size="sm" to="/visitado/" className="btn btn-sm btn-warning" onClick={(event)=>{
                      event.preventDefault()
                      setVisitadoUpdateId(e.id)
                    }}>Editar</Link>
                    <Link to={"/visitado-cadastro/"+e.id} className="btn btn-sm btn-success">Cadastrar visitacao</Link>
                  </ButtonGroup>
                </td>
              </tr>
             )
          })}
        </tbody>
      </Table>}
     {visitadoUpdateId&&
        <VisitadoUpdate idVisitado={visitadoUpdateId} updateFunction={handleUpdateFunction}></VisitadoUpdate>}
    </>
  );
};
