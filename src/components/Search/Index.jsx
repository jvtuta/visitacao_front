export const Search = ({handleSonchange}) => {
    return <input type="search" className="form-control" placeholder="Pesquisar visitado por nome ou conselho regional" onChange={(e)=>handleSonchange(e.target.value)}></input>
}