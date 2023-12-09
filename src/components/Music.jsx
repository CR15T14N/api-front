import React, { useContext, useState } from 'react';
import { MusicContext } from '../context/MusicContext';
import '../styles/Music.css';
import { BsTrash } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import FormEdit from './FormEdit';

const Music = () => {
  const { musics, isLoading, error, deleteOne } = useContext(MusicContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingMusic, setEditingMusic] = useState(null);

  const handleEdit = (music) => {
    setEditingMusic(music);
    setIsEditing(true);
  };

  if (isLoading) {
    return <div><h2>Cargando...</h2></div>;
  }

  if (error) {
    return <div><h2>{error}</h2></div>;
  }

  return (
    <div className="artists">
      
      {isEditing && (
        <FormEdit
          isEditing={isEditing}
          editingMusic={editingMusic}
          onCancel={() => setIsEditing(false)}
        />
        )}
                <h2>Tabla de artistas y bandas</h2>

      <table>
        <thead>
          <tr>
            <th>Artista</th>
            <th>Género</th>
            <th>Origen</th>
            <th>Inicio</th>
            <th>Cantidad de Canciones</th>
            <th>Cantidad de Miembros</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {musics.map((m) => (
            <tr key={m.id}>
              <td>{m.artist}</td>
              <td>{m.genres}</td>
              <td>{m.origin}</td>
              <td>{m.start}</td>
              <td>{m.songs}</td>
              <td>{m.members}</td>
              <td className='actions'>
                <BsTrash color="tomato" size={18} onClick={() => deleteOne(m.id)} />
                <FaEdit color="light-blue" size={18} onClick={() => handleEdit(m)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Music;
