import { NavLink, useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { useAutorizaciones } from '../context/AutorizacionesContext';
import '../css/nav.css';

const Nav = () => {
  const { usuarioActivo, cerrarSesion } = useAutorizaciones();
  const navigate = useNavigate();

  const manejarCerrarSesion = () => {
    cerrarSesion();
    navigate('/dashboard');
  };

  return (
    <Paper elevation={0} className="nav-contenedor">
      <nav>
       <ul className="nav-lista">
          
          {[
            { text: 'Inicio', to: '/dashboard' },
            { text: 'Proyectos', to: '/proyectos' },
            { text: 'Perfil', to: '/perfil' }
          ].map((item) => (
            <li key={item.text} className="nav-item-lista">
              <NavLink
                to={item.to}
                className={({ isActive }) => 
                  isActive ? "nav-boton nav-boton-activo" : "nav-boton"
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}


          {usuarioActivo && (
            <li className="nav-item-lista nav-item-salir">
              <button 
                onClick={manejarCerrarSesion} 
                className="nav-boton nav-boton-salir"
              >
                Cerrar Sesión
              </button>
            </li>
          )}
          
        </ul>
      </nav>
    </Paper>
  );
};

export default Nav;