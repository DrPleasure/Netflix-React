import "./App.css";

import NavigationBar from "./components/NavigationBar";
// import Footer from "./components/Footer";
// import Gallery from "./components/Gallery";
import { Container, Button } from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import MovieGallery from "./components/movieGallery.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Container fluid>
        <div className="genre-details">
          <div className="d-flex">
            <h3 className="text-light">Movies</h3>
            <Button
              variant="outline-light"
              className="genre-button dropdown-toggle"
            >
              Genres
            </Button>
          </div>
        </div>
        <MovieGallery search="Harry Potter" />
        <MovieGallery search="Lord of the Rings" />
        <MovieGallery search="Star Wars" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
