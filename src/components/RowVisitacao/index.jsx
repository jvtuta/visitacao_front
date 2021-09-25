export const RowVisitacao = ({ visitacao }) => {
    return (
      <>
        <td className="col-md-2" data-title="Data:">
          <span className="float-md-none float-end">{visitacao.data}</span>
        </td>
        <td className="col-md-3" data-title="Amostras:">
          <span className="">{visitacao.amostras}</span>
        </td>
        <td className="col-md-3" data-title="Trabalhos:">
          <span className="">{visitacao.trabalhos}</span>
        </td>
        <td className="col-md-4" data-title="Comentários:">
          <span className="">{visitacao.comentarios}</span>
        </td>
      </>
    );
  };
  