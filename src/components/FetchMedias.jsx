
const fetchMedias = async () => {
  try {
    const response = await fetch('https://gold-healthy-pangolin.cyclic.app/medias');
    const data = await response.json();
    return data;
   
  } catch (error) {
    console.error(error);
  }
}

export default fetchMedias;

