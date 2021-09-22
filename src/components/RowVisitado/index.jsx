export const RowVisitado = ({ visitador }) => {
  return (
    <>
      <td>{visitador.nome}</td>
      <td>{visitador.crm !== null ? visitador.crm : visitador.crn}</td>
      <td>{visitador.especialidade}</td>
      <td>{visitador.email}</td>
      <td>{visitador.secretarias}</td>
      <td>{visitador.data_de_nascimento}</td>
      <td>{visitador.telefone}</td>
      <td>{visitador.observacoes}</td>
      <td>{visitador.locais_de_atendimento}</td>
    </>
  );
};
