import { Card, Form, Button } from "react-bootstrap";
import { Register_user } from "../../context/Auth/actions";
import { Link } from "react-router-dom";
import "./styles.css";
import { useContext, useRef, useState } from "react";

import { AuthContext } from "../../context/Auth/context";
import { Feedback } from "../Feedback";
export const FormRegistro = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);
  const password_confirmation = useRef(null);
  const name = useRef(null);
  const [verifyPass, setVerifyPass] = useState();
  function register() {
    if (password.current.value === password_confirmation.current.value) {
      
      const params = new URLSearchParams({
        email: email.current.value,
        password: password.current.value,
        name: name.current.value,
      });
      
      Register_user(authDispatch, params);
      return;
    } else {
      setVerifyPass(false);
      return;
    }
  }

  return (
    <Card>
      <Card.Header>Registrar</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              ref={email}
              type="email"
              placeholder="Digite seu email"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              ref={name}
              type="text"
              placeholder="Digite seu nome"
              
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              ref={password}
              type="password"
              placeholder="Digite a senha"
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formGroupPasswordConfirmation">
            <Form.Label>Confirmação de senha</Form.Label>
            <Form.Control
              ref={password_confirmation}
              type="password"
              placeholder="Confirme sua senha"
              required
            ></Form.Control>
          </Form.Group>
          <Button
            className="mt-3 me-3"
            variant="info"
            onClick={() => register()}
          >
            {" "}
            Registrar{" "}
          </Button>
          <Link to="/login" className=" mt-3 btn btn-primary">
            Login
          </Link>
        </Form>
        {authState.loading&&(
            <div>
                <span>Carregando...</span>
            </div>
        )}
        {!!verifyPass && <p className="text-danger">A senha não confere</p>}
        {authState.feedback === true &&
          <Feedback feedback={'Usuário cadastrado com sucesso!'} success={true} />
        }
        {typeof(authState.feedback === 'string' )&&
          <Feedback feedback={authState.feedback} success={false} />
        }
        
      </Card.Body>
    </Card>
  );
};
