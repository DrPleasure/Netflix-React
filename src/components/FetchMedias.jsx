
const fetchMedias = async () => {
  try {
    const response = await fetch('http://localhost:3001/medias');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchMedias;
