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
        <MovieGallery search="Harry Potter" />
        <MovieGallery search="Lord of the Rings" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
