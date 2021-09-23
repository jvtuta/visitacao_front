import { FormVisitado } from "../../components/FormVisitado";
import { FormVisitacao } from "../../components/FormVisitacao";
import { VisitadoContext } from "../../context/Visitados/context";
import { VisitacaoContext } from "../../context/Visitacao/context";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Visitado = () => {
  const { visitadosState, visitadosDispatch } = useContext(VisitadoContext);
  const { visitacaoState, visitacaoDispatch } = useContext(VisitacaoContext);
  console.log(
    "state visitado=",
    visitadosState,
    "stateVisitacao=",
    visitacaoState
  );

  const handleBsubmit = (e) => {
      
      console.log(e)
  }
  return (
    <>
      <Header login="true" />
      <Container>
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" >
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" active="true">
                  Cadastro de visitados
                </li>
              </ol>
            </nav>
          </Col>
        </Row>
        <Row>
          <FormVisitado onClickCallback={handleBsubmit}>
            <FormVisitacao />
          </FormVisitado>
        </Row>
      </Container>
    </>
  );
};
