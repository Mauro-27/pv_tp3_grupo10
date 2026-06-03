import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import ListaProyectos from './views/ListaProyectos.jsx';
import DetalleProyecto from './views/DetalleProyecto.jsx';
import Dashboard from './views/Dashboard.jsx';
import PerfilUsuario from './views/PerfilUsuario.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;