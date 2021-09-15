import "./style.css";
import { Header } from "../../components/Header";
import { Container } from "react-bootstrap";
import { Visitador } from "../../components/Visitador";
import { useContext, useEffect } from "react";
import { VisitacaoContext } from "../../context/Visitacao/context";
import { load_visitacao } from "../../context/Visitacao/actions";
export const Home = () => {
  const{stateVisitacao, dispatchVisitacao} =useContext(VisitacaoContext)
  
  useEffect(()=>{
    load_visitacao(dispatchVisitacao)
  }, [])
  console.log(stateVisitacao)
  return (
    <>
      <Header login="true" />
      <Container>
        <Visitador />
      </Container>
    </>
  );
};
