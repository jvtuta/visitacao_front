import { useContext, useRef, useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { VisitadorContext } from "../../context/Visitador/context";

export const FormVisitacao = () => {
  const { visitadorState, visitadorDispatch } = useContext(VisitadorContext);
  const { visitadores } = visitadorState;
  const [control, setControl] = useState(false)
  const [visitador, setVisitador] = useState();
  const cr = useRef(null);
  function searchVisitador(conselho_regional, tipo) {
    if (conselho_regional.length == 4) {
      const visitador = visitadores.filter((e) => {
        return e[tipo.toLowerCase()] == conselho_regional;
      });
      return setVisitador(visitador.length > 0 ? visitador : false);
    }
    console.log(visitador)

  }
  return (
    <Form>
      <Form.Group>
        <Row>
          <Col md={4}>
            <Form.Label className="text-center">Conselho Regional</Form.Label>
            <InputGroup size="sm">
                <Form.Control as="select" ref={cr}>
                  <option>CRM</option>
                  <option>CRN</option>
                </Form.Control>
                <Form.Control
                  type="number"
                  onChange={(e) =>
                    searchVisitador(e.target.value, cr.current.value)
                  }
                />
                {visitador&& 
                (<Button variant="outline-secondary" id="button-addon1" onClick={()=>setControl(true)}>
                  Cadastrar Visitador
                </Button>)}

            </InputGroup>
          </Col>
        </Row>
      </Form.Group>
      {/* Se não encontrar o visitador com o crm especificado então exibir ficha de cadastro de visitador */}
      {control && (
        <>
          <Form.Group controlId="formGroupNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome"
            ></Form.Control>
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
            <Form.Control type="date"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Telefone..."></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupTelefone">
            <Form.Label>Locais de Atendimento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Locais de atendimento..."
            ></Form.Control>
          </Form.Group>
          <Button className="mt-3 me-3" variant="info">
            {" "}
            Registrar{" "}
          </Button>
        </>
      )}
    </Form>
  );
};
