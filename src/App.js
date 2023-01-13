import "./App.css";

import NavigationBar from "./components/NavigationBar";
// import Footer from "./components/Footer";
// import Gallery from "./components/Gallery";
import { Container, Button } from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import Movies from "./components/Movies";

function App() {
  return (
    <>
      <div className="rainbow-box">
        
        <NavigationBar />
      </div>
      <Container fluid>
      <h1 id="page_header">Olaf Spielberg Creations</h1>
        <Movies/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
