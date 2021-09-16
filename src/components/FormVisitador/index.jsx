import { Card, Form, Button } from "react-bootstrap";

export const FormVisitador = () => {
  function register() {}
  return (
    <Card>
      <Card.Header>Registrar</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite o nome"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Conselho regional</Form.Label>
            <Form.Control as="select">
              <option value="crm">CRM</option>
              <option value="crf">CRF</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite a senha"
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formGroupPasswordConfirmation">
            <Form.Label>Confirmação de senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme sua senha"
            ></Form.Control>
          </Form.Group>
          <Button
            className="mt-3 me-3"
            variant="info"
            onClick={() => register()}
          >
            {" "}
            Registrar{" "}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
