import { NavLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import '../css/nav.css';

const Nav = () => {
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
        </ul>
      </nav>
    </Paper>
  );
};

export default Nav;