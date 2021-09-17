import "./style.css";
import { Header } from "../../components/Header";
import { Container, Row } from "react-bootstrap";
import { Visitador } from "../../components/Visitador";
import { useContext, useEffect, useState } from "react";
import { VisitadorContext } from "../../context/Visitador/context";
import { load_visitador } from "../../context/Visitador/actions";
import { Loading } from "../../components/Loading";
import { Feedback } from "../../components/Feedback";

export const Home = () => {
  const { visitadorState, visitadorDispatch } = useContext(VisitadorContext);
  const [cadVisitacao, setCadVisitacao] = useState(false);
  useEffect(() => {
    load_visitador(visitadorDispatch);
  }, []);

  return (
    <>

      <Header login="true" />
      {visitadorState.loading && <Loading /> }
      
      <Container>
        <Row>
          
          {visitadorState.feedback && (
            <Feedback feedback={visitadorState.feedback} success={false} />  
        )}
          {cadVisitacao && <h1>teste de form de cadastro de visitações</h1>}
          {visitadorState.visitadores.length > 0 && !cadVisitacao && (
            <Visitador onclick={setCadVisitacao} />
          )}
          
          
        </Row>
      </Container>
    </>
  );
};
