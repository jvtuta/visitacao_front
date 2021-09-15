export const SearchInput = ({handleSonchange}) => {
    return <input type="search" className="form-control" placeholder="Buscar visitacoes" onChange={(e)=>handleSonchange(e.target.value)}></input>
}