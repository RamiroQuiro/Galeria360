import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Config from "./views/config/Config";
import SliderPantall from "./views/main/SliderPantall";
import MainGaleria from "./views/main/MainGaleria";
import Perfil from "./views/Perfil/Contacto/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Config />} />
        <Route element={<Layout />}>
          <Route path="/galeria" element={<MainGaleria />} />
          <Route path="/slider" element={<SliderPantall />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
