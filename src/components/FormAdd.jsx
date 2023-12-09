// FormAdd.jsx
import React, { useState, useContext } from 'react';
import { MusicContext } from '../context/MusicContext';
import "../styles/FormAdd.css";

const FormAdd = () => {
  const { addOne } = useContext(MusicContext);
 

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newMusic, setNewMusic] = useState({
    artist: "",
    start: 0,
    members: "",
    origin: "",
    songs: 0,
    poster: "",
    genres: [],  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'genres') {
      setNewMusic((prevMusic) => ({
        ...prevMusic,
        genres: [...prevMusic.genres, value],  // Agrega el género al array
      }));
    } else {
      setNewMusic((prevMusic) => ({
        ...prevMusic,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llama a la función addOne del contexto para agregar la nueva música
      await addOne(newMusic);

      // Restablece el formulario
      setNewMusic({
        artist: "",
        start: 1900,
        members: "",
        origin: "",
        songs: 1900,
        poster: "",
        genres: [],
      });

      // Oculta el formulario
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error al agregar música:', error.message);
    }
  };

  const handleToggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className='centrado'>
      <button className='openForm' onClick={handleToggleForm}>
        {isFormVisible ? 'Cerrar Formulario' : 'Abrir Formulario'}
      </button>
      {isFormVisible && (
        <form className="formAdd" method='POST' onSubmit={handleSubmit} encType='multipart/form-data'>
          <label className='labelAdd'>
            Artista:
            <input className='inputAdd' type="text" name="artist" value={newMusic.artist} onChange={handleChange} required />
          </label>
          <br />
          <label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Heavy Metal"
    checked={newMusic.genres.includes("Heavy Metal")}
    onChange={handleChange}
  /> Heavy Metal
</label>

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Rock"
    checked={newMusic.genres.includes("Rock")}
    onChange={handleChange}
  /> Rock
</label>

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Rock Progresivo"
    checked={newMusic.genres.includes("Rock Progresivo")}
    onChange={handleChange}
  /> Rock Progresivo
</label>

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Reggae"
    checked={newMusic.genres.includes("Reggae")}
    onChange={handleChange}
  /> Reggae
</label>

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Industrial Metal"
    checked={newMusic.genres.includes("Industrial Metal")}
    onChange={handleChange}
  /> Industrial Metal
</label >

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Post-Hardcore"
    checked={newMusic.genres.includes("Post-Hardcore")}
    onChange={handleChange}
  /> Post-Hardcore
</label>

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Metal Alternativo"
    checked={newMusic.genres.includes("Metal Alternativo")}
    onChange={handleChange}
  /> Metal Alternativo
</label>

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Rock Industrial"
    checked={newMusic.genres.includes("Rock Industrial")}
    onChange={handleChange}
  /> Rock Industrial
</label>

<label className='labelAdd'>
  <input className='inputAdd'
    type="checkbox"
    name="genres"
    value="Metalcore"
    checked={newMusic.genres.includes("Metalcore")}
    onChange={handleChange}
  /> Metalcore
</label>

          <br />
          <label className='labelAdd'>
            Origen:
            <input className='inputAdd' type="text" name="origin" value={newMusic.origin} onChange={handleChange} required />
          </label>
          <br />
          <label className='labelAdd'>
            Inicio (Año, minimo 1900):
            <input className='inputAdd' type="number" name="start" value={newMusic.start} onChange={handleChange} required />
          </label>
          <br />
          <label className='labelAdd'>
            Cantidad de canciones:
            <input className='inputAdd' type="number" name="songs" value={newMusic.songs} onChange={handleChange} required />
          </label>
          <br />
          <label className='labelAdd'>
            Nombres de los miembros:
            <input className='inputAdd' type="text" name="members" value={newMusic.members} onChange={handleChange} required />
          </label>
          <br />
          <label className='labelAdd'>
            URL de la imagen:
            <input className='inputAdd' type="text" name="poster" value={newMusic.poster} onChange={handleChange} />
          </label>
          <button className='openForm' type="submit">Agregar Música</button>
        </form>
      )}
    </div>
  );
};

export default FormAdd;
