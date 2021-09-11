import { useContext } from "react";
import { Authenticate_user } from "../../context/Auth/actions";
import { AuthContext } from "../../context/Auth/context";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  //usuário é new URLSearchParams({name: 'teste', 'password': 'teste2'})
  //   Authenticate_user(authDispatch, usuario)
  return (
    <Card>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite a senha"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
          <Card.Text>
              <Link to="/registro">Registrar</Link>
          </Card.Text>
      </Card.Footer>
    </Card>
  );
}

/* <button onClick={
          ()=> Authenticate_user(context.authDispatch)
        
      >Login</button> */
