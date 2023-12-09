// FormEdit.jsx

import React, { useState, useContext, useEffect } from 'react';
import { MusicContext } from '../context/MusicContext';
import "../styles/FormEdit.css";

const FormEdit = ({ editingMusic, onCancel }) => {
  const { updateOne } = useContext(MusicContext);

  const [editedMusic, setEditedMusic] = useState({
    artist: '',
    start: 0,
    members: '',
    origin: '',
    songs: 0,
    poster: '',
    genres: [], // Cambiado a un array para contener los géneros seleccionados
  });

  useEffect(() => {
    if (editingMusic) {
      setEditedMusic({
        artist: editingMusic.artist,
        start: editingMusic.start,
        members: editingMusic.members,
        origin: editingMusic.origin,
        songs: editingMusic.songs,
        poster: editingMusic.poster,
        genres: Array.isArray(editingMusic.genres) ? editingMusic.genres : [], // Asegura que genres sea un array
      });
    }
  }, [editingMusic]);
  
  
  

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
  
    if (name === 'genres') {
      const updatedGenres = checked
        ? [...editedMusic.genres, value]
        : editedMusic.genres.filter((genre) => genre !== value);
  
      setEditedMusic((prevMusic) => ({
        ...prevMusic,
        genres: updatedGenres,
      }));
    } else {
      setEditedMusic((prevMusic) => ({
        ...prevMusic,
        [name]: value,
      }));
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateOne({ ...editingMusic, ...editedMusic });

      setEditedMusic({
        artist: '',
        start: 0,
        members: '',
        origin: '',
        songs: 0,
        poster: '',
        genres: [],
      });

      onCancel();
    } catch (error) {
      console.error('Error al actualizar música:', error.message);
    }
  };

  return (
    <div className="form-edit-container">
      <form method="PUT" onSubmit={handleSubmit} encType="multipart/form-data">
        <label className="form-edit-label">
          Artista:
          <input className="form-edit-input" type="text" name="artist" value={editedMusic.artist} onChange={handleChange} required />
        </label>
        <br />

        <label className="form-edit-label">
  Género:
  <select
    name="genre"
    value={editedMusic.genre}
    onChange={handleChange}
    required
  >
    <option value="">Selecciona un género</option>
    <option value="Heavy Metal">Heavy Metal</option>
    <option value="Rock">Rock</option>
    <option value="Rock Progresivo">Rock Progresivo</option>
    <option value="Reggae">Reggae</option>
    <option value="Industrial Metal">Industrial Metal</option>
    <option value="Post-Hardcore">Post-Hardcore</option>
    <option value="Metal Alternativo">Metal Alternativo</option>
    <option value="Rock Industrial">Rock Industrial</option>
    <option value="Metalcore">Metalcore</option>
  </select>
</label>

        <br />

        <label className="form-edit-label">
          Origen:
          <input className="form-edit-input" type="text" name="origin" value={editedMusic.origin} onChange={handleChange} required />
        </label>
        <br />
        <label className="form-edit-label">
          Inicio (Año):
          <input className="form-edit-input" type="number" name="start" value={editedMusic.start} onChange={handleChange} required />
        </label>
        <br />
        <label className="form-edit-label">
          Cantidad de canciones:
          <input className="form-edit-input" type="number" name="songs" value={editedMusic.songs} onChange={handleChange} required />
        </label>
        <br />
        <label className="form-edit-label">
          Nombres de los miembros:
          <input className="form-edit-input" type="text" name="members" value={editedMusic.members} onChange={handleChange} required />
        </label>
        <br />
        <label className="form-edit-label">
          URL de la imagen:
          <input className="form-edit-input" type="text" name="poster" value={editedMusic.poster} onChange={handleChange} />
        </label>

        <button className="form-edit-button" type="submit">Guardar Cambios</button>
        <button className="form-edit-cancel-button" type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormEdit;

