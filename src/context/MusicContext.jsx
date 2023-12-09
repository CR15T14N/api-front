import React, { createContext, useState, useEffect } from 'react';
import { fetchAllMusic, addOneMusic, deleOneMusic, updateMusic } from '../services/allMusicServices';
import Spinner from 'react-bootstrap/Spinner';

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const [musics, setMusics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const musicData = await fetchAllMusic();
        console.log('Data from API:', musicData);

        setMusics(musicData); 
        setIsLoading(false);
      } catch (error) {
        setError('Error al cargar datos');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addOne = async (newMusic) => {
    try {
      const addedMusic = await addOneMusic(newMusic);
      setMusics((prevMusics) => [...prevMusics, addedMusic]);
    } catch (error) {
      console.error('Error al agregar música:', error.message);
      throw error;
    }
  };

  const updateOne = async (updatedMusic) => {
    try {
      // Verificar si updatedMusic.genres está definido antes de llamar a join()
      const updatedMusicToSend = {
        ...updatedMusic,
        genres: updatedMusic.genres ? updatedMusic.genres.join(',') : '',
      };
  
      const updated = await updateMusic(updatedMusicToSend);
      const updatedMusics = musics.map((music) =>
        music.id === updated.id ? updated : music
      );
      setMusics(updatedMusics);
    } catch (error) {
      console.error('Error al actualizar música:', error.message);
    }
  };
  
  
  const deleteOne = async (musicId) => {
    try {
      await deleOneMusic(musicId);
      const updatedMusics = musics.filter((music) => music.id !== musicId);
      setMusics(updatedMusics);
    } catch (error) {
      console.error('Error al eliminar música:', error.message);
    }
  };

  if (isLoading) {
    return <Spinner animation="grow" />;
  }

  return (
    <MusicContext.Provider value={{ musics, isLoading, error, addOne, updateOne, deleteOne }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
