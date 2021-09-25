export const RowVisitado = ({ visitado }) => {
  return (
    <>
     
      <td data-title="Nome:">
        <span className="float-md-none float-end">{visitado.nome}</span>
      </td>
      <td data-title="Conselho Regional:">
        <span className="float-md-none float-end">{visitado.crm !== null ? visitado.crm : visitado.crn}</span>
      </td>
      <td data-title="Secretarias:">
        <span className="float-md-none float-end">{visitado.secretarias}</span>
      </td>
      <td data-title="Telefone:">
        <span className="float-md-none float-end">{visitado.telefone}</span>
      </td>
    </>
  );
};
