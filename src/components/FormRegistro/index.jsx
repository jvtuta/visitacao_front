import { Card, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css'
export const FormRegistro = () => {
  return (
    <Card>
      <Card.Header>Registrar</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
            ></Form.Control>
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
          <Button className="mt-3 me-3" variant="info"> Registrar </Button>
          <Link to="/login" className=" mt-3 btn btn-primary">Login</Link>
        </Form>
      </Card.Body>
    </Card>
  );
};
