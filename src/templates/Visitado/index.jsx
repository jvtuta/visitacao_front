//Componentes
import { FormVisitado } from "../../components/FormVisitado";
import { FormVisitacao } from "../../components/FormVisitacao";
//Contextos
import { VisitadoContext } from "../../context/Visitados/context";
import { VisitacaoContext } from "../../context/Visitacao/context";
//React e react-router
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
//Ações
import { register_visitado } from "../../context/Visitados/actions";
import { register_visitacao } from "../../context/Visitacao/actions";

export const Visitado = () => {
  const { visitadosDispatch } = useContext(VisitadoContext);
  const { visitacaoDispatch } = useContext(VisitacaoContext);
  const { id } = useParams();

  const handleBsubmit = async (e) => {
    let obj;

    for (let i = 0; i < e.current.length - 1; i++) {
      obj = {
        ...obj,
        [e.current[i].name]: e.current[i].value,
      };
    }
    
    const {
      tipo,
      conselhoRegional,
      nome,
      especialidade,
      data_de_nascimento,
      email,
      telefone,
      secretarias,
      locais_de_atendimento,
      observacoes,
      data,
      comentarios,
      amostras,
      trabalhos
    } = obj;

    const visitadoForm = {
      tipo,
      crm: tipo === "crm" ? conselhoRegional : "",
      crn: tipo === "crn" ? conselhoRegional : "",
      nome,
      especialidade,
      data_de_nascimento,
      email,
      telefone,
      secretarias,
      locais_de_atendimento,
      observacoes,
    };

    const visitacaoForm = {
      data,
      comentarios,
      amostras,
      trabalhos,
      id_visitado: id ? id : ""
    }
    const visitadoData = new URLSearchParams(visitadoForm)
    const visitados = [...JSON.parse(localStorage.getItem("visitados"))];
    let visitado = visitados.filter((visitado)=>{
      //eslint-disable-next-line
      return visitado[tipo] == e.current.value
    })
    visitado = visitado[0]
    if(visitado) {
      visitacaoForm.id_visitado = visitado.id
      const visitacaoData = new URLSearchParams(visitacaoForm)
      await register_visitacao(visitacaoDispatch, visitacaoData)
    } else {
      await register_visitado(visitadosDispatch, visitadoData)
      visitacaoForm.id_visitado = JSON.parse(localStorage.getItem('visitado_id'))
      const visitacaoData = new URLSearchParams(visitacaoForm)
      await register_visitacao(visitacaoDispatch, visitacaoData)
    }

  };
  return (
    <>
      <Header login="true" />
      <Container>
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" active="true">
                  Cadastro de visitados
                </li>
              </ol>
            </nav>
          </Col>
        </Row>
        <Row>
          {id&&
          <FormVisitado id_visitado={id} onClickCallback={handleBsubmit}>
            <FormVisitacao />
          </FormVisitado>}

          {!id&&
          <FormVisitado onClickCallback={handleBsubmit}>
            <FormVisitacao />
          </FormVisitado>}

          
        </Row>
      </Container>
    </>
  );
};
