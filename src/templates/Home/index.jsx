import "./style.css";
import { Header } from "../../components/Header";
import { Container } from "react-bootstrap";
import { Visitador } from "../../components/Visitador";
import { useContext, useEffect } from "react";
import { VisitadorContext } from "../../context/Visitador/context";
import { load_visitador } from "../../context/Visitador/actions";
export const Home = () => {
  const { visitadorState, visitadorDispatch } = useContext(VisitadorContext)
  useEffect(()=>{
    load_visitador(visitadorDispatch)
  }, [])

  return (
    <>
      <Header login="true" />
      <Container>
        <Visitador />
      </Container>
    </>
  );
};
