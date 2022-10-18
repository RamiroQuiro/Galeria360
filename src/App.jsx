import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Config from "./views/config/Config";
import SliderPantall from "./views/main/SliderPantall";
import MainGaleria from "./views/main/MainGaleria";
import Perfil from "./views/Perfil/Contacto/Perfil";
import ConfigConfiguracionEmpresa from "./views/config/ConfigConfiguracionEmpresa";
import ConfigConfiguracionGaleria from "./views/config/ConfigConfiguracionGaleria";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Config />} >
        <Route path="/" index element={ <ConfigConfiguracionEmpresa/>} />
        <Route path="/configuracionGaleria" element={ <ConfigConfiguracionGaleria/>} />
         
          </Route>

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
