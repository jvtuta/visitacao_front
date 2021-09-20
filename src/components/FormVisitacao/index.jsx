import { useContext, useRef, useState } from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import { register_visitacao } from "../../context/Visitacao/actions";
import { VisitacaoContext } from "../../context/Visitacao/context";
import { register_visitador } from "../../context/Visitador/actions";
import { VisitadorContext } from "../../context/Visitador/context";
import { FormVisitador } from "../FormVisitador";
import { Feedback } from "../Feedback"


export const FormVisitacao = () => {
  const { visitadorState, visitadorDispatch } = useContext(VisitadorContext);
  const { visitacaoState, visitacaoDispatch } = useContext(VisitacaoContext)
  
  const { visitadores } = visitadorState;
  const [visitador, setVisitador] = useState([]);
  const cr = useRef(null);
  const cr_val = useRef(null);
  const form = useRef(null);

  function FormVistador() {
    return (
      <>
      
      <h4 className="mt-4">Visitações: </h4>
          <Row className="">
            <Form.Group as={Col} sm={2} xs={12} md={3} lg={3}>
              <Form.Label>Data</Form.Label>
              <Form.Control type="date" name="data" required/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={2} xs={12} md={3} lg={6}>
              <Form.Label>Comentários</Form.Label>
              <Form.Control type="textarea" name="comentarios"/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Amostras</Form.Label>
              <Form.Control type="text" name="amostras" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Trabalhos</Form.Label>
              <Form.Control type="text" name="trabalhos" />
            </Form.Group>
          </Row>
          </>
        )
        
  }

  function searchVisitador(conselho_regional, tipo) {
    if (conselho_regional.length === 4) {
      const visitador = visitadores.filter((e) => {
        // eslint-disable-next-line
        return e[tipo.toLowerCase()] == conselho_regional;
      });
      if(visitador) setVisitador(() => visitador);

      return;
    }
    if (conselho_regional.length > 4) {
      return (cr_val.current.value = "");
    }

    if (visitador.length > 0 && conselho_regional.length < 4) {
      return setVisitador([]);
    }
  }

  async function registrar(e) {
    
    e.preventDefault()
    let obj
    for(let i = 0; i < (form.current.length - 1); i++) {
      obj = {
        ...obj,[form.current[i].name]:form.current[i].value
      }
    }
    let id_visitador
    //Caso não haja visitador cadastrado na base de dados:
    if(!(visitador.length > 0)) {
      const { 
        tipo, 
        data_de_nascimento, 
        email, 
        observacoes, 
        secretarias, 
        telefone, 
        especialidade, 
        nome, 
        locais_de_atendimento,
      } = obj

      const visitador = {
        nome, 
        conselho_regional: tipo.toLowerCase(), 
        crm: tipo.toLowerCase() === 'crm' ? cr_val.current.value : '',
        crn: tipo.toLowerCase() === 'crn' ? cr_val.current.value : '',
        especialidade, 
        telefone, 
        locais_de_atendimento, 
        secretarias, 
        email, 
        observacoes, 
        data_de_nascimento
      }
      const data = new URLSearchParams(visitador)
      await register_visitador(visitadorDispatch,data)
      //Pegar ultimo visitador cadastrado
      id_visitador = visitadores[visitadores.length -1].id
      
    }
    id_visitador = id_visitador ? id_visitador : visitador[0].id
    const {amostras, trabalhos, comentarios, data} = obj
    
    const data_visitacao = new URLSearchParams({amostras, trabalhos, comentarios, id_visitador, data})
    register_visitacao(visitacaoDispatch, data_visitacao)
    
    
  }

  return (
    <>
    <Col md={6}>
      {/* <Link to="/" className="btn btn-sm btn-info float-start">Voltar</Link> */}
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Cadastro de visitações</li>
      </ol>
    </nav>
    </Col>
    
    <Form onSubmit={(e)=>registrar(e)} ref={form}>
      
      
      <h4 className="mt-4">Visitador: </h4>
      <Row>
        <Form.Group as={Col} sm={2} xs={6} md={2} lg={2}>
          <Form.Label className="text-center">Conselho Regional</Form.Label>
          <InputGroup size="sm">
            <Form.Control as="select" ref={cr} name="tipo">
              <option>CRM</option>
              <option>CRN</option>
            </Form.Control>
            <Form.Control
              name="conselho_regional"
              ref={cr_val}
              type="number"
              required
              onChange={(e) => {
                searchVisitador(e.target.value, cr.current.value);
              }}
            />
          </InputGroup>
        </Form.Group>
      </Row>
      {visitador.length === 0 && (
        <FormVisitador read={false} registrar={registrar}>
          <FormVistador />
        </FormVisitador>
      )}
      {visitador.length > 0 && (
        <FormVisitador read={true} place={visitador[0]} registrar={registrar}>
          <FormVistador />
        </FormVisitador>
      )}
      {!(visitacaoState.feedback)&&<Feedback feedback="Visitação cadastrada com sucesso" success="true" />}
    </Form>
    </>
  );
};
