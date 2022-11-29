import './App.css';
import './components/hojas-de-estilos/Login.css'
import Login from './components/auth/login';
import Registrarse  from './components/registrarse';
import Listado from './components/envio/Listado';
import Actualizar from './components/envio/envio-edit';
import Crear from './components/envio/envio-crear';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
    
      <BrowserRouter>
        { <Navbar /> }
        <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/Listado" element={<Listado />} />
          <Route path="/actualizar/:id" element={<Actualizar />} />
          <Route path="/Envio/Crear" element={<Crear />} />
        </Routes>
        </div>
      </BrowserRouter>
    
  )
}

export default App;
