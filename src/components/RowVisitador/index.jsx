export const RowVisitador = ({ visitador }) => {
  return (
    <tr key={visitador.id}>
      <td>{visitador.nome}</td>
      <td>{visitador.crm !== null ? visitador.crm : visitador.crn}</td>
      <td>{visitador.especialidade}</td>
      <td>{visitador.email}</td>
      <td>{visitador.secretarias}</td>
      <td>teste</td>
      <td>teste</td>
      <td>teste</td>
    </tr>
  );
};
