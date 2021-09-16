import { Table } from "react-bootstrap";
import { FormVisitador } from "../FormVisitador";

export const Visitador = () => {
  return (
    <>
      <h2>Visitadores</h2>
      <Table size="sm" responsive="lg" >
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
      </Table>
      <FormVisitador />
    </>
  );
};
