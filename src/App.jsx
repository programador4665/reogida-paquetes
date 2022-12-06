import './App.css';
import './components/hojas-de-estilos/Login.css'
import Login from './components/auth/login';
import Registrarse  from './components/registrarse';
import EnviosHome from './components/envio/envios-home';
import EnviosEdit from './components/envio/envio-edit';
import EnvioCrear from './components/envio/envio-crear';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';


function App() {
  return (
      <BrowserRouter>
        <Navbar /> 
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/envios" element={<EnviosHome />} />
            {/* <Route path="/envios/:id" element={<EnvioEdit />} /> */}
            <Route path="/envios/crear" element={<EnvioCrear />} />
            <Route path="/envios/:id/edit" element={<EnviosEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  )
}

export default App;
