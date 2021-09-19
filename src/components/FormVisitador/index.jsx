import { Form, Button, Col, Row } from "react-bootstrap";

export const FormVisitador = ({ read, place, registrar = false }, {children}) => {
  return (
    <>
      <Row>
        <Form.Group as={Col} controlId="formGroupNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder={place ? place.nome : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Especialidade</Form.Label>
          <Form.Control
            type="text"
            placeholder={place ? place.especialidade : ""}
            readOnly={read}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control type="date" readOnly={read}  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={place ? place.email : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder={place ? place.telefone : ""}
            readOnly={read}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGroupSecretarias">
          <Form.Label>Secretarias</Form.Label>
          <Form.Control
            type="textarea"
            placeholder={place ? place.secretarias : ""}
            readOnly={read}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGroupTelefone">
          <Form.Label>Locais de Atendimento</Form.Label>
          <Form.Control
            type="text"
            placeholder={place ? place.locais_de_atendimento : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGroupTelefone">
          <Form.Label>Observações</Form.Label>
          <Form.Control type="text" placeholder={""} readOnly={read} />
        </Form.Group>
        {children}
        {registrar && (
          <Button
            className="mt-3 me-3"
            variant="info"
            onClick={() => registrar()}
          >
            {" "}
            Registrar{" "}
          </Button>
        )}
      </Row>
    </>
  );
};
