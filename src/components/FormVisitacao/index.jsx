import { useContext, useRef, useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { VisitadorContext } from "../../context/Visitador/context";

export const FormVisitacao = () => {
  const { visitadorState } = useContext(VisitadorContext);
  const { visitadores } = visitadorState;
  const [visitador, setVisitador] = useState([]);
  const cr = useRef(null);
  const cr_val = useRef(null);
  function searchVisitador(conselho_regional, tipo) {
    
    if(conselho_regional.length === 4) {
      setVisitador(visitadores.filter((e)=>{
        return e[tipo.toLowerCase()] === conselho_regional
      }))
      return
    } 
    if(conselho_regional.length > 4) {
      return cr_val.current.value = ''
    }
    setVisitador([])
  }
  return (
    <Form>
        <Row>
          <Form.Group as={Col}>
            <Col md={4}>
            <Form.Label className="text-center">Conselho Regional</Form.Label>
            <InputGroup size="sm">
                <Form.Control as="select" ref={cr}>
                  <option>CRM</option>
                  <option>CRN</option>
                </Form.Control>
                <Form.Control
                  ref={cr_val}
                  type="number"
                  onChange={(e) =>{
                      searchVisitador(e.target.value, cr.current.value)
                    }
                  }
                />
                
            </InputGroup>
            </Col>
          </Form.Group>
        </Row>
      {/* Se não encontrar o visitador com o crm especificado então exibir ficha de cadastro de visitador */}
      {visitador.length === 0 &&(
        <>
          <Row>
          <Form.Group as={Col} controlId="formGroupNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome"
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupEspecialidade">
            <Form.Label>Especialidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Especialidade..."
            ></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGroupSecretarias">
            <Form.Label>Secretarias</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Secretária..."
            ></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGroupDataNasc">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control type="date"></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Telefone..."></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGroupTelefone">
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
        </Row>        
        </>
      )}        
    </Form>
  );
};
