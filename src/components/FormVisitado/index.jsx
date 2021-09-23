import { useRef } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

export const FormVisitado = ({ place, children, onClickCallback }) => {
  const read = place ? true : false
  const tipo = useRef(null)
  const form = useRef(null)
  const conselhoRegional = useRef(null)
  console.log(onClickCallback)
  if(place) {
    const visitado = place.visitados.filter((e)=>{
      return e[tipo.current.value].conselho_regional === conselhoRegional.current.value
    })

    place = {...visitado}
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
            <Form.Control type="number" name="conselhoRegional" ref={conselhoRegional} />
          </InputGroup>
        </Col>
      </Row>
      <Row>

        <Form.Group as={Col} sm={2} xs={12} md={3} lg={3} controlId="formGroupNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="nome"
            type="text"
            placeholder={place ? place.nome : ""}
            defaultValue={place ? place.nome : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
          <Form.Label>Especialidade</Form.Label>
          <Form.Control
            name="especialidade"
            type="text"
            placeholder={place ? place.especialidade : ""}
            defaultValue={place ? place.especialidade : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control type="date" readOnly={read} defaultValue={ place ? place.data_de_nascimento : ""} name="data_de_nascimento" />
        </Form.Group>
      </Row>
      <Row>

        <Form.Group as={Col} sm={2} xs={12} md={4} lg={5} controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder={place ? place.email : ""}
            defaultValue={place ? place.email : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} sm={2} xs={12} md={4} lg={5}>
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            name="telefone"
            type="text"
            placeholder={place ? place.telefone : ""}
            defaultValue={place ? place.telefone : ""}
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
            placeholder={place ? place.secretarias : ""}
            defaultValue={place ? place.secretarias : ""}
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
            placeholder={place ? place.locais_de_atendimento : ""}
            defaultValue={place ? place.locais_de_atendimento : ""}
            readOnly={read}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGroupTelefone">
          <Form.Label>Observações</Form.Label>
          <Form.Control 
            type="text" 
            readOnly={read} 
            name="observacoes" 
            placeholder={place ? place.observacoes : ""} 
            defaultValue={place ? place.observacoes : ""}
          />
        </Form.Group>
        {(children)}
          <div>
          <Button
            
            className="mt-3 me-3 col-md-4"
            variant="info"
            onClick={(e)=> {
              e.preventDefault()
              return  onClickCallback(form)
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
