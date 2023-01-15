
const fetchMedias = async () => {
  try {
    const response = await fetch('https://u4d10solo-production.up.railway.app/medias');
    const data = await response.json();
    return data;
   
  } catch (error) {
    console.error(error);
  }
}

export default fetchMedias;

