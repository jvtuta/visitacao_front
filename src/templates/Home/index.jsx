import "./style.css";
import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Visitacao } from "../../components/Visitacao";
export const Home = () => {
  return (
    <>
      <Header Login="false" />
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Visitacao />
          </Col>
        </Row>
      </Container>
    </>
  );
};
