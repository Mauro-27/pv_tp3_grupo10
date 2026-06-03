import { AppBar, Toolbar, Typography } from '@mui/material';
import '../css/header.css';

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar className="header-toolbar">
        <Typography variant="h4" component="h1" fontWeight="bold">
          Gestión de Proyectos Educativos
        </Typography>
        <Typography variant="subtitle1" component="h3" className="header-subtitulo">
          Detalles del proyecto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;