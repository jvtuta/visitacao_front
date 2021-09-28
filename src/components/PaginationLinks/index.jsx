import { useState } from "react";

export const PaginationLinks = ({ qtd }) => {
  let links = [];
  for (let i = 1; i <= qtd; i++) {
    links.push(i);
  }
  
  return (
    <>
        {links.map((e)=>(
            <li className={"page-item"}><a className="page-link">{e}</a></li>
        ))}
    </>
  );
};
