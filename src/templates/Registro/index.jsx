import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { FormRegistro } from "../../components/FormRegistro";

export const Registro = () => {
  return (
    <>
      <Header Login="false"/>
      <Container>
        <Row className="justify-content-center">
            <Col sm xs md={6} lg={4}>
                <FormRegistro />
            </Col>
        </Row>
      </Container>
    </>
  );
};
