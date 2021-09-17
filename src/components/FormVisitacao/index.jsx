import { useContext } from "react";
import { Form } from "react-bootstrap";
import { VisitadorContext } from "../../context/Visitador/context";

export const FormVisitacao = () => {
  const {visitadorState, visitadorDispatch} = useContext(VisitadorContext)

  return (
    <Form.Group>
      <Form.Label>Conselho Regional</Form.Label>
      <Form.Control as="select">
        <option>CRM</option>
        <option>CRN</option>
      </Form.Control>
      <Form.Control type="number" onChange={}>

      </Form.Control>
    </Form.Group>
  );
};
