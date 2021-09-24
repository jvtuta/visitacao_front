import { FormVisitado } from "../../components/FormVisitado";
import { FormVisitacao } from "../../components/FormVisitacao";
import { VisitadoContext } from "../../context/Visitados/context";
import { VisitacaoContext } from "../../context/Visitacao/context";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register_visitado } from "../../context/Visitados/actions";
import { AuthContext } from "../../context/Auth/context";
import { useParams } from "react-router";

export const Visitado = () => {
  const { visitadosState, visitadosDispatch } = useContext(VisitadoContext);
  const { visitacaoState, visitacaoDispatch } = useContext(VisitacaoContext);
  const { id } = useParams();
  const { authState } = useContext(AuthContext);

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
    } = obj;

    const visitadoForm = new URLSearchParams({
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
    });

    const visitados = [...JSON.parse(localStorage.getItem("visitados"))];
    switch (tipo) {
      case "crm":
        {
          const visitado = visitados.filter((e) => {
            //eslint-disable-next-line
            return e["crm"] == conselhoRegional;
          });

          if (visitado) {
            //Registrar visitacao

          } else {
            await register_visitado(visitadosDispatch, visitadoForm);
          }
        }
        break;
      case "crn":
        {
          const visitado = visitados.filter((e) => {
            //eslint-disable-next-line
            return e["crm"] == conselhoRegional;
          });

          if (visitado) {
            //Registrar visitacao

          } else {
            await register_visitado(visitadosDispatch, visitadoForm);
          }
        }
        break;
      default:
        break;
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
