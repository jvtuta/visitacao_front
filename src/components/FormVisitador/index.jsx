import { Form, Button, Col, Row } from "react-bootstrap";

export const FormVisitador = ({ read, place, children }) => {
  return (
    <>
      <Row>
        <Form.Group as={Col} sm={2} xs={12} md={3} lg={3} controlId="formGroupNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="nome"
            type="text"
            placeholder={place ? place.nome : ""}
            defaultValue={place ? place.nome : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
          <Form.Label>Especialidade</Form.Label>
          <Form.Control
            name="especialidade"
            type="text"
            placeholder={place ? place.especialidade : ""}
            defaultValue={place ? place.especialidade : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control type="date" readOnly={read} defaultValue={ place ? place.data_de_nascimento : ""} name="data_de_nascimento" />
        </Form.Group>
      </Row>
      <Row>

        <Form.Group as={Col} sm={2} xs={12} md={4} lg={5} controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder={place ? place.email : ""}
            defaultValue={place ? place.email : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} sm={2} xs={12} md={4} lg={5}>
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            name="telefone"
            type="text"
            placeholder={place ? place.telefone : ""}
            defaultValue={place ? place.telefone : ""}
            readOnly={read}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGroupSecretarias">
          <Form.Label>Secretarias</Form.Label>
          <Form.Control
            name="secretarias"
            type="textarea"
            placeholder={place ? place.secretarias : ""}
            defaultValue={place ? place.secretarias : ""}
            readOnly={read}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGroupTelefone">
          <Form.Label>Locais de Atendimento</Form.Label>
          <Form.Control
            name="locais_de_atendimento"
            type="text"
            placeholder={place ? place.locais_de_atendimento : ""}
            defaultValue={place ? place.locais_de_atendimento : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGroupTelefone">
          <Form.Label>Observações</Form.Label>
          <Form.Control type="text"  readOnly={read} name="observacoes"/>
        </Form.Group>
        {(children)}

          <Button
            className="mt-3 me-3"
            variant="info"

            type="submit"
          >
            {" "}
            Registrar{" "}
          </Button>
        
      </Row>
    </>
  );
};
