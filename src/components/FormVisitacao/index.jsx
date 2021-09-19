import { useContext, useRef, useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { VisitadorContext } from "../../context/Visitador/context";
import { FormVisitador } from "../FormVisitador";

export const FormVisitacao = () => {
  const { visitadorState } = useContext(VisitadorContext);
  const { visitadores } = visitadorState;
  const [ visitador, setVisitador ] = useState([]);
  const cr = useRef(null);
  const cr_val = useRef(null);

  function searchVisitador(conselho_regional, tipo) {
    if (conselho_regional.length === 4) {
      const visitador = visitadores.filter((e) => {
        // eslint-disable-next-line
        return e[tipo.toLowerCase()] == conselho_regional;
      })
      setVisitador(()=>visitador)
      
      return;
    }
    if (conselho_regional.length > 4) {
      return (cr_val.current.value = "");
    }
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
                onChange={(e) => {
                  searchVisitador(e.target.value, cr.current.value);
                }}
              />
            </InputGroup>
          </Col>
        </Form.Group>
      </Row>
        {visitador.length === 0 &&(<FormVisitador read={false}/>)}
        {visitador.length > 0 &&(<FormVisitador read={true} place={visitador[0]} />)}
    </Form>
  );
};
