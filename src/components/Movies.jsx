import { useState, useEffect } from 'react';
import fetchMedias from './FetchMedias';

const Movies = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    fetchMedias().then(data => setMedias(data));
  }, []);
  
  return (
    
    <div className="container">
      <div className="row">
        {medias.map(media => (
          <div className="col-md-4" key={media.id}>
            <div className="card">
              <img src={media.poster} className="card-img-top" alt={media.title} />
              <div className="card-body">
                <h5 className="card-title">{media.title}</h5>
                <p className="card-text">{media.year}</p>
                <a href={`https://www.imdb.com/title/${media.imdbID}`} className="btn btn-primary">IMDB</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

console.log("Link to hosted back-end with get all media query: https://gold-healthy-pangolin.cyclic.app/medias")


export default Movies
