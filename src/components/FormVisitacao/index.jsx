import { useContext, useRef, useState } from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
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

    if (visitador.length > 0 && conselho_regional.length < 4) {
      return setVisitador([])
    }
  }

  function registrar() {

  }

  return (
    <Form>
      <h4 className="mt-4">Visitador: </h4>

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
        {visitador.length === 0 &&(<FormVisitador read={false} />)}
        {visitador.length > 0 &&(<FormVisitador read={true} place={visitador[0]} registrar={registrar()}/>)}
        <h4 className="mt-4">Visitações: </h4>
        <Row className="">
          <Col md={3}>
          <Form.Group as={Col}>
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col}>
              <Form.Label>Comentários</Form.Label>
              <Form.Control type="textarea" />

          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
                <Form.Label>Amostras</Form.Label>
                <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
                <Form.Label>Trabalhos</Form.Label>
                <Form.Control type="text" />
          </Form.Group>
        </Row>
    </Form>
  );
};
