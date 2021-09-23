export const RowVisitado = ({ visitado }) => {
  return (
    <>
      <td>{visitado.nome}</td>
      <td>{visitado.crm !== null ? visitado.crm : visitado.crn}</td>
      <td>{visitado.secretarias}</td>
      <td>{visitado.telefone}</td>
    </>
  );
};
