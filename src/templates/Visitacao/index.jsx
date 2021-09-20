import { RowVisitacao } from "../../components/RowVisitacao";
import { Header } from "../../components/Header";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { VisitacaoContext } from "../../context/Visitacao/context";
import { load_visitacao } from "../../context/Visitacao/actions";

export const Visitacao = () => {
  let {id} = useParams();
  const { visitacaoState, visitacaoDispatch } = useContext(VisitacaoContext);
    console.log(visitacaoState)
    const visitacoes = ''
  useEffect(() => {  
    load_visitacao(visitacaoDispatch, id);
  }, [visitacaoDispatch, id]);
  return (
    <>
      <Header login={false} />
      <Container>
        <Table size="sm" responsive="lg">
          <thead>
            <tr>
              <th>Visitador</th>
              <th>Conselho regional</th>
              <th>Especialidade</th>
              <th>Email</th>
              <th>Secretárias</th>
              <th>Data de nascimento</th>
              <th>Telefone</th>
              <th>Locais de atendimento</th>
            </tr>
          </thead>
          <tbody>
            {visitacoes.length > 0 &&
              visitacoes.map((e) => {
                return (
                  <tr key={e.id}>
                    <RowVisitacao visitacao={e} />
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
