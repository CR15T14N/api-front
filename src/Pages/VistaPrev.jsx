import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";
import "../styles/VistaPrev.css"
import NavBar from "../components/NavBar";

export const VistaPrev = () => {
    const { musics, isLoading, error } = useContext(MusicContext);

    if (isLoading) {
      return (
        <div>
          <h2>Cargando...</h2>
        </div>
      );
    }
  
    if (error) {
      return (
        <div>
          <h2>{error}</h2>
        </div>
      );
    }



    return (
        <>

            <NavBar />

        
  <div className="artists">
        <h2>Artistas y Bandas</h2>
    {musics.length ? (
      <div className="card-container">
        {musics.map((m) => (
          <div className="card" key={m.id}>
            <div className="card-header">
              <h2 className="artistTitle">{m.artist}</h2>
              <img src={m.poster} alt={m.artist} />
            </div>
            <div className="card-body">
              <p className="p">Género:{m.genres}</p>
              <p className="p">Origen: {m.origin}</p>
              <p className="p">Inicio: {m.start}</p>
              <p className="p">Cantidad de Canciones: {m.songs}</p>
              <p className="p">Cantidad de Miembros: {m.members}</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="p">No hay datos para mostrar.</p>
    )}
  </div>
</>
    )
}