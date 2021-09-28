
export const PaginationLinks = ({ qtd }) => {
  let links = [];
  for (let i = 1; i <= qtd; i++) {
    links.push(i);
  }
  
  return (
    <>
        {links.map((e)=>(
            //eslint-disable-next-line
            <li className={"page-item"}><a className="page-link" href="#">{e}</a></li>
        ))}
    </>
  );
};
