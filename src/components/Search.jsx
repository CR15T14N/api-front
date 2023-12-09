import React from "react";

function Search(){
    return(
        <form className="flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Busca tu artis favorito.." aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    );
}
export default Search