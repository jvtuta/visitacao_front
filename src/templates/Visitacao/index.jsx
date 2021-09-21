import { RowVisitacao } from "../../components/RowVisitacao";
import { Header } from "../../components/Header";
import { Button, ButtonGroup, Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { VisitacaoContext } from "../../context/Visitacao/context";
import { load_visitacao } from "../../context/Visitacao/actions";

export const Visitacao = () => {
  let {id} = useParams();
  const { visitacaoState, visitacaoDispatch } = useContext(VisitacaoContext);
  const { visitacoes } = visitacaoState
    console.log(visitacaoState)
  useEffect(() => {  
    load_visitacao(visitacaoDispatch, id);
  }, [visitacaoDispatch, id]);
  return (
    <>
      <Header login={true} />
      <Container>
        <Table size="sm" responsive="lg">
          <thead>
            <tr>
              <th>Data da visita</th>
              <th>Amostras</th>
              <th>Trabalhos</th>
              <th>Comentários</th>
              <th>#Ações</th>
            </tr>
          </thead>
          <tbody>
            {visitacoes.length > 0 &&
              visitacoes.map((e) => {
                return (
                  <tr key={e.id}>
                    <RowVisitacao visitacao={e} />
                    <td>
                      <ButtonGroup>
                        <Button variant="info" size="sm">Imprimir</Button>
                        <Button variant="success" size="sm">Editar</Button>
                        <Button variant="danger" size="sm">Excluir</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
