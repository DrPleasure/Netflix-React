import React from "react";
import { Spinner, Carousel, Row, Col, Alert } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";

// create a key value with your API key
let key = `daa9e658`;

// Create a class because we need to be able to alter states
class MovieGallery extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    movies: [],
  };

  // Perform the GET, no headers needed for this API
  fetchMovies = async () => {
    try {
      let url = `http://www.omdbapi.com/?apikey=${key}&s=${encodeURIComponent(
        //make the search query lowercase
        this.props.search.toLowerCase()
      )}`;
      let response = await fetch(url);

      if (response.ok) {
        let data = await response.json();

        let grid = 6; //6 movies per

        const d = data.Search.reduce((resultArray, item, index) => {
          //Convert the original "search" array into chunks of 6 so the carousel can slide between them!
          const chunkIndex = Math.floor(index / grid);

          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        }, []);

        console.log(d);

        this.setState({
          ...this.state,
          isLoading: false,
          movies: d,
        });
      } else {
        this.setState({
          ...this.state,
          isError: true,
          isLoading: false,
        });
      }
    } catch (e) {
      this.setState({
        ...this.state,
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  // Render the movies with a searchable prop on the MovieGallery element
  render() {
    return (
      <div className="movie-gallery m-1">
        <h4 className="text-light mt-2 mb-2">{this.props.search}</h4>

        {this.state.isLoading && <Spinner></Spinner>}

        {this.state.isError && (
          <Alert variant="danger">Error fetching the requested movies!</Alert>
        )}

        {!this.state.isLoading && !this.state.isError && (
          <Carousel indicators={false}>
            {this.state.movies.map((movies) => (
              <Carousel.Item>
                <div className="movie-row">
                  <Row>
                    {movies.map((movie) => (
                      <Col md={2}>
                        <a href="#">
                          <img src={movie.Poster} alt="movie-poster" />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    );
  }
}

export default MovieGallery;
