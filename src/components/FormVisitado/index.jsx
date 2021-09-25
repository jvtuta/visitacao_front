import { useEffect, useRef, useMemo, useState } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import moment from "moment";
export const FormVisitado = ({ id_visitado, children, onClickCallback }) => {
  const visitadosJSON = localStorage.getItem('visitados')
  const visitados = useMemo(()=> visitadosJSON ? JSON.parse(visitadosJSON) : [],[visitadosJSON]  ) 
  const [visitado, setVisitado] = useState();
  const read = id_visitado || visitado ? true : false;
  const tipo = useRef(null);
  const form = useRef(null);
  useEffect(()=>{
    if(id_visitado) {
      setVisitado(()=>{
          const res = visitados.filter((visitado)=>{
            //eslint-disable-next-line
            return visitado.id == id_visitado
          })
          return {...res[0]}
        }
      )
    }

  },[id_visitado, visitados])

  function handleConselhoRegionalOnchange(e) {
      if(e.target.value.length >= 4) {
        
        setVisitado(()=>{
          const res = visitados.filter((visitado)=>{
            //eslint-disable-next-line
            return visitado[tipo.current.value] == e.target.value
          })
          
          if(res.length>0) {
            return {...res[0]}
          } else {
            return null
          }
      })

    }
      if(visitado&&e.target.value.length <= 4) {
        return setVisitado(null)
      }   
  }
  
  return (
    <>
      <h4 className="mt-1">Visitado: </h4>
      <Form ref={form}>
        <Row className="mb-2">
          <Col xs sm md={6} lg={4}>
            <InputGroup>
              <InputGroup.Text>Conselho regional</InputGroup.Text>
              <Form.Control as="select" name="tipo" ref={tipo} readOnly={id_visitado ? true : false}>
                <option value="crm">CRM</option>
                <option value="crn">CRN</option>
              </Form.Control>
              <Form.Control
                //Pegar número de conselho regional de acordo com o tipo; Caso crm então crm caso crn então crn
                placeholder={visitado ? visitado.crm ? visitado.crm:visitado.crn : ""}
                defaultValue={visitado ? visitado.crm ? visitado.crm:visitado.crn : ""}
                type="number"
                name="conselhoRegional"
                onChange={(e) => handleConselhoRegionalOnchange(e)}
                readOnly={id_visitado ? true : false}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            sm={2}
            xs={12}
            md={3}
            lg={3}
            controlId="formGroupNome"
          >
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="nome"
              type="text"
              placeholder={visitado ? visitado.nome : ""}
              defaultValue={visitado ? visitado.nome : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
            <Form.Label>Especialidade</Form.Label>
            <Form.Control
              name="especialidade"
              type="text"
              placeholder={visitado ? visitado.especialidade : ""}
              defaultValue={visitado ? visitado.especialidade : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              type="date" 
              readOnly={read}
              defaultValue={visitado ? moment(visitado.data_de_nascimento, 'DD-MM-YYYY').format('YYYY-MM-DD'): ""}
              name="data_de_nascimento"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            sm={2}
            xs={12}
            md={4}
            lg={5}
            controlId="formGroupEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder={visitado ? visitado.email : ""}
              defaultValue={visitado ? visitado.email : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} sm={2} xs={12} md={4} lg={5}>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              name="telefone"
              type="text"
              placeholder={visitado ? visitado.telefone : ""}
              defaultValue={visitado ? visitado.telefone : ""}
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
              placeholder={visitado ? visitado.secretarias : ""}
              defaultValue={visitado ? visitado.secretarias : ""}
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
              placeholder={visitado ? visitado.locais_de_atendimento : ""}
              defaultValue={visitado ? visitado.locais_de_atendimento : ""}
              readOnly={read}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGroupTelefone">
            <Form.Label>Observações</Form.Label>
            <Form.Control
              type="text"
              readOnly={read}
              name="observacoes"
              placeholder={visitado ? visitado.observacoes : ""}
              defaultValue={visitado ? visitado.observacoes : ""}
            />
          </Form.Group>
          {children}
          <div>
            <Button
              className="mt-3 me-3 col-md-4"
              variant="info"
              onClick={(e) => {
                e.preventDefault();
                return onClickCallback(form);
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
