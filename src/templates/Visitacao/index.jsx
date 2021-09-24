import { RowVisitacao } from "../../components/RowVisitacao";
import { Header } from "../../components/Header";
import { Button, ButtonGroup, Container, Table, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useContext, useEffect, useRef } from "react";
import { VisitacaoContext } from "../../context/Visitacao/context";
import { VisitadoContext } from "../../context/Visitados/context";
import { load_visitacao } from "../../context/Visitacao/actions";
import { Link } from "react-router-dom";
import { useReactToPrint }  from "react-to-print";
import { VisitacaoImpressao } from "../../components/VisitacaoImpressao";
import { load_visitado } from "../../context/Visitados/actions";


export const Visitacao = () => {
  const { id } = useParams();
  const { visitacaoState, visitacaoDispatch } = useContext(VisitacaoContext);
  const { visitadosState, visitadosDispatch } = useContext(VisitadoContext);
  const { visitados } = visitadosState;
  const { visitacoes } = visitacaoState;
  //eslint-disable-next-line
  const visitado = visitados.filter((e)=>e.id == id)[0]

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  useEffect(() => {  

    load_visitacao(visitacaoDispatch, id);
    load_visitado(visitadosDispatch)
  }, [visitacaoDispatch, id, visitadosDispatch]);
  return (
    <>
      <Header login={true} />
      <Container>
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Visitações</li>
              </ol>
            </nav>
          </Col>
          <Col>
            

          </Col>
        </Row>
          <div className="mb-3">
            <h4 className="d-inline border-bottom py-2">{visitado.nome}</h4>
            <Link to="/visitado-cadastro" className="float-end btn btn-sm btn-outline-info">Imprimir Visitações</Link>
          </div>
        <Row>
        <Table size="sm" responsive="lg" striped bordered hover>
          <thead>
            <tr>
              <th>Data da visita</th>
              <th>Amostras</th>
              <th>Trabalhos</th>
              <th>Comentários</th>
              <th>#Ações</th>
            </tr>
          </thead>
          <tbody>
            {visitacoes.length > 0 &&
              visitacoes.map((e) => {
                return (
                  <tr key={e.id}>
                    <RowVisitacao visitacao={e} />
                    <td className="col-md-1">
                      <ButtonGroup>
                          {/* eslint-disable-next-line */}
                        
                        <Button variant="info" onClick={handlePrint}>Imprimir</Button>
                        <Button variant="success" size="sm">Editar</Button>
                        <Button variant="danger" size="sm">Excluir</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        </Row>
        <div style={{ display: "none" }}>
            <VisitacaoImpressao ref={componentRef}/>
        </div>
      </Container>
    </>
  );
};
