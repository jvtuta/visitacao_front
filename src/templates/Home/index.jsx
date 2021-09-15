import "./style.css";
import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Visitacao } from "../../components/Visitacao";
export const Home = () => {
  return (
    <>
      <Header Login="false" />
      <Container>
        
        <Visitacao />
        
      </Container>
    </>
  );
};
