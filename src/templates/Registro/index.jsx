import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { FormRegistro } from "../../components/FormRegistro";

export const Registro = () => {
  return (
    <>
      <Header login="true" />
      <Container>
        <Row className="justify-content-center">
            <Col xs={5}>
                <FormRegistro />
            </Col>
        </Row>
      </Container>
    </>
  );
};
