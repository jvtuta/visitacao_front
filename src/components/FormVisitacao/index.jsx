import { Form, Row, Col } from "react-bootstrap";

export const FormVisitacao = () => {
    return (
      <>
        <h4 className="mt-4">Visita: </h4>
        <Row className="">
          <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" name="data" required/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={2} xs={12} md={3} lg={6}>
            <Form.Label>Comentários</Form.Label>
            <Form.Control type="textarea" name="comentarios"/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amostras</Form.Label>
            <Form.Control type="text" name="amostras" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Trabalhos</Form.Label>
            <Form.Control type="text" name="trabalhos" />
          </Form.Group>
        </Row>
      </>
    )
};
