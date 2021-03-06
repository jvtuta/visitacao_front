import "./style.css";
import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Visitados } from "../../components/Visitados";
import { useContext, useEffect, useState } from "react";
import { VisitadoContext } from "../../context/Visitados/context";
import { load_visitado } from "../../context/Visitados/actions";
import { Loading } from "../../components/Loading";
import { Feedback } from "../../components/Feedback";
// import { FormVisitacao } from "../../components/FormVisitacao";


export const Home = () => {
  const { visitadosState, visitadosDispatch } = useContext(VisitadoContext);
  const [shouldReload, setShouldReload] = useState(false)
  useEffect(() => {
    load_visitado(visitadosDispatch);
    if(shouldReload) setShouldReload(false)
  }, [visitadosDispatch, shouldReload]);

  return (
    <>
      <Header login="true" />
      {visitadosState.loading && <Loading /> }
      
      {/* Home irá renderizar os visitadores cadastrados */}
      <Container>
      {visitadosState.feedback&&<Feedback feedback={visitadosState.feedback.message} success={visitadosState.feedback.result} />}
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" active="true">Home</li>
              </ol>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Visitados reload={setShouldReload}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
