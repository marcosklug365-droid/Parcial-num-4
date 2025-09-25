import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPages from './pages/ContactoPages';
import HomePages from './pages/HomePages';
import NosotrosPages from './pages/NosotrosPage';
import NovedadesPages from './pages/NovedadesPages';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="nosotros" element={<NosotrosPages />} />
          <Route path="novedades" element={<NovedadesPages />} />
          <Route path="contacto" element={<ContactoPages />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App