export const RowVisitado = ({ visitado }) => {
  return (
    <>
      <td>{visitado.nome}</td>
      <td>{visitado.crm !== null ? visitado.crm : visitado.crn}</td>
      <td>{visitado.especialidade}</td>
      <td>{visitado.email}</td>
      <td>{visitado.secretarias}</td>
      <td>{visitado.data_de_nascimento}</td>
      <td>{visitado.telefone}</td>
      <td>{visitado.observacoes}</td>
      <td>{visitado.locais_de_atendimento}</td>
    </>
  );
};
