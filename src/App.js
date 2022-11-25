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
      <div className="rainbow-box">
        <NavigationBar />
      </div>
      <Container fluid>
        <MovieGallery search="Star Wars" />
        <MovieGallery search="Teletubbies" />
        <MovieGallery search="Harry Potter" />
        <MovieGallery search="Air Bud" />
        <MovieGallery search="Lord of the Rings" />
        <MovieGallery search="Olaf" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
