export const PaginationLinks = ({ qtd }) => {
  let links = [];
  for (let i = 1; i <= qtd; i++) {
    links.push(i);
  }
  let active = false
  return (
    <>
        {links.map((e)=>(
            <li className={active || e[0] ? "page-item active" : "page-item"}><a className="page-link" onClick={()=>active=true}>{e}</a></li>
        ))}
    </>
  );
};
