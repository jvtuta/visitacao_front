import { useContext, useEffect, useRef } from "react";
import { Authenticate_user } from "../../context/Auth/actions";
import { AuthContext } from "../../context/Auth/context";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './style.css'

export const FormLogin = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const email = useRef(null)
  const password = useRef(null)
  const history = useHistory()

  function handleBlogin() {
    const usuario = new URLSearchParams({email: email.current.value, password: password.current.value});
    Authenticate_user(authDispatch, usuario)
  }
  
  useEffect(()=>{
    if(authState.authenticated) {
      history.push('/')
    }
  },[authState.authenticated, history])

  return (
    <Card>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              ref={email}
              type="email"
              placeholder="Digite seu email"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              ref={password}
              type="password"
              placeholder="Digite a senha"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button className="mt-3 me-3" variant="info" onClick={handleBlogin}> Logar </Button>
        <Link to="/registrar" className=" mt-3 btn btn-primary">Registrar</Link>
        {authState.loading&&(
            <div>
                <span>Carregando...</span>
            </div>
        )}
        
      </Card.Footer>
    </Card>
  );
}

/* <button onClick={
          ()=> Authenticate_user(context.authDispatch)
        
      >Login</button> */
