import { useContext, useRef, useState } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { VisitadoContext } from "../../context/Visitados/context";

export const FormVisitado = ({ place, children, onClickCallback }) => {
  const {visitadoState} = useContext(VisitadoContext);
  const [visitado, setVisitado] = useState();
  const read = place ? true : false;
  const tipo = useRef(null);
  const form = useRef(null);

  function handleConselhoRegionalOnchange(e) {
    if (e.target.length >= 4) {
      if(place) {
        setVisitado(place.filter((e)=>{
          return e[tipo.current.value].conselho_regional === e.current.target
        }))
      } else {
        setVisitado(visitadoState.visitados.filter((e)=>{
          return e[tipo.current.value].conselho_regional === e.current.target
        }))
      }
    }
  }

  return (
    <>
      <h4 className="mt-1">Visitado: </h4>
      <Form ref={form}>
        <Row className="mb-2">
          <Col xs md={4}>
            <InputGroup>
              <InputGroup.Text>Conselho regional</InputGroup.Text>
              <Form.Control as="select" name="tipo" ref={tipo}>
                <option value="crm">CRM</option>
                <option value="crn">CRN</option>
              </Form.Control>
              <Form.Control
                type="number"
                name="conselhoRegional"
                onChange={(e) => handleConselhoRegionalOnchange(e)}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            sm={2}
            xs={12}
            md={3}
            lg={3}
            controlId="formGroupNome"
          >
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="nome"
              type="text"
              placeholder={visitado ? visitado.nome : ""}
              defaultValue={visitado ? visitado.nome : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
            <Form.Label>Especialidade</Form.Label>
            <Form.Control
              name="especialidade"
              type="text"
              placeholder={visitado ? visitado.especialidade : ""}
              defaultValue={visitado ? visitado.especialidade : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              type="date"
              readOnly={read}
              defaultValue={visitado ? visitado.data_de_nascimento : ""}
              name="data_de_nascimento"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            sm={2}
            xs={12}
            md={4}
            lg={5}
            controlId="formGroupEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder={visitado ? visitado.email : ""}
              defaultValue={visitado ? visitado.email : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} sm={2} xs={12} md={4} lg={5}>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              name="telefone"
              type="text"
              placeholder={visitado ? visitado.telefone : ""}
              defaultValue={visitado ? visitado.telefone : ""}
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
              placeholder={visitado ? visitado.secretarias : ""}
              defaultValue={visitado ? visitado.secretarias : ""}
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
              placeholder={visitado ? visitado.locais_de_atendimento : ""}
              defaultValue={visitado ? visitado.locais_de_atendimento : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupTelefone">
            <Form.Label>Observações</Form.Label>
            <Form.Control
              type="text"
              readOnly={read}
              name="observacoes"
              placeholder={visitado ? visitado.observacoes : ""}
              defaultValue={visitado ? visitado.observacoes : ""}
            />
          </Form.Group>
          {children}
          <div>
            <Button
              className="mt-3 me-3 col-md-4"
              variant="info"
              onClick={(e) => {
                e.preventDefault();
                return onClickCallback(form);
              }}
              type="submit"
            >
              {" "}
              Salvar{" "}
            </Button>
          </div>
        </Row>
      </Form>
    </>
  );
};
