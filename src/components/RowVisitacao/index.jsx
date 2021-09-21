export const RowVisitacao = ({ visitacao }) => {
    return (
      <>
        <td className="col-md-2">{visitacao.data}</td>
        <td className="col-md-3">{visitacao.amostras}</td>
        <td className="col-md-3">{visitacao.trabalhos}</td>
        <td className="col-md-4">{visitacao.comentarios}s</td>
      </>
    );
  };
  