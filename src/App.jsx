import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './views/Dashboard';
import ListaProyectos from './views/ListaProyectos';
import DetalleProyecto from './views/DetalleProyecto';
import PerfilUsuario from './views/PerfilUsuario';

import { ProveedorAutorizaciones, useAutorizaciones } from './context/AutorizacionesContext'; 
import './css/App.css'; 

function RutasApp() {
  const { usuarioActivo } = useAutorizaciones();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* se muestran las rutas ocultas solo si iniciaron sesion */}
      {usuarioActivo && (
        <>
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
        </>
      )}
      
      {/* se obtienen las rutas inexistentes y se devuelve al inicio */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <ProveedorAutorizaciones>
      <BrowserRouter>
        <CssBaseline />
        
        <div className="app-contenedor-principal">
          <Header />
          
          <Nav /> 
          
          <main className="app-contenido-principal">
            <Container maxWidth="lg">
              <RutasApp />
            </Container>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ProveedorAutorizaciones>
  );
}

export default App;