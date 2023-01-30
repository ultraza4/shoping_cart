import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShopingCartProvider } from "./context/ShopingCartContext";

function App() {
  return (
    <ShopingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShopingCartProvider>
  );
}

export default App;
