import { Card, Form, Button } from "react-bootstrap";

export const FormVisitador = () => {
  function register() {}
  return (
    <Card>
      <Card.Header>Registrar</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formGroupNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupCR">
            <Form.Label>Conselho regional</Form.Label>
            <Form.Control as="select">
              <option value="crm">CRM</option>
              <option value="crf">CRF</option>
            </Form.Control>
            <Form.Control type="number" placeholder="CRF/CRN">
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupEspecialidade">
            <Form.Label>Especialidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Especialidade..."
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupSecretarias">
            <Form.Label>Secretarias</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Secretária..."
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupDataNasc">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefone..."
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupTelefone">
            <Form.Label>Locais de Atendimento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Locais de atendimento..."
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
