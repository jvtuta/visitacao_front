import "./style.css";
import { Header } from "../../components/Header";
import { Container } from "react-bootstrap";
import { Visitacao } from "../../components/Visitacao";
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
      <Header Login="false" />
      <Container>
        {/* Renderizar cada visitacao */}
        <Visitacao />
        
      </Container>
    </>
  );
};
