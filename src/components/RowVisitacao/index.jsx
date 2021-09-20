export const RowVisitacao = ({ visitacao }) => {
    return (
      <>
        <td>{visitacao.data}</td>
        <td>{visitacao.amostras}</td>
        <td>{visitacao.trabalhos}</td>
        <td>{visitacao.comentarios}s</td>
      </>
    );
  };
  