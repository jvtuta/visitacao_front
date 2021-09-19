import "./style.css";
import { Header } from "../../components/Header";
import { Container, Row } from "react-bootstrap";
import { Visitadores } from "../../components/Visitadores";
import { useContext, useEffect, useState } from "react";
import { VisitadorContext } from "../../context/Visitador/context";
import { load_visitador } from "../../context/Visitador/actions";
import { Loading } from "../../components/Loading";
import { Feedback } from "../../components/Feedback";
import { FormVisitacao } from "../../components/FormVisitacao";

export const Home = () => {
  const { visitadorState, visitadorDispatch } = useContext(VisitadorContext);
  const [ cadVisitacao, setCadVisitacao] = useState(false);
  useEffect(() => {
    load_visitador(visitadorDispatch);
  }, [visitadorDispatch]);

  return (
    <>

      <Header login="true" />
      {visitadorState.loading && <Loading /> }
      
      <Container>
        <Row>
          {visitadorState.feedback && (
            <Feedback feedback={visitadorState.feedback} success={false} />  
        )}
          {cadVisitacao && <FormVisitacao />}
          {visitadorState.visitadores.length > 0 && !cadVisitacao && (
            <Visitadores onclick={setCadVisitacao} />
          )}
          
          
        </Row>
      </Container>
    </>
  );
};
