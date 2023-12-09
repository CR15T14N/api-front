const apiUrl = "http://localhost:3000/music";

export const fetchAllMusic = async () => {
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Response not ok");
  const data = await res.json();
  return data;
};

export const addOneMusic = async (newMusic) => {
  try {
    const res = await fetch(`${apiUrl}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMusic),
    });

    if (!res.ok) {
      throw new Error(`Error adding music: ${res.status}`);
    }

    const addedMusic = await res.json();
    return addedMusic;
  } catch (error) {
    throw new Error(`Error adding music: ${error.message}`);
  }
};

export const updateMusic = async (updatedMusic) => {
  try {
    const res = await fetch(`${apiUrl}/${updatedMusic.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMusic),
    });

    if (!res.ok) {
      throw new Error("Error updating music");
    }

    const updated = await res.json();
    return updated;
  } catch (error) {
    throw new Error("Error updating music");
  }
};

export const deleOneMusic = async (musicId) => {
  try {
    const res = await fetch(`${apiUrl}/${musicId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Error deleting music");
    }

    return true; // Indicar éxito
  } catch (error) {
    throw new Error("Error deleting music");
  }
};
